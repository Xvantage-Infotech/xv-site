import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../animations";
import { Helmet } from "react-helmet-async";
import { Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "₹25,000",
    period: "one-time",
    features: ["Single page website", "Responsive design", "Basic SEO setup", "2 weeks delivery"],
    highlighted: false,
    tagline: "Perfect for personal sites & landing pages."
  },
  {
    name: "Growth",
    price: "₹75,000",
    period: "one-time",
    features: ["Multi-page website", "Custom UI/UX design", "Advanced SEO", "Contact form integration", "4-6 weeks delivery"],
    highlighted: true,
    tagline: "Ideal for growing startups & businesses."
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "quote",
    features: ["Full-stack web app", "Mobile app development", "AI/ML integration", "Dedicated support", "Flexible timeline"],
    highlighted: false,
    tagline: "Tailored solutions for custom operations."
  },
];

function Pricing() {
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
        <title>Our Pricing | Xvantage Infotech</title>
        <meta
          name="description"
          content="Transparent pricing plans for web development, mobile apps, and custom digital solutions from Xvantage Infotech."
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
          className="max-w-7xl mx-auto relative z-10"
        >
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <motion.div
              variants={fadeIn("up", "tween", 0.1, 0.6)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-semibold text-purple-400 tracking-wider uppercase mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Transparent Pricing
            </motion.div>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 0.6)}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4"
            >
              Straightforward{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-500 to-pink-500">
                Plans
              </span>
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              className="text-gray-400 text-lg sm:text-xl"
            >
              Choose a template that aligns with your scale. Need custom modules? Let's connect.
            </motion.p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", 0.3 + index * 0.15, 0.8)}
                className={`service-card flex flex-col justify-between border rounded-3xl p-8 backdrop-blur-xl relative transition-all duration-300 ${
                  plan.highlighted
                    ? "border-purple-500/50 bg-gradient-to-b from-purple-500/15 via-white/5 to-pink-500/15 shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {/* Popular Tag */}
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full border border-purple-500 bg-purple-600 text-[10px] font-black tracking-widest text-white uppercase shadow-lg shadow-purple-500/50">
                    Most Popular
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold mb-1 text-white">{plan.name}</h3>
                  <p className="text-xs text-gray-500 mb-6">{plan.tagline}</p>
                  
                  <div className="flex items-baseline mb-6 border-b border-white/10 pb-6">
                    <span className="text-4xl sm:text-5xl font-black text-white">{plan.price}</span>
                    {plan.period !== "quote" && (
                      <span className="text-gray-500 text-xs ml-2 uppercase tracking-widest">/ {plan.period}</span>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <div className="w-5 h-5 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-purple-400" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className={`shimmer-btn relative overflow-hidden block text-center w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-[1.01] ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                      : "bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:border-white/20"
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Pricing;