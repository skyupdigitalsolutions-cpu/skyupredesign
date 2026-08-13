import { useState } from "react";
import { navigate } from "vike/client/router";

// ── Amount-in-words (currency aware) ─────────────────────────────
function numberToWords(num) {
  const o = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const t = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  const th = (n) => {
    let s = "";
    if (n > 99) { s += o[Math.floor(n / 100)] + " Hundred"; n %= 100; if (n) s += " "; }
    if (n > 19) { s += t[Math.floor(n / 10)]; n %= 10; if (n) s += "-" + o[n]; }
    else if (n > 0) s += o[n];
    return s;
  };
  if (num === 0) return "Zero";
  const sc = ["", "Thousand", "Million", "Billion", "Trillion"];
  let p = [], i = 0;
  while (num > 0) { const c = num % 1000; if (c) p.unshift(th(c) + (sc[i] ? " " + sc[i] : "")); num = Math.floor(num / 1000); i++; }
  return p.join(" ");
}
function amountInWords(v, cur) {
  const m = { USD: ["US Dollar", "US Dollars", "Cent", "Cents"], EUR: ["Euro", "Euros", "Cent", "Cents"], GBP: ["Pound Sterling", "Pounds Sterling", "Penny", "Pence"] };
  const c = m[cur] || ["", "", "", ""];
  const w = Math.floor(Math.abs(v)), f = Math.round((Math.abs(v) - w) * 100);
  let s = numberToWords(w) + ((w === 1 ? c[0] : c[1]) ? " " + (w === 1 ? c[0] : c[1]) : "");
  if (f > 0) s += " and " + numberToWords(f) + ((f === 1 ? c[2] : c[3]) ? " " + (f === 1 ? c[2] : c[3]) : "");
  return s + " Only";
}
const fmt = (n) => n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const INIT = {
  prefix: "EXP", inv_no: "", inv_date: "", currency: "USD", cur_other: "",
  pay_due: "", po_no: "", po_date: "", pay_terms: "", dest: "",
  cust_name: "", addr: "", city_state: "", country: "", taxid: "", email: "",
  lut_fy: "2026-27", lut_date: "12/08/2026", lut_arn: "",
  place_filing: "Bangalore", place_supply: "Outside India",
  nature_supply: "Export of Services", igst: "Nil under LUT",
  svc_desc: "", proj_ref: "", sac: "", qty: "1", rate: "", roundoff: "0",
};

