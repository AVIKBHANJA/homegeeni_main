"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowLeft,
  Share2,
  BookOpen,
  Sparkles,
  ChevronRight,
  Home,
  ChevronUp,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  getBlogPost,
  getRelatedBlogPosts,
  type BlogPost,
} from "@/lib/blogData";

// Component for rendering blog content with proper formatting
function BlogContent({ content }: { content: string }) {
  return (
    <div
      className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700"
      dangerouslySetInnerHTML={{
        __html: content
          .split("\n")
          .map((line) => {
            // Convert markdown-style headers
            if (line.startsWith("# ")) {
              return `<h1 class="text-3xl font-bold mt-8 mb-4">${line.substring(
                2
              )}</h1>`;
            } else if (line.startsWith("## ")) {
              return `<h2 class="text-2xl font-semibold mt-6 mb-3">${line.substring(
                3
              )}</h2>`;
            } else if (line.startsWith("### ")) {
              return `<h3 class="text-xl font-semibold mt-5 mb-2">${line.substring(
                4
              )}</h3>`;
            } else if (line.startsWith("**") && line.endsWith("**")) {
              return `<p class="font-semibold text-gray-900 mt-4 mb-2">${line.slice(
                2,
                -2
              )}</p>`;
            } else if (line.startsWith("- ")) {
              return `<li class="ml-4">${line.substring(2)}</li>`;
            } else if (line.trim() === "") {
              return "<br>";
            } else {
              return `<p class="mb-4 leading-relaxed">${line}</p>`;
            }
          })
          .join(""),
      }}
    />
  );
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const id = params.id as string;
  const [showBackToTop, setShowBackToTop] = useState(false);

  const post = getBlogPost(slug, id);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post);

  // Show/hide back to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        <main className="pt-20">
          {/* Breadcrumb */}
          <section className="py-4 bg-gray-50 border-b">
            <div className="container mx-auto px-4">
              <nav className="flex items-center space-x-2 text-sm text-gray-600">
                <Link
                  href="/"
                  className="hover:text-blue-600 flex items-center gap-1"
                >
                  <Home className="w-4 h-4" />
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/blogs" className="hover:text-blue-600">
                  Blog
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-gray-500 truncate max-w-xs">
                  {post.title}
                </span>
              </nav>
            </div>
          </section>

          {/* Hero Section */}
          <section className="py-12 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Category and AI Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    {post.isAIGenerated && (
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Sparkles className="w-4 h-4" />
                        AI Generated
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    {post.title}
                  </h1>

                  {/* Excerpt */}
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                    <div className="flex items-center gap-2">
                      <Image
                        src={post.author.avatar || "/logo.png"}
                        alt={post.author.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-medium text-gray-900">
                          {post.author.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {post.author.role}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    <Link href="/blogs">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                      </Button>
                    </Link>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleShare}
                      className="flex items-center gap-2"
                    >
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Featured Image */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative overflow-hidden rounded-2xl shadow-xl"
                >
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    width={1200}
                    height={600}
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="prose prose-lg max-w-none"
                >
                  <BlogContent content={post.content} />
                </motion.article>

                {/* Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-12 pt-8 border-t border-gray-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Tag className="w-5 h-5" />
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Author Bio */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-12"
                >
                  <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <Image
                          src={post.author.avatar || "/logo.png"}
                          alt={post.author.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">
                            {post.author.name}
                          </h4>
                          <p className="text-gray-600 mb-2">
                            {post.author.role}
                          </p>
                          <p className="text-sm text-gray-500">
                            Expert in real estate technology and market
                            analysis, helping buyers and sellers navigate the
                            modern property market with data-driven insights.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                      Related Articles
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {relatedPosts.map((relatedPost, index) => (
                        <motion.div
                          key={relatedPost.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.7 + index * 0.1,
                          }}
                        >
                          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                            <div className="relative overflow-hidden">
                              <Image
                                src={relatedPost.featuredImage}
                                alt={relatedPost.title}
                                width={300}
                                height={150}
                                className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute top-2 left-2">
                                <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded text-xs font-medium">
                                  {relatedPost.category}
                                </span>
                              </div>
                            </div>

                            <CardContent className="p-4">
                              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                                {relatedPost.title}
                              </h3>
                              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                {relatedPost.excerpt}
                              </p>

                              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                                <span>{relatedPost.readTime}</span>
                                <span>
                                  {new Date(
                                    relatedPost.publishedAt
                                  ).toLocaleDateString()}
                                </span>
                              </div>

                              <Link
                                href={`/blog/${relatedPost.slug}/${relatedPost.id}`}
                                className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1 group"
                              >
                                Read More
                                <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                              </Link>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          )}

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
                <BookOpen className="w-12 h-12 text-white mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Enjoyed This Article?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Subscribe to our newsletter and get the latest real estate
                  insights, market analysis, and expert tips delivered to your
                  inbox.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border-0 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-white/30"
                  />
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6">
                    Subscribe
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        {/* Back to Top Button */}
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </div>
      <Footer />
    </>
  );
}
