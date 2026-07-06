import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../animations";
import { Helmet } from "react-helmet-async";
import { FileText, Calendar, Sparkles } from "lucide-react";

function Terms() {
  // Track mouse coordinates for spotlight effect
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
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Xvantage Infotech</title>
        <meta
          name="description"
          content="Read the terms and conditions for using Xvantage Infotech's services and website."
        />
      </Helmet>

      <div className="noise-bg" />

      <div className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
        {/* Ambient Glows */}
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[130px] glow-orb" />
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-pink-900/10 rounded-full blur-[130px] glow-orb" />

        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" 
             style={{ maskImage: "radial-gradient(circle at center, black, transparent 85%)", WebkitMaskImage: "radial-gradient(circle at center, black, transparent 85%)" }}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto relative z-10"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              variants={fadeIn("up", "tween", 0.1, 0.6)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-semibold text-purple-400 tracking-wider uppercase mb-4"
            >
              <FileText className="w-3.5 h-3.5" />
              Service Guidelines
            </motion.div>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 0.6)}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4"
            >
              Terms &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-500 to-pink-500">
                Conditions
              </span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              className="inline-flex items-center gap-1.5 text-xs text-gray-500 uppercase tracking-widest"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            </motion.div>
          </div>

          {/* Terms Document Box */}
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 0.8)}
            className="glass-card service-card border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-12 rounded-3xl space-y-10 text-gray-300 leading-relaxed shadow-2xl relative"
          >
            <section className="relative pl-6 border-l border-purple-500/40">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
              <h2 className="text-2xl font-bold mb-3 text-white">Acceptance of Terms</h2>
              <p className="text-sm sm:text-base text-gray-400">
                By entering or accessing this website, you verify and agree to be bound by these
                Terms & Conditions. If you do not accept these rules, please discontinue use.
              </p>
            </section>

            <section className="relative pl-6 border-l border-pink-500/40">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
              <h2 className="text-2xl font-bold mb-3 text-white">Use of Services</h2>
              <p className="text-sm sm:text-base text-gray-400">
                Our services are provided solely for lawful commercial and personal purposes. You agree not to distribute malicious software, spam, or bypass structural API access gates.
              </p>
            </section>

            <section className="relative pl-6 border-l border-violet-500/40">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
              <h2 className="text-2xl font-bold mb-3 text-white">Intellectual Property</h2>
              <p className="text-sm sm:text-base text-gray-400">
                All source code, asset files, templates, animations, graphics, logos, and written logs on this site are the
                proprietary intellectual property of Xvantage Infotech, protected under global copyright treaties.
              </p>
            </section>

            <section className="relative pl-6 border-l border-white/20">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-gray-500" />
              <h2 className="text-2xl font-bold mb-3 text-white">Limitation of Liability</h2>
              <p className="text-sm sm:text-base text-gray-400">
                Xvantage Infotech is not responsible for any indirect operational losses, database latency, server downtimes, 
                or consequential damages arising from the use or integration of our custom frameworks.
              </p>
            </section>

            <section className="relative pl-6 border-l border-white/10">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-gray-600" />
              <h2 className="text-2xl font-bold mb-3 text-white">Contact Us</h2>
              <p className="text-sm sm:text-base text-gray-400">
                Questions or structural revisions regarding these terms? Contact us directly:{" "}
                <a href="mailto:hr@xvantageinfotech.com" className="text-purple-400 hover:text-purple-300 font-semibold underline decoration-purple-500/30 underline-offset-4">
                  hr@xvantageinfotech.com
                </a>
                .
              </p>
            </section>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Terms;