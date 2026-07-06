import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../animations";
import { Helmet } from "react-helmet-async";
import { Zap, ShieldCheck, Layers, Headphones } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Fast Performance",
    description: "Optimized builds and clean code ensure your product loads fast and runs smoothly at scale.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Secure by Design",
    description: "Security best practices are built into every project from day one, not bolted on later.",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Scalable Architecture",
    description: "We build systems that grow with your business, from MVP to enterprise scale.",
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Dedicated Support",
    description: "Ongoing maintenance and support so your product keeps running smoothly after launch.",
  },
];

function Features() {
  return (
    <>
      <Helmet>
        <title>Features | Xvantage Infotech</title>
        <meta
          name="description"
          content="Explore the core features and strengths that define how Xvantage Infotech builds digital products."
        />
      </Helmet>

      <div className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto"
        >
          <motion.h1
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-4xl sm:text-5xl font-bold mb-4 text-center"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Features
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="text-gray-400 mb-16 text-center max-w-2xl mx-auto"
          >
            What makes our approach to building digital products different.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", 0.3 + index * 0.1, 1)}
                className="service-card border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl"
              >
                <div className="text-purple-400 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Features;