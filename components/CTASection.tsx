"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-32 bg-gray-900 relative overflow-hidden">
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {" "}
          <h2 className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight tracking-tight">
            Simplify Your
            <br />
            <span className="font-medium">Real Estate Experience</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Join HomeGeeni's platform to automate listings, offers, valuations,
            and documents—making real estate transactions faster and smarter for
            everyone.
          </p>
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
          >
            {" "}
            <div className="flex items-center gap-3 text-white justify-center">
              <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span className="font-light">Send & Receive Offers</span>
            </div>{" "}
            <div className="flex items-center gap-3 text-white justify-center">
              <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span className="font-light">AI Property Valuations</span>
            </div>
            <div className="flex items-center gap-3 text-white justify-center">
              <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span className="font-light">Document Management</span>
            </div>
          </motion.div>
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {" "}
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-gray-900 px-10 py-6 text-lg rounded-xl font-medium transition-all duration-200"
            >
              Try HomeGeeni Platform
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-white px-10 py-6 text-lg rounded-xl hover:bg-white/10 transition-all duration-200"
            >
              Schedule Demo
            </Button>
          </motion.div>
          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 text-sm mb-4 font-light">
              Trusted by 10,000+ real estate professionals
            </p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-white text-xs font-light">
                ★★★★★ 4.9/5 Rating
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <div className="text-white text-xs font-light">
                SOC 2 Compliant
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <div className="text-white text-xs font-light">
                Enterprise Security
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
