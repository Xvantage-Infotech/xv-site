
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../animations";
import { Helmet } from "react-helmet-async";
import {
  ShieldCheck,
  Calendar,
  Lock,
  Database,
  Cookie,
  Users,
  Mail,
  FileText,
  Globe,
  UserCheck,
  Server,
  AlertTriangle,
  RefreshCw,
  Eye,
  CreditCard,
  Link2,
  Scale,
} from "lucide-react";

function PrivacyPolicy() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll(".glass-card");

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Xvantage Infotech</title>

        <meta
          name="description"
          content="Read Xvantage Infotech's comprehensive Privacy Policy to understand how we collect, use, protect, retain, and disclose information."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href="https://xvantageinfotech.com/privacy-policy"
        />
      </Helmet>

      <div className="noise-bg" />

      <div className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

        {/* Ambient Glows */}
        <div className="absolute top-[5%] left-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[130px] glow-orb pointer-events-none" />

        <div className="absolute top-[35%] right-[-10%] w-[500px] h-[500px] bg-fuchsia-900/10 rounded-full blur-[130px] glow-orb pointer-events-none" />

        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-pink-900/10 rounded-full blur-[130px] glow-orb pointer-events-none" />

        {/* Background Grid */}
        <div
          className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"
          style={{
            maskImage:
              "radial-gradient(circle at center, black, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black, transparent 85%)",
          }}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto relative z-10"
        >

          {/* =====================================================
              HEADER
          ====================================================== */}

          <div className="text-center mb-16">

            <motion.div
              variants={fadeIn("up", "tween", 0.1, 0.6)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-semibold text-purple-400 tracking-wider uppercase mb-4"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Legal & Trust
            </motion.div>

            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 0.6)}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-5"
            >
              Privacy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-500 to-pink-500">
                Policy
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn("up", "tween", 0.25, 0.6)}
              className="max-w-2xl mx-auto text-sm sm:text-base text-gray-400 leading-relaxed mb-5"
            >
              Your privacy matters to us. This Privacy Policy explains how
              Xvantage Infotech collects, uses, stores, protects, and handles
              information when you visit our website, communicate with us,
              or use our services.
            </motion.p>

            <motion.div
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              className="inline-flex items-center gap-1.5 text-xs text-gray-500 uppercase tracking-widest"
            >
              <Calendar className="w-3.5 h-3.5" />

              <span>
                Last updated: {lastUpdated}
              </span>
            </motion.div>

          </div>

          {/* =====================================================
              PRIVACY DOCUMENT
          ====================================================== */}

          <motion.div
            variants={fadeIn("up", "tween", 0.4, 0.8)}
            className="glass-card service-card border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-10 lg:p-14 rounded-3xl space-y-12 text-gray-300 leading-relaxed shadow-2xl relative"
          >

            {/* =================================================
                1. INTRODUCTION
            ================================================== */}

            <PolicySection
              icon={<ShieldCheck />}
              color="purple"
              number="01"
              title="Introduction"
            >
              <p>
                Xvantage Infotech ("Xvantage Infotech", "we", "our", or "us")
                respects your privacy and is committed to protecting the
                information entrusted to us.
              </p>

              <p className="mt-4">
                This Privacy Policy explains how we collect, use, process,
                store, disclose, and protect information relating to visitors
                of our website, prospective customers, customers, business
                partners, and individuals who communicate with us.
              </p>

              <p className="mt-4">
                Xvantage Infotech provides technology and digital services
                including UI/UX design, web development, mobile application
                development, branding and digital solutions, as well as
                technology-related development services.
              </p>

              <p className="mt-4">
                By accessing our website or voluntarily providing information
                to us, you acknowledge that you have read and understood this
                Privacy Policy.
              </p>
            </PolicySection>


            {/* =================================================
                2. SCOPE
            ================================================== */}

            <PolicySection
              icon={<Eye />}
              color="pink"
              number="02"
              title="Scope of This Privacy Policy"
            >
              <p>
                This Privacy Policy applies to information collected through
                our website, contact forms, email communications, project
                discussions, business communications, and other legitimate
                interactions between you and Xvantage Infotech.
              </p>

              <p className="mt-4">
                It may also apply to information received from clients or
                business partners in connection with providing services,
                subject to the terms of the applicable service agreement,
                project agreement, non-disclosure agreement, or other
                contractual arrangement.
              </p>

              <p className="mt-4">
                This Policy does not necessarily apply to third-party websites,
                applications, platforms, or services that may be accessible
                through links on our website.
              </p>
            </PolicySection>


            {/* =================================================
                3. INFORMATION WE COLLECT
            ================================================== */}

            <PolicySection
              icon={<Database />}
              color="violet"
              number="03"
              title="Information We Collect"
            >
              <p>
                Depending on how you interact with us, we may collect
                different categories of information.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6 mb-3">
                3.1 Information You Provide Directly
              </h3>

              <p>
                When you contact us, request a service, submit an enquiry,
                discuss a project, or otherwise communicate with us, you may
                voluntarily provide information such as:
              </p>

              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Name and business name</li>
                <li>Email address</li>
                <li>Telephone or mobile number</li>
                <li>Company or organization information</li>
                <li>Job title or professional information</li>
                <li>Project requirements and business requirements</li>
                <li>Messages, enquiries, and correspondence</li>
                <li>Files, documents, images, designs, or other materials you choose to provide</li>
                <li>Any other information you voluntarily submit to us</li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6 mb-3">
                3.2 Technical and Usage Information
              </h3>

              <p>
                When you visit our website, certain technical information may
                be automatically collected by the website infrastructure,
                hosting provider, security systems, analytics tools, or other
                technologies used to operate the website.
              </p>

              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device type</li>
                <li>Operating system</li>
                <li>Screen resolution</li>
                <li>Pages visited</li>
                <li>Approximate access time and date</li>
                <li>Referring website or page</li>
                <li>General interaction and usage information</li>
              </ul>

              <p className="mt-4">
                We use such information primarily for website operation,
                security, diagnostics, performance monitoring, and improving
                our services.
              </p>
            </PolicySection>


            {/* =================================================
                4. PROJECT INFORMATION
            ================================================== */}

            <PolicySection
              icon={<FileText />}
              color="purple"
              number="04"
              title="Project and Business Information"
            >
              <p>
                If you engage Xvantage Infotech for development, design,
                consulting, maintenance, or other services, you may provide
                information relating to your business, product, application,
                customers, users, systems, infrastructure, or project.
              </p>

              <p className="mt-4">
                Such information may include technical documentation,
                specifications, source code, credentials, designs, business
                processes, databases, API information, project files, and
                other materials necessary to deliver the agreed services.
              </p>

              <p className="mt-4">
                We will handle such information in accordance with applicable
                contractual obligations and use it only as reasonably
                necessary to perform the requested services, maintain our
                business relationship, comply with legal obligations, or
                protect our legitimate interests.
              </p>

              <div className="mt-5 p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5">
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />

                  <p className="text-sm text-gray-400">
                    Please do not send passwords, private encryption keys,
                    payment card details, or other highly sensitive
                    credentials through ordinary website forms or unsecured
                    email unless specifically requested through an agreed
                    secure process.
                  </p>
                </div>
              </div>
            </PolicySection>


            {/* =================================================
                5. HOW WE USE INFORMATION
            ================================================== */}

            <PolicySection
              icon={<Server />}
              color="pink"
              number="05"
              title="How We Use Your Information"
            >
              <p>
                We may use information for legitimate business and operational
                purposes, including:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Responding to enquiries and messages</li>
                <li>Understanding your project requirements</li>
                <li>Preparing proposals and estimates</li>
                <li>Delivering requested products and services</li>
                <li>Managing client relationships</li>
                <li>Providing customer and technical support</li>
                <li>Communicating about ongoing projects</li>
                <li>Maintaining project records</li>
                <li>Improving website functionality and user experience</li>
                <li>Monitoring website performance</li>
                <li>Detecting and preventing fraud or abuse</li>
                <li>Protecting our systems and information</li>
                <li>Complying with applicable laws and regulations</li>
                <li>Enforcing contractual rights and obligations</li>
                <li>Protecting our legal rights and business interests</li>
              </ul>
            </PolicySection>


            {/* =================================================
                6. COMMUNICATIONS
            ================================================== */}

            <PolicySection
              icon={<Mail />}
              color="violet"
              number="06"
              title="Communications"
            >
              <p>
                If you contact us by email, telephone, contact form, or another
                communication channel, we may retain the communication and
                related contact information to respond to your request and
                maintain appropriate business records.
              </p>

              <p className="mt-4">
                We may use your contact information to communicate with you
                regarding enquiries, proposals, projects, support matters,
                contractual matters, security matters, or other communications
                reasonably related to our business relationship.
              </p>

              <p className="mt-4">
                We do not intend to use your personal information for unrelated
                promotional communications without an appropriate lawful basis
                or where applicable, your consent.
              </p>
            </PolicySection>


            {/* =================================================
                7. COOKIES
            ================================================== */}

            <PolicySection
              icon={<Cookie />}
              color="purple"
              number="07"
              title="Cookies and Similar Technologies"
            >
              <p>
                Our website may use cookies and similar technologies to support
                essential website functionality, security, performance,
                analytics, and user experience.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6 mb-3">
                Cookies may be used for purposes such as:
              </h3>

              <ul className="list-disc pl-6 space-y-2">
                <li>Keeping the website functioning correctly</li>
                <li>Remembering technical preferences</li>
                <li>Understanding website usage</li>
                <li>Improving website performance</li>
                <li>Detecting security issues</li>
              </ul>

              <p className="mt-4">
                You can generally control or disable cookies through your
                browser settings. However, disabling certain cookies may affect
                website functionality.
              </p>
            </PolicySection>


            {/* =================================================
                8. ANALYTICS
            ================================================== */}

            <PolicySection
              icon={<Database />}
              color="pink"
              number="08"
              title="Analytics and Performance Monitoring"
            >
              <p>
                We may use analytics or website performance technologies to
                understand how visitors interact with our website and to
                improve its functionality, content, performance, and security.
              </p>

              <p className="mt-4">
                Where third-party analytics providers are used, those providers
                may process technical and usage information in accordance with
                their own privacy policies and terms.
              </p>

              <p className="mt-4">
                We recommend reviewing the privacy documentation of any
                third-party analytics provider used on the website for more
                information about how that provider handles information.
              </p>
            </PolicySection>


            {/* =================================================
                9. PAYMENT INFORMATION
            ================================================== */}

            <PolicySection
              icon={<CreditCard />}
              color="violet"
              number="09"
              title="Payments and Financial Information"
            >
              <p>
                If payments are required for our services, payment processing
                may be handled through appropriate payment processors,
                financial institutions, banks, gateways, or other authorized
                service providers.
              </p>

              <p className="mt-4">
                Unless specifically required for legitimate business or legal
                purposes, we do not intend to store complete payment card
                information such as full card numbers or CVV codes on our own
                systems.
              </p>

              <p className="mt-4">
                Payment providers may collect and process payment information
                according to their own privacy policies and terms.
              </p>
            </PolicySection>


            {/* =================================================
                10. DATA SHARING
            ================================================== */}

            <PolicySection
              icon={<Users />}
              color="purple"
              number="10"
              title="How We Share Information"
            >
              <p>
                We do not sell or rent your personal information to third-party
                data brokers.
              </p>

              <p className="mt-4">
                Information may nevertheless be disclosed where reasonably
                necessary for legitimate business purposes, including to:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Employees and authorized team members</li>
                <li>Contractors and professional service providers</li>
                <li>Hosting and infrastructure providers</li>
                <li>Payment processors</li>
                <li>Analytics or technology service providers</li>
                <li>Legal, accounting, or professional advisors</li>
                <li>Government authorities where legally required</li>
              </ul>

              <p className="mt-4">
                Where third parties process information on our behalf, we seek
                to use appropriate contractual, technical, or organizational
                safeguards appropriate to the circumstances.
              </p>
            </PolicySection>


            {/* =================================================
                11. LEGAL DISCLOSURES
            ================================================== */}

            <PolicySection
              icon={<Scale />}
              color="pink"
              number="11"
              title="Legal and Regulatory Disclosures"
            >
              <p>
                We may disclose information where we reasonably believe that
                disclosure is necessary to comply with applicable law, legal
                process, court orders, governmental requests, regulatory
                requirements, or other lawful obligations.
              </p>

              <p className="mt-4">
                We may also disclose information where necessary to establish,
                exercise, or defend legal rights; investigate suspected fraud
                or abuse; protect the security of our systems; or protect the
                rights, safety, and property of Xvantage Infotech, our clients,
                users, employees, or other parties.
              </p>
            </PolicySection>


            {/* =================================================
                12. DATA RETENTION
            ================================================== */}

            <PolicySection
              icon={<Database />}
              color="violet"
              number="12"
              title="Data Retention"
            >
              <p>
                We retain information only for as long as reasonably necessary
                for the purposes described in this Privacy Policy, including
                providing services, maintaining business records, resolving
                disputes, enforcing agreements, preventing fraud, and complying
                with legal, accounting, tax, or regulatory requirements.
              </p>

              <p className="mt-4">
                The specific retention period may vary depending on the type of
                information, the purpose for which it was collected, our
                contractual obligations, and applicable legal requirements.
              </p>

              <p className="mt-4">
                When information is no longer required, we may securely delete,
                anonymize, or otherwise dispose of it, subject to applicable
                retention requirements.
              </p>
            </PolicySection>


            {/* =================================================
                13. DATA SECURITY
            ================================================== */}

            <PolicySection
              icon={<Lock />}
              color="purple"
              number="13"
              title="Data Security"
            >
              <p>
                We take reasonable technical and organizational measures to
                protect information against unauthorized access, alteration,
                disclosure, loss, misuse, or destruction.
              </p>

              <p className="mt-4">
                Depending on the nature of the information and processing
                activity, security measures may include access controls,
                authentication mechanisms, secure development practices,
                encryption where appropriate, monitoring, backups, and
                restricted access to confidential information.
              </p>

              <p className="mt-4">
                However, no method of transmission, storage, or electronic
                security can be guaranteed to be completely secure. Therefore,
                while we take reasonable precautions, we cannot guarantee
                absolute security.
              </p>
            </PolicySection>


            {/* =================================================
                14. THIRD PARTY SERVICES
            ================================================== */}

            <PolicySection
              icon={<Link2 />}
              color="pink"
              number="14"
              title="Third-Party Services and Links"
            >
              <p>
                Our website or services may contain links to websites,
                applications, APIs, platforms, or services operated by third
                parties.
              </p>

              <p className="mt-4">
                Third-party services may have their own privacy policies,
                security practices, and terms. Xvantage Infotech is not
                responsible for the privacy practices or content of third-party
                services that we do not control.
              </p>

              <p className="mt-4">
                We encourage you to review the privacy policies of third-party
                services before providing them with personal information.
              </p>
            </PolicySection>


            {/* =================================================
                15. INTERNATIONAL DATA
            ================================================== */}

            <PolicySection
              icon={<Globe />}
              color="violet"
              number="15"
              title="International Data Processing"
            >
              <p>
                Depending on the technology providers, hosting infrastructure,
                business partners, or service providers used by Xvantage
                Infotech, information may be processed or stored in locations
                outside your state, region, or country.
              </p>

              <p className="mt-4">
                Where applicable, we take reasonable steps to ensure that
                information is handled in accordance with applicable legal
                requirements and appropriate contractual or technical
                safeguards.
              </p>
            </PolicySection>


            {/* =================================================
                16. USER RIGHTS
            ================================================== */}

            <PolicySection
              icon={<UserCheck />}
              color="purple"
              number="16"
              title="Your Privacy Rights"
            >
              <p>
                Depending on your location and applicable law, you may have
                certain rights concerning your personal information.
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Request access to personal information we hold about you</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of information where legally applicable</li>
                <li>Request restriction of certain processing</li>
                <li>Object to certain processing activities</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Request information about how your data is processed</li>
              </ul>

              <p className="mt-4">
                These rights may be subject to legal limitations and
                exceptions. We may also need to verify your identity before
                processing certain requests.
              </p>

              <p className="mt-4">
                To submit a privacy-related request, contact us using the
                contact information provided at the end of this Policy.
              </p>
            </PolicySection>


            {/* =================================================
                17. CHILDREN
            ================================================== */}

            <PolicySection
              icon={<UserCheck />}
              color="pink"
              number="17"
              title="Children's Privacy"
            >
              <p>
                Our professional technology and business services are not
                specifically directed toward children.
              </p>

              <p className="mt-4">
                We do not knowingly seek to collect personal information from
                children through our website. If you believe that a child has
                provided personal information to us without appropriate
                authorization, please contact us so that we can review the
                matter and take appropriate action where required.
              </p>
            </PolicySection>


            {/* =================================================
                18. BUSINESS INFORMATION
            ================================================== */}

            <PolicySection
              icon={<FileText />}
              color="violet"
              number="18"
              title="Confidential Business Information"
            >
              <p>
                During the course of a project, clients may provide confidential
                business, technical, financial, strategic, or operational
                information.
              </p>

              <p className="mt-4">
                We recognize that such information may have commercial value
                and will handle it in accordance with applicable contractual
                confidentiality obligations, including non-disclosure
                agreements where applicable.
              </p>

              <p className="mt-4">
                Client information will not knowingly be used for unrelated
                purposes outside the scope of the agreed services, except where
                required or permitted by applicable law or contractual terms.
              </p>
            </PolicySection>


            {/* =================================================
                19. DATA BREACH / SECURITY INCIDENT
            ================================================== */}

            <PolicySection
              icon={<AlertTriangle />}
              color="pink"
              number="19"
              title="Security Incidents"
            >
              <p>
                In the event that we become aware of a security incident that
                materially affects personal information under our control, we
                may investigate the incident and take reasonable steps to
                contain, mitigate, and remediate the issue.
              </p>

              <p className="mt-4">
                Where required by applicable law, we may notify affected
                individuals, clients, regulators, or other relevant parties in
                accordance with applicable legal requirements.
              </p>
            </PolicySection>


            {/* =================================================
                20. DO NOT TRACK
            ================================================== */}

            <PolicySection
              icon={<Eye />}
              color="purple"
              number="20"
              title="Do Not Track Signals"
            >
              <p>
                Some web browsers provide a "Do Not Track" feature that sends a
                signal indicating that a user does not wish to be tracked.
              </p>

              <p className="mt-4">
                Because there is currently no universally accepted technical
                standard for interpreting such signals, our website may not
                respond to every browser-based Do Not Track signal in the same
                manner.
              </p>
            </PolicySection>


            {/* =================================================
                21. POLICY CHANGES
            ================================================== */}

            <PolicySection
              icon={<RefreshCw />}
              color="violet"
              number="21"
              title="Changes to This Privacy Policy"
            >
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our services, technology, legal requirements,
                security practices, or business operations.
              </p>

              <p className="mt-4">
                When changes are made, the updated version will be published on
                this page and the "Last Updated" date will be revised.
              </p>

              <p className="mt-4">
                We encourage you to periodically review this page to remain
                informed about how we handle information.
              </p>
            </PolicySection>


            {/* =================================================
                22. GOVERNING LAW
            ================================================== */}

            <PolicySection
              icon={<Scale />}
              color="pink"
              number="22"
              title="Governing Law and Jurisdiction"
            >
              <p>
                This Privacy Policy shall be interpreted in accordance with
                applicable laws and regulations governing Xvantage Infotech and
                its activities.
              </p>

              <p className="mt-4">
                Where legally applicable, disputes relating to this Privacy
                Policy may be subject to the jurisdiction of the appropriate
                courts having authority over Xvantage Infotech's place of
                business.
              </p>
            </PolicySection>


            {/* =================================================
                23. CONTACT
            ================================================== */}

            <PolicySection
              icon={<Mail />}
              color="purple"
              number="23"
              title="Contact Us"
            >
              <p>
                If you have questions, concerns, requests, or complaints
                regarding this Privacy Policy or the way we handle information,
                you may contact us.
              </p>

              <div className="mt-6 space-y-3 text-sm sm:text-base">

                <div>
                  <span className="text-gray-500">Company:</span>{" "}
                  <span className="text-white font-semibold">
                    Xvantage Infotech
                  </span>
                </div>

                <div>
                  <span className="text-gray-500">Email:</span>{" "}
                  <a
                    href="mailto:hr@xvantageinfotech.com"
                    className="text-purple-400 hover:text-purple-300 font-semibold underline decoration-purple-500/30 underline-offset-4"
                  >
                    hr@xvantageinfotech.com
                  </a>
                </div>

                <div>
                  <span className="text-gray-500">Phone:</span>{" "}
                  <a
                    href="tel:+919409150636"
                    className="text-purple-400 hover:text-purple-300 font-semibold"
                  >
                    +91 94091 50636
                  </a>
                </div>

                <div>
                  <span className="text-gray-500">Address:</span>{" "}
                  <span className="text-gray-300">
                    Platinum Point, 319, Opp. CNG Pump,
                    Sudama Chowk, Mota Varachha,
                    Surat, Gujarat, India
                  </span>
                </div>

              </div>

              <div className="mt-8 p-5 rounded-2xl border border-purple-500/20 bg-purple-500/5">

                <div className="flex gap-3">

                  <ShieldCheck className="w-5 h-5 text-purple-400 shrink-0 mt-1" />

                  <p className="text-sm text-gray-400">
                    When contacting us regarding a privacy request, please
                    provide sufficient information for us to understand your
                    request. We may request additional information when
                    necessary to verify your identity and protect against
                    unauthorized requests.
                  </p>

                </div>

              </div>
            </PolicySection>


            {/* =================================================
                FINAL NOTICE
            ================================================== */}

            <div className="pt-8 border-t border-white/10">

              <p className="text-xs sm:text-sm text-gray-500 text-center leading-relaxed">
                This Privacy Policy is intended to describe Xvantage
                Infotech's general privacy practices. Specific projects,
                products, applications, contracts, or services may be governed
                by additional privacy notices, agreements, terms, or data
                processing provisions where applicable.
              </p>

            </div>

          </motion.div>

        </motion.div>
      </div>
    </>
  );
}


