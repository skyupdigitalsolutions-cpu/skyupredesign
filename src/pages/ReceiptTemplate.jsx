import { Fragment, useLayoutEffect, useRef, useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// ReceiptTemplate — multi-page A4 invoice.
//
// The visual design (header, FROM/TO blocks, table styling, totals, bank block,
// watermark) is unchanged. What changed is HOW it is laid out:
//
//   • The document is rendered as a stack of real A4 "page" elements
//     (`data-pdf-page`), each 210mm × 297mm, instead of one fixed-height box.
//   • A hidden "probe" copy of every block and table row is measured in the
//     browser (real fonts, real widths, real wrapping), and a pagination pass
//     decides which rows go on which page.
//   • A row is never split across pages — it moves whole to the next page.
//     (Only a single row taller than ~half a page is split, by text, so nothing
//     can ever be cut off.)
//   • Every page repeats the header and the table head. Continuation pages get
//     a slim "Invoice No / Billed to" strip instead of the FROM/TO blocks.
//   • The Total / tax / TOTAL rows are kept together, and never left alone on a
//     page without at least one item row above them when that can be avoided.
//   • Bank details + signature live on the LAST page only, pinned to its bottom.
//   • "Page X of Y" is shown only when there is more than one page, so a normal
//     one-page invoice looks exactly as before.
//
// pdfGenerator.js captures each `[data-pdf-page]` separately (one PDF page each).
// ─────────────────────────────────────────────────────────────────────────────

const WRAP_MB = 20;        // table wrapper's mb-5
const BOTTOM_MARGIN = 28;  // minimum white space under the table on non-final pages
const SAFETY = 6;          // px of slack against sub-pixel rounding differences
const BORDER = "1px solid #2b2b2b";
const BORDER_BLUE = "1px solid #1e40af";
const MAX_SPLIT_PASSES = 8;

// ── formatting (unchanged from the original template) ───────────────────────
const money = (n) =>
  Number(n || 0).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// CGST/SGST can be a half-paise (e.g. ₹114.405) when the GST splits evenly.
const money3 = (n) =>
  Number(n || 0).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 3 });

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" });
};

// ── text splitting (only used for a single absurdly tall row) ───────────────
function splitText(text, n) {
  const s = String(text ?? "");
  if (n <= 1 || s.length < 2) return [s];
  const parts = [];
  let start = 0;
  for (let k = 1; k <= n; k++) {
    if (k === n) { parts.push(s.slice(start)); break; }
    const target = Math.round((s.length * k) / n);
    const win = Math.max(1, Math.floor((s.length / n) * 0.25));
    let cut = -1;
    for (let d = 0; d <= win && cut < 0; d++) {              // prefer a line break
      if (target + d < s.length && s[target + d] === "\n") cut = target + d + 1;
      else if (target - d > start && s[target - d] === "\n") cut = target - d + 1;
    }
    for (let d = 0; d <= win && cut < 0; d++) {              // else a space
      if (target + d < s.length && s[target + d] === " ") cut = target + d + 1;
      else if (target - d > start && s[target - d] === " ") cut = target - d + 1;
    }
    if (cut <= start || cut >= s.length) cut = Math.min(Math.max(target, start + 1), s.length);
    parts.push(s.slice(start, cut));
    start = cut;
  }
  return parts.map((p) => p.replace(/\n$/, "")).filter((p, i, a) => p !== "" || a.length === 1);
}

