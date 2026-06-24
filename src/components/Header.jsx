import { useState, useEffect } from "react";
import { usePageContext } from "vike-react/usePageContext";
import { Menu, X, ArrowUpRight } from "lucide-react";

// "Contact Us" is intentionally pulled out of the nav and promoted to a CTA button.
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Service", href: "/service" },
  { label: "Works", href: "/works" },
  { label: "Blogs", href: "/blogs" },
];

const socialLinks = [
  {
    icon: "/images/facebook.svg",
    href: "https://www.facebook.com/profile.php?id=61584820941998",
    alt: "Facebook",
  },
  { icon: "/images/Linkedin.svg", href: "https://www.linkedin.com/company/skyup-digital-solutions", alt: "Twitter" },
  {
    icon: "/images/instagram.svg",
    href: "https://www.instagram.com/skyupdigitalsolutions",
    alt: "Instagram",
  },
  // { icon: "/images/youtube.svg", href: "https://youtube.com", alt: "YouTube" },
];

const BRAND_GRADIENT = "bg-[linear-gradient(135deg,#7198FE,#0037CA)]";

export default function Header() {
  const { urlPathname } = usePageContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Subtle elevation once the user scrolls past the top.
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className={`w-full backdrop-blur-xl transition-all duration-300 shadow-md ${
          scrolled
            ? " bg-white/90 shadow-[0_10px_30px_-15px_rgba(17,17,17,0.18)]"
            : " bg-white/70"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3.5 md:px-8 lg:px-12">
          {/* Logo */}
          <a
            href="/"
            className="shrink-0 transition-transform duration-300 hover:scale-[1.03]"
          >
            <img
              src="/images/logo_skyup.svg"
              alt="Logo"
              className="w-[167px] h-[48px] object-contain"
            />
          </a>

          {/* Center: floating pill nav */}
          <nav className="hidden items-center gap-1 rounded-full border border-black/[0.06] bg-[#f6f5f2]/70 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] lg:flex">
            {navLinks.map(({ label, href }) => {
              const isActive = urlPathname === href;
              return (
                <a
                  key={href}
                  href={href}
                  className={`rounded-full px-5 py-2.5 text-[15px] font-medium tracking-wide transition-all duration-300 ${
                    isActive
                      ? `${BRAND_GRADIENT} text-white shadow-[0_6px_16px_-4px_rgba(133,152,254,0.5)]`
                      : "text-gray-600 hover:bg-white hover:text-[#0037CA] hover:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08)]"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </nav>

          {/* Right: socials + divider + CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <div className="flex items-center gap-1">
              {socialLinks.map(({ icon, href, alt }) => (
                <a
                  key={alt}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={alt}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:bg-[#ffeede]"
                >
                  <img
                    src={icon}
                    alt={alt}
                    className="h-[26px] w-[26px]"
                  />
                </a>
              ))}
            </div>

            <span className="h-6 w-px bg-black/10" />

            <a
              href="/contact-us"
              className={`group inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 bg-gradient-to-r from-[#0037CA]/50 to-[#0037CA] shadow-[0_6px_16px_-4px_rgba(133,152,254,0.7)]`}
            >
              Contact Us
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition-colors duration-300 hover:bg-[#fff3e8] lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu (animated accordion) */}
      <div
        className={`overflow-hidden border-b border-black/5 bg-white/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          menuOpen ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-5">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map(({ label, href }) => {
              const isActive = urlPathname === href;
              return (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-[15px] font-medium transition-all duration-300 ${
                    isActive
                      ? `${BRAND_GRADIENT} text-white shadow-[0_6px_16px_-4px_rgba(239,116,44,0.5)]`
                      : "text-gray-700 hover:bg-[#fff3e8] hover:text-[#EF742C]"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </nav>

          <a
            href="/contact-us"
            onClick={() => setMenuOpen(false)}
            className={`mt-4 flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[15px] font-semibold text-white bg-[#0037CA]`}
          >
            Contact Us
            <ArrowUpRight size={18} />
          </a>

          <div className="mt-5 flex items-center justify-center gap-2 border-t border-black/5 pt-5">
            {socialLinks.map(({ icon, href, alt }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={alt}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f6f5f2] transition-all duration-300 hover:scale-110 hover:bg-[#fff3e8]"
              >
                <img
                  src={icon}
                  alt={alt}
                  className="h-[26px] w-[26px] object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
