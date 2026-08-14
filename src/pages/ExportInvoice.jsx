import { useState, useRef, useEffect } from "react";
import { navigate } from "vike/client/router";
import { generatePDF } from "./utils/pdfGenerator";
import API_URL from "../config/api";
import { useAuth } from "../context/AuthContext";

// ── Amount-in-words (currency aware) ─────────────────────────────
function numberToWords(num) {
  const o = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const t = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  const th = (n) => {
    let s = "";

    if (n > 99) {
      s += o[Math.floor(n / 100)] + " Hundred";
      n %= 100;
      if (n) s += " ";
    }

    if (n > 19) {
      s += t[Math.floor(n / 10)];
      n %= 10;
      if (n) s += "-" + o[n];
    } else if (n > 0) {
      s += o[n];
    }

    return s;
  };

  if (num === 0) return "Zero";

  const sc = ["", "Thousand", "Million", "Billion", "Trillion"];
  let p = [];
  let i = 0;

  while (num > 0) {
    const c = num % 1000;

    if (c) {
      p.unshift(th(c) + (sc[i] ? " " + sc[i] : ""));
    }

    num = Math.floor(num / 1000);
    i++;
  }

  return p.join(" ");
}

function amountInWords(v, cur) {
  const m = {
    USD: ["US Dollar", "US Dollars", "Cent", "Cents"],
    EUR: ["Euro", "Euros", "Cent", "Cents"],
    GBP: ["Pound Sterling", "Pounds Sterling", "Penny", "Pence"],
  };

  const c = m[cur] || ["", "", "", ""];

  const w = Math.floor(Math.abs(v));
  const f = Math.round((Math.abs(v) - w) * 100);

  let s =
    numberToWords(w) +
    ((w === 1 ? c[0] : c[1])
      ? " " + (w === 1 ? c[0] : c[1])
      : "");

  if (f > 0) {
    s +=
      " and " +
      numberToWords(f) +
      ((f === 1 ? c[2] : c[3])
        ? " " + (f === 1 ? c[2] : c[3])
        : "");
  }

  return s + " Only";
}

const fmt = (n) =>
  n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const BLANK_ITEM = { svc_desc: "", proj_ref: "", sac: "", qty: "1", rate: "" };

const INIT = {
  useExp: true,          // checkbox: include /EXP/ segment in invoice no.
  inv_no: "",
  inv_date: "",
  currency: "USD",
  cur_other: "",
  pay_due: "",
  po_no: "",
  po_date: "",
  pay_terms: "",
  dest: "",
  cust_name: "",
  addr: "",
  city_state: "",
  country: "",
  taxid: "",
  email: "",
  lut_fy: "2026-27",
  lut_date: "12/08/2026",
  lut_arn: "AD2908260210809",
  place_filing: "Bangalore",
  place_supply: "Outside India",
  nature_supply: "Export of Services",
  igst: "Nil under LUT",
  items: [{ ...BLANK_ITEM }],
  roundoff: "",          // when set, this value IS the Total Invoice Value
};

const CSS = `
.ei{
  position:fixed;
  inset:0;
  display:flex;
  flex-direction:column;
  background:#eef0f2;
  font-family:Arial,Helvetica,sans-serif;
  color:#000;
}

.ei *{
  box-sizing:border-box;
}

.ei button{
  font-family:inherit;
}

.ei-toolbar{
  background:#16232e;
  color:#fff;
  padding:10px 18px;
  display:flex;
  gap:10px;
  align-items:center;
  flex-wrap:wrap;
  flex:0 0 auto;
}

.ei-toolbar .ei-title{
  margin-right:auto;
  font-size:13px;
  font-weight:bold;
  letter-spacing:.03em;
}

.ei-tbtn{
  font-size:13px;
  font-weight:bold;
  cursor:pointer;
  border:0;
  border-radius:6px;
  padding:8px 14px;
  color:#fff;
  background:#3a4a57;
  display:inline-flex;
  align-items:center;
  gap:6px;
}

.ei-tbtn.back{
  background:rgba(255,255,255,.1);
  border:1px solid rgba(255,255,255,.22);
}

.ei-tbtn.go{
  background:#2e5496;
}

.ei-tbtn:hover{
  filter:brightness(1.12);
}

.ei-app{
  flex:1 1 auto;
  display:flex;
  min-height:0;
}

.ei-form{
  width:390px;
  flex:0 0 390px;
  overflow-y:auto;
  background:#fff;
  border-right:1px solid #d5d9dd;
  padding:16px 18px 40px;
}

.ei-form h2{
  font-size:12px;
  letter-spacing:.06em;
  text-transform:uppercase;
  color:#2e5496;
  margin:20px 0 8px;
  padding-bottom:5px;
  border-bottom:1.5px solid #dce6f3;
  font-weight:bold;
}

.ei-form h2:first-of-type{
  margin-top:0;
}

.ei-fg{
  margin-bottom:9px;
}

.ei-fg label{
  display:block;
  font-size:11px;
  font-weight:bold;
  color:#3a4a57;
  margin-bottom:3px;
}

.ei-fg input,
.ei-fg select,
.ei-fg textarea{
  width:100%;
  font-family:inherit;
  font-size:13px;
  padding:7px 9px;
  border:1px solid #c7ccd1;
  border-radius:6px;
  background:#fff;
  color:#000;
}

.ei-fg input:focus,
.ei-fg select:focus,
.ei-fg textarea:focus{
  outline:0;
  border-color:#2e5496;
  box-shadow:0 0 0 2px rgba(46,84,150,.15);
}

.ei-fg textarea{
  resize:vertical;
  min-height:44px;
}

.ei-row2{
  display:flex;
  gap:8px;
}

.ei-row2 .ei-fg{
  flex:1;
}

.ei-hint{
  font-size:10.5px;
  color:#8a9099;
  margin:-4px 0 8px;
}

.ei-amt{
  background:#f4f7fb;
  border:1px solid #dbe4f0;
  border-radius:8px;
  padding:10px 12px;
  font-size:12.5px;
  margin-top:6px;
}

.ei-amt .r{
  display:flex;
  justify-content:space-between;
  padding:2px 0;
}

.ei-amt .r.big{
  font-weight:bold;
  color:#2e5496;
  border-top:1px solid #dbe4f0;
  margin-top:4px;
  padding-top:6px;
}

.ei-preview{
  flex:1;
  overflow:auto;
  padding:18px;
  min-width:0;
}

.ei .page{
  position:relative;
  width:210mm;
  min-height:297mm;
  margin:0 auto 18px;
  padding:12mm 14mm;
  box-sizing:border-box;
  background:#fff;
  box-shadow:0 2px 18px rgba(0,0,0,.15);

  background-image:url('/images/watermark.png');
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  background-origin:border-box;
  background-clip:border-box;
}

/* =========================================================
   COMMON TABLE / SECTION ALIGNMENT
   All invoice sections now use exactly the same width.
   ========================================================= */

.ei table.grid,
.ei table.info,
.ei table.items,
.ei table.tot,
.ei table.foot,
.ei .banner{
  width:100% !important;
  max-width:100% !important;
  margin-left:0 !important;
  margin-right:0 !important;
  box-sizing:border-box;
}

.ei .hd{
  display:table;
  width:100%;
  padding-bottom:6pt;
}

.ei .hd .l{
  display:table-cell;
  vertical-align:middle;
  width:55%;
}

.ei .hd .r{
  display:table-cell;
  vertical-align:top;
  text-align:right;
  width:45%;
}

.ei .logo{
  height:46pt;
  display:block;
  margin-left:auto;
  margin-bottom:8pt;
}

.ei .co-ids{
  font-size:9pt;
  line-height:1.7;
}

.ei .co-ids b{
  font-weight:bold;
}

.ei .title{
  font-size:24pt;
  font-weight:800;
  line-height:1.08;
  letter-spacing:.01em;
}

/* =========================================================
   TOP INVOICE DETAILS TABLE
   ========================================================= */

.ei table.grid{
  display:table;
  border-collapse:collapse;
  margin-top:8pt;
  table-layout:fixed;
}

.ei table.grid td{
  border:0.75pt solid #2b2b2b;
  vertical-align:top;
  padding:4pt 6pt;
  width:25%;
  height:34pt;
  word-wrap:break-word;
  overflow-wrap:anywhere;
}

.ei table.grid .pv{
  max-width:100%;
}

.ei .lbl{
  font-size:8pt;
  font-weight:bold;
  display:block;
  margin-bottom:2pt;
}

.ei .val{
  font-size:8.5pt;
  line-height:1.6;
}

/* =========================================================
   EXPORT BANNER
   ========================================================= */

.ei .banner{
  margin:8pt 0;
  background:#fed7aa;
  border:0.75pt solid #2b2b2b;
  text-align:center;
  font-size:8.5pt;
  font-weight:bold;
  padding:5pt 6pt;
}

/* =========================================================
   SUPPLIER / BILL TO / LUT TABLE
   ========================================================= */

.ei table.info{
  display:table;
  border-collapse:collapse;
  table-layout:fixed;
}

.ei table.info>tbody>tr>td{
  border:0.75pt solid #2b2b2b;
  vertical-align:top;
  padding:5pt 6pt;
  width:33.33%;
  word-wrap:break-word;
  overflow-wrap:anywhere;
}

.ei .sec-h{
  font-size:8.5pt;
  font-weight:bold;
  margin-bottom:3pt;
}

.ei .fx{
  font-size:8.5pt;
  line-height:1.55;
}

.ei .kv{
  font-size:8.5pt;
  line-height:1.75;
}

.ei .kv .k{
  font-weight:bold;
}

.ei .lut-col .row{
  line-height:1.65;
}

/* =========================================================
   ITEMS TABLE
   ========================================================= */

.ei table.items{
  display:table;
  border-collapse:collapse;
  margin-top:8pt;
  table-layout:fixed;
}

.ei table.items th{
  background:#fed7aa;
  border:0.75pt solid #2b2b2b;
  font-size:8pt;
  font-weight:bold;
  padding:4pt 5pt;
}

.ei table.items td{
  border:0.75pt solid #2b2b2b;
  font-size:8.5pt;
  padding:4pt 5pt;
  vertical-align:top;
}

.ei .c-sl{
  width:8%;
  text-align:center;
}

.ei .c-sac{
  width:12%;
}

.ei .c-qty{
  width:8%;
  text-align:center;
}

.ei .c-rate{
  width:15%;
}

.ei .c-amt{
  width:16%;
}

.ei th.c-rate,
.ei th.c-amt,
.ei td.c-rate,
.ei td.c-amt{
  text-align:right;
}

.ei .desc-fixed{
  font-size:8.5pt;
}

.ei .desc-sub{
  font-size:8pt;
  margin-top:3pt;
  font-weight:bold;
}

.ei .tot-lbl{
  text-align:right;
  font-weight:bold;
}

.ei .num{
  text-align:right;
}

/* =========================================================
   TOTALS TABLE
   ========================================================= */

.ei table.tot{
  display:table;
  border-collapse:collapse;
  table-layout:fixed;
}

.ei table.tot td{
  border:0.75pt solid #2b2b2b;
  font-size:8.5pt;
  padding:5pt 6pt;
}

.ei table.tot td.tl{
  width:60%;
  font-weight:bold;
}

.ei table.tot td.tr{
  width:40%;
  text-align:right;
}

.ei table.tot tr.grand td{
  background:#2563eb;
  color:#fff;
  font-weight:bold;
  font-size:9.5pt;
  border-color:#1e40af;
}

/* =========================================================
   DECLARATION / FOOTER TABLE
   ========================================================= */

.ei table.foot{
  display:table;
  border-collapse:collapse;
  margin-top:8pt;
  table-layout:fixed;
}

.ei table.foot>tbody>tr>td{
  border:0.75pt solid #2b2b2b;
  vertical-align:top;
  padding:5pt 6pt;
  width:100%;
}

.ei .decl{
  font-size:8pt;
  line-height:1.5;
}

.ei .decl ol{
  margin:2pt 0 0;
  padding-left:14pt;
  list-style:decimal;
  list-style-position:outside;
}

.ei .decl li{
  margin-bottom:2pt;
}

.ei .bank .bank-name{
  font-weight:bold;
  margin-bottom:2pt;
}

.ei .bank .note{
  margin-top:3pt;
}

/* =========================================================
   BOTTOM BANK / SIGNATURE
   ========================================================= */

.ei .bottom-row{
  display:table;
  width:100%;
  margin-top:12pt;
}

.ei .bank-col{
  display:table-cell;
  width:55%;
  vertical-align:bottom;
}

.ei .sig-col{
  display:table-cell;
  width:45%;
  text-align:right;
  vertical-align:bottom;
}

.ei .sig-img{
  width:230pt;
  display:inline-block;
}

/* =========================================================
   INLINE VALUES
   ========================================================= */

.ei .pv{
  display:inline-block;
  min-width:60pt;
  border-bottom:0.75pt solid #8a9099;
  line-height:1.5;
}

.ei .pt{
  display:inline;
}

.ei .ccode.on{
  font-weight:bold;
  text-decoration:underline;
}

.ei .otherlbl.on{
  font-weight:bold;
}

/* =========================================================
   RESPONSIVE
   ========================================================= */

@media screen and (max-width:1000px){
  .ei-app{
    flex-direction:column;
  }

  .ei-form{
    width:auto;
    flex:none;
    border-right:0;
    border-bottom:1px solid #d5d9dd;
  }

  .ei .page{
    width:100%;
    padding:6mm 5mm;
  }
}

/* =========================================================
   PRINT
   ========================================================= */

@media print{
  @page{
    size:A4;
    margin:12mm 14mm;
  }

  .ei{
    position:static !important;
    height:auto !important;
    display:block !important;
    background:#fff !important;
  }

  .ei-toolbar,
  .ei-form{
    display:none !important;
  }

  .ei-app{
    display:block !important;
  }

  .ei-preview{
    overflow:visible !important;
    padding:0 !important;
  }

  .ei .page{
    width:auto !important;
    min-height:0 !important;
    margin:0 !important;
    padding:0 !important;
    box-shadow:none !important;
    -webkit-print-color-adjust:exact;
    print-color-adjust:exact;
  }

  .ei table.items th,
  .ei .banner,
  .ei table.tot tr.grand td{
    -webkit-print-color-adjust:exact;
    print-color-adjust:exact;
  }
}
`;

