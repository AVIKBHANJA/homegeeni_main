"use client";

import { motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HeroSearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Search functionality would be implemented here
  };
  const suggestions = [
    "2 beds 2 bath condo under $500K near downtown",
    "Send offer for 123 Main Street property",
    "Automated valuation for my 3-bedroom house",
    "Schedule showings for properties in Lakeside",
    "Manage documents for my home purchase",
    "Investment properties with positive cash flow",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="container px-4 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
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
          {/* Main Headline */}{" "}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-light mb-8 leading-[0.9] text-gray-900 tracking-tight"
          >
            One Platform.
            <br />
            <span className="font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              All Real Estate Needs.
            </span>
          </motion.h1>
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-500 mb-16 max-w-3xl mx-auto leading-relaxed font-light"
          >
            HomeGeeni simplifies real estate with AI automation for listings,
            offers, valuations, documents, and showings—all in one powerful
            platform.
          </motion.p>
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-3xl mx-auto mb-12"
            id="hero-search-section"
          >
            <form onSubmit={handleSearch} className="relative">
              <div className="flex items-center bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center pl-8 pr-4">
                  <Sparkles className="w-5 h-5 text-blue-500" />
                </div>{" "}
                <Input
                  type="text"
                  placeholder="Search properties, send offers, or manage documents"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border-0 text-lg py-8 px-0 focus-visible:ring-0 placeholder:text-gray-400 bg-transparent"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="m-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl px-8 py-6 transition-all duration-200"
                >
                  <Search className="w-5 h-5" />
                </Button>
              </div>
            </form>
          </motion.div>
          {/* Suggestion Cards with Scrolling Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="relative overflow-hidden"
          >
            <div className="flex space-x-4 animate-scroll">
              {[...suggestions, ...suggestions].map((suggestion, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 text-gray-600 cursor-pointer hover:bg-gray-100 transition-all duration-200"
                >
                  <span className="text-sm whitespace-nowrap">
                    {suggestion}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSearchSection;
