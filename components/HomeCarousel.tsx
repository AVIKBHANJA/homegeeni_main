"use client";

import { motion } from "framer-motion";
import { Heart, Search } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import AnimatedSearchIcon from "./ui/animated-search-icon";
import AnimatedTypingPlaceholder from "./ui/animated-typing-placeholder";

// Create dummy home listing data
const homes = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
    price: "$685,000",
    beds: 3,
    baths: 2,
    sqft: 1850,
    address: "123 Main St, Seattle, WA 98101",
    listingType: "For Sale",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$1,350,000",
    beds: 4,
    baths: 3,
    sqft: 2650,
    address: "456 Lake View Dr, Bellevue, WA 98004",
    listingType: "For Sale",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$1,399,950",
    beds: 4,
    baths: 2.5,
    sqft: 2400,
    address: "789 Pine Rd, Kirkland, WA 98033",
    listingType: "For Sale",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$1,300,000",
    beds: 5,
    baths: 3,
    sqft: 2850,
    address: "321 Forest Ln, Redmond, WA 98052",
    listingType: "For Sale",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80",
    price: "$395,000",
    beds: 1,
    baths: 1,
    sqft: 750,
    address: "555 Downtown Ave, Seattle, WA 98101",
    listingType: "For Sale",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$1,875,000",
    beds: 5,
    baths: 4.5,
    sqft: 4200,
    address: "888 Hilltop Dr, Mercer Island, WA 98040",
    listingType: "For Sale",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$1,275,000",
    beds: 4,
    baths: 3,
    sqft: 2350,
    address: "222 Coastal Way, Edmonds, WA 98020",
    listingType: "For Sale",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80",
    price: "$11,250,000",
    beds: 6,
    baths: 7,
    sqft: 8500,
    address: "999 Luxury Ln, Medina, WA 98039",
    listingType: "For Sale",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1600047509807-f8261a1f4a5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80",
    price: "$888,000",
    beds: 3,
    baths: 2.5,
    sqft: 1950,
    address: "777 West St, Tacoma, WA 98405",
    listingType: "For Sale",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80",
    price: "$699,950",
    beds: 3,
    baths: 2,
    sqft: 1800,
    address: "444 East Ave, Issaquah, WA 98027",
    listingType: "For Sale",
  },
];

// Duplicate the homes array for continuous scrolling effect
const extendedHomes = [...homes, ...homes];

const HomeCarousel = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const placeholderTexts = [
    "Describe the home you want to search...",
    "Ask GeeniAI about a specific home...",
    "Hey there, I'm GeeniAI. How can I help you today?",
    "What's on your mind, today?",
    "Find luxury homes with city views...",
    "Search for investment properties...",
    "New construction homes near me...",
    "Houses with large backyards...",
  ];
  return (
    <section className="py-10 mt-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white"></div>
      <div className="container px-4 mx-auto mb-10 relative">
        <h2 className="text-5xl md:text-6xl font-medium mb-6 text-center">
          Find Your Home <span className="text-blue-400">Today</span>
        </h2>
        <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto">
          The future is here. Buy your next home with HomeGeeni
        </p>{" "}
        <div className="relative mt-10 max-w-3xl mx-auto">
          <motion.div
            className="flex items-center bg-white rounded-full border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            {" "}
            <div className="flex items-center pl-5 pr-2 text-blue-500">
              <AnimatedSearchIcon size={24} />
            </div>{" "}
            <input
              type="text"
              placeholder={
                isSearchFocused ? "Search for your dream home..." : ""
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="flex-1 px-4 py-4 rounded-full bg-transparent focus:outline-none text-gray-800 caret-gray-500"
            />
            {!searchQuery && !isSearchFocused && (
              <div className="absolute inset-y-0 left-20 flex items-center pointer-events-none">
                <AnimatedTypingPlaceholder
                  texts={placeholderTexts}
                  typingSpeed={50}
                  deletingSpeed={25}
                  pauseDuration={1000}
                  className="text-gray-500 text-base"
                  cursorColor="text-gray-500"
                  isActive={isSearchFocused}
                />
              </div>
            )}
            <Button
              type="submit"
              className="m-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-5 h-12"
            >
              <Search className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="w-full overflow-hidden relative">
        <motion.div
          className="flex space-x-6"
          initial={{ opacity: 0, x: "0%" }}
          animate={{
            opacity: 1,
            x: "-50%",
          }}
          transition={{
            opacity: { duration: 0.5 },
            x: {
              duration: 50,
              repeat: Infinity,
              ease: "linear",
              delay: 0.5,
            },
          }}
          style={{
            width: "fit-content",
            display: "flex",
          }}
        >
          {extendedHomes.map((home, index) => (
            <motion.div
              key={`home-${index}`}
              className="w-[200px] flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className="relative">
                <img
                  src={home.image}
                  alt={`Home at ${home.address}`}
                  className="h-[120px] w-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                  {home.listingType}
                </div>
                <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm">
                  <Heart className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              <div className="p-3">
                <p className="text-base font-bold">{home.price}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                  <span>{home.beds} bd</span>
                  <span>•</span>
                  <span>{home.baths} ba</span>
                  <span>•</span>
                  <span>{home.sqft} sqft</span>
                </div>
                <p className="text-xs text-gray-700 mt-1 truncate">
                  {home.address}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="w-full overflow-hidden mt-6 relative">
        <motion.div
          className="flex space-x-6"
          initial={{ opacity: 0, x: "-30%" }}
          animate={{
            opacity: 1,
            x: "0%",
          }}
          transition={{
            opacity: { duration: 0.5 },
            x: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              delay: 0.2,
            },
          }}
          style={{
            width: "fit-content",
            display: "flex",
          }}
        >
          {extendedHomes
            .slice()
            .reverse()
            .map((home, index) => (
              <motion.div
                key={`home-reverse-${index}`}
                className="w-[200px] flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="relative">
                  <img
                    src={home.image}
                    alt={`Home at ${home.address}`}
                    className="h-[120px] w-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                    {home.listingType}
                  </div>
                  <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm">
                    <Heart className="w-4 h-4 text-gray-500" />
                  </button>
                </div>

                <div className="p-3">
                  <p className="text-base font-bold">{home.price}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                    <span>{home.beds} bd</span>
                    <span>•</span>
                    <span>{home.baths} ba</span>
                    <span>•</span>
                    <span>{home.sqft} sqft</span>
                  </div>
                  <p className="text-xs text-gray-700 mt-1 truncate">
                    {home.address}
                  </p>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCarousel;