const CSS = `
.ei{position:fixed;inset:0;display:flex;flex-direction:column;background:#eef0f2;font-family:Arial,Helvetica,sans-serif;color:#000;}
.ei *{box-sizing:border-box;}
.ei button{font-family:inherit;}

.ei-toolbar{background:#16232e;color:#fff;padding:10px 18px;display:flex;gap:10px;align-items:center;flex-wrap:wrap;flex:0 0 auto;}
.ei-toolbar .ei-title{margin-right:auto;font-size:13px;font-weight:bold;letter-spacing:.03em;}
.ei-tbtn{font-size:13px;font-weight:bold;cursor:pointer;border:0;border-radius:6px;padding:8px 14px;color:#fff;background:#3a4a57;display:inline-flex;align-items:center;gap:6px;}
.ei-tbtn.back{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.22);}
.ei-tbtn.go{background:#2e5496;}
.ei-tbtn:hover{filter:brightness(1.12);}

.ei-app{flex:1 1 auto;display:flex;min-height:0;}
.ei-form{width:390px;flex:0 0 390px;overflow-y:auto;background:#fff;border-right:1px solid #d5d9dd;padding:16px 18px 40px;}
.ei-form h2{font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:#2e5496;margin:20px 0 8px;padding-bottom:5px;border-bottom:1.5px solid #dce6f3;font-weight:bold;}
.ei-form h2:first-of-type{margin-top:0;}
.ei-fg{margin-bottom:9px;}
.ei-fg label{display:block;font-size:11px;font-weight:bold;color:#3a4a57;margin-bottom:3px;}
.ei-fg input,.ei-fg select,.ei-fg textarea{width:100%;font-family:inherit;font-size:13px;padding:7px 9px;border:1px solid #c7ccd1;border-radius:6px;background:#fff;color:#000;}
.ei-fg input:focus,.ei-fg select:focus,.ei-fg textarea:focus{outline:0;border-color:#2e5496;box-shadow:0 0 0 2px rgba(46,84,150,.15);}
.ei-fg textarea{resize:vertical;min-height:44px;}
.ei-row2{display:flex;gap:8px;}
.ei-row2 .ei-fg{flex:1;}
.ei-hint{font-size:10.5px;color:#8a9099;margin:-4px 0 8px;}
.ei-amt{background:#f4f7fb;border:1px solid #dbe4f0;border-radius:8px;padding:10px 12px;font-size:12.5px;margin-top:6px;}
.ei-amt .r{display:flex;justify-content:space-between;padding:2px 0;}
.ei-amt .r.big{font-weight:bold;color:#2e5496;border-top:1px solid #dbe4f0;margin-top:4px;padding-top:6px;}

.ei-preview{flex:1;overflow:auto;padding:18px;min-width:0;}
.ei .page{position:relative;width:210mm;min-height:297mm;margin:0 auto 18px;background:#fff;padding:12mm 6mm;box-shadow:0 2px 18px rgba(0,0,0,.15);
  background-image:url('/images/watermark.png');background-size:cover;background-position:center;background-repeat:no-repeat;background-origin:border-box;background-clip:border-box;}

.ei .hd{display:table;width:100%;padding-bottom:6pt;}
.ei .hd .l{display:table-cell;vertical-align:middle;width:55%;}
.ei .hd .r{display:table-cell;vertical-align:top;text-align:right;width:45%;}
.ei .logo{height:46pt;display:block;margin-left:auto;margin-bottom:8pt;}
.ei .co-ids{font-size:9pt;line-height:1.7;}
.ei .co-ids b{font-weight:bold;}
.ei .title{font-size:24pt;font-weight:800;line-height:1.08;letter-spacing:.01em;}

.ei table.grid{width:100%;border-collapse:collapse;margin-top:8pt;table-layout:fixed;}
.ei table.grid td{border:0.75pt solid #2b2b2b;vertical-align:top;padding:4pt 6pt;width:25%;height:34pt;word-wrap:break-word;overflow-wrap:anywhere;}
.ei table.grid .pv{max-width:100%;}
.ei .lbl{font-size:8pt;font-weight:bold;display:block;margin-bottom:2pt;}
.ei .val{font-size:8.5pt;line-height:1.6;}

.ei .banner{margin:8pt 0;background:#fed7aa;border:0.75pt solid #2b2b2b;text-align:center;font-size:8.5pt;font-weight:bold;padding:5pt 6pt;}

.ei table.info{width:100%;border-collapse:collapse;table-layout:fixed;}
.ei table.info>tbody>tr>td{border:0.75pt solid #2b2b2b;vertical-align:top;padding:5pt 6pt;width:33.33%;word-wrap:break-word;overflow-wrap:anywhere;}
.ei .sec-h{font-size:8.5pt;font-weight:bold;margin-bottom:3pt;}
.ei .fx{font-size:8.5pt;line-height:1.55;}
.ei .kv{font-size:8.5pt;line-height:1.75;}
.ei .kv .k{font-weight:bold;}
.ei .lut-col .row{line-height:1.65;}

.ei table.items{width:100%;border-collapse:collapse;margin-top:8pt;table-layout:fixed;}
.ei table.items th{background:#fed7aa;border:0.75pt solid #2b2b2b;font-size:8pt;font-weight:bold;padding:4pt 5pt;}
.ei table.items td{border:0.75pt solid #2b2b2b;font-size:8.5pt;padding:4pt 5pt;vertical-align:top;}
.ei .c-sl{width:8%;text-align:center;} .ei .c-sac{width:12%;} .ei .c-qty{width:8%;text-align:center;}
.ei .c-rate{width:15%;} .ei .c-amt{width:16%;}
.ei th.c-rate,.ei th.c-amt,.ei td.c-rate,.ei td.c-amt{text-align:right;}
.ei .desc-fixed{font-size:8.5pt;} .ei .desc-sub{font-size:8pt;margin-top:3pt;font-weight:bold;}
.ei .tot-lbl{text-align:right;font-weight:bold;} .ei .num{text-align:right;}

.ei table.tot{width:100%;border-collapse:collapse;table-layout:fixed;}
.ei table.tot td{border:0.75pt solid #2b2b2b;font-size:8.5pt;padding:5pt 6pt;}
.ei table.tot td.tl{width:60%;font-weight:bold;}
.ei table.tot td.tr{width:40%;text-align:right;}
.ei table.tot tr.grand td{background:#2563eb;color:#fff;font-weight:bold;font-size:9.5pt;border-color:#1e40af;}

.ei table.foot{width:100%;border-collapse:collapse;margin-top:8pt;table-layout:fixed;}
.ei table.foot>tbody>tr>td{border:0.75pt solid #2b2b2b;vertical-align:top;padding:5pt 6pt;width:100%;}
.ei .decl{font-size:8pt;line-height:1.5;}
.ei .decl ol{margin:2pt 0 0;padding-left:14pt;list-style:decimal;list-style-position:outside;}
.ei .decl li{margin-bottom:2pt;}
.ei .bank .bank-name{font-weight:bold;margin-bottom:2pt;}
.ei .bank .note{margin-top:3pt;}

.ei .bottom-row{display:table;width:100%;margin-top:12pt;}
.ei .bank-col{display:table-cell;width:55%;vertical-align:bottom;}
.ei .sig-col{display:table-cell;width:45%;text-align:right;vertical-align:bottom;}
.ei .sig-img{width:230pt;display:inline-block;}

.ei .pv{display:inline-block;min-width:60pt;border-bottom:0.75pt solid #8a9099;line-height:1.5;}
.ei .pt{display:inline;}
.ei .ccode.on{font-weight:bold;text-decoration:underline;}
.ei .otherlbl.on{font-weight:bold;}

@media screen and (max-width:1000px){
  .ei-app{flex-direction:column;}
  .ei-form{width:auto;flex:none;border-right:0;border-bottom:1px solid #d5d9dd;}
  .ei .page{width:100%;padding:6mm 5mm;}
}
@media print{
  @page{size:A4;margin:12mm 6mm;}
  .ei{position:static !important;height:auto !important;display:block !important;background:#fff !important;}
  .ei-toolbar,.ei-form{display:none !important;}
  .ei-app{display:block !important;}
  .ei-preview{overflow:visible !important;padding:0 !important;}
  .ei .page{width:auto !important;min-height:0 !important;margin:0 !important;padding:0 !important;box-shadow:none !important;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
  .ei table.items th,.ei .banner,.ei table.tot tr.grand td{-webkit-print-color-adjust:exact;print-color-adjust:exact;}
}
`;

