"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { HelpCircle, Sparkles } from "lucide-react";

export default function FAQPage() {
  const faqCategories = [
    {
      title: "General Questions",
      items: [
        {
          question: "What is HomeGeeni?",
          answer:
            "HomeGeeni is an AI-powered real estate platform that simplifies home buying, selling, and investing by automating listings, offers, valuations, documents, and showings—all in one place. Our goal is to make real estate transactions smoother and more efficient with intelligent technology.",
        },
        {
          question: "How does HomeGeeni's AI work?",
          answer:
            "Our AI technology analyzes market data, property history, user preferences, and location information to provide personalized recommendations, accurate valuations, and automated assistance throughout the real estate process. The AI continuously learns and improves based on user interactions and market changes.",
        },
        {
          question: "Is HomeGeeni available in my area?",
          answer:
            "HomeGeeni is currently available in major metropolitan areas across the United States with plans for expansion. Enter your location on our homepage to check if our services are available in your area. We're rapidly expanding to new regions every month.",
        },
        {
          question: "Do I need to create an account to use HomeGeeni?",
          answer:
            "While you can browse listings and use basic features without an account, creating a free account unlocks personalized recommendations, saved searches, property alerts, and the ability to send and receive offers. Registration takes just a minute and enhances your experience significantly.",
        },
      ],
    },
    {
      title: "Property Search & Listings",
      items: [
        {
          question: "How are property recommendations personalized for me?",
          answer:
            "Our AI learns from your search patterns, saved properties, time spent viewing listings, and explicit preferences you set. It combines this with market data and comparable properties to suggest homes that match your specific needs and preferences. The more you use HomeGeeni, the better your recommendations become.",
        },
        {
          question: "Are all listings on HomeGeeni exclusive?",
          answer:
            "HomeGeeni includes both exclusive listings and properties from MLS systems. Our platform has direct integrations with multiple listing services nationwide, ensuring you get access to the most comprehensive and up-to-date inventory of available properties.",
        },
        {
          question: "How often are new properties added?",
          answer:
            "Our system updates listings in real-time as they become available on the market. You can set up alerts to be notified immediately when new properties matching your criteria are listed, giving you an edge in competitive markets.",
        },
        {
          question: "Can I list my property on HomeGeeni?",
          answer:
            "Yes! HomeGeeni offers comprehensive listing services for property owners. Simply create an account, click on 'Sell' in the navigation menu, and follow the guided process to create your listing with professional photos, virtual tours, and AI-enhanced descriptions.",
        },
      ],
    },
    {
      title: "AI Features & Technology",
      items: [
        {
          question: "How accurate are HomeGeeni's property valuations?",
          answer:
            "Our AI valuation model has been proven to be within 3.5% of final sale prices on average. The system analyzes thousands of data points including comparable sales, property features, market trends, location factors, and economic indicators to provide highly accurate estimates.",
        },
        {
          question: "Can HomeGeeni help with negotiating offers?",
          answer:
            "No, HomeGeeni does not directly negotiate offers. That's up to your agent if you are using one.",
        },
        {
          question: "How does document management work?",
          answer:
            "HomeGeeni's document system securely stores, organizes, and tracks all transaction documents. Our AI can extract key information, flag important dates, and ensure nothing is missed during the process. All documents are encrypted and accessible only to authorized parties.",
        },
        {
          question: "Is my personal data secure with HomeGeeni's AI?",
          answer:
            "Absolutely. We take data security extremely seriously. All personal information is encrypted using industry-leading security standards. Our AI uses anonymized data for training, and we never share your personal information with third parties without your explicit consent.",
        },
      ],
    },
    {
      title: "Account & Support",
      items: [
        {
          question: "How do I get support if I have questions?",
          answer:
            "HomeGeeni offers multiple support channels: 24/7 AI chat support for immediate assistance, email support at help@homegeeni.com, and phone support during business hours at (555) 123-4567. For premium members, we also offer dedicated human support agents.",
        },
        {
          question: "Can I delete my account and data?",
          answer:
            "Yes, you have full control over your account and data. You can request account deletion from your account settings page. Upon deletion, all personal information is removed from our systems in accordance with our Privacy Policy and applicable regulations.",
        },
        {
          question: "What's the difference between free and premium accounts?",
          answer:
            "Free accounts provide access to basic search, property viewing, and AI recommendations. Premium accounts unlock advanced features like AI valuation reports, direct agent connections, priority support, unlimited saved searches, and specialized investment analytics.",
        },
        {
          question: "How can I provide feedback on HomeGeeni?",
          answer:
            "We love hearing from our users! You can provide feedback through the 'Feedback' option in your account menu, by emailing feedback@homegeeni.com, or by participating in our regular user surveys. Your input directly influences our product development.",
        },
      ],
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 lg:py-24">
        <div className="container max-w-5xl px-4 mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 mb-6 shadow-sm">
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">
                Help Center
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about HomeGeeni's AI-powered real
              estate platform, features, and services.
            </p>
          </motion.div>

          {/* Search Bar - Could be implemented later */}
          {/*
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for questions..."
                className="pl-10 py-6 bg-white border-gray-200"
              />
            </div>
          </div>
          */}

          {/* FAQ Categories */}
          <div className="space-y-10">
            {faqCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {category.title}
                  </h2>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <Accordion
                    type="single"
                    collapsible
                    className="divide-y divide-gray-100"
                  >
                    {category.items.map((item, itemIndex) => (
                      <AccordionItem
                        key={itemIndex}
                        value={`item-${index}-${itemIndex}`}
                        className="border-none"
                      >
                        <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 font-medium text-base text-gray-800">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 text-gray-600 leading-relaxed">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Still have questions section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 shadow-sm"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Our support team is here to help. Contact us and we'll get back to
              you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:help@homegeeni.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white border border-gray-200 text-blue-600 hover:bg-blue-50 hover:border-blue-100 transition-all duration-300"
              >
                Email Support
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
