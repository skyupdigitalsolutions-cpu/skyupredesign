// NOTE: switched from 'html2canvas' to 'html2canvas-pro'.
// Tailwind v4 emits colors as oklch(); the old html2canvas@1.4.1 (2021)
// cannot parse oklch/oklab/lab/lch/color() and throws, which is what
// triggered the "Failed to generate PDF" alert. html2canvas-pro is a
// drop-in fork with the same API that supports these modern color functions.
import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';

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
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
};

export const generatePDF = async (element, invoiceNumber) => {
  if (!element) {
    console.error('Element not found for PDF generation');
    return;
  }

  try {
    // Make sure the logo, signature and fonts are fully ready BEFORE capture.
    await waitForAssets(element);

    // Create canvas from HTML element with better quality
    const canvas = await html2canvas(element, {
      scale: 3,  // Higher scale for better quality
      backgroundColor: '#ffffff',
      logging: false,
      useCORS: true,
      allowTaint: true,
      imageTimeout: 15000, // let slow images finish instead of capturing blank
      x: 0, // Start from x = 0
      y: 0, // Start from y = 0
      width: element.offsetWidth,  // Ensure it matches the container width
      height: element.offsetHeight, // Ensure it matches the container height
    });

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

    // A4 dimensions in mm
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
    
    // Save PDF
    pdf.save(filename);
    
    console.log(`PDF generated successfully: ${filename}`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Failed to generate PDF. Please try again.');
  }
};