// Inline blank (underlined) and plain-value helpers for the preview
const PV = ({ children, w }) => (
  <span
    className="pv"
    style={w ? { minWidth: w } : undefined}
  >
    {children}
  </span>
);

const PT = ({ children }) => (
  <span className="pt">{children}</span>
);

// ─────────────────────────────────────────────────────────────────────────────
// ExportInvoiceTemplate
// Pure HTML element rendered off-screen and captured by generatePDF().
// Matches the ReceiptTemplate colour scheme exactly:
//   • #fed7aa  – table header fill (orange)
//   • #2563eb  – TOTAL row fill   (blue)
//   • #2b2b2b  – border colour
// ─────────────────────────────────────────────────────────────────────────────
function ExportInvoiceTemplate({ data, showBank = true }) {
  if (!data) return null;

  const { prefix, inv_no, inv_date, currency, cur_other, pay_due,
          po_no, po_date, pay_terms, dest,
          cust_name, addr, city_state, country, taxid, email,
          lut_fy, lut_date, lut_arn, place_filing, place_supply, nature_supply, igst,
          items, subtotal, grand, roundoffAdj, words, currencyCode } = data;

  const fmtN = (n) => Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const border = "1px solid #2b2b2b";
  const cell = { border, padding: "6px 7px", fontSize: 12 };
  const hdrCell = { ...cell, background: "#fed7aa", fontWeight: "bold", textAlign: "center" };
  const numCell = { ...cell, textAlign: "right" };

  const fmtDate = (d) => {
    if (!d) return "";
    try { return new Date(d).toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" }); } catch { return d; }
  };

  const invoiceNo = `${prefix}/${inv_no || "___"}/2026-27`;

  return (
    <div style={{
      width: "210mm", minHeight: "297mm", fontFamily: "Arial, Helvetica, sans-serif",
      color: "#000", background: "#fff", boxSizing: "border-box",
      backgroundImage: "url('/images/watermark.png')",
      backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",
    }}>

      {/* ── Header ── */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "36px 60px 10px" }}>
        <div style={{ fontSize: 36, fontWeight: 900, letterSpacing: 1 }}>EXPORT SERVICE INVOICE</div>
        <div style={{ textAlign: "right" }}>
          <img src="/images/rbd-logo.webp" style={{ height: 52 }} alt="SkyUp" />
          <div style={{ fontSize: 11, marginTop: 4 }}>
            <span style={{ fontWeight: "bold" }}>GSTIN:</span> 29AFUFS6710E1ZJ<br />
            <span style={{ fontWeight: "bold" }}>IEC:</span> AFUFS6710E
          </div>
        </div>
      </div>

      {/* ── Top grid ── */}
      <div style={{ padding: "0 60px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
          <tbody>
            <tr>
              <td style={{ ...cell, width: "25%" }}><b style={{ fontSize: 10 }}>Invoice No.</b><br />{invoiceNo}</td>
              <td style={{ ...cell, width: "25%" }}><b style={{ fontSize: 10 }}>Invoice Date</b><br />{fmtDate(inv_date)}</td>
              <td style={{ ...cell, width: "25%" }}><b style={{ fontSize: 10 }}>Currency</b><br />{currency === "Other" ? cur_other : currency}</td>
              <td style={{ ...cell, width: "25%" }}><b style={{ fontSize: 10 }}>Payment Due</b><br />{pay_due}</td>
            </tr>
            <tr>
              <td style={cell}><b style={{ fontSize: 10 }}>PO / Work Order No.</b><br />{po_no}</td>
              <td style={cell}><b style={{ fontSize: 10 }}>PO / Order Date</b><br />{po_date}</td>
              <td style={cell}><b style={{ fontSize: 10 }}>Payment Terms</b><br />{pay_terms}</td>
              <td style={cell}><b style={{ fontSize: 10 }}>Country of Destination</b><br />{dest}</td>
            </tr>
          </tbody>
        </table>

        {/* ── Banner ── */}
        <div style={{ margin: "8px 0", background: "#fed7aa", border, textAlign: "center", fontWeight: "bold", fontSize: 11, padding: "6px" }}>
          SUPPLY MEANT FOR EXPORT UNDER LETTER OF UNDERTAKING WITHOUT PAYMENT OF INTEGRATED TAX
        </div>

        {/* ── Supplier / Bill To / LUT ── */}
        <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
          <tbody>
            <tr>
              <td style={{ ...cell, width: "33.33%", verticalAlign: "top" }}>
                <div style={{ fontWeight: "bold", fontSize: 11, marginBottom: 4 }}>SUPPLIER / EXPORTER</div>
                <div style={{ fontSize: 11, lineHeight: 1.5 }}>
                  <b>Skyup Digital Solutions LLP</b><br />
                  No. 23, PARINIDHI, E Block, 14A Main Road,<br />
                  Sahakaranagar, Bengaluru Urban, Karnataka - 560092<br />
                  <b>Nature of Concern:</b> Limited Liability Partnership
                </div>
              </td>
              <td style={{ ...cell, width: "33.33%", verticalAlign: "top" }}>
                <div style={{ fontWeight: "bold", fontSize: 11, marginBottom: 4 }}>BILL TO / OVERSEAS CUSTOMER</div>
                <div style={{ fontSize: 11, lineHeight: 1.6 }}>
                  <b>Customer / Company Name:</b> {cust_name}<br />
                  <b>Registered Address:</b> {(addr || "").split("\n")[0]}<br />
                  {(addr || "").split("\n").slice(1).join(" ")}<br />
                  <b>City / State:</b> {city_state}<br />
                  <b>Country:</b> {country}<br />
                  <b>Tax ID / VAT / Reg No.:</b> {taxid}<br />
                  <b>Email:</b> {email}
                </div>
              </td>
              <td style={{ ...cell, width: "33.33%", verticalAlign: "top" }}>
                <div style={{ fontWeight: "bold", fontSize: 11, marginBottom: 4 }}>EXPORT / LUT DETAILS</div>
                <div style={{ fontSize: 11, lineHeight: 1.6 }}>
                  <b>LUT Financial Year:</b> {lut_fy}<br />
                  <b>LUT Filing Date:</b> {lut_date}<br />
                  <b>LUT ARN / Reference:</b> {lut_arn}<br />
                  <b>Place of Filing:</b> {place_filing}<br />
                  <b>Place of Supply:</b> {place_supply}<br />
                  <b>Nature of Supply:</b> {nature_supply}<br />
                  <b>IGST:</b> {igst}
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* ── Items table ── */}
        <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed", marginTop: 8 }}>
          <thead>
            <tr>
              <th style={{ ...hdrCell, width: "6%" }}>Sl.</th>
              <th style={{ ...hdrCell, textAlign: "left" }}>Description of Services</th>
              <th style={{ ...hdrCell, width: "10%" }}>SAC</th>
              <th style={{ ...hdrCell, width: "7%" }}>Qty</th>
              <th style={{ ...hdrCell, width: "13%", textAlign: "right" }}>Rate</th>
              <th style={{ ...hdrCell, width: "14%", textAlign: "right" }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {(items || []).map((it, i) => {
              const qty = parseFloat(it.qty) || 0;
              const rate = parseFloat(it.rate) || 0;
              const amt = qty * rate;
              return (
                <tr key={i}>
                  <td style={{ ...cell, textAlign: "center" }}>{i + 1}</td>
                  <td style={{ ...cell, textAlign: "left" }}>
                    <div style={{ fontSize: 11 }}>International export of services as per Purchase Order / Work Order.</div>
                    <div style={{ fontWeight: "bold", fontSize: 10, marginTop: 2 }}>Service description:</div>
                    <div style={{ fontSize: 11 }}>{it.svc_desc}</div>
                    <div style={{ fontWeight: "bold", fontSize: 10, marginTop: 2 }}>Project / Contract reference:</div>
                    <div style={{ fontSize: 11 }}>{it.proj_ref}</div>
                  </td>
                  <td style={{ ...cell, textAlign: "center" }}>{it.sac}</td>
                  <td style={{ ...cell, textAlign: "center" }}>{it.qty}</td>
                  <td style={numCell}>{fmtN(rate)}</td>
                  <td style={{ ...numCell, fontWeight: "bold" }}>{fmtN(amt)}</td>
                </tr>
              );
            })}

            <tr>
              <td colSpan={4} style={cell}></td>
              <td style={{ ...cell, fontWeight: "bold" }}>Subtotal</td>
              <td style={numCell}>{fmtN(subtotal)}</td>
            </tr>
            <tr>
              <td colSpan={4} style={cell}></td>
              <td style={{ ...cell, fontWeight: "bold" }}>IGST</td>
              <td style={{ ...numCell }}>NIL</td>
            </tr>
            <tr>
              <td colSpan={4} style={cell}></td>
              <td style={{ ...cell, fontWeight: "bold" }}>Round Off</td>
              <td style={numCell}>{roundoffAdj !== 0 ? (roundoffAdj > 0 ? "+" : "") + fmtN(roundoffAdj) : "—"}</td>
            </tr>
          </tbody>
        </table>

        {/* ── Totals ── */}
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 0 }}>
          <tbody>
            <tr>
              <td style={{ ...cell, width: "60%", fontWeight: "bold" }}>Taxable Value</td>
              <td style={{ ...numCell, width: "40%" }}>{fmtN(subtotal)}</td>
            </tr>
            <tr>
              <td style={{ ...cell, fontWeight: "bold" }}>IGST</td>
              <td style={numCell}>NIL</td>
            </tr>
            <tr style={{ background: "#2563eb" }}>
              <td style={{ ...cell, border: "1px solid #1e40af", fontWeight: "bold", color: "#fff", fontSize: 13 }}>TOTAL INVOICE VALUE</td>
              <td style={{ ...numCell, border: "1px solid #1e40af", fontWeight: "bold", color: "#fff", fontSize: 13 }}>{fmtN(grand)}</td>
            </tr>
            <tr>
              <td style={{ ...cell, fontWeight: "bold" }}>Amount in Words</td>
              <td style={{ ...cell }}>{words}</td>
            </tr>
          </tbody>
        </table>

        {/* ── Declaration ── */}
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 8 }}>
          <tbody>
            <tr>
              <td style={{ ...cell, verticalAlign: "top" }}>
                <div style={{ fontWeight: "bold", fontSize: 11, marginBottom: 4 }}>DECLARATION</div>
                <ol style={{ margin: "0", paddingLeft: 16, fontSize: 11, lineHeight: 1.55 }}>
                  <li>This invoice is issued for export of services under Letter of Undertaking (LUT) without payment of Integrated Tax.</li>
                  <li>LUT is furnished for FY 2026-27 under FORM GST RFD-11 dated 12/08/2026.</li>
                  <li>The applicable export and GST conditions shall be complied with for the transaction.</li>
                  <li>Payment for the exported service shall be received through permitted banking channels in accordance with applicable requirements.</li>
                  <li>SAC and service description shall be completed according to the actual service supplied.</li>
                </ol>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── Bank details + Signature ── */}
      {showBank && (
      <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 60px 0", marginTop: 8 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: "bold", fontSize: 12, marginBottom: 4 }}>BANK DETAILS</div>
          <div style={{ fontSize: 11, lineHeight: 1.6 }}>
            <b>Kotak Mahindra Bank</b><br />
            <b>Account Name:</b> SKYUP DIGITAL SOLUTIONS LLP<br />
            <b>Account No:</b> 1019032325<br />
            <b>IFSC Code:</b> KKBK0008045<br />
            <b>Branch:</b> Sahakara Nagar<br />
            <b>Note:</b> Payment Beyond 30 Days Will Attract 18% Interest
          </div>
        </div>
        <div>
          <img src="/images/signature.webp" style={{ width: 280 }} alt="Signature" />
        </div>
      </div>
      )}

    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ExportInvoiceListModal
