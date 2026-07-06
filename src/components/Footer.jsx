import React from "react";
import { Link } from "react-router-dom";
import { socialIcon } from "../constants/data";

function Footer() {
  return (
    <footer className="border-t border-white/10 py-4 sm:py-8 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start w-full gap-8 sm:gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 w-full">
            {/* Company Section */}
            <div>
              <h3 className="text-xl font-bold mb-2">Company</h3>
              <ul className="text-gray-400 space-y-1">
                <li>
                  <Link to="/about" className="hover:text-white">About Us</Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white">Services</Link>
                </li>
                <li>
                  <Link to="/features" className="hover:text-white">Features</Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-white">Our Pricing</Link>
                </li>
                <li>
                  <Link to="/news" className="hover:text-white">Latest News</Link>
                </li>
              </ul>
            </div>

            {/* Support Section */}
            <div>
              <h3 className="text-xl font-bold mb-2">Support</h3>
              <ul className="text-gray-400 space-y-1">
                <li>
                  <Link to="/faq" className="hover:text-white">FAQ's</Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/team" className="hover:text-white">Team</Link> 
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white">Contact Us</Link>
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
                  <a href="mailto:hr@xvantageinfotech.com" className="hover:text-white">
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

          {/* Social Icons */}
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
  );
}

export default Footer;