// ── row model ───────────────────────────────────────────────────────────────
// flow rows  = item rows (+ note fragments except the last)
// tail rows  = [last note/Total row, CGST, SGST, IGST, GRAND TOTAL]  (kept together)
function buildRows(data, splitMap) {
  const flow = [];
  (data.items || []).forEach((item, i) => {
    const n = splitMap[`i${i}`] || 1;
    const parts = splitText(item.description ?? "", n);
    parts.forEach((text, k) =>
      flow.push({ key: `i${i}-${k}`, group: `i${i}`, kind: "item", item, index: i, text, part: k, parts: parts.length })
    );
  });

  const noteParts = splitText(data.note ? String(data.note) : "", splitMap.note || 1);
  const noteRows = noteParts.map((text, k) => ({
    key: `n-${k}`, group: "note", kind: "note", text, part: k, parts: noteParts.length,
  }));
  const tail = [noteRows[noteRows.length - 1]];
  flow.push(...noteRows.slice(0, -1));

  if (data.cgst > 0) tail.push({ key: "cgst", group: "cgst", kind: "cgst", part: 0, parts: 1 });
  if (data.sgst > 0) tail.push({ key: "sgst", group: "sgst", kind: "sgst", part: 0, parts: 1 });
  if (data.igst > 0) tail.push({ key: "igst", group: "igst", kind: "igst", part: 0, parts: 1 });
  tail.push({ key: "grand", group: "grand", kind: "grand", part: 0, parts: 1 });

  return { rows: [...flow, ...tail], flowCount: flow.length };
}

// ── pagination ──────────────────────────────────────────────────────────────
// m: measured px heights. heights[i]: measured height of rows[i].
// Returns [{ a, b, first, bank, bankOnly, top }] — rows[a..b) go on that page.
function paginate(m, heights, flowCount) {
  const n = heights.length;
  const topFirst = m.head + m.from + m.to;
  const topCont = m.headc;
  const room = (top, reserveBottom) => m.pageH - top - WRAP_MB - reserveBottom - SAFETY;
  const limNon = (top) => room(top, BOTTOM_MARGIN);   // page that will be followed by another
  const limLast = (top) => room(top, m.bank);         // page that carries the bank block
  const tailH = heights.slice(flowCount).reduce((s, h) => s + h, 0);

  const pages = [{ a: 0, b: 0, first: true, top: topFirst }];
  let used = m.thead;

  for (let i = 0; i < flowCount; i++) {
    let cur = pages[pages.length - 1];
    if (used + heights[i] > limNon(cur.top) && cur.b > cur.a) {
      cur = { a: i, b: i, first: false, top: topCont };
      pages.push(cur);
      used = m.thead;
    }
    cur.b = i + 1;
    used += heights[i];
  }

  const P = pages[pages.length - 1];
  if (used + tailH <= limLast(P.top)) {
    P.b = n;
    P.bank = true;
    return pages;
  }

  // Totals + bank block don't fit under the last rows.
  const limQ = limLast(topCont);
  if (P.b - P.a >= 2 && m.thead + heights[P.b - 1] + tailH <= limQ) {
    // Carry the last item row over so the totals page is never just totals.
    P.b -= 1;
    pages.push({ a: P.b, b: n, first: false, top: topCont, bank: true });
  } else if (m.thead + tailH <= limQ) {
    pages.push({ a: P.b, b: n, first: false, top: topCont, bank: true });
  } else {
    pages.push({ a: P.b, b: n, first: false, top: topCont });
    pages.push({ a: n, b: n, first: false, top: topCont, bank: true, bankOnly: true });
  }
  return pages;
}

// ── presentational blocks (markup/classes identical to the original) ────────
const HeaderBlock = ({ onImgLoad }) => (
  <div className="flex justify-between items-center mb-6 pt-12 pb-3 px-[60px]">
    <div>
      <h1 className="text-5xl font-extrabold text-black mb-4">INVOICE</h1>
    </div>
    <div className="text-right">
      <img src="/images/rbd-logo.webp" className="h-16" alt="Logo" onLoad={onImgLoad} />
    </div>
  </div>
);

const FromBlock = ({ data }) => (
  <div className="flex justify-between mb-6 px-[60px]">
    <div>
      <div className="font-bold text-sm mb-2">FROM:</div>
      <div className="font-bold text-sm">{data.name}</div>
      <div className="text-sm whitespace-pre-line">{data.address}</div>
    </div>
    <div className="text-right">
      <div className="text-sm">
        <span className="font-bold">GST No:</span> {data.gstNo}
      </div>
    </div>
  </div>
);

