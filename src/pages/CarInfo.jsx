import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../animations";

import { socialIcon, services, Android, Ios } from "../constants/data";
import { Helmet } from "react-helmet-async";

const CarInfo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const project = {
    title: "Car Info",
    desc: "Next-gen Age-Calc to calculate your exact Age along with Zodiac Sign",
    image: "/carinfo.jpg",
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
    <>
      <Helmet>
        <title>
          CarInfo+ | Vehicle & License Information App by Xvantage Infotech
        </title>

        <meta
          name="description"
          content="CarInfo+ is a mobile app by Xvantage Infotech that provides instant access to vehicle registration, driving licence details, challan info, RTO codes, fuel expenses, and more — all in one place."
        />

        <meta
          name="keywords"
          content="CarInfo+, vehicle information app, RTO details, challan check, car app India, driving licence info, vehicle RC, Xvantage Infotech, mobile app development"
        />

        <meta
          property="og:title"
          content="CarInfo+ - Smart Vehicle Information App"
        />
        <meta
          property="og:description"
          content="Check RTO details, challans, licence info, and nearby car services with CarInfo+ by Xvantage Infotech. Available on iOS and Android."
        />
        <meta property="og:image" content="/carinfo.jpg" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://xvantageinfotech.com/carinfo"
        />
      </Helmet>

      <div
        id="carinfo"
        className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden"
      >
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
                CarInfo
              </span>
            </h1>
          </motion.div>

          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="prose prose-lg prose-invert max-w-none mb-32"
          >
            <p className="text-lg sm:text-xl text-gray-400 max-w-6xl mb-20">
              CarInfo+ is a mobile application designed to provide users with
              instant access to driving licences, vehicle registrations, RTO
              codes, safety ratings, and more. The app aims to be a one-stop
              solution for car enthusiasts, prospective buyers, and individuals
              seeking reliable vehicle and driving licence details
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeIn("up", "tween", 0.4, 1)}
                className="service-card border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <h3 className="text-2xl font-bold mb-4">User Goal</h3>
                <p className="text-gray-400">
                  Provide a seamless experience for accessing vehicle and
                  licence information.
                </p>
                <p className="text-gray-400">
                  Ensure data accuracy and reliability.
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
                  RC Details, Challan Details, Buy Fastag, NearBy Car Wash,
                  Petrol Pump, Charging Station, Garage, Book A Cab, Buy
                  Products, Fuel Expense, EMI Calculation.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <div className="relative z-10 mb-8">
            {/* Buttons first */}
            <div className="flex items-center gap-8 mb-8">
              <a
                href="https://apps.apple.com/in/app/carinfo-rto-echallan-rc/id6744032421"
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
                //   href="https://play.google.com/store/apps/details?id=com.xv.agecalc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/playstore.png"
                  alt="Get it on Google Play"
                  className="h-12 w-auto hover:opacity-80 transition cursor-pointer"
                />
              </a>
            </div>

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
                      Platinum point, 319, opp. CNG Pump, Sudama Chowk, Mota
                      Varachha, Surat, Gujarat
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
    </>
  );
};

export default CarInfo;
