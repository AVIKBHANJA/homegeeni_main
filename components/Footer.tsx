import {
  Brain,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white py-20">
      <div className="container px-4 max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl mb-16 backdrop-blur-sm border border-gray-700/50 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Stay Updated with HomeGeeni
              </h3>
              <p className="text-gray-300 mb-2">
                Get the latest real estate insights, market reports, and AI
                feature updates.
              </p>
            </div>
            <div className="lg:col-span-2">
              <form className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-gray-700 text-white placeholder:text-gray-400 focus-visible:ring-blue-500"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          {/* Brand Section */}
          <div className="space-y-5 md:col-span-4">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="HomeGeeni"
                className="h-12 w-auto brightness-0 invert"
              />
            </div>{" "}
            <p className="text-gray-300 leading-relaxed">
              HomeGeeni is an AI-powered real estate platform that simplifies
              home buying, selling, and investing by automating listings,
              offers, and insights—all in one place.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-blue-600 transition-colors duration-300 text-gray-300 hover:text-white"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-blue-400 transition-colors duration-300 text-gray-300 hover:text-white"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-gradient-to-br hover:from-purple-600 hover:to-orange-600 transition-colors duration-300 text-gray-300 hover:text-white"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-blue-700 transition-colors duration-300 text-gray-300 hover:text-white"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          {/* Product */}
          <div className="space-y-5 md:col-span-2">
            <h4 className="font-semibold text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Product
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    AI Assistant
                  </span>
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>{" "}
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Property Valuation
                  </span>
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Market Analysis
                  </span>
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Content Hub
                  </span>
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
            </ul>
          </div>{" "}
          {/* Resources */}
          <div className="space-y-5 md:col-span-3">
            <h4 className="font-semibold text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Investment Guide
                  </span>
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Market Reports
                  </span>
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    API Documentation
                  </span>
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Help Center
                  </span>
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>{" "}
              <li>
                <a
                  href="/fair-housing-policy"
                  className="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Fair Housing Policy
                  </span>
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
            </ul>{" "}
          </div>
          {/* Contact */}
          <div className="space-y-5 md:col-span-3">
            <h4 className="font-semibold text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Contact Us
            </h4>
            <div className="space-y-4">
              {" "}
              <a
                href="mailto:hello@example.com"
                className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors p-3 bg-white/5 hover:bg-white/10 rounded-lg"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  hello@example.com
                </span>
              </a>
              <a
                href="tel:+15551234567"
                className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors p-3 bg-white/5 hover:bg-white/10 rounded-lg"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  +1 (555) 123-4567
                </span>
              </a>{" "}
              <a
                href="https://maps.google.com/?q=San+Francisco,+CA,+USA"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-gray-300 hover:text-white transition-colors p-3 bg-white/5 hover:bg-white/10 rounded-lg"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  San Francisco, CA
                  <br />
                  United States
                </span>
              </a>
            </div>
          </div>
        </div>{" "}
        {/* AI Recommendations Section */}
        <div className="border-t border-gray-700/30 pt-12 pb-12">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-white text-xl">
                    About AI Recommendations
                  </h4>
                </div>
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-8 w-auto brightness-0 invert mb-4"
                />
              </div>

              <div className="lg:col-span-4 text-gray-300 space-y-4">
                <p className="leading-relaxed">
                  We use AI-powered algorithms to personalize property
                  recommendations based on your activity—such as listings you
                  view, save, share, or filter. Our system analyzes patterns in
                  your preferences and location to surface homes that match your
                  interests. These recommendations are designed to help you
                  discover the right property faster, without missing out.
                </p>
                <p className="leading-relaxed">
                  To provide this experience, we collect and use behavioral and
                  location data in accordance with our Privacy Policy. You're
                  always in control—adjust your settings or clear your activity
                  at any time.
                </p>{" "}
                <p className="leading-relaxed">
                  We proudly support and abide by the Fair Housing Act, and NEW
                  YORK STATE FAIR HOUSING NOTICE. We are committed to ensuring
                  that all individuals have equal access to housing
                  opportunities regardless of race, color, religion, sex,
                  disability, familial status, national origin, or any other
                  protected class.
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Fine Print Section */}
        <div className="border-t border-gray-700/30 pt-10 pb-10">
          {" "}
          <div className="text-gray-400 text-xs leading-relaxed">
            <p className="font-semibold mb-4 text-sm text-gray-300">
              FINE PRINT
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="mb-4">
                  Some of our blog content is generated or enhanced using
                  artificial intelligence (AI) to provide timely, informative,
                  and engaging real estate insights. While we strive for
                  accuracy, AI-generated content may occasionally contain
                  errors, outdated information, or interpretations that don't
                  reflect the views of licensed professionals.
                </p>
                <p>
                  All information should be independently verified and does not
                  constitute legal, financial, or real estate advice. For
                  personalized guidance, always consult a licensed real estate
                  agent, attorney, or financial advisor.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  We are committed to providing a digital experience that is
                  accessible and inclusive for all users, including individuals
                  with disabilities. We are actively working to enhance the
                  usability and accessibility of our platform and welcome your
                  feedback as we continue to improve.
                </p>
                <p className="mb-4">
                  If you encounter any accessibility barriers or require an
                  accommodation, please contact us at accessibility@example.com
                  so we can assist you.
                </p>
                <p className="text-gray-300">California DRE #01521930</p>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-700/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} HomeGeeni. All rights reserved.
            </p>{" "}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <a
                href="/privacy-policy"
                className="text-gray-400 hover:text-white transition-colors relative group"
              >
                Privacy Policy
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
              <a
                href="/terms-of-use"
                className="text-gray-400 hover:text-white transition-colors relative group"
              >
                Terms of Use
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors relative group"
              >
                Cookie Policy
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
