import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../animations";

import { socialIcon, services, Android, Ios } from "../constants/data";
import { Book } from "lucide-react";
import { Helmet } from "react-helmet-async";

const BookMyFarm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const project = {
    title: "Book My Farm",
    desc: "Next-gen Age-Calc to calculate your exact Age along with Zodiac Sign",
    image: "/BookMyFarm.jpg",
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
          BookMyFarm | Farmhouse & Villa Booking App by Xvantage Infotech
        </title>

        <meta
          name="description"
          content="BookMyFarm is a modern platform by Xvantage Infotech for booking farmhouses, villas, and apartments with ease. Enjoy seamless booking, exclusive discounts, and a smooth experience across web and mobile."
        />

        <meta
          name="keywords"
          content="BookMyFarm, farm booking app, villa booking, farmhouse rental, vacation stay, Xvantage Infotech, property booking, web app, mobile app"
        />

        <meta
          property="og:title"
          content="BookMyFarm - Villa & Farmhouse Booking Platform"
        />
        <meta
          property="og:description"
          content="Discover the easiest way to book villas and farmhouses for your next vacation with Book My Farm by Xvantage Infotech. Available on iOS, Android, and web."
        />
        <meta property="og:image" content="/BookMyFarm.jpg" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://xvantageinfotech.com/bookmyfarm"
        />
      </Helmet>

      <div
        id="bookmyfarm"
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
                BookMyFarm
              </span>
            </h1>
          </motion.div>

          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="prose prose-lg prose-invert max-w-none mb-32"
          >
            <p className="text-lg sm:text-xl text-gray-400 max-w-6xl mb-20">
              Get started with Book My Farm through a quick and friendly
              onboarding flow. From welcoming visuals to secure phone number
              verification, the process is designed to help users access
              personalized bookings and farm stay experiences effortlessly.
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
                  Our goal was to build a trusted, Modern platform where users
                  could book farmhouses as easily as booking a movie ticket, and
                  where property owners could manage their listings with ease.
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
                  Perfect Farms, Villa, Apartment Booking for your dreamy
                  vacation with easy to use app and website with best discount
                  on card.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <div className="relative z-10 mb-8">
            {/* Buttons first */}
            <div className="flex items-center gap-8 mb-8">
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
            </div>

            {/* Then image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookMyFarm;