// Shows all saved export invoices; supports re-download PDF and delete.
// Mirrors the ReceiptListModal pattern from Receipt.jsx.
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// Helpers shared across list components
// ─────────────────────────────────────────────────────────────────────────────
const fmtN = (n) =>
  Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtD = (d) =>
  d ? new Date(d).toLocaleDateString("en-GB", { day:"2-digit", month:"short", year:"numeric" }) : "—";

// ─────────────────────────────────────────────────────────────────────────────
// EditExportInvoiceModal — full edit form, mirrors EditReceiptModal
// ─────────────────────────────────────────────────────────────────────────────
function EditExportInvoiceModal({ invoice, token, onClose, onSaved }) {
  const toD = (v) => { try { return v ? new Date(v).toISOString().split("T")[0] : ""; } catch { return ""; } };
  const [vals, setVals] = useState({
    inv_date: toD(invoice.inv_date), currency: invoice.currency||"USD", cur_other: invoice.cur_other||"",
    pay_due: invoice.pay_due||"", po_no: invoice.po_no||"", po_date: invoice.po_date||"",
    pay_terms: invoice.pay_terms||"", dest: invoice.dest||"",
    cust_name: invoice.cust_name||"", addr: invoice.addr||"", city_state: invoice.city_state||"",
    country: invoice.country||"", taxid: invoice.taxid||"", email: invoice.email||"",
    lut_fy: invoice.lut_fy||"2026-27", lut_date: invoice.lut_date||"12/08/2026",
    lut_arn: invoice.lut_arn||"AD2908260210809", place_filing: invoice.place_filing||"Bangalore",
    place_supply: invoice.place_supply||"Outside India", nature_supply: invoice.nature_supply||"Export of Services",
    igst: invoice.igst||"Nil under LUT",
    items: invoice.items?.length
      ? invoice.items.map(i => ({ svc_desc:i.svc_desc||"", proj_ref:i.proj_ref||"", sac:i.sac||"", qty:i.qty||"1", rate:i.rate||"" }))
      : [{ svc_desc:"", proj_ref:"", sac:"", qty:"1", rate:"" }],
    roundoff: invoice.roundoff||"",
  });
  const [saving, setSaving] = useState(false);
  const [error,  setError]  = useState(null);

  const set    = (k) => (e) => setVals(p => ({ ...p, [k]: e.target.value }));
  const setItm = (i, k) => (e) => setVals(p => ({ ...p, items: p.items.map((it,idx) => idx===i ? {...it,[k]:e.target.value} : it) }));
  const addItm = () => setVals(p => ({ ...p, items: [...p.items, { svc_desc:"", proj_ref:"", sac:"", qty:"1", rate:"" }] }));
  const delItm = (i) => setVals(p => ({ ...p, items: p.items.filter((_,idx) => idx!==i) }));

  const subtotal  = (vals.items||[]).reduce((s,it) => s+(parseFloat(it.qty)||0)*(parseFloat(it.rate)||0), 0);
  const roundoffV = parseFloat(vals.roundoff)||0;
  const total     = roundoffV > 0 ? roundoffV : subtotal;
  const currCode  = vals.currency==="Other" ? vals.cur_other : vals.currency;

  const inp = { width:"100%", padding:"7px 10px", border:"1px solid #d1d5db", borderRadius:7, fontFamily:"inherit", fontSize:13, boxSizing:"border-box" };
  const Row = ({ label, children }) => (
    <div style={{ marginBottom:10 }}>
      <label style={{ display:"block", fontSize:11, fontWeight:700, color:"#374151", marginBottom:3 }}>{label}</label>
      {children}
    </div>
  );
  const Inp = ({ k, ...rest }) => <input value={vals[k]} onChange={set(k)} style={inp} {...rest} />;
  const G2  = ({ children }) => <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0 14px" }}>{children}</div>;
  const SectionTitle = ({ t }) => (
    <div style={{ margin:"16px 0 10px", fontSize:12, fontWeight:700, color:"#2e5496", textTransform:"uppercase", letterSpacing:".06em", borderBottom:"1px solid #dce6f3", paddingBottom:5 }}>{t}</div>
  );

  const handleSave = async () => {
    setSaving(true); setError(null);
    const payload = { ...vals, invoice_no:invoice.invoice_no, subtotal, roundoff:roundoffV, total, amount_in_words:amountInWords(total, currCode) };
    try {
      const res = await fetch(`${API_URL}/export-invoice/${invoice._id}`, {
        method:"PUT", headers:{"Content-Type":"application/json", Authorization:`Bearer ${token}`}, body:JSON.stringify(payload),
      });
      const result = await res.json();
      if (res.ok) { onSaved({ ...invoice, ...payload }); }
      else { setError(result.message||"Failed to update"); }
    } catch(err) { setError("Error: "+err.message); }
    finally { setSaving(false); }
  };

  return (
    <div style={{ position:"fixed", inset:0, zIndex:70, display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"rgba(0,0,0,0.65)", backdropFilter:"blur(3px)" }}>
      <div style={{ background:"#fff", borderRadius:16, boxShadow:"0 4px 40px rgba(0,0,0,.25)", width:"min(96vw,820px)", maxHeight:"92vh", display:"flex", flexDirection:"column" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"20px 28px 14px", borderBottom:"1px solid #e5e9ed" }}>
          <div>
            <h2 style={{ margin:0, fontSize:19, fontWeight:700, color:"#16232e" }}>Edit Export Invoice</h2>
            <p style={{ margin:"3px 0 0", fontSize:13, color:"#2e5496", fontFamily:"monospace" }}>{invoice.invoice_no}</p>
          </div>
          <button onClick={onClose} style={{ background:"none", border:"none", cursor:"pointer", fontSize:26, color:"#9ca3af" }}>×</button>
        </div>

        <div style={{ overflowY:"auto", flex:1, padding:"18px 28px" }}>
          {error && <div style={{ marginBottom:12, padding:"10px 14px", background:"#fef2f2", border:"1px solid #fca5a5", borderRadius:8, fontSize:13, color:"#b91c1c" }}>{error}</div>}

          <SectionTitle t="Invoice Details" />
          <G2><Row label="Invoice Date"><Inp k="inv_date" type="date" /></Row>
              <Row label="Currency">
                <select value={vals.currency} onChange={set("currency")} style={inp}>
                  <option>USD</option><option>EUR</option><option>GBP</option><option value="Other">Other…</option>
                </select>
              </Row></G2>
          {vals.currency==="Other" && <Row label="Currency code"><Inp k="cur_other" placeholder="e.g. AUD" /></Row>}
          <G2><Row label="Payment Due"><Inp k="pay_due" /></Row><Row label="Payment Terms"><Inp k="pay_terms" /></Row></G2>
          <G2><Row label="PO / Work Order No."><Inp k="po_no" /></Row><Row label="PO / Order Date"><Inp k="po_date" /></Row></G2>
          <Row label="Country of Destination"><Inp k="dest" /></Row>

          <SectionTitle t="Bill To / Overseas Customer" />
          <Row label="Customer / Company Name"><Inp k="cust_name" /></Row>
          <Row label="Registered Address"><textarea value={vals.addr} onChange={set("addr")} rows={2} style={{ ...inp, resize:"vertical" }} /></Row>
          <G2><Row label="City / State"><Inp k="city_state" /></Row><Row label="Country"><Inp k="country" /></Row></G2>
          <G2><Row label="Tax ID / VAT / Reg No."><Inp k="taxid" /></Row><Row label="Email"><Inp k="email" type="email" /></Row></G2>

          <SectionTitle t="Export / LUT Details" />
          <G2><Row label="LUT Financial Year"><Inp k="lut_fy" /></Row><Row label="LUT Filing Date"><Inp k="lut_date" /></Row></G2>
          <Row label="LUT ARN / Reference"><Inp k="lut_arn" /></Row>
          <G2><Row label="Place of Filing"><Inp k="place_filing" /></Row><Row label="Place of Supply"><Inp k="place_supply" /></Row></G2>
          <G2><Row label="Nature of Supply"><Inp k="nature_supply" /></Row><Row label="IGST"><Inp k="igst" /></Row></G2>

          <SectionTitle t="Line Items" />
          {(vals.items||[]).map((item, i) => (
            <div key={i} style={{ border:"1px solid #e5e9ed", borderRadius:10, padding:"12px 14px", marginBottom:10, background:"#f9fafb" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
                <span style={{ fontSize:11, fontWeight:700, color:"#2e5496", background:"#dce6f3", padding:"2px 8px", borderRadius:4 }}>Item {i+1}</span>
                {vals.items.length > 1 && (
                  <button onClick={() => delItm(i)} style={{ background:"#fee2e2", border:"1px solid #fca5a5", color:"#b91c1c", borderRadius:5, padding:"2px 9px", fontSize:11, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>Remove</button>
                )}
              </div>
              <Row label="Service description">
                <textarea value={item.svc_desc} onChange={setItm(i,"svc_desc")} rows={2} style={{ ...inp, resize:"vertical" }} />
              </Row>
              <Row label="Project / Contract reference">
                <input value={item.proj_ref} onChange={setItm(i,"proj_ref")} style={inp} />
              </Row>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"0 12px" }}>
                <Row label="SAC"><input value={item.sac} onChange={setItm(i,"sac")} placeholder="998314" style={inp} /></Row>
                <Row label="Qty"><input type="number" min="0" value={item.qty} onChange={setItm(i,"qty")} style={inp} /></Row>
                <Row label="Rate">
                  <input type="number" step="0.01" value={item.rate} onChange={setItm(i,"rate")} placeholder="0.00" style={inp} />
                  <span style={{ fontSize:11, color:"#6c7a86", marginTop:2, display:"block" }}>
                    Amt: {fmtN((parseFloat(item.qty)||0)*(parseFloat(item.rate)||0))}
                  </span>
                </Row>
              </div>
            </div>
          ))}
          <button onClick={addItm} style={{ width:"100%", padding:"8px", border:"2px dashed #2e5496", borderRadius:8, background:"#eef4ff", color:"#2e5496", fontWeight:700, fontSize:13, cursor:"pointer", fontFamily:"inherit", marginBottom:14 }}>+ Add Line Item</button>

          <Row label="Round Off — Final Invoice Total (leave blank to use calculated subtotal)">
            <input type="number" step="0.01" value={vals.roundoff} onChange={set("roundoff")}
              placeholder={`Calculated: ${fmtN(subtotal)}`} style={inp} />
          </Row>
          <div style={{ background:"#eff6ff", border:"1px solid #bfdbfe", borderRadius:8, padding:"12px 14px", fontSize:13 }}>
            <div style={{ display:"flex", justifyContent:"space-between", padding:"2px 0" }}>
              <span style={{ color:"#6c7a86" }}>Subtotal</span><span style={{ fontWeight:600 }}>{currCode} {fmtN(subtotal)}</span>
            </div>
            <div style={{ display:"flex", justifyContent:"space-between", padding:"8px 0 2px", borderTop:"1px solid #bfdbfe", marginTop:6, fontWeight:700, color:"#1d4ed8" }}>
              <span>Total Invoice Value</span><span>{currCode} {fmtN(total)}</span>
            </div>
          </div>
        </div>

        <div style={{ display:"flex", gap:12, padding:"16px 28px", borderTop:"1px solid #e5e9ed" }}>
          <button onClick={onClose} style={{ flex:1, padding:"11px", border:"1px solid #d1d5db", borderRadius:8, fontFamily:"inherit", fontSize:14, fontWeight:600, color:"#374151", background:"#fff", cursor:"pointer" }}>Cancel</button>
          <button onClick={handleSave} disabled={saving} style={{ flex:1, padding:"11px", border:0, borderRadius:8, fontFamily:"inherit", fontSize:14, fontWeight:600, color:"#fff", background:"#2e5496", cursor:"pointer", opacity:saving?0.65:1 }}>
            {saving ? "Saving…" : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ExportInvoiceActions — per-row Edit / Delete (with confirm) / PDF buttons
// ─────────────────────────────────────────────────────────────────────────────
function ExportInvoiceActions({ invoice, token, onDeleted, onEdit, onDownload, downloadingId }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleting,    setDeleting]    = useState(false);
  const isLoading = downloadingId === invoice._id.toString();

  const handleDelete = async () => {
    setDeleting(true);
    try {
      const res = await fetch(`${API_URL}/export-invoice/${invoice._id}`, {
        method:"DELETE", headers:{ Authorization:`Bearer ${token}` },
      });
      if (res.ok) { setShowConfirm(false); onDeleted(invoice._id.toString()); }
      else { alert("Failed to delete"); setDeleting(false); }
    } catch { alert("Error deleting"); setDeleting(false); }
  };

  const ab = (col, bg, bo) => ({ fontSize:11, fontWeight:700, padding:"5px 10px", borderRadius:6, border:`1px solid ${bo}`, background:bg, color:col, cursor:"pointer", fontFamily:"inherit" });

  return (
    <>
      {showConfirm && (
        <div style={{ position:"fixed", inset:0, zIndex:80, display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"rgba(0,0,0,0.65)", backdropFilter:"blur(3px)" }}>
          <div style={{ background:"#fff", borderRadius:16, padding:"32px 28px", width:"min(90vw,380px)", textAlign:"center", boxShadow:"0 4px 32px rgba(0,0,0,.25)" }}>
            <div style={{ width:52, height:52, borderRadius:"50%", background:"#fee2e2", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 14px", fontSize:24 }}>⚠️</div>
            <h3 style={{ margin:"0 0 6px", fontSize:16, fontWeight:700 }}>Delete Invoice?</h3>
            <p style={{ margin:"0 0 4px", fontSize:13, color:"#374151", fontFamily:"monospace", fontWeight:600 }}>{invoice.invoice_no}</p>
            <p style={{ margin:"0 0 22px", fontSize:13, color:"#9ca3af" }}>This action cannot be undone.</p>
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={() => setShowConfirm(false)} disabled={deleting}
                style={{ flex:1, padding:"10px", border:"1px solid #e5e9ed", borderRadius:8, fontFamily:"inherit", fontSize:14, fontWeight:600, cursor:"pointer" }}>Cancel</button>
              <button onClick={handleDelete} disabled={deleting}
                style={{ flex:1, padding:"10px", border:0, borderRadius:8, fontFamily:"inherit", fontSize:14, fontWeight:600, color:"#fff", background:"#dc2626", cursor:"pointer", opacity:deleting?0.6:1 }}>
                {deleting ? "Deleting…" : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
      <div style={{ display:"flex", gap:6, alignItems:"center", flexShrink:0 }}>
        <button onClick={e => { e.stopPropagation(); onEdit(invoice); }} style={ab("#92400e","#fef3c7","#fde68a")}>Edit</button>
        <button onClick={e => { e.stopPropagation(); setShowConfirm(true); }} style={ab("#b91c1c","#fef2f2","#fecaca")}>Delete</button>
        <button onClick={e => { e.stopPropagation(); onDownload(invoice); }} disabled={!!downloadingId}
          style={{ ...ab("#1d4ed8","#eff6ff","#bfdbfe"), opacity:downloadingId?0.55:1, cursor:downloadingId?"not-allowed":"pointer" }}>
          {isLoading ? "…" : "PDF"}
        </button>
      </div>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ExportInvoiceListModal — split-panel list + detail, mirrors ReceiptListModal
// ─────────────────────────────────────────────────────────────────────────────
function ExportInvoiceListModal({ isOpen, onClose, token, onDownload, downloadingId }) {
  const [invoices,        setInvoices]       = useState([]);
  const [loading,         setLoading]        = useState(false);
  const [error,           setError]          = useState(null);
  const [search,          setSearch]         = useState("");
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [editingInvoice,  setEditingInvoice]  = useState(null);

  useEffect(() => { if (isOpen) fetchInvoices(); }, [isOpen]);

  const fetchInvoices = async () => {
    setLoading(true); setError(null);
    try {
      const res  = await fetch(`${API_URL}/export-invoices`, { headers:{ Authorization:`Bearer ${token}` } });
      const data = await res.json();
      if (res.ok) setInvoices(data); else setError("Failed to load invoices");
    } catch { setError("Network error"); }
    finally { setLoading(false); }
  };

  const handleDeleted = (id) => {
    setInvoices(prev => prev.filter(i => i._id.toString() !== id));
    if (selectedInvoice?._id?.toString() === id) setSelectedInvoice(null);
  };
  const handleSaved = (updated) => {
    setInvoices(prev => prev.map(i => i._id.toString() === updated._id?.toString() ? {...i,...updated} : i));
    if (selectedInvoice?._id?.toString() === updated._id?.toString()) setSelectedInvoice({...selectedInvoice,...updated});
    setEditingInvoice(null);
  };

  const filtered = invoices.filter(i =>
    i.invoice_no?.toLowerCase().includes(search.toLowerCase()) ||
    i.cust_name?.toLowerCase().includes(search.toLowerCase())
  );

  if (!isOpen) return null;

  const si    = selectedInvoice;
  const siCur = si?.currency==="Other" ? (si?.cur_other||"") : (si?.currency||"USD");

  return (
    <>
      {editingInvoice && (
        <EditExportInvoiceModal invoice={editingInvoice} token={token}
          onClose={() => setEditingInvoice(null)} onSaved={handleSaved} />
      )}

      <div style={{ position:"fixed", inset:0, zIndex:50, display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"rgba(0,0,0,0.55)", backdropFilter:"blur(2px)" }}>
        <div style={{ background:"#fff", borderRadius:16, boxShadow:"0 4px 32px rgba(0,0,0,.22)", width:"min(96vw,1060px)", maxHeight:"90vh", display:"flex", flexDirection:"column" }}>

          {/* header */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"20px 28px 14px", borderBottom:"1px solid #e5e9ed" }}>
            <div>
              <h2 style={{ margin:0, fontSize:22, fontWeight:700, color:"#16232e" }}>All Export Invoices</h2>
              <p style={{ margin:"3px 0 0", fontSize:13, color:"#6c7a86" }}>{invoices.length} invoice{invoices.length!==1?"s":""} saved</p>
            </div>
            <button onClick={onClose} style={{ background:"none", border:"none", cursor:"pointer", fontSize:28, color:"#9ca3af", lineHeight:1 }}>×</button>
          </div>

          {/* search */}
          <div style={{ padding:"12px 28px", borderBottom:"1px solid #eef0f2", background:"#fafbfc" }}>
            <input value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search by invoice no or customer…"
              style={{ width:"min(100%,380px)", padding:"8px 12px", border:"1px solid #d1d5db", borderRadius:8, fontSize:13, fontFamily:"inherit", boxSizing:"border-box" }} />
          </div>

          {/* body */}
          <div style={{ display:"flex", flex:1, overflow:"hidden" }}>

            {/* list panel */}
            <div style={{ overflowY:"auto", width:si?"48%":"100%", transition:"width .18s", borderRight:si?"1px solid #e5e9ed":"none" }}>
              {loading ? (
                <div style={{ padding:60, textAlign:"center", color:"#6c7a86" }}>Loading…</div>
              ) : error ? (
                <div style={{ padding:60, textAlign:"center", color:"#b91c1c" }}>{error}<br />
                  <button onClick={fetchInvoices} style={{ marginTop:8, fontSize:13, color:"#2e5496", background:"none", border:"none", cursor:"pointer", fontFamily:"inherit" }}>Try again</button>
                </div>
              ) : filtered.length===0 ? (
                <div style={{ padding:60, textAlign:"center", color:"#6c7a86" }}>
                  {search ? "No invoices match your search." : "No export invoices saved yet."}
                </div>
              ) : filtered.map(inv => {
                const isSel = si?._id?.toString()===inv._id?.toString();
                return (
                  <div key={inv._id}
                    onClick={() => setSelectedInvoice(isSel ? null : inv)}
                    style={{ display:"flex", alignItems:"start", gap:12, padding:"14px 22px",
                             borderBottom:"1px solid #f1f3f5", cursor:"pointer",
                             background:isSel?"#eff6ff":"#fff",
                             borderLeft:isSel?"4px solid #2e5496":"4px solid transparent" }}>
                    <div style={{ flex:1, minWidth:0 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:2 }}>
                        <span style={{ fontWeight:700, fontSize:13, color:"#2e5496", fontFamily:"monospace" }}>{inv.invoice_no}</span>
                        <span style={{ fontSize:11, color:"#9ca3af" }}>{fmtD(inv.inv_date||inv.createdAt)}</span>
                      </div>
                      <p style={{ margin:"0 0 2px", fontSize:13, fontWeight:600, color:"#16232e" }}>{inv.cust_name||"—"}</p>
                      <p style={{ margin:0, fontSize:12, color:"#6c7a86" }}>
                        {inv.currency==="Other"?(inv.cur_other||""):inv.currency} {fmtN(inv.total||0)}
                      </p>
                    </div>
                    <ExportInvoiceActions invoice={inv} token={token}
                      onDeleted={handleDeleted} onEdit={i => setEditingInvoice(i)}
                      onDownload={onDownload} downloadingId={downloadingId} />
                  </div>
                );
              })}
            </div>

            {/* detail panel */}
            {si && (
              <div style={{ flex:1, overflowY:"auto", background:"#fafbfc", padding:20 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
                  <h3 style={{ margin:0, fontSize:15, fontWeight:700, color:"#16232e" }}>Invoice Details</h3>
                  <button onClick={() => setSelectedInvoice(null)} style={{ background:"none", border:"none", cursor:"pointer", fontSize:20, color:"#9ca3af" }}>×</button>
                </div>

                {/* action buttons */}
                <div style={{ display:"flex", gap:8, marginBottom:14 }}>
                  <button onClick={() => setEditingInvoice(si)}
                    style={{ flex:1, padding:"9px", border:"1px solid #fde68a", borderRadius:8, background:"#fef3c7", color:"#92400e", fontWeight:700, fontSize:13, cursor:"pointer", fontFamily:"inherit", display:"flex", alignItems:"center", justifyContent:"center", gap:5 }}>
                    ✏️ Edit
                  </button>
                  <button onClick={() => onDownload(si)} disabled={!!downloadingId}
                    style={{ flex:1, padding:"9px", border:"1px solid #bfdbfe", borderRadius:8, background:"#eff6ff", color:"#1d4ed8", fontWeight:700, fontSize:13, cursor:"pointer", fontFamily:"inherit", display:"flex", alignItems:"center", justifyContent:"center", gap:5, opacity:downloadingId?0.55:1 }}>
                    {downloadingId===si._id.toString() ? "Generating…" : "⬇ Download PDF"}
                  </button>
                </div>

                {/* meta card */}
                <div style={{ background:"#fff", border:"1px solid #e5e9ed", borderRadius:10, padding:"13px 16px", marginBottom:10 }}>
                  {[["Invoice No",si.invoice_no,true],["Date",fmtD(si.inv_date)],["Currency",si.currency==="Other"?si.cur_other:si.currency],["Payment Due",si.pay_due],["PO No.",si.po_no],["Destination",si.dest]]
                    .filter(([,v]) => v)
                    .map(([l,val,mono]) => (
                      <div key={l} style={{ display:"flex", justifyContent:"space-between", fontSize:13, padding:"3px 0", borderBottom:"1px solid #f9fafb" }}>
                        <span style={{ color:"#6c7a86", fontWeight:500 }}>{l}</span>
                        <span style={{ fontWeight:600, color:"#16232e", fontFamily:mono?"monospace":"inherit" }}>{val}</span>
                      </div>
                    ))}
                </div>

                {/* customer card */}
                <div style={{ background:"#fff", border:"1px solid #e5e9ed", borderRadius:10, padding:"13px 16px", marginBottom:10 }}>
                  <p style={{ margin:"0 0 8px", fontSize:10, fontWeight:700, color:"#9ca3af", textTransform:"uppercase", letterSpacing:".08em" }}>Customer</p>
                  <p style={{ margin:"0 0 3px", fontSize:13, fontWeight:700, color:"#16232e" }}>{si.cust_name||"—"}</p>
                  {si.addr && <p style={{ margin:"0 0 2px", fontSize:12, color:"#6c7a86", whiteSpace:"pre-line" }}>{si.addr}</p>}
                  {si.city_state && <p style={{ margin:"0 0 2px", fontSize:12, color:"#6c7a86" }}>{si.city_state}</p>}
                  {si.country && <p style={{ margin:"0 0 2px", fontSize:12, color:"#6c7a86" }}>{si.country}</p>}
                  {si.email && <p style={{ margin:"0 0 2px", fontSize:12, color:"#6c7a86" }}>{si.email}</p>}
                  {si.taxid && <p style={{ margin:0, fontSize:11, color:"#9ca3af" }}>Tax ID: {si.taxid}</p>}
                </div>

                {/* LUT card */}
                <div style={{ background:"#fff", border:"1px solid #e5e9ed", borderRadius:10, padding:"13px 16px", marginBottom:10 }}>
                  <p style={{ margin:"0 0 8px", fontSize:10, fontWeight:700, color:"#9ca3af", textTransform:"uppercase", letterSpacing:".08em" }}>Export / LUT Details</p>
                  {[["LUT FY",si.lut_fy],["Filing Date",si.lut_date],["ARN / Ref",si.lut_arn],["Place of Filing",si.place_filing],["Place of Supply",si.place_supply],["Nature of Supply",si.nature_supply],["IGST",si.igst]]
                    .filter(([,v]) => v).map(([l,val]) => (
                      <div key={l} style={{ display:"flex", justifyContent:"space-between", fontSize:12, padding:"2px 0" }}>
                        <span style={{ color:"#6c7a86" }}>{l}</span><span style={{ fontWeight:600, color:"#16232e" }}>{val}</span>
                      </div>
                    ))}
                </div>

                {/* items card */}
                {si.items?.length>0 && (
                  <div style={{ background:"#fff", border:"1px solid #e5e9ed", borderRadius:10, overflow:"hidden", marginBottom:10 }}>
                    <p style={{ margin:0, padding:"10px 14px 6px", fontSize:10, fontWeight:700, color:"#9ca3af", textTransform:"uppercase", letterSpacing:".08em" }}>Line Items</p>
                    <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
                      <thead>
                        <tr style={{ background:"#f9fafb", borderTop:"1px solid #f1f3f5", borderBottom:"1px solid #f1f3f5" }}>
                          <th style={{ textAlign:"left", padding:"6px 14px", fontWeight:600, color:"#6c7a86" }}>Description</th>
                          <th style={{ textAlign:"center", padding:"6px 6px", fontWeight:600, color:"#6c7a86", width:40 }}>Qty</th>
                          <th style={{ textAlign:"right", padding:"6px 14px", fontWeight:600, color:"#6c7a86", width:90 }}>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {si.items.map((it,i) => (
                          <tr key={i} style={{ borderBottom:"1px solid #f9fafb" }}>
                            <td style={{ padding:"7px 14px", lineHeight:1.4 }}>
                              {it.svc_desc && <div style={{ fontSize:12, fontWeight:600, color:"#374151" }}>{it.svc_desc}</div>}
                              {it.proj_ref && <div style={{ fontSize:11, color:"#9ca3af" }}>{it.proj_ref}</div>}
                              {it.sac      && <div style={{ fontSize:10, color:"#9ca3af" }}>SAC: {it.sac}</div>}
                            </td>
                            <td style={{ padding:"7px 6px", textAlign:"center", color:"#374151" }}>{it.qty}</td>
                            <td style={{ padding:"7px 14px", textAlign:"right", fontWeight:600, color:"#16232e" }}>
                              {fmtN((parseFloat(it.qty)||0)*(parseFloat(it.rate)||0))}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* totals card */}
                <div style={{ background:"#fff", border:"1px solid #e5e9ed", borderRadius:10, padding:"13px 16px" }}>
                  {[["Subtotal",fmtN(si.subtotal)],["IGST","NIL"],si.roundoff>0?["Round Off",fmtN(si.roundoff)]:null]
                    .filter(Boolean).map(([l,val]) => (
                      <div key={l} style={{ display:"flex", justifyContent:"space-between", fontSize:13, padding:"3px 0" }}>
                        <span style={{ color:"#6c7a86" }}>{l}</span><span style={{ fontWeight:600 }}>{val}</span>
                      </div>
                    ))}
                  <div style={{ display:"flex", justifyContent:"space-between", borderTop:"1px solid #e5e9ed", marginTop:6, paddingTop:8, fontWeight:700, fontSize:14 }}>
                    <span style={{ color:"#16232e" }}>Total</span>
                    <span style={{ color:"#2e5496" }}>{siCur} {fmtN(si.total||0)}</span>
                  </div>
                  {si.amount_in_words && <p style={{ margin:"5px 0 0", fontSize:11, color:"#9ca3af", fontStyle:"italic" }}>{si.amount_in_words}</p>}
                </div>
              </div>
            )}
          </div>

          {/* footer */}
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 28px", borderTop:"1px solid #eef0f2" }}>
            <p style={{ margin:0, fontSize:12, color:"#9ca3af" }}>{filtered.length} of {invoices.length} shown</p>
            <button onClick={fetchInvoices} style={{ fontSize:12, fontWeight:600, color:"#2e5496", background:"none", border:"none", cursor:"pointer", fontFamily:"inherit" }}>Refresh</button>
          </div>

        </div>
      </div>
    </>
  );
}

function ExportInvoiceBankPage() {
  return (
    <div style={{
      width: "210mm", minHeight: "297mm",
      fontFamily: "Arial, Helvetica, sans-serif", color: "#000",
      background: "#fff", boxSizing: "border-box",
      backgroundImage: "url('/images/watermark.png')",
      backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",
      padding: "60px 60px 40px",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: "bold", fontSize: 13, marginBottom: 6 }}>BANK DETAILS</div>
          <div style={{ fontSize: 12, lineHeight: 1.8 }}>
            <b>Kotak Mahindra Bank</b><br />
            <b>Account Name:</b> SKYUP DIGITAL SOLUTIONS LLP<br />
            <b>Account No:</b> 1019032325<br />
            <b>IFSC Code:</b> KKBK0008045<br />
            <b>Branch:</b> Sahakara Nagar<br />
            <b>Note:</b> Payment Beyond 30 Days Will Attract 18% Interest
          </div>
        </div>
        <div>
          <img src="/images/signature.webp" style={{ width: 280 }} alt="Signature" />
        </div>
      </div>
    </div>
  );
}

export function ExportInvoice() {
  const [f, setF] = useState(INIT);
  const [downloading,      setDownloading]      = useState(false);
  const [showList,         setShowList]         = useState(false);
  const [listDownloadingId, setListDownloadingId] = useState(null);
  const [listDownloadData,  setListDownloadData]  = useState(null); // drives re-download template
  const templateRef = useRef(null);
  const bankRef     = useRef(null);
  const listRef     = useRef(null);   // re-download: invoice content
  const listBankRef = useRef(null);   // re-download: bank page

  const { token } = useAuth();

  // 2+ items → bank details move to a dedicated page 2
  const isMultiPage = (f.items || []).length >= 2;

  const set = (k) => (e) =>
    setF((p) => ({
      ...p,
      [k]: e.target.value,
    }));

  const currencyCode =
    f.currency === "Other"
      ? (f.cur_other || "").toUpperCase()
      : f.currency;

  // Invoice number prefix: SDS always fixed; /EXP/ added when checkbox is on
  const prefix = f.useExp ? "SDS/EXP" : "SDS";

  // Multi-item subtotal
  const subtotal = (f.items || []).reduce(
    (s, it) => s + (parseFloat(it.qty) || 0) * (parseFloat(it.rate) || 0),
    0,
  );

  // Round Off: when filled, the entered value IS the final total (override).
  // The adjustment shown in the table = roundoffValue − subtotal.
  const roundoffVal = parseFloat(f.roundoff) || 0;
  const grand = roundoffVal > 0 ? roundoffVal : subtotal;
  const roundoffAdj = roundoffVal > 0 ? roundoffVal - subtotal : 0;

  const words = amountInWords(grand, currencyCode);

  // Item helpers
  const addItem = () =>
    setF((p) => ({ ...p, items: [...p.items, { ...BLANK_ITEM }] }));
  const removeItem = (i) =>
    setF((p) => ({ ...p, items: p.items.filter((_, idx) => idx !== i) }));
  const setItem = (i, k) => (e) =>
    setF((p) => ({
      ...p,
      items: p.items.map((it, idx) =>
        idx === i ? { ...it, [k]: e.target.value } : it,
      ),
    }));

  let dd = "";
  let mm = "";
  let yyyy = "2026";

  if (f.inv_date) {
    const [y, m, d] = f.inv_date.split("-");
    dd = d;
    mm = m;
    yyyy = y;
  }

  const addrLines = (f.addr || "").split("\n");
  const addr1 = addrLines[0] || "";
  const addr2 = addrLines.slice(1).join(" ") || "";

  const clear = () => {
    if (window.confirm("Clear the form?")) {
      setF(INIT);
    }
  };

  // All data the template needs — passed as a plain object so the template
  // stays a pure presentational component (same pattern as ReceiptTemplate).
  const templateData = {
    prefix, inv_no: f.inv_no, inv_date: f.inv_date,
    currency: f.currency, cur_other: f.cur_other, pay_due: f.pay_due,
    po_no: f.po_no, po_date: f.po_date, pay_terms: f.pay_terms, dest: f.dest,
    cust_name: f.cust_name, addr: f.addr, city_state: f.city_state,
    country: f.country, taxid: f.taxid, email: f.email,
    lut_fy: f.lut_fy, lut_date: f.lut_date, lut_arn: f.lut_arn,
    place_filing: f.place_filing, place_supply: f.place_supply,
    nature_supply: f.nature_supply, igst: f.igst,
    items: f.items, subtotal, grand, roundoffAdj, words, currencyCode,
  };

  const invoiceNumber = `${prefix}/${f.inv_no || "DRAFT"}/2026-27`;

  // ── Save to MongoDB after PDF download ───────────────────────────────────
  const saveToDb = async () => {
    if (!token) return;
    try {
      const payload = {
        invoice_no: invoiceNumber,
        inv_date:   f.inv_date,
        currency:   f.currency,   cur_other:   f.cur_other,
        pay_due:    f.pay_due,    po_no:       f.po_no,
        po_date:    f.po_date,    pay_terms:   f.pay_terms,
        dest:       f.dest,       cust_name:   f.cust_name,
        addr:       f.addr,       city_state:  f.city_state,
        country:    f.country,    taxid:       f.taxid,
        email:      f.email,
        lut_fy:     f.lut_fy,    lut_date:    f.lut_date,
        lut_arn:    f.lut_arn,   place_filing: f.place_filing,
        place_supply: f.place_supply, nature_supply: f.nature_supply,
        igst:       f.igst,
        items:      f.items,
        subtotal,
        roundoff:   parseFloat(f.roundoff) || 0,
        total:      grand,
        amount_in_words: words,
      };
      const res = await fetch(`${API_URL}/export-invoice`, {
        method:  "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body:    JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.json();
        console.error("Failed to save export invoice:", err.message);
      } else {
        console.log("✅ Export invoice saved to DB");
      }
    } catch (err) {
      console.error("Error saving export invoice:", err);
    }
  };

  // ── Rebuild templateData from a saved DB document (for list re-download) ─
  const reconstructTemplateData = (doc) => {
    const docItems  = doc.items || [];
    const docSub    = docItems.reduce(
      (s, it) => s + (parseFloat(it.qty) || 0) * (parseFloat(it.rate) || 0), 0,
    );
    const docRo     = parseFloat(doc.roundoff) || 0;
    const docGrand  = docRo > 0 ? docRo : docSub;
    const docAdj    = docRo > 0 ? docRo - docSub : 0;
    const docCur    = doc.currency === "Other" ? (doc.cur_other || "") : (doc.currency || "USD");
    // Derive prefix from stored invoice_no e.g. "SDS/EXP/001/2026-27" → "SDS/EXP"
    const parts     = (doc.invoice_no || "").split("/");
    const docPrefix = parts.length >= 3 ? parts.slice(0, -2).join("/") : "SDS/EXP";
    return {
      prefix: docPrefix,
      inv_no: parts[parts.length - 2] || "",
      inv_date: doc.inv_date ? new Date(doc.inv_date).toISOString().split("T")[0] : "",
      currency: doc.currency, cur_other: doc.cur_other,
      pay_due: doc.pay_due, po_no: doc.po_no, po_date: doc.po_date,
      pay_terms: doc.pay_terms, dest: doc.dest,
      cust_name: doc.cust_name, addr: doc.addr, city_state: doc.city_state,
      country: doc.country, taxid: doc.taxid, email: doc.email,
      lut_fy: doc.lut_fy, lut_date: doc.lut_date, lut_arn: doc.lut_arn,
      place_filing: doc.place_filing, place_supply: doc.place_supply,
      nature_supply: doc.nature_supply, igst: doc.igst,
      items: docItems, subtotal: docSub, grand: docGrand,
      roundoffAdj: docAdj, words: doc.amount_in_words || amountInWords(docGrand, docCur),
      currencyCode: docCur,
    };
  };

  // ── Re-download PDF from the invoice list ────────────────────────────────
  const handleListDownload = async (savedDoc) => {
    if (listDownloadingId) return;
    setListDownloadingId(savedDoc._id.toString());
    const tData = reconstructTemplateData(savedDoc);
    setListDownloadData(tData);
    await new Promise((r) => setTimeout(r, 400)); // let React render the hidden template
    try {
      const isMP = (tData.items || []).length >= 2;
      const els  = isMP
        ? [listRef.current, listBankRef.current]
        : [listRef.current];
      await generatePDF(els, savedDoc.invoice_no, { pageWidth: 210 });
    } finally {
      setListDownloadData(null);
      setListDownloadingId(null);
    }
  };

  const handleDownload = async () => {
    if (downloading) return;
    setDownloading(true);
    try {
      await new Promise((r) => setTimeout(r, 300));
      const elements = isMultiPage
        ? [templateRef.current, bankRef.current]
        : [templateRef.current];
      await generatePDF(elements, invoiceNumber, { pageWidth: 210 });
      // Save to MongoDB after successful PDF generation (same pattern as Receipt)
      await saveToDb();
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="ei">
      <style>{CSS}</style>

      {/* ---------------- FORM ---------------- */}

      <div className="ei-toolbar">
        <button
          className="ei-tbtn back"
          onClick={() => navigate("/admin/receipt")}
        >
          <svg
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>

          Back to Receipt
        </button>

        <span className="ei-title">
          Export Service Invoice
        </span>

        <button
          className="ei-tbtn go"
          onClick={handleDownload}
          disabled={downloading}
          style={downloading ? { opacity: 0.65, cursor: "not-allowed" } : undefined}
        >
          {downloading ? "Generating PDF…" : "Download / Save as PDF"}
        </button>

        <button className="ei-tbtn" onClick={() => setShowList(true)}>
          Invoice List
        </button>

        <button
          className="ei-tbtn"
          onClick={clear}
        >
          Clear form
        </button>
      </div>

      {/* ── Invoice list modal ── */}
      <ExportInvoiceListModal
        isOpen={showList}
        onClose={() => setShowList(false)}
        token={token}
        onDownload={handleListDownload}
        downloadingId={listDownloadingId}
      />

      <div className="ei-app">

        {/* ---------------- FORM ---------------- */}

        <div className="ei-form">

          <h2>Invoice details</h2>

          <div className="ei-fg">
            <label>Serial No.</label>
            <input
              value={f.inv_no}
              onChange={set("inv_no")}
              placeholder="001"
            />
          </div>

          <div style={{ display:"flex", alignItems:"center", gap:8, margin:"0 0 9px", fontSize:12 }}>
            <span style={{ fontWeight:"bold", color:"#2e5496", background:"#dce6f3", borderRadius:4, padding:"3px 7px", letterSpacing:".03em" }}>
              SDS
            </span>
            <span style={{ color:"#8a9099" }}>always fixed ·</span>
            <label style={{ display:"flex", alignItems:"center", gap:5, cursor:"pointer", fontWeight:"bold", color:"#3a4a57", fontSize:12 }}>
              <input
                type="checkbox"
                checked={f.useExp}
                onChange={(e) => setF((p) => ({ ...p, useExp: e.target.checked }))}
                style={{ width:14, height:14, accentColor:"#2e5496" }}
              />
              Include /EXP/
            </label>
          </div>

          <div className="ei-hint">
            Prints as <b>{prefix}/&lt;serial&gt;/2026-27</b>
          </div>

          <div className="ei-fg">
            <label>Invoice Date</label>

            <input
              type="date"
              value={f.inv_date}
              onChange={set("inv_date")}
            />
          </div>

          <div className="ei-fg">
            <label>Currency</label>

            <select
              value={f.currency}
              onChange={set("currency")}
            >
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
              <option value="Other">Other…</option>
            </select>
          </div>

          {f.currency === "Other" && (
            <div className="ei-fg">
              <label>Currency code (Other)</label>

              <input
                value={f.cur_other}
                onChange={set("cur_other")}
                placeholder="e.g. AUD"
              />
            </div>
          )}

          <div className="ei-fg">
            <label>Payment Due</label>

            <input
              value={f.pay_due}
              onChange={set("pay_due")}
              placeholder="e.g. 15 days from invoice"
            />
          </div>

          <div className="ei-row2">
            <div className="ei-fg">
              <label>PO / Work Order No.</label>

              <input
                value={f.po_no}
                onChange={set("po_no")}
              />
            </div>

            <div className="ei-fg">
              <label>PO / Order Date</label>

              <input
                value={f.po_date}
                onChange={set("po_date")}
              />
            </div>
          </div>

          <div className="ei-row2">
            <div className="ei-fg">
              <label>Payment Terms</label>

              <input
                value={f.pay_terms}
                onChange={set("pay_terms")}
                placeholder="Net 15"
              />
            </div>

            <div className="ei-fg">
              <label>Country of Destination</label>

              <input
                value={f.dest}
                onChange={set("dest")}
              />
            </div>
          </div>

          <h2>Overseas customer (Bill to)</h2>

          <div className="ei-fg">
            <label>Customer / Company Name</label>

            <input
              value={f.cust_name}
              onChange={set("cust_name")}
            />
          </div>

          <div className="ei-fg">
            <label>Registered Address</label>

            <textarea
              value={f.addr}
              onChange={set("addr")}
              placeholder={"Line 1\nLine 2"}
            />
          </div>

          <div className="ei-fg">
            <label>City / State</label>

            <input
              value={f.city_state}
              onChange={set("city_state")}
            />
          </div>

          <div className="ei-fg">
            <label>Country</label>

            <input
              value={f.country}
              onChange={set("country")}
            />
          </div>

          <div className="ei-fg">
            <label>Tax ID / VAT / Registration No.</label>

            <input
              value={f.taxid}
              onChange={set("taxid")}
            />
          </div>

          <div className="ei-fg">
            <label>Email</label>

            <input
              type="email"
              value={f.email}
              onChange={set("email")}
            />
          </div>

          <h2>Export / LUT details</h2>

          <div className="ei-row2">
            <div className="ei-fg">
              <label>LUT Financial Year</label>

              <input
                value={f.lut_fy}
                onChange={set("lut_fy")}
              />
            </div>

            <div className="ei-fg">
              <label>LUT Filing Date</label>

              <input
                value={f.lut_date}
                onChange={set("lut_date")}
              />
            </div>
          </div>

          <div className="ei-fg">
            <label>LUT ARN / Reference</label>

            <input
              value={f.lut_arn}
              onChange={set("lut_arn")}
            />
          </div>

          <div className="ei-row2">
            <div className="ei-fg">
              <label>Place of Filing</label>

              <input
                value={f.place_filing}
                onChange={set("place_filing")}
              />
            </div>

            <div className="ei-fg">
              <label>Place of Supply</label>

              <input
                value={f.place_supply}
                onChange={set("place_supply")}
              />
            </div>
          </div>

          <div className="ei-row2">
            <div className="ei-fg">
              <label>Nature of Supply</label>

              <input
                value={f.nature_supply}
                onChange={set("nature_supply")}
              />
            </div>

            <div className="ei-fg">
              <label>IGST</label>

              <input
                value={f.igst}
                onChange={set("igst")}
              />
            </div>
          </div>

          <h2>Service / line items</h2>

          {(f.items || []).map((item, i) => (
            <div key={i} style={{ border:"1px solid #dbe4f0", borderRadius:8, padding:"10px 10px 4px", marginBottom:10, background:"#f8fafc" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:6 }}>
                <span style={{ fontSize:11, fontWeight:"bold", color:"#2e5496" }}>Item {i + 1}</span>
                {f.items.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeItem(i)}
                    style={{ fontSize:11, color:"#b91c1c", background:"#fee2e2", border:"1px solid #fca5a5", borderRadius:5, padding:"2px 8px", cursor:"pointer" }}
                  >
                    Remove
                  </button>
                )}
              </div>
              <div className="ei-fg">
                <label>Service description</label>
                <textarea value={item.svc_desc} onChange={setItem(i, "svc_desc")} />
              </div>
              <div className="ei-fg">
                <label>Project / Contract reference</label>
                <input value={item.proj_ref} onChange={setItem(i, "proj_ref")} />
              </div>
              <div className="ei-row2">
                <div className="ei-fg">
                  <label>SAC</label>
                  <input value={item.sac} onChange={setItem(i, "sac")} placeholder="998314" />
                </div>
                <div className="ei-fg">
                  <label>Qty.</label>
                  <input type="number" min="0" step="1" value={item.qty} onChange={setItem(i, "qty")} />
                </div>
                <div className="ei-fg">
                  <label>Rate</label>
                  <input type="number" step="0.01" value={item.rate} onChange={setItem(i, "rate")} placeholder="0.00" />
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addItem}
            style={{ width:"100%", padding:"8px", marginBottom:12, border:"2px dashed #2e5496", borderRadius:7, background:"#eef4ff", color:"#2e5496", fontWeight:"bold", fontSize:13, cursor:"pointer" }}
          >
            + Add Line Item
          </button>

          <div className="ei-fg">
            <label>Round Off (Final Invoice Total)</label>
            <input
              type="number"
              step="0.01"
              value={f.roundoff}
              onChange={set("roundoff")}
              placeholder={`Leave blank to use calculated ${fmt(subtotal)}`}
            />
          </div>
          <div className="ei-hint">
            When filled, this value becomes the TOTAL INVOICE VALUE directly.
            The Round Off adjustment ({roundoffAdj >= 0 ? "+" : ""}{fmt(roundoffAdj)}) is shown in the invoice table.
          </div>

          <div className="ei-amt">
            <div className="r">
              <span>Subtotal</span>
              <span>{fmt(subtotal)}</span>
            </div>
            <div className="r">
              <span>Round Off adjustment</span>
              <span>{roundoffAdj >= 0 ? "+" : ""}{fmt(roundoffAdj)}</span>
            </div>
            <div className="r big">
              <span>TOTAL ({currencyCode || "—"})</span>
              <span>{fmt(grand)}</span>
            </div>
          </div>
        </div>

        {/* ---------------- PREVIEW ---------------- */}

        <div className="ei-preview">

          <div className="page p1">

            <div className="hd">

              <div className="l">
                <div className="title">
                  EXPORT
                  <br />
                  SERVICE
                  <br />
                  INVOICE
                </div>
              </div>

              <div className="r">

                <img
                  className="logo"
                  src="/images/rbd-logo.webp"
                  alt="SKYUP Digital Solutions"
                />

                <div className="co-ids">
                  <b>GSTIN:</b> 29AFUFS6710E1ZJ
                  <br />
                  <b>IEC:</b> AFUFS6710E
                </div>

              </div>

            </div>

            {/* =====================================================
                TOP DETAILS TABLE
                ===================================================== */}

            <table className="grid">
              <tbody>

                <tr>

                  <td>
                    <span className="lbl">
                      Invoice No.
                    </span>

                    <span className="val">
                      {prefix}/
                      <PV w="46pt">
                        {f.inv_no}
                      </PV>
                      /2026-27
                    </span>
                  </td>

                  <td>
                    <span className="lbl">
                      Invoice Date
                    </span>

                    <span className="val">
                      <PV w="22pt">{dd}</PV>
                      {" / "}
                      <PV w="22pt">{mm}</PV>
                      {" / "}
                      <PV w="30pt">{yyyy}</PV>
                    </span>
                  </td>

                  <td>
                    <span className="lbl">
                      Currency
                    </span>

                    <span className="val">

                      <span
                        className={
                          "ccode" +
                          (f.currency === "USD" ? " on" : "")
                        }
                      >
                        USD
                      </span>

                      {" / "}

                      <span
                        className={
                          "ccode" +
                          (f.currency === "EUR" ? " on" : "")
                        }
                      >
                        EUR
                      </span>

                      {" / "}

                      <span
                        className={
                          "ccode" +
                          (f.currency === "GBP" ? " on" : "")
                        }
                      >
                        GBP
                      </span>

                      {" / "}

                      <span
                        className={
                          "otherlbl" +
                          (f.currency === "Other" ? " on" : "")
                        }
                      >
                        Other:
                      </span>

                      {" "}

                      <PT>
                        {f.currency === "Other"
                          ? f.cur_other
                          : ""}
                      </PT>

                    </span>
                  </td>

                  <td>
                    <span className="lbl">
                      Payment Due
                    </span>

                    <span className="val">
                      <PV>
                        {f.pay_due}
                      </PV>
                    </span>
                  </td>

                </tr>

                <tr>

                  <td>
                    <span className="lbl">
                      PO / Work Order No.
                    </span>

                    <span className="val">
                      <PV>
                        {f.po_no}
                      </PV>
                    </span>
                  </td>

                  <td>
                    <span className="lbl">
                      PO / Order Date
                    </span>

                    <span className="val">
                      <PV>
                        {f.po_date}
                      </PV>
                    </span>
                  </td>

                  <td>
                    <span className="lbl">
                      Payment Terms
                    </span>

                    <span className="val">
                      <PV>
                        {f.pay_terms}
                      </PV>
                    </span>
                  </td>

                  <td>
                    <span className="lbl">
                      Country of Destination
                    </span>

                    <span className="val">
                      <PV>
                        {f.dest}
                      </PV>
                    </span>
                  </td>

                </tr>

              </tbody>
            </table>

            {/* =====================================================
                EXPORT BANNER
                ===================================================== */}

            <div className="banner">
              SUPPLY MEANT FOR EXPORT UNDER LETTER OF UNDERTAKING
              WITHOUT PAYMENT OF INTEGRATED TAX
            </div>

            {/* =====================================================
                SUPPLIER / CUSTOMER / LUT TABLE
                ===================================================== */}

            <table className="info">
              <tbody>

                <tr>

                  <td>

                    <div className="sec-h">
                      SUPPLIER / EXPORTER
                    </div>

                    <div className="fx">

                      <b>
                        Skyup Digital Solutions LLP
                      </b>

                      <br />

                      No. 23, PARINIDHI, E Block,
                      14A Main Road,

                      <br />

                      Sahakaranagar, Bengaluru Urban,
                      Karnataka - 560092

                      <br />

                      <b>Nature of Concern:</b>{" "}
                      Limited Liability Partnership

                    </div>

                  </td>

                  <td>

                    <div className="sec-h">
                      BILL TO / OVERSEAS CUSTOMER
                    </div>

                    <div className="kv">

                      <div>
                        <span className="k">
                          Customer / Company Name:
                        </span>{" "}
                        <PV>
                          {f.cust_name}
                        </PV>
                      </div>

                      <div>
                        <span className="k">
                          Registered Address:
                        </span>{" "}
                        <PV>
                          {addr1}
                        </PV>
                      </div>

                      <div>
                        <PV w="120pt">
                          {addr2}
                        </PV>
                      </div>

                      <div>
                        <span className="k">
                          City / State:
                        </span>{" "}
                        <PV>
                          {f.city_state}
                        </PV>
                      </div>

                      <div>
                        <span className="k">
                          Country:
                        </span>{" "}
                        <PV>
                          {f.country}
                        </PV>
                      </div>

                      <div>
                        <span className="k">
                          Tax ID / VAT / Registration No.:
                        </span>{" "}
                        <PV>
                          {f.taxid}
                        </PV>
                      </div>

                      <div>
                        <span className="k">
                          Email:
                        </span>{" "}
                        <PV>
                          {f.email}
                        </PV>
                      </div>

                    </div>

                  </td>

                  <td>

                    <div className="sec-h">
                      EXPORT / LUT DETAILS
                    </div>

                    <div className="kv lut-col">

                      <div className="row">
                        <span className="k">
                          LUT Financial Year:
                        </span>{" "}
                        <PT>
                          {f.lut_fy}
                        </PT>
                      </div>

                      <div className="row">
                        <span className="k">
                          LUT Filing Date:
                        </span>{" "}
                        <PT>
                          {f.lut_date}
                        </PT>
                      </div>

                      <div className="row">
                        <span className="k">
                          LUT ARN / Reference:
                        </span>
                      </div>

                      <div>
                        <PV w="120pt">
                          {f.lut_arn}
                        </PV>
                      </div>

                      <div className="row">
                        <span className="k">
                          Place of Filing:
                        </span>{" "}
                        <PT>
                          {f.place_filing}
                        </PT>
                      </div>

                      <div className="row">
                        <span className="k">
                          Place of Supply:
                        </span>{" "}
                        <PT>
                          {f.place_supply}
                        </PT>
                      </div>

                      <div className="row">
                        <span className="k">
                          Nature of Supply:
                        </span>{" "}
                        <PT>
                          {f.nature_supply}
                        </PT>
                      </div>

                      <div className="row">
                        <span className="k">
                          IGST:
                        </span>{" "}
                        <PT>
                          {f.igst}
                        </PT>
                      </div>

                    </div>

                  </td>

                </tr>

              </tbody>
            </table>

            {/* =====================================================
                ITEMS TABLE
                ===================================================== */}

            <table className="items">

              <thead>

                <tr>

                  <th className="c-sl">
                    Sl. No.
                  </th>

                  <th>
                    Description of Services
                  </th>

                  <th className="c-sac">
                    SAC
                  </th>

                  <th className="c-qty">
                    Qty.
                  </th>

                  <th className="c-rate">
                    Rate
                  </th>

                  <th className="c-amt">
                    Amount
                  </th>

                </tr>

              </thead>

              <tbody>

                {(f.items || []).map((item, i) => {
                  const iQty = parseFloat(item.qty) || 0;
                  const iRate = parseFloat(item.rate) || 0;
                  const iAmt = iQty * iRate;
                  return (
                    <tr key={i}>
                      <td className="c-sl">{i + 1}</td>
                      <td>
                        <div className="desc-fixed">
                          International export of services as per Purchase Order / Work Order.
                        </div>
                        <div className="desc-sub">Service description:</div>
                        <div><PV w="200pt">{item.svc_desc}</PV></div>
                        <div className="desc-sub">Project / Contract reference:</div>
                        <div><PV w="170pt">{item.proj_ref}</PV></div>
                      </td>
                      <td className="c-sac"><PV w="40pt">{item.sac}</PV></td>
                      <td className="c-qty">{item.qty || "0"}</td>
                      <td className="c-rate num">{fmt(iRate)}</td>
                      <td className="c-amt num">{fmt(iAmt)}</td>
                    </tr>
                  );
                })}

                <tr>
                  <td></td><td></td><td></td><td></td>
                  <td className="tot-lbl">Subtotal</td>
                  <td className="num">{fmt(subtotal)}</td>
                </tr>

                <tr>
                  <td></td><td></td><td></td><td></td>
                  <td className="tot-lbl">IGST</td>
                  <td className="num">NIL</td>
                </tr>

                <tr>
                  <td></td><td></td><td></td><td></td>
                  <td className="tot-lbl">Round Off</td>
                  <td className="num">
                    {roundoffAdj !== 0
                      ? (roundoffAdj > 0 ? "+" : "") + fmt(roundoffAdj)
                      : "—"}
                  </td>
                </tr>

              </tbody>

            </table>

            {/* =====================================================
                TOTALS
                ===================================================== */}

            <table className="tot">

              <tbody>

                <tr>
                  <td className="tl">
                    Taxable Value
                  </td>

                  <td className="tr">
                    {fmt(subtotal)}
                  </td>
                </tr>

                <tr>
                  <td className="tl">
                    IGST
                  </td>

                  <td className="tr">
                    NIL
                  </td>
                </tr>

                <tr className="grand">

                  <td className="tl">
                    TOTAL INVOICE VALUE
                  </td>

                  <td className="tr">
                    {fmt(grand)}
                  </td>

                </tr>

                <tr>

                  <td className="tl">
                    Amount in Words
                  </td>

                  <td
                    className="tr"
                    style={{
                      textAlign: "left",
                      fontWeight: "normal",
                    }}
                  >
                    {words}
                  </td>

                </tr>

              </tbody>

            </table>

            {/* =====================================================
                DECLARATION
                ===================================================== */}

            <table className="foot">

              <tbody>

                <tr>

                  <td>

                    <div className="sec-h">
                      DECLARATION
                    </div>

                    <div className="decl">

                      <ol>

                        <li>
                          This invoice is issued for export of
                          services under Letter of Undertaking
                          (LUT) without payment of Integrated Tax.
                        </li>

                        <li>
                          LUT is furnished for FY 2026-27 under
                          FORM GST RFD-11 dated 12/08/2026.
                        </li>

                        <li>
                          The applicable export and GST conditions
                          shall be complied with for the transaction.
                        </li>

                        <li>
                          Payment for the exported service shall be
                          received through permitted banking channels
                          in accordance with applicable requirements.
                        </li>

                        <li>
                          SAC and service description shall be completed
                          according to the actual service supplied.
                        </li>

                      </ol>

                    </div>

                  </td>

                </tr>

              </tbody>

            </table>

            {/* =====================================================
                BANK DETAILS / SIGNATURE
                ===================================================== */}

            <div className="bottom-row">

              <div className="bank-col">

                <div className="sec-h">
                  BANK DETAILS
                </div>

                <div className="kv bank">

                  <div className="bank-name">
                    Kotak Mahindra Bank
                  </div>

                  <div>
                    <span className="k">
                      Account Name:
                    </span>{" "}
                    SKYUP DIGITAL SOLUTIONS LLP
                  </div>

                  <div>
                    <span className="k">
                      Account No:
                    </span>{" "}
                    1019032325
                  </div>

                  <div>
                    <span className="k">
                      IFSC Code:
                    </span>{" "}
                    KKBK0008045
                  </div>

                  <div>
                    <span className="k">
                      Branch:
                    </span>{" "}
                    Sahakara Nagar
                  </div>

                  <div className="note">
                    <span className="k">
                      Note:
                    </span>{" "}
                    Payment Beyond 30 Days Will Attract
                    18% Interest
                  </div>

                </div>

              </div>

              <div className="sig-col">

                <img
                  className="sig-img"
                  src="/images/signature.webp"
                  alt="Signature"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Hidden template captured by generatePDF — same mechanism as ReceiptTemplate */}
      <div style={{ position:"fixed", left:"-9999px", top:0, width:"210mm", pointerEvents:"none", zIndex:-1 }}>
        <div ref={templateRef}>
          {/* showBank=false when multi-page: bank moves to its own page (bankRef) */}
          <ExportInvoiceTemplate data={templateData} showBank={!isMultiPage} />
        </div>
        {/* Page 2: only rendered (and captured) when there are 2+ line items */}
        {isMultiPage && (
          <div ref={bankRef}>
            <ExportInvoiceBankPage />
          </div>
        )}
      </div>

      {/* Hidden re-download template: populated from list data, captured by handleListDownload */}
      {listDownloadData && (
        <div style={{ position:"fixed", left:"-9999px", top:0, width:"210mm", pointerEvents:"none", zIndex:-2 }}>
          <div ref={listRef}>
            <ExportInvoiceTemplate
              data={listDownloadData}
              showBank={(listDownloadData.items || []).length < 2}
            />
          </div>
          {(listDownloadData.items || []).length >= 2 && (
            <div ref={listBankRef}>
              <ExportInvoiceBankPage />
            </div>
          )}
        </div>
      )}

    </div>
  );
}