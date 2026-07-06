import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../animations";
import { Helmet } from "react-helmet-async";
import { teamMember } from "../constants/data";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";

function Team() {
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
        <title>Our Team | Xvantage Infotech</title>
        <meta
          name="description"
          content="Meet the team behind Xvantage Infotech — passionate developers, designers, and engineers building digital solutions."
        />
      </Helmet>

      <div className="noise-bg" />

      <div className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
        {/* Ambient Glows */}
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[130px] glow-orb" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-pink-900/10 rounded-full blur-[130px] glow-orb" />

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
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Creative Minds
            </motion.div>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 0.6)}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4"
            >
              Meet Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-500 to-pink-500">
                Team
              </span>
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              className="text-gray-400 text-lg sm:text-xl"
            >
              The engineers, designers, and visionaries crafting digital logic.
            </motion.p>
          </div>

          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMember.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", 0.3 + index * 0.1, 0.8)}
                className="service-card flex flex-col items-center justify-between p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl group relative overflow-hidden text-center h-[420px]"
              >
                {/* Spotlight Background Effect inside card */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="w-full flex flex-col items-center relative z-10">
                  {/* Photo Container */}
                  <div className="relative mb-6">
                    {/* Glowing Accent Ring */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-500 opacity-20 blur-md group-hover:opacity-50 transition-opacity duration-300" />
                    
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-32 h-32 rounded-2xl object-cover border border-white/15 relative z-10 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-purple-300">{member.name}</h3>
                  <p className="text-xs font-semibold text-purple-400 tracking-wider uppercase mt-1 mb-4">{member.position}</p>
                  <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed px-2">{member.description}</p>
                </div>

                {/* Social Actions (Fades/Slides up on hover) */}
                <div className="flex gap-4 relative z-10 mt-6 pt-4 border-t border-white/5 w-full justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                  <a href="https://github.com/XvantageInfotech" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-purple-500/20 text-gray-400 hover:text-purple-400 transition-colors border border-white/5">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://www.linkedin.com/company/xvantage-infotech" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-pink-500/20 text-gray-400 hover:text-pink-400 transition-colors border border-white/5">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="mailto:hr@xvantageinfotech.com" className="p-2 rounded-lg bg-white/5 hover:bg-violet-500/20 text-gray-400 hover:text-violet-400 transition-colors border border-white/5">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Team;