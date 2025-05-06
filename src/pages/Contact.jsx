import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from '../animations';
import { Send} from 'lucide-react';
import {  scaleIn } from '../animations';
import {
  socialIcon,
} from "../constants/data";

function Contact() {
  const [isHovering, setIsHovering] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8ry16dd", // Replace with your EmailJS service ID
        "template_5y5n3c1", // Replace with your EmailJS template ID
        e.target,
        "uVeDhulb0LxWf3Na3" // Replace with your EmailJS public key
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message Sent Successfully!");
      })
      .catch((error) => {
        console.log("FAILED...", error);
        alert("Something went wrong. Try again.");
      });

    e.target.reset();
  };

  return (
    <div id="contact" className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* Hero Section with Gradient Background */}
      <div className="relative min-h-screen pt-16">
        <motion.div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-transparent to-transparent mix-blend-screen"
            style={{
              transform: `translate(calc(var(--mouse-x) * 20px), calc(var(--mouse-y) * 20px))`,
              opacity: 0.5,
            }}
          />
        </motion.div>

        <motion.header
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 min-h-[calc(100vh-4rem)] flex flex-col justify-center px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="max-w-7xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-2 mb-8"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-bold mb-8 leading-tight">
                Contact Us
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  Xvantage Infotech
                </span>
              </h1>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="prose prose-lg prose-invert max-w-none"
            >
              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-12">
                We are a team of passionate developers and designers dedicated to creating exceptional digital experiences.
              </p>

              {/* Mission & Vision Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  variants={fadeIn("up", "tween", 0.4, 1)}
                  className="service-card border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-gray-400">
                    To deliver innovative digital solutions that empower businesses to thrive in the modern world.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeIn("up", "tween", 0.5, 1)}
                  className="service-card border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-gray-400">
                    To become a leading force in digital transformation, known for our creativity and technical excellence.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.header>
      </div>

      {/* Team Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-20 sm:py-32 relative z-10 bg-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg sm:text-xl text-gray-400">
              Have a project in mind? Let's create something amazing.
            </p>
          </motion.div>
          <motion.form
            variants={scaleIn}
            onSubmit={sendEmail}
            className="max-w-2xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
            <div className="mb-6 sm:mb-8">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="magnetic-button w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 text-base sm:text-lg font-semibold"
            >
              Send Message <Send className="w-5 h-5" />
            </motion.button>
          </motion.form>
        </div>
      </motion.section>
        {/* Footer Section */}
        <footer className="border-t border-white/10 py-4 sm:py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start w-full gap-8 sm:gap-12">
            {/* Footer Sections - Left side (3 columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 w-full">
              {/* Company Section */}
              <div>
                <h3 className="text-xl font-bold mb-2">Company</h3>
                <ul className="text-gray-400 space-y-1">
                  <li>
                    <a href="#" className="hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Our Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Latest News
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support Section */}
              <div>
                <h3 className="text-xl font-bold mb-2">Support</h3>
                <ul className="text-gray-400 space-y-1">
                  <li>
                    <a href="#" className="hover:text-white">
                      FAQ's
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Address Section */}
              <div>
                <h3 className="text-xl font-bold mb-2">Address</h3>
                <ul className="text-gray-400 space-y-1">
                  <li>
                    350 Royale Arcade, Sarthana Jakatnaka, Surat, Gujarat.
                  </li>
                  <li>
                    <a
                      href="mailto:hr@xvantageinfotech.com"
                      className="hover:text-white"
                    >
                      hr@xvantageinfotech.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+919409150636" className="hover:text-white">
                      +91 9409150636
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Icons - Far Right Corner with increased gap */}
            <div className="flex gap-6 sm:ml-16">
              {socialIcon?.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact; 