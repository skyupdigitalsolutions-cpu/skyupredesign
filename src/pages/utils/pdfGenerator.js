// NOTE: switched from 'html2canvas' to 'html2canvas-pro'.
// Tailwind v4 emits colors as oklch(); the old html2canvas@1.4.1 (2021)
// cannot parse oklch/oklab/lab/lch/color() and throws, which is what
// triggered the "Failed to generate PDF" alert. html2canvas-pro is a
// drop-in fork with the same API that supports these modern color functions.
import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';

// ─────────────────────────────────────────────────────────────────────────────
// Safari detection. Safari's html2canvas behaviour differs from Chrome in two
// ways that broke the invoice PDF: (1) it silently caps very large canvases,
// and (2) its image-decode timing is stricter, so it can snapshot before the
// logo / signature / watermark have painted. We special-case it below.
// (Chrome, Edge, Firefox, and the Chromium/Firefox iOS shells are excluded.)
// ─────────────────────────────────────────────────────────────────────────────
const isSafari = () => {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent;
  return /^((?!chrome|android|crios|fxios|edg|edgios).)*safari/i.test(ua);
};

// Collect every image URL the element references — both <img src> and any CSS
// background-image (the invoice watermark is set as an inline background).
const collectImageUrls = (element) => {
  const urls = new Set();
  element.querySelectorAll('img').forEach((img) => {
    const src = img.getAttribute('src');
    if (src) {
      try { urls.add(new URL(src, window.location.href).href); } catch { /* ignore */ }
    }
  });
  const nodes = [element, ...element.querySelectorAll('*')];
  nodes.forEach((el) => {
    const bg = el.style && el.style.backgroundImage;
    if (bg && bg.includes('url(')) {
      const m = bg.match(/url\(["']?(.*?)["']?\)/);
      if (m && m[1]) {
        try { urls.add(new URL(m[1], window.location.href).href); } catch { /* ignore */ }
      }
    }
  });
  return [...urls];
};

// Fetch a same-origin asset and turn it into a base64 data URL.
const toDataUrl = async (url) => {
  const res = await fetch(url, { cache: 'force-cache' });
  const blob = await res.blob();
  return await new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve(fr.result);
    fr.onerror = reject;
    fr.readAsDataURL(blob);
  });
};

// Build { originalUrl -> dataUrl } for every image so we can inline them into
// the cloned DOM before capture. Inlining removes the network/decoding race
// that made Safari drop the logo, signature, or watermark from the snapshot.
const buildImageMap = async (element) => {
  const map = {};
  await Promise.all(
    collectImageUrls(element).map(async (u) => {
      try { map[u] = await toDataUrl(u); } catch { /* leave original src as-is */ }
    })
  );
  return map;
};

// A pair of animation frames — long enough for the browser to finish a paint.
const nextPaint = () =>
  new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

// Wait until every <img> inside the element has actually loaded AND decoded,
// and until web fonts are ready, before we snapshot it.
//
// This is what fixes the intermittent "broken logo / messed-up layout" PDFs:
// the old code just waited a fixed 300ms and then captured, so on a slower
// load the logo/signature .webp images (or the fonts) hadn't finished yet and
// html2canvas snapshotted a half-rendered receipt. Now we wait for the real
// load events instead of guessing with a timer.
const waitForAssets = async (element) => {
  // 1) Fonts — prevents text reflow/structure shifting mid-capture.
  try {
    if (document?.fonts?.ready) await document.fonts.ready;
  } catch { /* ignore — fonts API not critical */ }

  // 2) Images — wait for each to be fully loaded, then decoded.
  const imgs = Array.from(element.querySelectorAll('img'));
  await Promise.all(
    imgs.map((img) => {
      if (img.complete && img.naturalWidth > 0) {
        return img.decode ? img.decode().catch(() => {}) : Promise.resolve();
      }
      return new Promise((resolve) => {
        const done = () =>
          (img.decode ? img.decode().catch(() => {}) : Promise.resolve()).then(resolve);
        img.addEventListener('load', done, { once: true });
        img.addEventListener('error', () => resolve(), { once: true });
      });
    })
  );

  // 3) Two animation frames so the browser has painted the final layout.
  await nextPaint();
};

// Single html2canvas capture with all the cross-browser settings applied.
// Kept as a helper so we can run cheap "warm-up" passes and the real pass
// through exactly the same code path.
const renderCanvas = (element, scale, imageMap, width, height) =>
  html2canvas(element, {
    scale,
    backgroundColor: '#ffffff',
    logging: false,
    useCORS: true,
    allowTaint: true,
    imageTimeout: 15000, // let slow images finish instead of capturing blank
    x: 0,
    y: 0,
    scrollX: 0,
    scrollY: 0,
    width,
    height,
    windowWidth: width,   // force the clone to lay out at the invoice's own
    windowHeight: height, // width so the layout can't reflow to the viewport
    onclone: (clonedDoc) => {
      // Swap every <img src> to its inlined data URL.
      clonedDoc.querySelectorAll('img').forEach((img) => {
        const src = img.getAttribute('src');
        if (!src) return;
        try {
          const abs = new URL(src, window.location.href).href;
          if (imageMap[abs]) img.setAttribute('src', imageMap[abs]);
        } catch { /* ignore */ }
      });
      // Swap any inline background-image (the watermark) to its data URL.
      clonedDoc.querySelectorAll('*').forEach((el) => {
        const bg = el.style && el.style.backgroundImage;
        if (bg && bg.includes('url(')) {
          const m = bg.match(/url\(["']?(.*?)["']?\)/);
          if (m && m[1]) {
            try {
              const abs = new URL(m[1], window.location.href).href;
              if (imageMap[abs]) el.style.backgroundImage = `url("${imageMap[abs]}")`;
            } catch { /* ignore */ }
          }
        }
      });
    },
  });

// Free a discarded warm-up canvas so we don't hold Retina-sized bitmaps around.
const disposeCanvas = (canvas) => {
  try { canvas.width = 0; canvas.height = 0; } catch { /* ignore */ }
};

// Trigger the file download from a Blob via a synthetic <a download> click.
// This is more reliable than jsPDF's default save() across browsers and, on
// Safari, behaves the same way Chrome does for same-origin blob URLs.
const downloadBlob = (blob, filename) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
};

export const generatePDF = async (element, invoiceNumber) => {
  if (!element) {
    console.error('Element not found for PDF generation');
    return;
  }

  try {
    // Make sure the logo, signature and fonts are fully ready BEFORE capture.
    await waitForAssets(element);

    // Pre-inline all images as data URLs so nothing has to be fetched *during*
    // the html2canvas capture — a big reason the first PDF came out broken.
    const imageMap = await buildImageMap(element);

    const width = element.offsetWidth;
    const height = element.offsetHeight;

    // Keep Chrome at scale 3 (unchanged output). On Safari, cap the scale so
    // the canvas stays under Safari's silent area limit — otherwise it returns
    // a truncated/blank capture. Structure/layout is identical either way;
    // only the raster sharpness changes very slightly on Safari.
    let scale = 3;
    if (isSafari()) {
      const MAX_AREA = 4.8e6; // safe even for constrained iOS/iPad Safari
      const fit = Math.sqrt(MAX_AREA / Math.max(1, width * height));
      scale = Math.max(1.5, Math.min(2.5, fit));
    }

    // ── Warm-up passes ───────────────────────────────────────────────────────
    // On high-DPI Retina displays (e.g. the M4 Pro's Liquid Retina XDR), the
    // VERY FIRST html2canvas pass on a freshly-mounted invoice occasionally
    // snapshots before the layout has fully settled and every inlined image has
    // decoded — producing a warped first PDF that "fixes itself" only on the
    // 2nd/3rd click. We run a couple of cheap throwaway passes at scale 1 here
    // to force that settling up front, so the REAL capture below is correct on
    // the user's very first click. Low-DPI screens settle instantly, so this is
    // a no-op there other than a brief delay.
    for (let i = 0; i < 2; i++) {
      try {
        const warm = await renderCanvas(element, 1, imageMap, width, height);
        disposeCanvas(warm);
        await nextPaint();
      } catch { /* warm-up failures never block the real capture */ }
    }

    // ── Real capture ─────────────────────────────────────────────────────────
    const canvas = await renderCanvas(element, scale, imageMap, width, height);

    // Get image data from canvas
    const imgData = canvas.toDataURL('image/png');

    // Create PDF in A4 size
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      compress: true,
    });

    // Page placement — kept exactly as before so the Chrome output is unchanged.
    const pdfWidth = 271;
    const pdfHeight = 316;

    // Add image to PDF - fit exactly to A4
    pdf.addImage(
      imgData,
      'PNG',
      0,  // x position
      0,  // y position
      pdfWidth,  // width - full A4 width
      pdfHeight  // height - full A4 height
    );

    // Generate filename
    const filename = `Invoice_${invoiceNumber.replace(/\//g, '_')}.pdf`;

    // Save PDF via a Blob download (consistent across Chrome & Safari).
    try {
      const blob = pdf.output('blob');
      downloadBlob(blob, filename);
    } catch {
      // Fallback to jsPDF's built-in save if Blob output is unavailable.
      pdf.save(filename);
    }

    console.log(`PDF generated successfully: ${filename}`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Failed to generate PDF. Please try again.');
  }
};
