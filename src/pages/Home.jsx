import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  completeProject,
  featureWork,
  process,
  services,
} from "../constants/data";
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Smartphone, 
  Globe, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  Code2, 
  MousePointerClick,
  Monitor
} from "lucide-react";
import { fadeIn, staggerContainer, scaleIn } from "../animations";
import { Helmet } from "react-helmet-async";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef(null);

  // Track mouse coordinates for premium card spotlight effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll(".service-card, .project-card, .glass-card");
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
        "service_ua2f30o",
        "template_j7re3xr",
        formRef.current,
        "GrDfTG_0G03LKnHTO"
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
        <title>Xvantage Infotech | Innovative Web, Mobile & AI/ML Development Solutions</title>
        <meta
          name="description"
          content="Xvantage Infotech is a leading technology company specializing in web and mobile development, AI/ML-powered solutions, and innovative digital products. Empowering businesses with cutting-edge technology and seamless user experiences."
        />
        <meta
          name="keywords"
          content="Xvantage Infotech, web development, mobile app development, AI solutions, machine learning, software development, IT company, tech services, digital transformation"
        />
        <meta property="og:title" content="Xvantage Infotech - Web, Mobile & AI/ML Experts" />
        <meta
          property="og:description"
          content="Explore how Xvantage Infotech transforms ideas into smart digital solutions through expert web, mobile, and AI/ML development."
        />
        <meta property="og:image" content="/xvantage_logo_copy.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xvantageinfotech.com/" />
      </Helmet>

      {/* Background Noise Layer */}
      <div className="noise-bg" />

      <div id="home" className="min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden">
        
        {/* Glow Orbs */}
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[130px] glow-orb" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-pink-900/10 rounded-full blur-[140px] glow-orb" />
        <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[130px] glow-orb" />

        {/* Hero Section */}
        <div className="relative min-h-screen pt-24 md:pt-32 flex items-center justify-center">
          {/* Tech Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 z-0 mask-image-[radial-gradient(ellipse_at_center,transparent_20%,black)]" 
               style={{ maskImage: "radial-gradient(circle at center, black 40%, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 80%)" }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="lg:col-span-7 text-left space-y-6 sm:space-y-8"
            >
              {/* Trust Badge */}
              <motion.div
                variants={fadeIn("up", "tween", 0.1, 0.6)}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-semibold tracking-wider text-purple-300 uppercase shadow-[0_0_15px_rgba(139,92,246,0.1)]"
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                Next-Gen Digital Craftsmanship
              </motion.div>

              {/* Main Headline */}
              <motion.div variants={fadeIn("up", "tween", 0.2, 0.8)}>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                  Empowering Innovation
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-500 to-pink-500 drop-shadow-[0_2px_15px_rgba(236,72,153,0.2)]">
                    Digital Magic
                  </span>
                </h1>
              </motion.div>

              {/* Sub-description */}
              <motion.p 
                variants={fadeIn("up", "tween", 0.3, 0.8)}
                className="text-lg sm:text-xl text-gray-400 max-w-xl font-normal leading-relaxed"
              >
                We build sleek web apps, high-performance mobile platforms, and advanced AI/ML systems designed to scale your business.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                variants={fadeIn("up", "tween", 0.4, 0.8)}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => navigate("/contact")}
                  className="relative group overflow-hidden px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] flex items-center gap-2 hover:scale-[1.02]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
                <button
                  onClick={() => navigate("/services")}
                  className="px-8 py-4 border border-white/10 text-white bg-white/5 hover:bg-white/10 rounded-xl font-semibold transition-all duration-300 hover:border-white/20 flex items-center gap-2 hover:scale-[1.02] backdrop-blur-sm"
                >
                  Our Services <Sparkles className="w-4 h-4 text-purple-400" />
                </button>
              </motion.div>

              {/* Stats Chips */}
             
            </motion.div>

            {/* Right Column: Stunning Interactive Mockup Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 hidden lg:block relative"
            >
              {/* Visual Showcase Card Container */}
              <div className="relative p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden float-animation w-full max-w-[420px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 opacity-30" />
                
                {/* Header Dots */}
                <div className="flex gap-1.5 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>

                {/* Dashboard mock visual */}
                <div className="space-y-4 relative z-10">
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-purple-400" />
                        <span className="text-xs font-mono text-gray-400">xvantage-ml-core v1.2</span>
                      </div>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                    </div>
                    <div className="space-y-1 font-mono text-[10px] text-gray-500">
                      <p className="text-purple-300">&gt; npm run train --model=vision</p>
                      <p>&gt; epoch: 100/100 - loss: 0.012 - acc: 99.87%</p>
                      <p className="text-green-400">&gt; deployment complete. node active.</p>
                    </div>
                  </div>

                  {/* Stat Graphic inside mockup */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col justify-between">
                      <span className="text-[10px] text-gray-400 uppercase font-semibold">Performance</span>
                      <div className="flex items-end gap-2 mt-2">
                        <span className="text-lg font-bold">99.9%</span>
                        <TrendingUp className="w-4 h-4 text-green-400 mb-1" />
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col justify-between">
                      <span className="text-[10px] text-gray-400 uppercase font-semibold">Integrations</span>
                      <div className="flex gap-1.5 mt-2">
                        <span className="w-6 h-6 rounded bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-[10px] font-bold">API</span>
                        <span className="w-6 h-6 rounded bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-[10px] font-bold">JS</span>
                        <span className="w-6 h-6 rounded bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-[10px] font-bold">Py</span>
                      </div>
                    </div>
                  </div>

                  {/* Active Nodes Visualization */}
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] text-gray-400 uppercase font-semibold block mb-3">Service Grid Nodes</span>
                    <div className="flex justify-between items-center gap-1.5">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="flex-1 h-8 rounded bg-white/5 relative overflow-hidden border border-white/5">
                          <motion.div 
                            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-500 to-pink-500"
                            initial={{ height: "10%" }}
                            animate={{ height: ["20%", "70%", "40%", "90%", "30%", "60%"][i-1] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Ambient glow highlight on the visual card */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-pink-500/20 rounded-full blur-xl" />
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 p-3 rounded-full bg-[#1A1A1A] border border-white/10 shadow-lg flex items-center justify-center text-pink-400">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="absolute bottom-6 -left-6 p-3 rounded-full bg-[#1A1A1A] border border-white/10 shadow-lg flex items-center justify-center text-purple-400">
                <Smartphone className="w-6 h-6" />
              </div>
            </motion.div>

          </div>
        </div>

        {/* Services Bento Grid Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="py-24 sm:py-32 relative z-10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <motion.div
                variants={fadeIn("up", "tween", 0.1, 0.6)}
                className="inline-block px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-semibold text-purple-400 tracking-wider uppercase mb-4"
              >
                Our Expertise
              </motion.div>
              <motion.h2
                variants={fadeIn("up", "tween", 0.2, 0.6)}
                className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4"
              >
                Tailored Solutions for Next-Gen Scale
              </motion.h2>
              <motion.p
                variants={fadeIn("up", "tween", 0.3, 0.6)}
                className="text-gray-400 text-lg"
              >
                We specialize in building fully functional digital solutions with advanced engineering and beautiful visual design.
              </motion.p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Bento Card 1: UI/UX (Span 2 Columns) */}
              <motion.div
                variants={fadeIn("up", "tween", 0.2, 0.8)}
                className="service-card md:col-span-2 border border-white/10 bg-white/5 backdrop-blur-sm p-8 rounded-3xl flex flex-col justify-between h-[360px] group"
              >
                <div className="relative z-10 flex justify-between items-start">
                  <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold text-gray-400">Framer</span>
                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold text-gray-400">Figma</span>
                  </div>
                </div>

                <div className="relative z-10 space-y-3">
                  <h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">UI/UX & Interactive Design</h3>
                  <p className="text-gray-400 max-w-xl text-sm leading-relaxed">
                    Crafting custom interactive flows, visually stunning interfaces, and scalable component libraries. We focus on maximizing user retention and delivering clean web aesthetics.
                  </p>
                </div>

                {/* Decorative wireframe visual inside bento card */}
                <div className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                  <div className="w-80 h-40 border-l border-t border-white rounded-tl-2xl p-4 space-y-3">
                    <div className="h-6 w-3/4 bg-white rounded" />
                    <div className="flex gap-2">
                      <div className="h-12 w-1/3 bg-white rounded" />
                      <div className="h-12 w-1/3 bg-white rounded" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bento Card 2: Brand Identity (Span 1 Column) */}
              <motion.div
                variants={fadeIn("up", "tween", 0.3, 0.8)}
                className="service-card border border-white/10 bg-white/5 backdrop-blur-sm p-8 rounded-3xl flex flex-col justify-between h-[360px] group"
              >
                <div className="p-3.5 rounded-2xl bg-pink-500/10 border border-pink-500/20 text-pink-400 w-fit">
                  <Globe className="w-6 h-6" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold group-hover:text-pink-400 transition-colors">Brand Identity</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Defining the core voice, guidelines, and premium styling cues that make your brand stand out from the competition.
                  </p>
                </div>
              </motion.div>

              {/* Bento Card 3: Mobile Design (Span 1 Column) */}
              <motion.div
                variants={fadeIn("up", "tween", 0.4, 0.8)}
                className="service-card border border-white/10 bg-white/5 backdrop-blur-sm p-8 rounded-3xl flex flex-col justify-between h-[360px] group"
              >
                <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 w-fit">
                  <Smartphone className="w-6 h-6" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">Mobile Engineering</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Crafting highly responsive native Android & iOS mobile applications using React Native and Flutter with native efficiency.
                  </p>
                </div>
              </motion.div>

              {/* Bento Card 4: Web & AI/ML Solutions (Span 2 Columns) */}
              <motion.div
                variants={fadeIn("up", "tween", 0.5, 0.8)}
                className="service-card md:col-span-2 border border-white/10 bg-white/5 backdrop-blur-sm p-8 rounded-3xl flex flex-col justify-between h-[360px] group"
              >
                <div className="relative z-10 flex justify-between items-start">
                  <div className="p-3.5 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div className="flex gap-2 font-mono text-[9px] text-gray-500 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5">
                    <span>Python</span>
                    <span>•</span>
                    <span>Tensorflow</span>
                    <span>•</span>
                    <span>Next.js</span>
                  </div>
                </div>

                <div className="relative z-10 space-y-3">
                  <h3 className="text-2xl font-bold group-hover:text-violet-400 transition-colors">Web Development & AI Integration</h3>
                  <p className="text-gray-400 max-w-xl text-sm leading-relaxed">
                    Developing clean, high-performance web backbones layered with smart AI/ML functionalities. We implement custom analytics dashboards, database microservices, and neural inference components.
                  </p>
                </div>

                {/* Decorative terminal visual inside bento card */}
                <div className="absolute right-6 bottom-6 w-72 bg-black/60 border border-white/5 rounded-xl p-3 font-mono text-[9px] text-gray-500 shadow-xl opacity-20 group-hover:opacity-45 transition-opacity duration-500 pointer-events-none">
                  <div className="flex gap-1 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  </div>
                  <p className="text-violet-300"># initiate custom LLM agent node</p>
                  <p>Initializing agent conversation...</p>
                  <p className="text-green-400">Status: Listening to inputs</p>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.section>

        {/* Process Teaser Section with Dynamic Line progress */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="py-24 sm:py-32 relative z-10 bg-white/[0.02] border-y border-white/5"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <motion.div
                variants={fadeIn("up", "tween", 0.1, 0.6)}
                className="inline-block px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-xs font-semibold text-pink-400 tracking-wider uppercase mb-4"
              >
                Our Method
              </motion.div>
              <motion.h2
                variants={fadeIn("up", "tween", 0.2, 0.6)}
                className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4"
              >
                How We Deliver Value
              </motion.h2>
              <motion.p
                variants={fadeIn("up", "tween", 0.3, 0.6)}
                className="text-gray-400 text-lg"
              >
                From structural wireframing to high-performance build deployment.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "tween", 0.2 + index * 0.15, 0.8)}
                  className="relative p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/15 transition-all duration-300 group shadow-md"
                >
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-purple-500/20 to-transparent mb-4 group-hover:from-purple-500/40 transition-all">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  
                  {/* Neon connecting track */}
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-[40%] right-[-1.5rem] w-12 h-[2px] process-line opacity-30" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Featured Work Preview Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="py-24 sm:py-32 relative z-10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
              <div>
                <motion.div
                  variants={fadeIn("up", "tween", 0.1, 0.6)}
                  className="inline-block px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-semibold text-purple-400 tracking-wider uppercase mb-4"
                >
                  Our Case Studies
                </motion.div>
                <motion.h2
                  variants={fadeIn("up", "tween", 0.2, 0.6)}
                  className="text-3xl sm:text-5xl font-extrabold tracking-tight"
                >
                  Featured Projects
                </motion.h2>
              </div>
              <motion.div
                variants={fadeIn("up", "tween", 0.3, 0.6)}
                className="mt-4 md:mt-0"
              >
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-purple-300 hover:text-white hover:bg-white/10 font-semibold transition-all duration-300 hover:scale-[1.02]"
                >
                  View Full Portfolio <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Grid of Work */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {featureWork.slice(0, 2).map((project, index) => {
                const renderCardContent = (
                  <div className="project-card group relative p-4 rounded-3xl border border-white/5 bg-white/5 hover:border-white/15 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-lg h-full">
                    {/* Glowing card overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 pointer-events-none" />

                    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] w-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-6 space-y-3 relative z-20">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest">
                          {project.title === "Book My Farm" ? "Booking App" : "Admin Suite"}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-purple-600 transition-colors duration-300">
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-extrabold group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.title === "Book My Farm" 
                          ? "A premium booking application offering seamless agricultural properties rental workflow."
                          : "High-performance enterprise monitoring panel controlling system inventory and billing pipelines."}
                      </p>
                    </div>
                  </div>
                );

                return (
                  <motion.div
                    key={index}
                    variants={fadeIn("up", "tween", 0.2 + index * 0.15, 0.8)}
                    className="h-full"
                  >
                    {project.title === "Book My Farm" ? (
                      <Link to="/bookmyfarm" className="block h-full">
                        {renderCardContent}
                      </Link>
                    ) : project.title === "Book My Farm Admin Panel" ? (
                      <Link to="/bmf-adminpanel" className="block h-full">
                        {renderCardContent}
                      </Link>
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        {renderCardContent}
                      </a>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Contact Form Section with Premium UI Card */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="py-24 sm:py-32 relative z-10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
                
                {/* Contact Left Column */}
                <div className="md:col-span-5 space-y-6">
                  <span className="inline-block px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-semibold text-purple-400 tracking-wider uppercase">
                    Connect
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    Let's Build Something Great.
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Have an idea or a product blueprint? Fill out the details and our core engineering team will contact you in under 24 hours.
                  </p>
                  <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <span className="text-xs text-gray-300">NDA Protected Projects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-xs text-gray-300">Direct CTO & Engineer Consulting</span>
                    </div>
                  </div>
                </div>

                {/* Contact Right Column (Form) */}
                <div className="md:col-span-7">
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
                        placeholder="Tell us about your project, timeline, and goals..."
                        rows={4}
                        required
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                      />
                    </div>
                    <button
                      disabled={isLoading}
                      type="submit"
                      className="shimmer-btn relative overflow-hidden w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3.5 rounded-xl font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] flex items-center justify-center gap-2 hover:scale-[1.01] text-sm"
                    >
                      {isLoading ? "Sending details..." : "Send Secure Message"}
                    </button>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </motion.section>

      </div>
    </>
  );
}

export default Home;