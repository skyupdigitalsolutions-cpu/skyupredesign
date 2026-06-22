import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";

const smoothSpring = { type: "spring", stiffness: 80, damping: 18, mass: 0.9 };
const staggerWrap = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: smoothSpring },
};

export default function PrivacyPolicy() {
  return (
    <div className="font-poppins">
      <Header />

      {/* Hero */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerWrap}
        className="
          min-h-[200px] sm:min-h-[266px]
          flex flex-col items-center justify-center
          bg-gradient-to-b from-[#00164F] to-[#0032B5]
          px-4
        "
      >
        <motion.div variants={fadeUp}>
          <h1
            className="
            text-center text-white font-bold
            text-[22px] sm:text-[32px] lg:text-[64px]
            max-w-[900px]
            leading-snug
          "
          >
            Privacy Policy
          </h1>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerWrap}
        className="px-4 py-10 sm:p-20 lg:p-20"
      >
        <div className="mx-auto max-w-5xl text-[#111827]">
          {/* Introduction */}
          <h2 className="font-bold text-[18px] sm:text-[24px]">Introduction</h2>
          <p className="mt-3 text-[14px] sm:text-[16px] leading-relaxed text-[#374151]">
            Skyup Digital Solutions ("we") respect your privacy and are committed
            to protecting the personal information you share with us through our
            website and services. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you visit our
            website or interact with us.
          </p>

          {/* Information We Collect */}
          <h2 className="mt-8 font-bold text-[18px] sm:text-[24px]">
            Information We Collect
          </h2>
          <p className="mt-3 text-[14px] sm:text-[16px] text-[#374151]">
            We may collect the following information:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-[14px] sm:text-[16px] text-[#374151]">
            <li>
              Name, email address, phone number, company name, and any other
              details you provide through contact forms, enquiry forms, or
              service requests.
            </li>
            <li>
              Technical information such as IP address, browser type, device
              information, operating system, pages visited, and time spent on the
              website.
            </li>
            <li>
              Cookies and similar tracking data used to improve website
              performance and user experience.
            </li>
          </ul>

          {/* How We Use */}
          <h2 className="mt-8 font-bold text-[18px] sm:text-[24px]">
            How We Use Your Information
          </h2>
          <p className="mt-3 text-[14px] sm:text-[16px] text-[#374151]">
            We use the information we collect to:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-[14px] sm:text-[16px] text-[#374151]">
            <li>Respond to your inquiries and provide customer support.</li>
            <li>Deliver, improve, and personalise our services.</li>
            <li>
              Communicate with you about updates, offers, or service-related
              information.
            </li>
            <li>Analyse website usage and improve performance.</li>
            <li>
              Maintain security, prevent fraud, and ensure proper website
              operation.
            </li>
          </ul>

          {/* Cookies */}
          <h2 className="mt-8 font-bold text-[18px] sm:text-[24px]">
            Cookies and Tracking
          </h2>
          <p className="mt-3 text-[14px] sm:text-[16px] leading-relaxed text-[#374151]">
            We use cookies and similar technologies to enhance your browsing
            experience, understand website traffic, and improve our services. You
            can manage or disable cookies through your browser settings, although
            some parts of the website may not function properly if cookies are
            disabled.
          </p>

          {/* Sharing */}
          <h2 className="mt-8 font-bold text-[18px] sm:text-[24px]">
            Sharing Your Information
          </h2>
          <p className="mt-3 text-[14px] sm:text-[16px] leading-relaxed text-[#374151]">
            We do not sell your personal information. We may share your
            information only with:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-[14px] sm:text-[16px] text-[#374151]">
            <li>
              Trusted service providers who help us operate our website, manage
              communications, or deliver services.
            </li>
            <li>
              Legal authorities, when required by law or to protect our rights,
              property, or safety.
            </li>
            <li>
              A third party in connection with a business transfer, merger,
              acquisition, or restructuring.
            </li>
          </ul>

          {/* Retention */}
          <h2 className="mt-8 font-bold text-[18px] sm:text-[24px]">
            Data Retention
          </h2>
          <p className="mt-3 text-[14px] sm:text-[16px] leading-relaxed text-[#374151]">
            We retain personal information only for as long as necessary to
            fulfil the purposes described in this Privacy Policy, unless a longer
            retention period is required by law, regulation, or legitimate
            business needs.
          </p>

          {/* Security */}
          <h2 className="mt-8 font-bold text-[18px] sm:text-[24px]">
            Data Security
          </h2>
          <p className="mt-3 text-[14px] sm:text-[16px] leading-relaxed text-[#374151]">
            We take reasonable administrative, technical, and organizational
            measures to protect your personal information from unauthorised
            access, loss, misuse, alteration, or disclosure. However, no method
            of transmission over the internet or electronic storage is completely
            secure, and we cannot guarantee absolute security.
          </p>

          {/* Rights */}
          <h2 className="mt-8 font-bold text-[18px] sm:text-[24px]">
            Your Rights
          </h2>
          <p className="mt-3 text-[14px] sm:text-[16px] text-[#374151]">
            Depending on applicable law, you may have the right to:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-[14px] sm:text-[16px] text-[#374151]">
            <li>Access the personal information we hold about you.</li>
            <li>
              Request correction or deletion of your personal information.
            </li>
            <li>Withdraw consent for marketing communications.</li>
            <li>
              Object to or restrict certain processing of your personal
              information.
            </li>
          </ul>
          <p className="mt-3 text-[14px] sm:text-[16px] leading-relaxed text-[#374151]">
            To exercise these rights, contact us using the details below.
          </p>

          {/* Links */}
          <h2 className="mt-8 font-bold text-[18px] sm:text-[24px]">
            Third-Party Links
          </h2>
          <p className="mt-3 text-[14px] sm:text-[16px] leading-relaxed text-[#374151]">
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices, content, or security of those
            external websites. We encourage you to review their privacy policies
            before sharing any information.
          </p>

          {/* Children */}
          <h2 className="mt-8 font-bold text-[18px] sm:text-[24px]">
            Children’s Privacy
          </h2>
          <p className="mt-3 text-[14px] sm:text-[16px] leading-relaxed text-[#374151]">
            Our website and services are not intended for children under the age
            of 13, and we do not knowingly collect personal information from
            children. If we learn that we have collected information from a child
            without appropriate consent, we will take steps to delete it.
          </p>

          {/* Changes */}
          <h2 className="mt-8 font-bold text-[18px] sm:text-[24px]">
            Changes to This Policy
          </h2>
          <p className="mt-3 text-[14px] sm:text-[16px] leading-relaxed text-[#374151]">
            We may update this Privacy Policy from time to time. Any changes will
            be posted on this page with a revised effective date. We encourage you
            to review this page periodically to stay informed about how we protect
            your information.
          </p>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}