// NOTE: was `h-[110px]` (fixed). Now `min-h-[110px]` — identical for normal
// addresses, but a long client address grows the block instead of overflowing
// onto the table.
const ToBlock = ({ data }) => {
  const lines = String(data.to || "").split("\n").filter((line) => line.trim());
  return (
    <div className="flex justify-between mb-10 min-h-[110px] px-[60px]">
      <div className="flex-1">
        <div className="font-bold text-sm mb-2">TO:</div>
        {lines.length > 0 && <div className="font-bold text-sm">{lines[0]}</div>}
        {lines.length > 1 && <div className="text-sm whitespace-pre-line">{lines.slice(1).join("\n")}</div>}
        <div className="text-sm mt-2">
          <span className="font-bold text-sm mb-2">GST No: </span>
          {data.client_gst}
        </div>
      </div>
      <div className="rounded-lg text-right min-w-[250px]">
        <div className="text-sm mb-2">
          <span className="font-semibold">Invoice No:</span> {data.invoice_no}
        </div>
        <div className="text-sm mb-2">
          <span className="font-semibold">HSN/SAN Number:</span> {data.hsn_no}
        </div>
        <div className="text-sm mb-2">
          <span className="font-semibold">Date:</span> {formatDate(data.date)}
        </div>
        {data.invoice_due && (
          <div className={data.transaction_id ? "text-sm mb-2" : "text-sm"}>
            <span className="font-semibold">Invoice Due:</span> {formatDate(data.invoice_due)}
          </div>
        )}
        {data.transaction_id && (
          <div className="text-sm break-words">
            <span className="font-semibold">Transaction ID:</span> {data.transaction_id}
          </div>
        )}
      </div>
    </div>
  );
};

// Slim identifier shown on continuation pages in place of FROM/TO.
const ContStrip = ({ data }) => {
  const client = String(data.to || "").split("\n").find((l) => l.trim()) || "";
  return (
    <div className="flex justify-between gap-6 mb-4 px-[60px] text-sm">
      <div><span className="font-semibold">Invoice No:</span> {data.invoice_no}</div>
      <div className="text-right truncate"><span className="font-semibold">To:</span> {client}</div>
    </div>
  );
};

const BankBlock = ({ data, onImgLoad }) => (
  <div className="flex justify-between ">
    <div className="flex-1 py-2 px-[60px]">
      <div className="font-bold text-sm mb-1">BANK DETAILS</div>
      <div className="text-sm">
        <div><span className="font-bold">{data.bankDetails.bankName}</span></div>
        <div><span className="font-semibold">Account Name:</span> {data.bankDetails.accountName}</div>
        <div><span className="font-semibold">Account No:</span> {data.bankDetails.accountNo}</div>
        <div><span className="font-semibold">IFSC Code:</span> {data.bankDetails.ifscCode}</div>
        <div><span className="font-semibold">Branch:</span> {data.bankDetails.branch}</div>
        <div className="text-[13px]">
          <span className="font-semibold text-sm">Note:</span> Payment Beyond 30 Days Will Attract 18% Interest
        </div>
      </div>
    </div>
    <div className="pt-6 ">
      <img src="/images/signature.webp" className="w-[325px]" alt="Thank You" onLoad={onImgLoad} />
    </div>
  </div>
);

const TableHead = () => (
  <thead data-m="thead">
    <tr style={{ backgroundColor: "#fed7aa" }}>
      <th style={{ border: BORDER, padding: "8px 6px", width: "8%" }}>SL.No.</th>
      <th style={{ border: BORDER, padding: "8px 6px", width: "40%" }}>Description</th>
      <th style={{ border: BORDER, padding: "8px 6px", width: "12%" }}>Tax Rate</th>
      <th style={{ border: BORDER, padding: "8px 6px", width: "10%" }}>Qty</th>
      <th style={{ border: BORDER, padding: "8px 6px", width: "15%" }}>Rate</th>
      <th style={{ border: BORDER, padding: "8px 6px", width: "15%" }}>Amount</th>
    </tr>
  </thead>
);

