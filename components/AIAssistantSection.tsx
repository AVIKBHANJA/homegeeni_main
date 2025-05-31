"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Bot, MessageCircle, Lightbulb, Target, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AnimatedTypingPlaceholder from "@/components/ui/animated-typing-placeholder";

const AIAssistantSection = () => {
  const [userInput, setUserInput] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  const placeholderTexts = [
    "Try AI Assistant...",
    "Ask me anything about real estate...",
    "Find homes in your area...",
    "Get property valuations...",
    "Schedule property showings...",
    "Help with documents and offers...",
    "Investment property advice...",
    "Market trends and analysis...",
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (userInput.trim()) {
      // This will be used when AI is ready to be implemented
      console.log("User input:", userInput);
      // Clear the input field after submitting
      setUserInput("");
    }
  };
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
              <Bot className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                AI Assistant
              </span>
            </div>{" "}
            <h2 className="text-5xl font-bold mb-6">
              GeeniAI
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Intelligent Assistant
              </span>
            </h2>{" "}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              HomeGeeni's AI assistant helps you navigate the entire real estate
              process. From sending offers to managing documents and showings
              with intelligent automation.
            </p>
            <div className="space-y-6 mb-8">
              {" "}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <motion.div
                    animate={{
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    <MessageCircle className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
                <div>
                  {" "}
                  <h4 className="text-lg font-semibold mb-2">
                    Automated Offers
                  </h4>
                  <p className="text-gray-600">
                    Send and manage offers with AI-powered assistance that
                    streamlines the entire transaction process.
                  </p>
                </div>
              </div>{" "}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                      opacity: [1, 0.85, 1],
                      filter: [
                        "brightness(1)",
                        "brightness(1.5)",
                        "brightness(1)",
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <Lightbulb className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
                <div>
                  {" "}
                  <h4 className="text-lg font-semibold mb-2">AI Valuations</h4>
                  <p className="text-gray-600">
                    Get accurate property valuations powered by our advanced AI
                    that analyzes market data in real-time.
                  </p>
                </div>
              </div>{" "}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 8,
                        ease: "linear",
                        repeat: Infinity,
                      },
                      scale: {
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      },
                    }}
                  >
                    <Target className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
                <div>
                  {" "}
                  <h4 className="text-lg font-semibold mb-2">
                    Document Management
                  </h4>
                  <p className="text-gray-600">
                    Manage all your real estate documents and showings in one
                    place with AI-assisted organization and scheduling.
                  </p>
                </div>
              </div>
            </div>{" "}
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              {" "}
              <div className="relative flex-grow">
                {" "}
                <Input
                  type="text"
                  placeholder={
                    isInputFocused
                      ? "Ask GeeniAI anything about real estate..."
                      : ""
                  }
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => setIsInputFocused(false)}
                  className="bg-white border-2 border-gray-200 rounded-full px-5 py-6 text-lg pr-12 caret-gray-500"
                />
                {!userInput && !isInputFocused && (
                  <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                    <AnimatedTypingPlaceholder
                      texts={placeholderTexts}
                      typingSpeed={60}
                      deletingSpeed={30}
                      pauseDuration={1000}
                      className="text-gray-500 text-lg"
                      cursorColor="text-gray-500"
                      isActive={isInputFocused}
                    />
                  </div>
                )}
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-10 w-10 rounded-full"
                >
                  <Send className="h-5 w-5 text-white" />
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Right Content - AI Chat Interface Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-6 relative overflow-hidden">
              {/* Chat Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>{" "}
                <div className="flex items-center gap-2">
                  <img src="/logo.png" alt="HomeGeeni" className="h-6 w-auto" />
                  <span className="font-semibold text-gray-900">AI</span>
                  <p className="text-sm text-green-500">● Online</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-50 rounded-2xl rounded-tl-sm p-4 max-w-xs">
                    <p className="text-gray-700">
                      Hi! I'm your AI real estate assistant. What can I help you
                      with today?
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl rounded-tr-sm p-4 max-w-xs">
                    <p>I'm looking for a 3-bedroom house under $500K</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-50 rounded-2xl rounded-tl-sm p-4 max-w-xs">
                    <p className="text-gray-700">
                      Perfect! I found 12 properties matching your criteria. The
                      average price is $425K with great schools nearby.
                    </p>
                  </div>
                </div>
              </div>

              {/* Typing Indicator */}
              <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistantSection;
