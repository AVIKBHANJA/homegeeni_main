"use client";
import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import AnimatedSearchIcon from "./ui/animated-search-icon";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
import { useAuth } from "./auth/AuthContext";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearchInNav, setShowSearchInNav] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { openAuthModal } = useAuth();
  const placeholderTexts = [
    "Describe the home you want to search",
    "Ask GeeniAI about a specific home",
    "Hey there, I'm GeeniAI. How can I help you today?",
    "What's on your mind, today?",
  ];

  const suggestedSearches = [
    "3 bed 2 bath under $500K",
    "Homes near downtown Seattle",
    "Investment properties with good ROI",
    "Condos with city view",
    "Houses with large backyards",
    "New construction homes",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholderTexts.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [placeholderTexts.length]);
  useEffect(() => {
    const handleScroll = () => {
      const heroSearchSection = document.getElementById("hero-search-section");
      if (heroSearchSection) {
        const rect = heroSearchSection.getBoundingClientRect();
        const shouldShowSearch = rect.bottom < 100; // When search section is mostly scrolled past
        setShowSearchInNav(shouldShowSearch);
      }
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const searchContainer = document.getElementById(
        "navbar-search-container"
      );
      if (searchContainer && !searchContainer.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSearchFocused(false);
      }
    };

    if (isSearchFocused) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isSearchFocused]);
  const navItems = [
    { name: "Blogs", href: "/blogs" },
    { name: "FAQ", href: "/faq" },
  ];
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for homes:", searchQuery);
    // Search functionality would be implemented here
    setIsSearchFocused(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setIsSearchFocused(false);
    console.log("Searching for homes:", suggestion);
    // Search functionality would be implemented here
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSearchInNav
          ? "top-4 left-4 right-4 rounded-2xl"
          : "top-0 left-0 right-0 rounded-none"
      } ${
        isScrolled || showSearchInNav
          ? "bg-white/95 backdrop-blur-lg shadow-lg border border-gray-100"
          : "bg-white/90 backdrop-blur-sm shadow-md border-b border-gray-100"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-16">
          {" "}
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" aria-label="Go to homepage">
              <img
                src="/logo.png"
                alt="HomeGeeni"
                className="h-10 w-auto cursor-pointer hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>{" "}
          {/* Search Bar - Shows when scrolled past hero search */}{" "}
          {showSearchInNav && (
            <div
              id="navbar-search-container"
              className={`hidden lg:flex items-center flex-1 transition-all duration-300 ${
                isSearchFocused ? "max-w-2xl" : "max-w-md"
              } mx-8 relative`}
            >
              {" "}
              <form onSubmit={handleSearch} className="relative w-full">
                <div className="flex items-center bg-gray-50 rounded-full hover:shadow-lg focus-within:shadow-xl transition-all duration-300">
                  <div className="flex items-center pl-4 pr-2">
                    <AnimatedSearchIcon size={18} />
                  </div>{" "}
                  <Input
                    type="text"
                    placeholder={placeholderTexts[currentPlaceholder]}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    className="flex-1 border-0 py-2 px-0 bg-transparent focus-visible:ring-0 focus:ring-0 focus:ring-offset-0 shadow-none outline-none placeholder:text-gray-500 text-sm"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    className="m-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-4"
                  >
                    <Search className="w-4 h-4" />
                  </Button>
                </div>

                {/* Search Suggestions Dropdown */}
                {isSearchFocused && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
                    <div className="p-4">
                      <p className="text-sm font-medium text-gray-500 mb-3">
                        Suggested Searches
                      </p>
                      <div className="space-y-1">
                        {suggestedSearches.map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-150 flex items-center gap-2"
                          >
                            <Search className="w-4 h-4 text-gray-400" />
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          )}
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}{" "}
            <Button
              onClick={openAuthModal}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6"
            >
              LogIn / SignUp
            </Button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-4 pt-4">
            {" "}
            {/* Mobile Search - Show when scrolled */}
            {showSearchInNav && (
              <div className="mb-4">
                {" "}
                <form onSubmit={handleSearch} className="relative">
                  <div className="flex items-center bg-gray-50 rounded-full hover:shadow-lg focus-within:shadow-xl transition-all duration-300">
                    <div className="flex items-center pl-4 pr-2">
                      <AnimatedSearchIcon size={18} />
                    </div>{" "}
                    <Input
                      type="text"
                      placeholder={placeholderTexts[currentPlaceholder]}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 border-0 py-2 px-0 bg-transparent focus-visible:ring-0 focus:ring-0 focus:ring-offset-0 shadow-none outline-none placeholder:text-gray-500 text-sm"
                    />
                    <Button
                      type="submit"
                      size="sm"
                      className="m-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-4"
                    >
                      <Search className="w-4 h-4" />
                    </Button>
                  </div>
                </form>
              </div>
            )}
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}{" "}
              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.location.href = "/auth";
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full"
              >
                LogIn / SignUp
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