// Inline blank (underlined) and plain-value helpers for the preview
const PV = ({ children, w }) => <span className="pv" style={w ? { minWidth: w } : undefined}>{children}</span>;
const PT = ({ children }) => <span className="pt">{children}</span>;

export function ExportInvoice() {
  const [f, setF] = useState(INIT);
  const set = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.value }));

  const currencyCode = f.currency === "Other" ? (f.cur_other || "").toUpperCase() : f.currency;
  const qty = parseFloat(f.qty) || 0;
  const rate = parseFloat(f.rate) || 0;
  const amount = qty * rate;
  const roundoff = parseFloat(f.roundoff) || 0;
  const grand = amount + roundoff;
  const words = amountInWords(grand, currencyCode);

  let dd = "", mm = "", yyyy = "2026";
  if (f.inv_date) { const [y, m, d] = f.inv_date.split("-"); dd = d; mm = m; yyyy = y; }

  const addrLines = (f.addr || "").split("\n");
  const addr1 = addrLines[0] || "";
  const addr2 = addrLines.slice(1).join(" ") || "";

  const clear = () => { if (window.confirm("Clear the form?")) setF(INIT); };

  return (
    <div className="ei">
      <style>{CSS}</style>

      <div className="ei-toolbar">
        <button className="ei-tbtn back" onClick={() => navigate("/admin/receipt")}>
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Receipt
        </button>
        <span className="ei-title">Export Service Invoice · build v6</span>
        <button className="ei-tbtn go" onClick={() => window.print()}>Download / Save as PDF</button>
        <button className="ei-tbtn" onClick={clear}>Clear form</button>
      </div>

      <div className="ei-app">
        {/* ---------------- FORM ---------------- */}
        <div className="ei-form">
          <h2>Invoice details</h2>
          <div className="ei-row2">
            <div className="ei-fg"><label>Series</label>
              <select value={f.prefix} onChange={set("prefix")}>
                <option value="EXP">EXP</option>
                <option value="SDS">SDS</option>
              </select>
            </div>
            <div className="ei-fg"><label>Serial No.</label><input value={f.inv_no} onChange={set("inv_no")} placeholder="001" /></div>
          </div>
          <div className="ei-hint">Prints as {f.prefix}/&lt;serial&gt;/2026-27. Switching series keeps the same serial — it doesn't reset.</div>
          <div className="ei-fg"><label>Invoice Date</label><input type="date" value={f.inv_date} onChange={set("inv_date")} /></div>
          <div className="ei-fg"><label>Currency</label>
            <select value={f.currency} onChange={set("currency")}>
              <option>USD</option><option>EUR</option><option>GBP</option><option value="Other">Other…</option>
            </select>
          </div>
          {f.currency === "Other" && (
            <div className="ei-fg"><label>Currency code (Other)</label><input value={f.cur_other} onChange={set("cur_other")} placeholder="e.g. AUD" /></div>
          )}
          <div className="ei-fg"><label>Payment Due</label><input value={f.pay_due} onChange={set("pay_due")} placeholder="e.g. 15 days from invoice" /></div>
          <div className="ei-row2">
            <div className="ei-fg"><label>PO / Work Order No.</label><input value={f.po_no} onChange={set("po_no")} /></div>
            <div className="ei-fg"><label>PO / Order Date</label><input value={f.po_date} onChange={set("po_date")} /></div>
          </div>
          <div className="ei-row2">
            <div className="ei-fg"><label>Payment Terms</label><input value={f.pay_terms} onChange={set("pay_terms")} placeholder="Net 15" /></div>
            <div className="ei-fg"><label>Country of Destination</label><input value={f.dest} onChange={set("dest")} /></div>
          </div>

          <h2>Overseas customer (Bill to)</h2>
          <div className="ei-fg"><label>Customer / Company Name</label><input value={f.cust_name} onChange={set("cust_name")} /></div>
          <div className="ei-fg"><label>Registered Address</label><textarea value={f.addr} onChange={set("addr")} placeholder={"Line 1\nLine 2"} /></div>
          <div className="ei-fg"><label>City / State</label><input value={f.city_state} onChange={set("city_state")} /></div>
          <div className="ei-fg"><label>Country</label><input value={f.country} onChange={set("country")} /></div>
          <div className="ei-fg"><label>Tax ID / VAT / Registration No.</label><input value={f.taxid} onChange={set("taxid")} /></div>
          <div className="ei-fg"><label>Email</label><input type="email" value={f.email} onChange={set("email")} /></div>

          <h2>Export / LUT details</h2>
          <div className="ei-row2">
            <div className="ei-fg"><label>LUT Financial Year</label><input value={f.lut_fy} onChange={set("lut_fy")} /></div>
            <div className="ei-fg"><label>LUT Filing Date</label><input value={f.lut_date} onChange={set("lut_date")} /></div>
          </div>
          <div className="ei-fg"><label>LUT ARN / Reference</label><input value={f.lut_arn} onChange={set("lut_arn")} /></div>
          <div className="ei-row2">
            <div className="ei-fg"><label>Place of Filing</label><input value={f.place_filing} onChange={set("place_filing")} /></div>
            <div className="ei-fg"><label>Place of Supply</label><input value={f.place_supply} onChange={set("place_supply")} /></div>
          </div>
          <div className="ei-row2">
            <div className="ei-fg"><label>Nature of Supply</label><input value={f.nature_supply} onChange={set("nature_supply")} /></div>
            <div className="ei-fg"><label>IGST</label><input value={f.igst} onChange={set("igst")} /></div>
          </div>

          <h2>Service / line item</h2>
          <div className="ei-fg"><label>Service description</label><textarea value={f.svc_desc} onChange={set("svc_desc")} /></div>
          <div className="ei-fg"><label>Project / Contract reference</label><input value={f.proj_ref} onChange={set("proj_ref")} /></div>
          <div className="ei-row2">
            <div className="ei-fg"><label>SAC</label><input value={f.sac} onChange={set("sac")} placeholder="998314" /></div>
            <div className="ei-fg"><label>Qty.</label><input type="number" min="0" step="1" value={f.qty} onChange={set("qty")} /></div>
          </div>
          <div className="ei-row2">
            <div className="ei-fg"><label>Rate</label><input type="number" step="0.01" value={f.rate} onChange={set("rate")} placeholder="0.00" /></div>
            <div className="ei-fg"><label>Round Off</label><input type="number" step="0.01" value={f.roundoff} onChange={set("roundoff")} /></div>
          </div>
          <div className="ei-amt">
            <div className="r"><span>Subtotal</span><span>{fmt(amount)}</span></div>
            <div className="r"><span>Round Off</span><span>{fmt(roundoff)}</span></div>
            <div className="r big"><span>Total ({currencyCode || "—"})</span><span>{fmt(grand)}</span></div>
          </div>
        </div>

        {/* ---------------- PREVIEW ---------------- */}
        <div className="ei-preview">
          <div className="page p1">
            <div className="hd">
              <div className="l">
                <div className="title">EXPORT<br />SERVICE<br />INVOICE</div>
              </div>
              <div className="r">
                <img className="logo" src="/images/rbd-logo.webp" alt="SKYUP Digital Solutions" />
                <div className="co-ids"><b>GSTIN:</b> 29AFUFS6710E1ZJ<br /><b>IEC:</b> AFUFS6710E</div>
              </div>
            </div>

            <table className="grid"><tbody>
              <tr>
                <td><span className="lbl">Invoice No.</span><span className="val">{f.prefix}/<PV w="46pt">{f.inv_no}</PV>/2026-27</span></td>
                <td><span className="lbl">Invoice Date</span><span className="val"><PV w="22pt">{dd}</PV> / <PV w="22pt">{mm}</PV> / <PV w="30pt">{yyyy}</PV></span></td>
                <td><span className="lbl">Currency</span><span className="val">
                  <span className={"ccode" + (f.currency === "USD" ? " on" : "")}>USD</span> / <span className={"ccode" + (f.currency === "EUR" ? " on" : "")}>EUR</span> / <span className={"ccode" + (f.currency === "GBP" ? " on" : "")}>GBP</span> / <span className={"otherlbl" + (f.currency === "Other" ? " on" : "")}>Other:</span> <PT>{f.currency === "Other" ? f.cur_other : ""}</PT>
                </span></td>
                <td><span className="lbl">Payment Due</span><span className="val"><PV>{f.pay_due}</PV></span></td>
              </tr>
              <tr>
                <td><span className="lbl">PO / Work Order No.</span><span className="val"><PV>{f.po_no}</PV></span></td>
                <td><span className="lbl">PO / Order Date</span><span className="val"><PV>{f.po_date}</PV></span></td>
                <td><span className="lbl">Payment Terms</span><span className="val"><PV>{f.pay_terms}</PV></span></td>
                <td><span className="lbl">Country of Destination</span><span className="val"><PV>{f.dest}</PV></span></td>
              </tr>
            </tbody></table>

            <div className="banner">SUPPLY MEANT FOR EXPORT UNDER LETTER OF UNDERTAKING WITHOUT PAYMENT OF INTEGRATED TAX</div>

            <table className="info"><tbody><tr>
              <td>
                <div className="sec-h">SUPPLIER / EXPORTER</div>
                <div className="fx"><b>Skyup Digital Solutions LLP</b><br />No. 23, PARINIDHI, E Block, 14A Main Road,<br />Sahakaranagar, Bengaluru Urban, Karnataka - 560092<br /><b>Nature of Concern:</b> Limited Liability Partnership</div>
              </td>
              <td>
                <div className="sec-h">BILL TO / OVERSEAS CUSTOMER</div>
                <div className="kv">
                  <div><span className="k">Customer / Company Name:</span> <PV>{f.cust_name}</PV></div>
                  <div><span className="k">Registered Address:</span> <PV>{addr1}</PV></div>
                  <div><PV w="120pt">{addr2}</PV></div>
                  <div><span className="k">City / State:</span> <PV>{f.city_state}</PV></div>
                  <div><span className="k">Country:</span> <PV>{f.country}</PV></div>
                  <div><span className="k">Tax ID / VAT / Registration No.:</span> <PV>{f.taxid}</PV></div>
                  <div><span className="k">Email:</span> <PV>{f.email}</PV></div>
                </div>
              </td>
              <td>
                <div className="sec-h">EXPORT / LUT DETAILS</div>
                <div className="kv lut-col">
                  <div className="row"><span className="k">LUT Financial Year:</span> <PT>{f.lut_fy}</PT></div>
                  <div className="row"><span className="k">LUT Filing Date:</span> <PT>{f.lut_date}</PT></div>
                  <div className="row"><span className="k">LUT ARN / Reference:</span></div>
                  <div><PV w="120pt">{f.lut_arn}</PV></div>
                  <div className="row"><span className="k">Place of Filing:</span> <PT>{f.place_filing}</PT></div>
                  <div className="row"><span className="k">Place of Supply:</span> <PT>{f.place_supply}</PT></div>
                  <div className="row"><span className="k">Nature of Supply:</span> <PT>{f.nature_supply}</PT></div>
                  <div className="row"><span className="k">IGST:</span> <PT>{f.igst}</PT></div>
                </div>
              </td>
            </tr></tbody></table>

            <table className="items">
              <thead><tr>
                <th className="c-sl">Sl. No.</th><th>Description of Services</th><th className="c-sac">SAC</th><th className="c-qty">Qty.</th><th className="c-rate">Rate</th><th className="c-amt">Amount</th>
              </tr></thead>
              <tbody>
                <tr>
                  <td className="c-sl">1</td>
                  <td>
                    <div className="desc-fixed">International export of services as per Purchase Order / Work Order.</div>
                    <div className="desc-sub">Service description:</div><div><PV w="200pt">{f.svc_desc}</PV></div>
                    <div className="desc-sub">Project / Contract reference:</div><div><PV w="170pt">{f.proj_ref}</PV></div>
                  </td>
                  <td className="c-sac"><PV w="40pt">{f.sac}</PV></td>
                  <td className="c-qty">{f.qty || "0"}</td>
                  <td className="c-rate num">{fmt(rate)}</td>
                  <td className="c-amt num">{fmt(amount)}</td>
                </tr>
                <tr><td></td><td></td><td></td><td></td><td className="tot-lbl">Subtotal</td><td className="num">{fmt(amount)}</td></tr>
                <tr><td></td><td></td><td></td><td></td><td className="tot-lbl">IGST</td><td className="num">NIL</td></tr>
                <tr><td></td><td></td><td></td><td></td><td className="tot-lbl">Round Off</td><td className="num">{fmt(roundoff)}</td></tr>
              </tbody>
            </table>

            <table className="tot"><tbody>
              <tr><td className="tl">Taxable Value</td><td className="tr">{fmt(amount)}</td></tr>
              <tr><td className="tl">IGST</td><td className="tr">NIL</td></tr>
              <tr className="grand"><td className="tl">TOTAL INVOICE VALUE</td><td className="tr">{fmt(grand)}</td></tr>
              <tr><td className="tl">Amount in Words</td><td className="tr" style={{ textAlign: "left", fontWeight: "normal" }}>{words}</td></tr>
            </tbody></table>

            <table className="foot"><tbody><tr>
              <td>
                <div className="sec-h">DECLARATION</div>
                <div className="decl"><ol>
                  <li>This invoice is issued for export of services under Letter of Undertaking (LUT) without payment of Integrated Tax.</li>
                  <li>LUT is furnished for FY 2026-27 under FORM GST RFD-11 dated 12/08/2026.</li>
                  <li>The applicable export and GST conditions shall be complied with for the transaction.</li>
                  <li>Payment for the exported service shall be received through permitted banking channels in accordance with applicable requirements.</li>
                  <li>SAC and service description shall be completed according to the actual service supplied.</li>
                </ol></div>
              </td>
            </tr></tbody></table>

            <div className="bottom-row">
              <div className="bank-col">
                <div className="sec-h">BANK DETAILS</div>
                <div className="kv bank">
                  <div className="bank-name">Kotak Mahindra Bank</div>
                  <div><span className="k">Account Name:</span> SKYUP DIGITAL SOLUTIONS LLP</div>
                  <div><span className="k">Account No:</span> 1019032325</div>
                  <div><span className="k">IFSC Code:</span> KKBK0008045</div>
                  <div><span className="k">Branch:</span> Sahakara Nagar</div>
                  <div className="note"><span className="k">Note:</span> Payment Beyond 30 Days Will Attract 18% Interest</div>
                </div>
              </div>
              <div className="sig-col">
                <img className="sig-img" src="/images/signature.webp" alt="Signature" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}