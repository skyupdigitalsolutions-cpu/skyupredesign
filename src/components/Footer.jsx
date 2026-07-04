import React from "react";
import CtaSection from "@/components/CtaSection";

const BRAND = "#0037CA";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Works", href: "/works" },
  { label: "Contact us", href: "/contact-us" },
];

const Service_Links = [
  { label: "SEO", href: "/services/search-engine-optimization" },
  { label: "Social Media Marketing", href: "/services/social-media-marketing" },
  { label: "Performance Marketing", href: "/services/performance-marketing" },
  { label: "Email Marketing", href: "/services/email-marketing" },
  { label: "AI Automation", href: "/services/ai-automation" },
  { label: "Machine Learning", href: "/services/machine-learning" },
  { label: "UI UX Design", href: "/services/ui-ux-design" },
  { label: "Graphic Design", href: "/services/graphic-design" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "CRM", href: "/services/crm" },
];

const LEGAL_LINKS = [
  { label: "Terms of service", href: "/termsconditions" },
  { label: "Privacy policy", href: "/privacy-policy" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", src: "/images/facebook.svg" },
  { label: "Instagram", href: "#", src: "/images/instagram.svg" },
  { label: "LinkedIn", href: "#", src: "/images/Linkedin.svg" },
  ];

function BrandMark() {
  return (
    <img
      src="/images/skyup-logo.webp"
      alt="SkyUp logo"
      className="h-auto w-full"
    />
  );
}

/* Heading with a short cobalt accent bar underneath. */
function ColHeading({ children }) {
  return (
    <h3 className="relative inline-block pb-3 text-xs font-semibold uppercase tracking-[0.14em] ">
      {children}
      <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-[#0037CA] via-[#87b6f4] to-[#ffb950]" />
    </h3>
  );
}

/* Links that slide + reveal an arrow on hover. */
function LinkColumn({ heading, links }) {
  return (
    <div>
      <ColHeading>{heading}</ColHeading>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="group inline-flex items-center text-[15px]  transition-colors duration-200 hover:text-[#0037CA]"
            >
              <span className="w-1 -translate-x-1 overflow-hidden text-[#0037CA] opacity-0 transition-all duration-200 group-hover:w-4 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                {l.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialRow({ links }) {
  return (
    <div>
      <ColHeading>Follow us</ColHeading>
      <div className="mt-5 flex flex-wrap gap-5">
        {links.map(({ label, href, icon: Icon, src }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="flex hover:shadow-lg rounded-full"
          >
            {Icon ? (
              <Icon className="h-[18px] w-[18px]" />
            ) : (
              <img
                src={src}
                alt=""
                className="h-[28px] w-[28px] object-contain"
              />
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

/* Contact info as brand-tinted icon chips. */
function ContactChip({ icon: Icon, label, value, href }) {
  const inner = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0037CA]/10 text-[#0037CA]">
        <Icon className="h-[18px] w-[18px]" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold uppercase tracking-wider">
          {label}
        </span>
        <span className="block text-[14px] font-medium transition-colors group-hover:text-[#0037CA]">
          {value}
        </span>
      </span>
    </>
  );
  return href ? (
    <a href={href} className="group flex items-start gap-3">
      {inner}
    </a>
  ) : (
    <div className="flex items-start gap-3">{inner}</div>
  );
}

export default function Footer({
  logo = <BrandMark />,
  addressLines = [
    "2nd Floor, No 23, 14A, Dasarahalli Main Rd,",
    " E Block, Sahakar Nagar, Byatarayanapura",
    "Bengaluru, Karnataka 560092",
  ],
  phone = "+91 8867867775",
  email = "contact@skyupdigitalsolutions.com",
  tagline = "We help brands empower with result-oriented digital marketing, creative branding, and smart automation turning visibility into real business growth.",
  quickLinks = QUICK_LINKS,
  socialLinks = SOCIAL_LINKS,
  legalLinks = LEGAL_LINKS,
  copyright = `© ${new Date().getFullYear()} SKYUP Digital Solutions. All rights reserved.`,
  ctaProps = {},
}) {
  const scrollTop = () =>
    typeof window !== "undefined" &&
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer>
      <div className="relative z-20">
        <CtaSection
          {...ctaProps}
          className={`!bg-transparent ${ctaProps.className ?? ""}`}
        />
      </div>

      <div className="relative z-10">
        <div className="relative -mt-16 overflow-hidden rounded-t-[2rem] border-t border-slate-100 bg-white px-6 pb-10 pt-28 shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.50)] sm:-mt-24 sm:pt-36 lg:px-[120px]">
          <div className="relative mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-32 lg:grid-cols-12 pt-[50px]">
              {/* brand + contact */}
              <div className="lg:col-span-4">
                <div className="w-[180px]">{logo}</div>
                <p className="mt-5 max-w-xs text-[15px] leading-relaxed">
                  {tagline}
                </p>

                <div className="mt-8 space-y-4">
                  <ContactChip
                    icon={PinIcon}
                    label="Visit us"
                    value={addressLines}
                  />
                  <ContactChip
                    icon={PhoneIcon}
                    label="Call us"
                    value={phone}
                    href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                  />
                  <ContactChip
                    icon={MailIcon}
                    label="Email us"
                    value={email}
                    href={`mailto:${email}`}
                  />
                </div>
              </div>

              {/* link columns */}
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
                <LinkColumn heading="Quick links" links={quickLinks} />
                <LinkColumn heading="Services" links={Service_Links} />
                <SocialRow links={socialLinks} />
              </div>
            </div>

            {/* bottom bar */}
            <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-slate-200/70 pt-8 sm:flex-row">
              <p className="text-sm ">{copyright}</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  {legalLinks.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm transition-colors hover:text-[#0037CA]"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={scrollTop}
                  aria-label="Back to top"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:-translate-y-0.5 hover:border-transparent hover:bg-[#0037CA] hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 19V5M5 12l7-7 7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---- Contact icons ---- */
function PinIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1116 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function PhoneIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.69 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0122 16.92z" />
    </svg>
  );
}
function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

/* ---- Social icons ---- */
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4H16V5.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2H7.7V14h2.4v7h3.4z" />
    </svg>
  );
}
function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 6.5a1.94 1.94 0 11-3.88 0 1.94 1.94 0 013.88 0zM3.4 8.9h3.1V21H3.4V8.9zM9 8.9h2.97v1.65h.04c.41-.78 1.42-1.6 2.93-1.6 3.13 0 3.71 2.06 3.71 4.74V21h-3.1v-5.36c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.83V21H9V8.9z" />
    </svg>
  );
}
function YouTubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 7.2a2.5 2.5 0 00-1.76-1.77C18.27 5 12 5 12 5s-6.27 0-7.84.43A2.5 2.5 0 002.4 7.2 26 26 0 002 12a26 26 0 00.4 4.8 2.5 2.5 0 001.76 1.77C5.73 19 12 19 12 19s6.27 0 7.84-.43a2.5 2.5 0 001.76-1.77A26 26 0 0022 12a26 26 0 00-.4-4.8zM10 15V9l5.2 3-5.2 3z" />
    </svg>
  );
}
