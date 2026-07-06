import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "../animations";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";

const faqs = [
  {
    question: "What services does Xvantage Infotech offer?",
    answer:
      "We deliver high-end UI/UX design, modular web development, reactive mobile apps (iOS & Android), and smart AI/ML algorithms designed to scale your operations.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Depending on the build architecture and feature depth, most projects are completed within 4 to 12 weeks from strategy alignment to final deployment.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we provide ongoing support, security monitoring, infrastructure updates, and feature scaling packages tailored to your user growth.",
  },
  {
    question: "How can I get a quote?",
    answer:
      "Simply reach out via our contact gateway with your project brief, and our engineering team will compile a detailed design proposal and roadmap.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  // Track mouse coordinates for spotlight effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll(".service-card");
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
        <title>FAQ's | Xvantage Infotech</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about Xvantage Infotech's services, process, and support."
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
              <Sparkles className="w-3.5 h-3.5" />
              Information Portal
            </motion.div>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 0.6)}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4"
            >
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-500 to-pink-500">
                Questions
              </span>
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              className="text-gray-400 text-lg"
            >
              Quick insights on our methodology, architecture, and development cycles.
            </motion.p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "tween", 0.3 + index * 0.1, 0.8)}
                  className={`service-card border backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? "border-purple-500/30 bg-white/[0.06] shadow-[0_0_20px_rgba(139,92,246,0.1)]" 
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left relative z-10"
                  >
                    <div className="flex items-center gap-4">
                      <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${isOpen ? "text-purple-400" : "text-gray-500"}`} />
                      <span className={`text-base sm:text-lg font-bold transition-colors ${isOpen ? "text-purple-300" : "text-white"}`}>{faq.question}</span>
                    </div>
                    <div className={`p-1.5 rounded-lg border transition-all duration-300 ${isOpen ? "border-purple-500/30 bg-purple-500/20 text-purple-400 rotate-180" : "border-white/10 bg-white/5 text-gray-400"}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10"
                      >
                        <div className="px-6 pb-6 pt-2 pl-14 text-sm sm:text-base text-gray-400 leading-relaxed border-t border-white/5 mt-1">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default FAQ;