// openTop/openBottom remove the horizontal rule between fragments of one split row.
function RowView({ row, data, openTop, openBottom, dataR }) {
  // Longhand borders only (mixing `border` with `borderBottom` makes React warn on re-render).
  const cs = (extra = {}, blue = false) => {
    const line = blue ? BORDER_BLUE : BORDER;
    return {
      borderTop: openTop ? "none" : line,
      borderRight: line,
      borderBottom: openBottom ? "none" : line,
      borderLeft: line,
      padding: "6px 6px",
      ...extra,
    };
  };
  const trProps = dataR === undefined ? {} : { "data-r": dataR };
  const lbl = { fontSize: "14px", fontWeight: "500", color: "#374151" };
  const val = { fontSize: "14px", color: "#374151" };

  if (row.kind === "item") {
    const cont = row.part > 0;
    const isAdvance = !cont && row.parts === 1 && (row.item.description || "").trim() === "Advance Received";
    return (
      <tr {...trProps}>
        <td style={cs()}>{cont ? "" : row.index + 1}</td>
        <td style={cs({ whiteSpace: "pre-wrap", wordBreak: "break-word", textAlign: "left" })}>
          {isAdvance ? <div style={{ fontWeight: 700 }}>Advance Received</div> : row.text}
        </td>
        <td style={cs()}>{cont ? "" : "18%"}</td>
        <td style={cs()}>{cont ? "" : row.item.qty}</td>
        <td style={cs()}>{cont ? "" : money(row.item.rate)}</td>
        <td style={cs({ fontWeight: 700 })}>{cont ? "" : money(row.item.amount)}</td>
      </tr>
    );
  }

  if (row.kind === "note") {
    const last = row.part === row.parts - 1;
    return (
      <tr {...trProps}>
        <td
          colSpan="4"
          style={cs({
            fontSize: "13px", textAlign: "left", verticalAlign: "top",
            whiteSpace: "pre-wrap", wordBreak: "break-word", color: "#374151",
          })}
        >
          {data.note ? (
            <>
              {row.part === 0 && <span style={{ fontWeight: 700 }}>Note: </span>}
              {row.text}
            </>
          ) : null}
        </td>
        <td style={cs(lbl)}>{last ? "Total" : ""}</td>
        <td style={cs(val)}>{last ? money(data.subtotal) : ""}</td>
      </tr>
    );
  }

  if (row.kind === "cgst" || row.kind === "sgst" || row.kind === "igst") {
    const cfg = {
      cgst: [data.cgstLabel || "CGST @ 9%", money3(data.cgst)],
      sgst: [data.sgstLabel || "SGST @ 9%", money3(data.sgst)],
      igst: [data.igstLabel || "IGST @ 18%", money(data.igst)],
    }[row.kind];
    return (
      <tr {...trProps}>
        <td colSpan="4" style={cs()}></td>
        <td style={cs(lbl)}>{cfg[0]}</td>
        <td style={cs(val)}>{cfg[1]}</td>
      </tr>
    );
  }

  // grand total
  return (
    <tr {...trProps} style={{ backgroundColor: "#2563eb" }}>
      <td colSpan="4" style={cs({ fontSize: "14px", color: "white" }, true)}>{data.amount_in_words}</td>
      <td style={cs({ fontSize: "14px", fontWeight: "bold", color: "white" }, true)}>TOTAL</td>
      <td style={cs({ fontSize: "14px", fontWeight: "bold", color: "white" }, true)}>{money(data.total)}</td>
    </tr>
  );
}

