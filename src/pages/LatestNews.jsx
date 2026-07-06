import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../animations";
import { Helmet } from "react-helmet-async";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";

const news = [
  {
    title: "Xvantage Infotech Launches New AI/ML Division",
    date: "June 2025",
    category: "Technology",
    excerpt: "We're expanding our capabilities with a dedicated team focused on training custom model architectures and delivering AI-driven solutions for clients.",
  },
  {
    title: "Book My Farm Reaches 250+ Successful Bookings",
    date: "April 2025",
    category: "Milestone",
    excerpt: "Our flagship farmhouse booking platform continues to gain traction, facilitating agricultural rentals and expanding property owner integrations.",
  },
  {
    title: "New Office Opening in Surat, Gujarat",
    date: "February 2025",
    category: "Expansion",
    excerpt: "To support our rapidly growing engineer pool and client scale, we have successfully migrated into a brand-new space configured for structural collaborative design.",
  },
];

function LatestNews() {
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
        <title>Latest News | Xvantage Infotech</title>
        <meta
          name="description"
          content="Stay up to date with the latest news, updates, and milestones from Xvantage Infotech."
        />
      </Helmet>

      <div className="noise-bg" />

      <div className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
        {/* Ambient Glows */}
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[130px] glow-orb" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-pink-900/10 rounded-full blur-[130px] glow-orb" />

        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" 
             style={{ maskImage: "radial-gradient(circle at center, black, transparent 85%)", WebkitMaskImage: "radial-gradient(circle at center, black, transparent 85%)" }}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto relative z-10"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              variants={fadeIn("up", "tween", 0.1, 0.6)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-semibold text-purple-400 tracking-wider uppercase mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Company Bulletin
            </motion.div>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 0.6)}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4"
            >
              Latest{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-500 to-pink-500">
                News
              </span>
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              className="text-gray-400 text-lg"
            >
              Milestones, technical launches, and announcements from our engineering hubs.
            </motion.p>
          </div>

          {/* News List */}
          <div className="space-y-6">
            {news.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", 0.3 + index * 0.15, 0.8)}
                className="service-card border border-white/10 bg-white/5 backdrop-blur-xl p-8 rounded-3xl group relative overflow-hidden flex flex-col sm:flex-row justify-between sm:items-center gap-6"
              >
                {/* Spotlight Background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="space-y-4 relative z-10 max-w-3xl">
                  <div className="flex flex-wrap gap-3 items-center">
                    {/* Category Tag */}
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-widest ${
                      item.category === "Technology" 
                        ? "bg-purple-500/15 border border-purple-500/30 text-purple-400"
                        : item.category === "Milestone"
                        ? "bg-pink-500/15 border border-pink-500/30 text-pink-400"
                        : "bg-blue-500/15 border border-blue-500/30 text-blue-400"
                    }`}>
                      {item.category}
                    </span>
                    
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white transition-colors group-hover:text-purple-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center flex-shrink-0 transition-all duration-300 text-gray-400 group-hover:text-white group-hover:bg-purple-600 group-hover:border-purple-500 relative z-10 self-end sm:self-center">
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default LatestNews;