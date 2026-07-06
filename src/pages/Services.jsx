import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../animations";
import { Helmet } from "react-helmet-async";
import { 
  Figma, 
  Code, 
  Smartphone, 
  Globe, 
  Check, 
  Sparkles, 
  Terminal, 
  Layout, 
  TrendingUp, 
  Smartphone as PhoneIcon,
  Monitor
} from "lucide-react";

const detailedServices = [
  {
    title: "UI/UX & Interactive Design",
    focus: "Visual Architecture & Design Systems",
    icon: <Figma className="w-6 h-6 text-purple-400" />,
    description: "Crafting custom design languages, user journeys, interactive wireframes, and scalable design tokens focused on user retention.",
    features: [
      "Interactive High-Fidelity Prototypes",
      "Modular Figma Design Systems",
      "Responsive Layout Strategy",
      "User Experience & Usability Audits"
    ],
    tech: ["Figma", "Framer", "Illustrator", "Tailwind CSS"],
    visual: (
      <div className="w-full h-32 bg-black/40 rounded-xl border border-white/5 p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-purple-500/20 transition-colors">
        <div className="flex justify-between items-center">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
          </div>
          <Layout className="w-3.5 h-3.5 text-purple-500/60" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="h-10 bg-white/5 rounded border border-white/5 flex flex-col justify-center items-center">
            <span className="w-3 h-1.5 bg-purple-500/40 rounded mb-1" />
            <span className="w-5 h-1 bg-white/10 rounded" />
          </div>
          <div className="h-10 bg-white/5 rounded border border-white/5 flex flex-col justify-center items-center">
            <span className="w-4 h-1.5 bg-pink-500/40 rounded mb-1" />
            <span className="w-5 h-1 bg-white/10 rounded" />
          </div>
          <div className="h-10 bg-white/5 rounded border border-white/5 flex flex-col justify-center items-center">
            <span className="w-3 h-1.5 bg-blue-500/40 rounded mb-1" />
            <span className="w-5 h-1 bg-white/10 rounded" />
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Web App Development",
    focus: "Modular Full-Stack Engineering",
    icon: <Code className="w-6 h-6 text-pink-400" />,
    description: "Developing clean, modular, and extremely fast web applications with secure backend frameworks and database architectures.",
    features: [
      "High-Performance SPA & SSR builds",
      "Scalable RESTful & GraphQL APIs",
      "Database Modeling & Caching",
      "Search Engine Optimization (SEO)"
    ],
    tech: ["Next.js", "React.js", "Node.js", "PostgreSQL", "GraphQL"],
    visual: (
      <div className="w-full h-32 bg-black/40 rounded-xl border border-white/5 p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-pink-500/20 transition-colors font-mono text-[9px] text-gray-500">
        <div className="flex justify-between items-center border-b border-white/5 pb-1.5 mb-1">
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3 h-3 text-pink-400" />
            <span className="text-gray-400">api-endpoint.js</span>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        </div>
        <div className="space-y-0.5 leading-normal">
          <p className="text-pink-300">const data = await fetch('/api/v1/nodes');</p>
          <p>{"{"} status: 200, latency: "24ms" {"}"}</p>
          <p className="text-green-400">console.log("Database connection optimal.");</p>
        </div>
      </div>
    )
  },
  {
    title: "Mobile App Engineering",
    focus: "Cross-Platform & Native Deployments",
    icon: <Smartphone className="w-6 h-6 text-blue-400" />,
    description: "Creating highly interactive and native iOS and Android applications with offline synchronization, animations, and security frameworks.",
    features: [
      "Cross-Platform Flutter & React Native",
      "App Store & Google Play Optimization",
      "Offline Cache & Database Sync",
      "Push Notification & Payment Gates"
    ],
    tech: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    visual: (
      <div className="w-full h-32 bg-black/40 rounded-xl border border-white/5 p-4 flex items-center justify-between overflow-hidden relative group-hover:border-blue-500/20 transition-colors">
        <div className="w-20 h-28 border border-white/10 rounded-xl bg-[#0d0d0d] p-1.5 mx-auto flex flex-col justify-between relative shadow-lg">
          <div className="w-6 h-1 bg-white/20 rounded-full mx-auto mb-1" />
          <div className="flex-1 rounded bg-white/[0.03] border border-white/5 p-1 space-y-1.5">
            <div className="h-4 bg-blue-500/20 rounded border border-blue-500/10 flex items-center justify-center">
              <span className="w-6 h-1 bg-blue-400/40 rounded" />
            </div>
            <div className="grid grid-cols-2 gap-1">
              <div className="h-6 bg-white/5 rounded border border-white/5" />
              <div className="h-6 bg-white/5 rounded border border-white/5" />
            </div>
          </div>
          <div className="w-2.5 h-2.5 rounded-full border border-white/10 mx-auto mt-1" />
        </div>
        <PhoneIcon className="w-4 h-4 text-blue-500/30 absolute right-4 top-4" />
      </div>
    )
  },
  {
    title: "Brand Identity & Growth",
    focus: "Visual Styling & Scaling Systems",
    icon: <Globe className="w-6 h-6 text-green-400" />,
    description: "Formulating cohesive visual guides, brand collateral, high-converting digital copy, and implementing marketing analytics layers.",
    features: [
      "Corporate Styling & Logo Guides",
      "Structured Marketing Copy Sheets",
      "Conversion Optimization Audits",
      "Integrated Tracking Dashboards"
    ],
    tech: ["SEO Core", "Branding", "Google Analytics", "Vercel"],
    visual: (
      <div className="w-full h-32 bg-black/40 rounded-xl border border-white/5 p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-green-500/20 transition-colors">
        <div className="flex justify-between items-center mb-1">
          <span className="text-[10px] uppercase font-bold text-gray-500">Traffic Growth</span>
          <TrendingUp className="w-3.5 h-3.5 text-green-500" />
        </div>
        <div className="flex-1 flex items-end gap-1 pt-2">
          {[40, 25, 55, 30, 75, 50, 95].map((val, idx) => (
            <div key={idx} className="flex-1 bg-white/5 rounded-t relative overflow-hidden h-full border border-white/5">
              <motion.div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-500/50 to-emerald-400"
                initial={{ height: 0 }}
                animate={{ height: `${val}%` }}
                transition={{ duration: 1, delay: idx * 0.1 }}
              />
            </div>
          ))}
        </div>
      </div>
    )
  }
];

function Services() {
  // Track mouse coordinates for spotlight hover effect
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
        <title>Our Services | Xvantage Infotech - Web, Mobile & AI/ML Solutions</title>
        <meta
          name="description"
          content="Explore Xvantage Infotech’s professional services including web development, mobile app creation, AI/ML integration, and custom software solutions to power your digital transformation."
        />
      </Helmet>

      <div className="noise-bg" />

      <div id="services" className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
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
              Our Services
            </motion.div>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 0.6)}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4"
            >
              Our Technical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-500 to-pink-500 animate-gradient-flow">
                Capabilities
              </span>
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              className="text-gray-400 text-lg sm:text-xl"
            >
              We craft high-performance digital builds utilizing custom engineering and pixel-perfect styling.
            </motion.p>
          </div>

          {/* Detailed Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {detailedServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", 0.2 + index * 0.15, 0.8)}
                className="service-card border border-white/10 bg-white/5 backdrop-blur-xl p-8 rounded-3xl flex flex-col justify-between gap-6 relative group overflow-hidden shadow-2xl"
              >
                {/* Spotlight Background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white transition-colors group-hover:text-purple-300">
                          {service.title}
                        </h3>
                        <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">{service.focus}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <div className="w-4 h-4 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-purple-400" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills & Visual Container */}
                <div className="space-y-4 relative z-10">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {service.tech.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-[9px] font-bold text-gray-400 uppercase tracking-widest hover:border-purple-500/30 hover:text-white transition-all cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Interactive Discipline mockup visual */}
                  {service.visual}
                </div>

              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </>
  );
}

export default Services;