const tableStyle = { width: "100%", tableLayout: "fixed", borderCollapse: "collapse", textAlign: "center" };

const pageStyle = (isLast) => ({
  backgroundImage: "url('/images/watermark.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "210mm",
  height: "297mm",
  fontFamily: "Arial, sans-serif",
  boxSizing: "border-box",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  position: "relative",
  overflow: "hidden",                        // a page can never bleed into the next
  breakAfter: isLast ? "auto" : "page",      // browser print: one sheet per page
  pageBreakAfter: isLast ? "auto" : "always",
});

// ── component ───────────────────────────────────────────────────────────────
// pageGap (px): optional grey gap drawn between pages for the on-screen preview.
// It is never part of a `[data-pdf-page]` element, so it never reaches the PDF.
export default function ReceiptTemplate({ data, pageGap = 0 }) {
  const [split, setSplit] = useState({ sig: "", map: {} });
  const [plan, setPlan] = useState(null);
  const [, setTick] = useState(0);
  const probeRef = useRef(null);
  const passRef = useRef({ sig: "", n: 0 });
  const bump = useRef(() => setTick((t) => t + 1)).current;

  const dataSig = data ? JSON.stringify([data.items, data.note, data.to, data.address]) : "";
  const splitMap = split.sig === dataSig ? split.map : {};
  const model = data ? buildRows(data, splitMap) : { rows: [], flowCount: 0 };
  const { rows, flowCount } = model;
  const planKey = dataSig + "|" + JSON.stringify(splitMap) + "|" + rows.length;

  // Re-measure once web fonts have finished loading (they change line wrapping).
  useLayoutEffect(() => {
    let alive = true;
    const again = () => alive && bump();
    try {
      document.fonts?.ready?.then(again);
      document.fonts?.addEventListener?.("loadingdone", again);
    } catch { /* fonts API is optional */ }
    return () => {
      alive = false;
      try { document.fonts?.removeEventListener?.("loadingdone", again); } catch { /* ignore */ }
    };
  }, [bump]);

  // Measure → (split oversized rows) → paginate. Runs before paint, so the user
  // never sees an un-paginated frame.
  useLayoutEffect(() => {
    const root = probeRef.current;
    if (!root || !data) return;
    const q = (name) => root.querySelector(`[data-m="${name}"]`);
    // The live preview is shrunk with a CSS transform; getBoundingClientRect()
    // returns *scaled* pixels there. Divide the scale out so the preview
    // paginates exactly like the (unscaled) PDF capture.
    const scale = root.offsetWidth ? root.getBoundingClientRect().width / root.offsetWidth : 1;
    const h = (el) => (el ? el.getBoundingClientRect().height / scale : 0);

    const m = {
      pageH: h(q("page")), head: h(q("head")), headc: h(q("headc")),
      from: h(q("from")), to: h(q("to")), bank: h(q("bank")), thead: h(q("thead")),
    };
    const trs = root.querySelectorAll("tbody tr[data-r]");
    if (!m.pageH || trs.length !== rows.length) return;   // not laid out yet
    const heights = Array.from(trs, (tr) => h(tr));

    // 1) A single row taller than ~60% of a page can't be placed safely → split its text.
    if (passRef.current.sig !== dataSig) passRef.current = { sig: dataSig, n: 0 };
    const contAvail = m.pageH - m.headc - WRAP_MB - BOTTOM_MARGIN - SAFETY - m.thead;
    const maxRow = Math.max(120, Math.floor(contAvail * 0.6));
    const next = { ...splitMap };
    let changed = false;
    rows.forEach((r, i) => {
      if (heights[i] > maxRow && (r.kind === "item" || r.kind === "note")) {
        const cur = next[r.group] || 1;
        // Aim for fragments of ~42% of a page so two of them pack onto one page.
        next[r.group] = Math.min(60, Math.max(cur + 1, Math.ceil((cur * heights[i]) / (contAvail * 0.42))));
        changed = true;
      }
    });
    if (changed && passRef.current.n < MAX_SPLIT_PASSES) {
      passRef.current.n += 1;
      setSplit({ sig: dataSig, map: next });
      return;
    }

    // 2) Paginate.
    const pages = paginate(m, heights, flowCount);
    const nextPlan = { key: planKey, pages };
    setPlan((prev) => (prev && prev.key === planKey && JSON.stringify(prev.pages) === JSON.stringify(pages) ? prev : nextPlan));
  });

  if (!data) return null;

  // Until the first measurement lands, render everything on one page (never seen).
  const activePlan =
    plan && plan.key === planKey
      ? plan.pages
      : [{ a: 0, b: rows.length, first: true, bank: true }];
  const total = activePlan.length;

  return (
    <div className="font-poppins" style={{ width: "210mm", margin: 0, padding: 0, fontFamily: "Arial, sans-serif" }}>
      {/* ── hidden measuring copy (same width, fonts and CSS as the real pages) ── */}
      {/* The 0×0 clipped outer box guarantees the (tall) measuring copy can never add
          scroll height in the preview pane or extra sheets when printing. */}
      <div
        data-pdf-ignore="true"
        data-html2canvas-ignore="true"
        aria-hidden="true"
        style={{
          position: "absolute", left: 0, top: 0, width: 0, height: 0,
          overflow: "hidden", visibility: "hidden", pointerEvents: "none",
        }}
      >
      <div ref={probeRef} style={{ width: "210mm" }}>
        <div data-m="page" style={{ height: "297mm", width: 1 }} />
        <div data-m="head" style={{ display: "flow-root" }}><HeaderBlock onImgLoad={bump} /></div>
        <div data-m="headc" style={{ display: "flow-root" }}><HeaderBlock /><ContStrip data={data} /></div>
        <div data-m="from" style={{ display: "flow-root" }}><FromBlock data={data} /></div>
        <div data-m="to" style={{ display: "flow-root" }}><ToBlock data={data} /></div>
        <div data-m="bank" style={{ display: "flow-root" }}><BankBlock data={data} onImgLoad={bump} /></div>
        <div className="px-[60px]">
          <table style={tableStyle}>
            <TableHead />
            <tbody>
              {rows.map((row, i) => (
                <RowView key={row.key} row={row} data={data} dataR={i} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>

      {/* ── real pages ── */}
      {activePlan.map((pg, pi) => (
        <Fragment key={pi}>
          <div
            data-pdf-page={pi + 1}
            className="font-poppins bg-white"
            style={pageStyle(pi === total - 1)}
          >
            {total > 1 && (
              <div
                style={{
                  position: "absolute", top: 20, right: 60, fontSize: 11, lineHeight: 1,
                  color: "#6b7280", fontFamily: "Arial, sans-serif",
                }}
              >
                Page {pi + 1} of {total}
              </div>
            )}
            <HeaderBlock />
            {pg.first ? (
              <>
                <FromBlock data={data} />
                <ToBlock data={data} />
              </>
            ) : (
              <ContStrip data={data} />
            )}

            {!pg.bankOnly && (
              <div className="mb-5 px-[60px]">
                <table style={tableStyle}>
                  <TableHead />
                  <tbody>
                    {rows.slice(pg.a, pg.b).map((row, j, arr) => (
                      <RowView
                        key={row.key}
                        row={row}
                        data={data}
                        openTop={row.part > 0 && j > 0}
                        openBottom={row.part < row.parts - 1 && j < arr.length - 1}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Spacer — pushes the bank/signature block to the bottom of the LAST page. */}
            <div style={{ flex: "1 1 auto" }} />
            {pg.bank && <BankBlock data={data} />}
          </div>
          {pageGap > 0 && pi < total - 1 && (
            <div data-pdf-ignore="true" style={{ height: pageGap, background: "#e4e7ea" }} />
          )}
        </Fragment>
      ))}
    </div>
  );
}
