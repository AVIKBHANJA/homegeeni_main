import { Brain, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="HomeGeeni"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>{" "}
            <p className="text-gray-300 leading-relaxed">
              HomeGeeni is an AI-powered real estate platform that simplifies
              home buying, selling, and investing by automating listings,
              offers, and insights—all in one place.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <Brain className="w-5 h-5" />
              </Button>
            </div>
          </div>
          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Product</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  AI Assistant
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Property Valuation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Market Analysis
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Content Hub
                </a>
              </li>
            </ul>
          </div>{" "}
          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Investment Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Market Reports
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  API Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Help Center
                </a>
              </li>{" "}
              <li>
                <a
                  href="/fair-housing-policy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Fair Housing Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-3">
              {" "}
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>hello@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-4 h-4 mt-1" />
                <span>
                  San Francisco, CA
                  <br />
                  United States
                </span>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* AI Recommendations Section */}
        <div className="border-t border-gray-800 pt-8 pb-8">
          <div className="text-gray-400 text-sm space-y-4">
            <h4 className="font-semibold text-white text-base mb-2 flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-5 w-auto brightness-0 invert"
              />
              <span>About AI Recommendations</span>
            </h4>{" "}
            <p>
              We use AI-powered algorithms to personalize property
              recommendations based on your activity—such as listings you view,
              save, share, or filter. Our system analyzes patterns in your
              preferences and location to surface homes that match your
              interests. These recommendations are designed to help you discover
              the right property faster, without missing out.
            </p>
            <p>
              To provide this experience, we collect and use behavioral and
              location data in accordance with our Privacy Policy. You're always
              in control—adjust your settings or clear your activity at any
              time.
            </p>{" "}
            <p className="mt-4">
              We proudly support and abide by the Fair Housing Act, and NEW YORK
              STATE FAIR HOUSING NOTICE. We are committed to ensuring that all
              individuals have equal access to housing opportunities regardless
              of race, color, religion, sex, disability, familial status,
              national origin, or any other protected class.
            </p>
          </div>
        </div>
        {/* Fine Print Section */}
        <div className="border-t border-gray-800 pt-6 pb-6">
          {" "}
          <div className="text-gray-500 text-xs">
            <p className="font-semibold mb-2">FINE PRINT</p>
            <p className="mb-2">
              Some of our blog content is generated or enhanced using artificial
              intelligence (AI) to provide timely, informative, and engaging
              real estate insights. While we strive for accuracy, AI-generated
              content may occasionally contain errors, outdated information, or
              interpretations that don't reflect the views of licensed
              professionals.
            </p>
            <p className="mb-2">
              All information should be independently verified and does not
              constitute legal, financial, or real estate advice. For
              personalized guidance, always consult a licensed real estate
              agent, attorney, or financial advisor.
            </p>
            <p>
              We are committed to providing a digital experience that is
              accessible and inclusive for all users, including individuals with
              disabilities. We are actively working to enhance the usability and
              accessibility of our platform and welcome your feedback as we
              continue to improve.
            </p>
            <p className="mt-2">
              If you encounter any accessibility barriers or require an
              accommodation, please contact us at accessibility@example.com so
              we can assist you.
            </p>
            <p className="mt-2">California DRE #01521930</p>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>{" "}
            <div className="flex gap-6 text-sm text-gray-400">
              <a
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-use"
                className="hover:text-white transition-colors"
              >
                Terms of Use
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
