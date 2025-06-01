"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  Calendar,
  User,
  Search,
  Filter,
  BookOpen,
  ArrowRight,
  Sparkles,
  Tag,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import AnimatedCircularLogo from "@/components/ui/animated-circular-logo";
import {
  getAllBlogPosts,
  getUniqueCategories,
  type BlogPost,
} from "@/lib/blogData";

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const allPosts = getAllBlogPosts();
  const categories = ["All", ...getUniqueCategories()];
  const postsPerPage = 6;

  // Filter posts based on search and category
  const filteredPosts = allPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        <main className="pt-24">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-4xl mx-auto"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 mb-6 shadow-sm">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">
                    HomeGeeni Blog
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Real Estate
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Insights & Guides
                  </span>
                </h1>

                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Discover expert insights, market analysis, and practical
                  guides to navigate the real estate world with confidence.
                  Powered by AI and industry expertise.
                </p>

                {/* Search Bar */}
                <form
                  onSubmit={handleSearch}
                  className="max-w-2xl mx-auto mb-8"
                >
                  <div className="flex items-center bg-white rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center pl-6 pr-2">
                      <Search className="w-5 h-5 text-gray-400" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Search articles, topics, or keywords..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 border-0 py-4 px-4 bg-transparent focus-visible:ring-0 placeholder:text-gray-500 text-base"
                    />
                    <Button
                      type="submit"
                      size="sm"
                      className="m-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6"
                    >
                      Search
                    </Button>
                  </div>
                </form>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {allPosts.length}+
                    </div>
                    <div className="text-gray-600">Expert Articles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {categories.length - 1}
                    </div>
                    <div className="text-gray-600">Categories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-gray-600">AI Updates</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Filter Section */}
          <section className="py-8 bg-white border-b border-gray-200">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">
                    Filter by category:
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={
                        selectedCategory === category ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => handleCategoryChange(category)}
                      className={
                        selectedCategory === category
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                          : "hover:bg-gray-100"
                      }
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Results count */}
              <div className="mt-4 text-sm text-gray-600">
                Showing {paginatedPosts.length} of {filteredPosts.length}{" "}
                articles
                {searchQuery && <span> for "{searchQuery}"</span>}
                {selectedCategory !== "All" && (
                  <span> in {selectedCategory}</span>
                )}
              </div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              {paginatedPosts.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16"
                >
                  <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    No articles found
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Try adjusting your search terms or browsing different
                    categories.
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                      setCurrentPage(1);
                    }}
                    variant="outline"
                  >
                    Clear Filters
                  </Button>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {paginatedPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group"
                    >
                      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                        <div className="relative overflow-hidden">
                          <Image
                            src={post.featuredImage}
                            alt={post.title}
                            width={400}
                            height={200}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />

                          {/* Category Badge */}
                          <div className="absolute top-3 left-3">
                            <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                              {post.category}
                            </span>
                          </div>

                          {/* AI Generated Badge */}
                          {post.isAIGenerated && (
                            <div className="absolute top-3 right-3">
                              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                                <Sparkles className="w-3 h-3" />
                                AI
                              </div>
                            </div>
                          )}
                        </div>

                        <CardContent className="p-6 flex flex-col flex-grow">
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(post.publishedAt).toLocaleDateString(
                                "en-US",
                                {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                }
                              )}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </div>
                          </div>
                          <h2 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {post.title}
                          </h2>
                          <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                            {post.excerpt}
                          </p>
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs"
                              >
                                <Tag className="w-3 h-3" />
                                {tag}
                              </span>
                            ))}
                            {post.tags.length > 2 && (
                              <span className="text-xs text-gray-500">
                                +{post.tags.length - 2} more
                              </span>
                            )}
                          </div>{" "}
                          {/* Author and Read More */}
                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-2">
                              {post.author.name === "Geeni AI" ||
                              post.author.name === "HomeGeeni AI" ||
                              post.author.name === "GeeniAI" ? (
                                <AnimatedCircularLogo size={24} />
                              ) : (
                                <Image
                                  src={post.author.avatar || "/logo.png"}
                                  alt={post.author.name}
                                  width={24}
                                  height={24}
                                  className="rounded-full"
                                />
                              )}
                              <div className="text-sm">
                                <div className="font-medium text-gray-900">
                                  {post.author.name}
                                </div>
                                <div className="text-gray-500">
                                  {post.author.role}
                                </div>
                              </div>
                            </div>

                            <Link
                              href={`/blog/${post.slug}/${post.id}`}
                              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium group-hover:gap-2 transition-all"
                            >
                              Read More
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.article>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex justify-center mt-12 gap-2"
                >
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className={
                          currentPage === page
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                            : ""
                        }
                      >
                        {page}
                      </Button>
                    )
                  )}
                </motion.div>
              )}
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Stay Updated with Real Estate Insights
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Get the latest market analysis, investment tips, and
                  AI-powered insights delivered to your inbox weekly.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus-visible:ring-white/30"
                  />
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">
                    Subscribe
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
