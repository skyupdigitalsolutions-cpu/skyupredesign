// pages/+Head.jsx
import { usePageContext } from "vike-react/usePageContext";

export default function Head() {
  const { config } = usePageContext();
  const description = config?.metaDescription || "";

  return (
    <>
      {description && <meta name="description" content={description} />}
      {config?.keywords && <meta name="keywords" content={config.keywords} />}

      {/* Preconnect — keep these */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* Non-blocking font load */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
      />

      {/* Icons — point at the file that actually exists in /public */}
      <link rel="icon" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/favicon.svg" />
      <link rel="icon" type="image/svg+xml" href="/public/images/skyup_logo1.svg" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#0037CA" />
      <meta name="robots" content="index, follow" />

      {/* GTM — loads on DOMContentLoaded, no artificial delay.
          The previous `load + 2500ms` delay could take several seconds on
          media-heavy pages, and any visitor who submitted the contact form
          and closed/left the tab before that timer fired would never get
          their crm_lead event delivered — GTM simply hadn't loaded yet. */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function initGTM() {
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P9ZNGSFR');
          })();
        `,
        }}
      />
    </>
  );
}
