import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import About from "./pages/About";
import { navItems } from "./constants/data";
import ScrollToHash from "./ScrollToHash";
import Contact from "./pages/Contact";
import Process from "./pages/Process";
// import Work from "./pages/Work";
import Services from "./pages/Services";
import Portfoilio from "./pages/portfolio";
import AgeCalcDetail from "./pages/AgeCalcDetail";
import CarInfo from "./pages/CarInfo";
import SpyGame from "./pages/SpyGame";
import BookMyFarm from "./pages/BookMyfarm";
import BMFAdminPanel from "./pages/BMFAdminPanel";
import BKPos from "./pages/BKPos";
import BKSuperAdmin from "./pages/BKSuperAdmin";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cursorRef = useRef(null);
  const cursorTrailerRef = useRef(null);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToHash />
        <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
          <div className="hidden md:block">
            <div className="custom-cursor" ref={cursorRef} />
            <div className="cursor-trailer" ref={cursorTrailerRef} />
          </div>

          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-2xl font-bold"
                >
                  <Link to="/" className="logo">
                    <img src="/xvantage_logo_copy.png" alt="Company Logo" />
                  </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                  {navItems
                    .filter((item) => item !== "Home" && item !== "About")
                    .map((item, index) => (
                      <Link
                        key={item}
                        to={`/${item.toLowerCase()}`}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                </div>

                <button
                  className="md:hidden p-2"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <motion.div
              initial={false}
              animate={{
                height: isMenuOpen ? "auto" : 0,
                opacity: isMenuOpen ? 1 : 0,
              }}
              className={`md:hidden overflow-hidden ${
                isMenuOpen ? "border-t border-white/10" : ""
              }`}
            >
              <div className="px-4 py-4 space-y-4">
                <Link
                  to="/"
                  className="block text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                {navItems
                  .filter((item) => item !== "Home" && item !== "About")
                  .map((item) => (
                    <Link
                      key={item}
                      to={`/${item.toLowerCase()}`}
                      className="block text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
              </div>
            </motion.div>
          </nav>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/process" element={<Process />} />
            {/* <Route path="/work" element={<Work />} /> */}
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfoilio />} />
            <Route path="/agecalc" element={<AgeCalcDetail />} />
            <Route path="/carinfo" element={<CarInfo />} />
            <Route path="/spygame" element={<SpyGame />} />
            <Route path="/bookmyfarm" element={<BookMyFarm />} />
            <Route path="/bmf-adminpanel" element={<BMFAdminPanel />} />
            <Route path="/bkpos" element={<BKPos />} />
            <Route path="/bksuperadmin" element={<BKSuperAdmin />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