/* =============================================================
   REUSABLE POLICY SECTION
============================================================= */

function PolicySection({
  icon,
  color = "purple",
  number,
  title,
  children,
}) {
  const colorClasses = {
    purple: {
      border: "border-purple-500/40",
      dot: "bg-purple-500",
      icon: "text-purple-400",
      shadow:
        "shadow-[0_0_10px_rgba(168,85,247,0.8)]",
    },

    pink: {
      border: "border-pink-500/40",
      dot: "bg-pink-500",
      icon: "text-pink-400",
      shadow:
        "shadow-[0_0_10px_rgba(236,72,153,0.8)]",
    },

    violet: {
      border: "border-violet-500/40",
      dot: "bg-violet-500",
      icon: "text-violet-400",
      shadow:
        "shadow-[0_0_10px_rgba(139,92,246,0.8)]",
    },
  };

  const theme = colorClasses[color] || colorClasses.purple;

  return (
    <section
      className={`relative pl-6 sm:pl-8 border-l ${theme.border}`}
    >

      {/* Timeline Dot */}
      <div
        className={`absolute -left-[7px] top-1.5 w-3 h-3 rounded-full ${theme.dot} ${theme.shadow}`}
      />

      {/* Section Number */}
      <div
        className={`flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-[0.2em] ${theme.icon}`}
      >
        <span>
          {number}
        </span>

        <span className="opacity-40">
          /
        </span>

        <span className="flex items-center gap-1.5">
          {React.cloneElement(icon, {
            className: "w-3.5 h-3.5",
          })}

          Privacy
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold mb-5 text-white tracking-tight">
        {title}
      </h2>

      <div className="text-sm sm:text-base text-gray-400 leading-8">
        {children}
      </div>

    </section>
  );
}

export default PrivacyPolicy;