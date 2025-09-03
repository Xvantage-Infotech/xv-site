import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from '../animations';



import {
  socialIcon,
  services,
  Android,
  Ios,
} from "../constants/data";
import { Book } from "lucide-react";

const BMFAdminPanel = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const project = {
    title: "Book My Farm",
    desc: "Next-gen Age-Calc to calculate your exact Age along with Zodiac Sign",
    image: "/BMFAdminPanel.jpg",
    category: "Car Info",
    features: [
      "Calculate exact age",
      "Get your Zodiac sign",
      "User-friendly interface",
      "Responsive for mobile & desktop",
    ],
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://apps.apple.com/us/app/agecalc-date-life-calculator/id6739868943",
  };

  return (
    <div id="bmf-adminpanel" className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
        <motion.div className="absolute inset-0 z-0">
                 <div
                   className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-transparent to-transparent mix-blend-screen"
                   style={{
                     transform: `translate(calc(var(--mouse-x) * 20px), calc(var(--mouse-y) * 20px))`,
                     opacity: 0.5,
                   }}
                 />
               </motion.div>

        {/* <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1> */}
        {/* <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500  font-bold mb-4">{project.title}</h1>
        <p className="text-xl mb-6 leading-tight  ">{project.desc}</p> */}


 <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-2 mb-8"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-bold mt-32 mb-8 leading-tight">
                 Welcome to 
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-8">
                  BookMyFarm Admin Panel
                </span>
              </h1>
            </motion.div>


                <motion.div
                            variants={fadeIn("up", "tween", 0.3, 1)}
                            className="prose prose-lg prose-invert max-w-none mb-32"
                          >
                            <p className="text-lg sm:text-xl text-gray-400 max-w-6xl mb-20">
                   Designing and developing the complete Super Admin Dashboard for BookMyFarm — a powerful system to manage bookings, farm availability, revenue, and owner payouts.
                            </p>
              
                            {/* Mission & Vision Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              <motion.div
                                variants={fadeIn("up", "tween", 0.4, 1)}
                                className="service-card border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl"
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                              >
                                <h3 className="text-2xl font-bold mb-4">Our Goal</h3>
                                <p className="text-gray-400">
                                   we built the BookMyFarm Super Admin Dashboard — a full-cycle solution that gives administrators complete visibility and control over the platform’s 
                                   farm bookings, income analytics, availability, and payouts.
                                </p>
                                
                              </motion.div>
              
                              <motion.div
                                variants={fadeIn("up", "tween", 0.5, 1)}
                                className="service-card border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl"
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                              >
                                <h3 className="text-2xl font-bold mb-4">Features</h3>
                                <p className="text-gray-400">
                               Dashboard, Booking Slip, Farms & Properties, Marketing, Customers & Users, Bank Details, Owner Payout.
                                </p>
                              </motion.div>
                            </div>
                          </motion.div>
   
    






<div className="relative z-10 mb-8">
  {/* Buttons first */}
  {/* <div className="flex items-center gap-8 mb-8">
    <a
      href="https://apps.apple.com/in/app/bookmyfarm-villas-farmhouse/id6747479573"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/appstore.png"
        alt="Download on App Store"
        className="h-12 w-auto hover:opacity-80 transition cursor-pointer"
      />
    </a>

    <a
      href="https://play.google.com/store/search?q=bookmyfarm&c=apps&hl=en_IN"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/playstore.png"
        alt="Get it on Google Play"
        className="h-12 w-auto hover:opacity-80 transition cursor-pointer"
      />
    </a>
     <a
      href="https://bookmyfarm.net"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/Web.png"
        alt="Download on App Store"
        className="h-12 w-auto hover:opacity-80 transition cursor-pointer"
      />
    </a>
  </div> */}

  {/* Then image */}
  <img
    src={project.image}
    alt={project.title}
    className="w-full object-cover rounded-2xl"
  />
</div>





      </div>

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
};

export default BMFAdminPanel;
