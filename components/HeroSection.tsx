"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSearchSection from "./HeroSearchSection";

const HeroSection = () => {
  return (
    <>
      <HeroSearchSection />

      <section className="relative py-32 bg-gray-50">
        <div className="container px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto"
          >
            {/* AI Badge */}{" "}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 mb-12 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">
                AI-Powered Real Estate Platform
              </span>
            </motion.div>
            {/* Main Content */}{" "}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-light mb-8 leading-tight text-gray-900 tracking-tight"
            >
              Home Buying & Selling
              <br />
              <span className="font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Simplified with AI
              </span>
            </motion.h2>{" "}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            >
              HomeGeeni simplifies real estate by automating listings, offers,
              and insights—all in one platform. Our AI tools help agents,
              buyers, and sellers make smarter decisions faster.
            </motion.p>
            {/* Features Grid */}{" "}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 text-gray-600">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="font-medium">Send & Receive Offers</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="font-medium">AI Property Valuations</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="font-medium">Doc & Showing Management</span>
              </div>
            </motion.div>
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-xl shadow-sm transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 px-8 py-6 text-lg rounded-xl hover:bg-gray-50 transition-all duration-200"
              >
                Watch Demo
              </Button>
            </motion.div>
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 max-w-3xl mx-auto"
            >
              <div className="text-center">
                <div className="text-4xl font-light text-gray-900 mb-2">
                  10K+
                </div>
                <div className="text-gray-500 font-light">
                  Properties Analyzed
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-gray-900 mb-2">
                  500+
                </div>
                <div className="text-gray-500 font-light">
                  AI Articles Generated
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-gray-900 mb-2">
                  95%
                </div>
                <div className="text-gray-500 font-light">Accuracy Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
