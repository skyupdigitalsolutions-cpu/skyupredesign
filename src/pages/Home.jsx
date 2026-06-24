import JsonLd from "@/components/JsonLd";
import { homeSchemas } from "@/data/homeSchema";
import WhyChooseUs from "@/components/WhyChooseUs";
import DigitalGrowth from "../components/DigitalGrowth";
import HeroSection from "../components/HeroSection";
import ValueProposition from "../components/ValueProposition";
import ProcessSection from "@/components/ProcessSection";
import GoogleReviews from "@/components/GoogleReviews";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
     <JsonLd schemas={homeSchemas} />
      <Header />
      <HeroSection />
      <ValueProposition />
      <DigitalGrowth />
      <WhyChooseUs />
      <ProcessSection />
      <GoogleReviews />
      <FaqSection />
      <Footer />
    </>
  );
}
