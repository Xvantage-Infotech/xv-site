import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../animations";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, Calendar, Sparkles } from "lucide-react";

function PrivacyPolicy() {
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
        <title>Privacy Policy | Xvantage Infotech</title>
        <meta
          name="description"
          content="Read Xvantage Infotech's privacy policy to understand how we collect, use, and protect your data."
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
              <ShieldCheck className="w-3.5 h-3.5" />
              Legal & Trust
            </motion.div>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 0.6)}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4"
            >
              Privacy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-500 to-pink-500">
                Policy
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

          {/* Privacy Document Box */}
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 0.8)}
            className="glass-card service-card border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-12 rounded-3xl space-y-10 text-gray-300 leading-relaxed shadow-2xl relative"
          >
            <section className="relative pl-6 border-l border-purple-500/40">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
              <h2 className="text-2xl font-bold mb-3 text-white">Information We Collect</h2>
              <p className="text-sm sm:text-base text-gray-400">
                We collect information you provide directly to us, such as your name, email
                address, and message contents when utilizing our direct contact channels.
              </p>
            </section>

            <section className="relative pl-6 border-l border-pink-500/40">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
              <h2 className="text-2xl font-bold mb-3 text-white">How We Use Your Information</h2>
              <p className="text-sm sm:text-base text-gray-400">
                We use this collected data to respond to your project briefs, manage customer relations, 
                and update our core developer pipeline services. We do not sell or lease user information to third-party brokers.
              </p>
            </section>

            <section className="relative pl-6 border-l border-violet-500/40">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
              <h2 className="text-2xl font-bold mb-3 text-white">Data Security</h2>
              <p className="text-sm sm:text-base text-gray-400">
                We implement robust security frameworks to prevent unauthorized access, theft, loss, 
                or alteration of data. Communication via our client gateway is encrypted.
              </p>
            </section>

            <section className="relative pl-6 border-l border-white/20">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-gray-500" />
              <h2 className="text-2xl font-bold mb-3 text-white">Contact Us</h2>
              <p className="text-sm sm:text-base text-gray-400">
                If you have questions about this privacy protocol, feel free to contact us at:{" "}
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

export default PrivacyPolicy;