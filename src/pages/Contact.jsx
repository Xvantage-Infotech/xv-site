import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../animations";
import { Send, MapPin, Mail, Sparkles, ShieldCheck, CheckCircle2, Github, Linkedin, Instagram } from "lucide-react";
import { scaleIn } from "../animations";
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  // Track mouse coordinates for spotlight hover effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll(".service-card, .glass-card");
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

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        "service_8ry16dd", 
        "template_5y5n3c1", 
        formRef.current,
        "uVeDhulb0LxWf3Na3" 
      );
      toast.success("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Xvantage Infotech - Let’s Build Something Great Together</title>
        <meta
          name="description"
          content="Get in touch with Xvantage Infotech for world-class web development, mobile app solutions, and AI/ML-driven innovations. Let’s collaborate to bring your ideas to life."
        />
      </Helmet>

      <div className="noise-bg" />

      <div id="contact" className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
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
              Get In Touch
            </motion.div>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 0.6)}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4"
            >
              Let’s Collaborate &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-500 to-pink-500">
                Build Magic
              </span>
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              className="text-gray-400 text-lg"
            >
              Have a technical requirement or a product roadmap? Let's connect.
            </motion.p>
          </div>

          {/* Contact Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Info & Mission */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Contact Info Card */}
              <motion.div
                variants={fadeIn("up", "tween", 0.3, 0.8)}
                className="glass-card service-card border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <h3 className="text-xl font-bold text-white mb-4">Direct Connection</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-gray-500">Email Address</span>
                      <a href="mailto:hr@xvantageinfotech.com" className="text-sm font-semibold text-white hover:text-purple-300">
                        hr@xvantageinfotech.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-gray-500">Corporate HQ</span>
                      <span className="text-sm font-semibold text-white">Surat, Gujarat, India</span>
                    </div>
                  </div>
                </div>

                {/* Social Networks */}
                <div className="flex gap-4 pt-4 border-t border-white/5">
                  <a href="https://github.com/XvantageInfotech" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-purple-500/20 text-gray-400 hover:text-purple-400 transition-colors border border-white/5">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://www.linkedin.com/company/xvantage-infotech" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-pink-500/20 text-gray-400 hover:text-pink-400 transition-colors border border-white/5">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://www.instagram.com/xvantage_infotech/" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-violet-500/20 text-gray-400 hover:text-violet-400 transition-colors border border-white/5">
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Mission & Vision Bento Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  variants={fadeIn("up", "tween", 0.4, 0.8)}
                  className="glass-card service-card border border-white/10 bg-white/5 backdrop-blur-xl p-6 rounded-3xl relative overflow-hidden"
                >
                  <h4 className="text-lg font-bold text-white mb-2">Our Mission</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    To deliver next-gen digital solutions that empower businesses to scale securely in the modern world.
                  </p>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", "tween", 0.5, 0.8)}
                  className="glass-card service-card border border-white/10 bg-white/5 backdrop-blur-xl p-6 rounded-3xl relative overflow-hidden"
                >
                  <h4 className="text-lg font-bold text-white mb-2">Our Vision</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    To act as a catalyst for digital transformation, marked by our creativity and engineering excellence.
                  </p>
                </motion.div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 0.8)}
              className="lg:col-span-7 glass-card border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-60 h-60 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Project Blueprint</h3>
                    <p className="text-xs text-gray-400">Consult directly with our engineering heads.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                      <span className="text-[10px] font-semibold text-gray-300 uppercase tracking-widest">NDA Secured</span>
                    </div>
                  </div>
                </div>

                <form
                  ref={formRef}
                  onSubmit={sendEmail}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1.5">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Jane Doe"
                        required
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1.5">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="jane@example.com"
                        required
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1.5">Your Message</label>
                    <textarea
                      name="message"
                      placeholder="Detail your technology requirements, project scale, and timelines..."
                      rows={5}
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                    />
                  </div>
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="shimmer-btn relative overflow-hidden w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3.5 rounded-xl font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] flex items-center justify-center gap-2 hover:scale-[1.01] text-sm"
                  >
                    {isLoading ? "Sending blueprint..." : "Send Message"}
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Contact;
