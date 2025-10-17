import { Mail, Phone, MapPin, Link } from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";

const AppFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-900 text-amber-50 mt-auto">
      {/* Newsletter Section */}
      <div className="border-b border-amber-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-1">
                Stay Updated with PureMolasses
              </h3>
              <p className="text-amber-200 text-sm">
                Get exclusive deals and product updates
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2.5 rounded-lg bg-amber-800 
                text-amber-50 placeholder-amber-300 border border-amber-700 
                focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
              <button
                className="px-6 py-2.5 bg-amber-700 hover:bg-amber-600 
                rounded-lg font-semibold transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div
                className="w-10 h-10 bg-gradient-to-br from-amber-700 
                to-amber-900 rounded-full flex items-center justify-center 
                shadow-md border-2 border-amber-600"
              >
                <svg
                  className="w-6 h-6 text-amber-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707
                     9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 
                     0 00-1.414-1.414L11 10.586V7z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold">PureMolasses</div>
                <div className="text-xs text-amber-300 -mt-1">
                  Traditional Filipino Quality
                </div>
              </div>
            </div>
            <p className="text-amber-200 text-sm">
              Premium molasses sourced locally from the finest Philippine farms.
              Farm to table quality you can trust.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-amber-800 hover:bg-amber-700 
                flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-amber-800 hover:bg-amber-700 
                flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/"
                  className="text-amber-200 hover:text-amber-100 text-sm 
                  transition-colors inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-amber-200 hover:text-amber-100 text-sm 
                  transition-colors inline-block"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-amber-200 hover:text-amber-100 text-sm 
                  transition-colors inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-amber-200 hover:text-amber-100 text-sm 
                  transition-colors inline-block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-bold mb-4">Customer Service</h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/shipping"
                  className="text-amber-200 hover:text-amber-100 text-sm 
                  transition-colors inline-block"
                >
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="text-amber-200 hover:text-amber-100 text-sm 
                  transition-colors inline-block"
                >
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-amber-200 hover:text-amber-100 text-sm 
                  transition-colors inline-block"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-amber-200 hover:text-amber-100 text-sm 
                  transition-colors inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-amber-200 hover:text-amber-100 text-sm 
                  transition-colors inline-block"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
                <span className="text-amber-200 text-sm">
                  Davao City, Philippines
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+63123456789"
                  className="text-amber-200 hover:text-amber-100 text-sm 
                  transition-colors"
                >
                  +63 123 456 789
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@puremolasses.ph"
                  className="text-amber-200 hover:text-amber-100 text-sm 
                  transition-colors"
                >
                  info@puremolasses.ph
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div
            className="flex flex-col sm:flex-row items-center justify-between 
            gap-3 text-sm text-amber-200"
          >
            <p>© {currentYear} PureMolasses. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span className="text-amber-300">🇵🇭</span>
              <span>Proudly Made in the Philippines</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
