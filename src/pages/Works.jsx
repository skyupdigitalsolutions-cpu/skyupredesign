import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudies from "@/components/works/CaseStudies";
import HeroWork from "@/components/works/HeroWork";
import JsonLd from "@/components/JsonLd";
import { workSchemas } from "@/data/workSchema";

export default function Work() {
  return (
    <div>
      <JsonLd schemas={workSchemas} />
      <Header />
    <HeroWork/>
      {/* Hero */}
      <section className="w-full bg-white font-['Poppins']">
        <div className="mx-auto max-w-7xl px-5 pt-8 sm:px-8 ">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-[13px]">
            <ol className="flex items-center gap-2 ">
              <li>
                <a
                  href="/"
                  className="no-underline transition hover:text-[#0037CA]"
                >
                  Home
                </a>
              </li>
              <li aria-hidden="true" className="text-slate-400">
                /
              </li>
              <li aria-current="page" className="font-semibold text-[#0037CA]">
                Work
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Filterable case-study grid */}
      <CaseStudies />

      <Footer
        ctaProps={{
          title: "Ready to Grow Faster?",
          description:
            "Serving companies of every scale across Bangalore. Connect with us to start the conversation.",
          primaryLabel: "Get Started",
         secondaryLabel: "Whatsapp Us",
         secondaryHref: "https://wa.me/918867867775",
        }}
      />
    </div>
  );
}
