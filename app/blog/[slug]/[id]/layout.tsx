import { Metadata } from "next";
import { getBlogPost } from "@/lib/blogData";

interface BlogPostPageProps {
  params: {
    slug: string;
    id: string;
  };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug, id } = await params;
  const post = getBlogPost(slug, id);

  if (!post) {
    return {
      title: "Blog Post Not Found - HomeGeeni",
      description: "The requested blog post could not be found.",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://homegeeni.com";
  const pageUrl = `${siteUrl}/blog/${post.slug}/${post.id}`;

  // Generate structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [post.featuredImage],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      image: post.author.avatar,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "HomeGeeni",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    articleSection: post.category,
    keywords: post.tags.join(", "),
    wordCount: post.content.split(" ").length,
    timeRequired: post.readTime,
  };

  return {
    title: post.seoTitle || `${post.title} - HomeGeeni Blog`,
    description: post.seoDescription || post.excerpt,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      url: pageUrl,
      siteName: "HomeGeeni",
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      section: post.category,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: [post.featuredImage],
      creator: "@homegeeni",
    },
    alternates: {
      canonical: pageUrl,
    },
    other: {
      "application/ld+json": JSON.stringify(structuredData),
      "article:author": post.author.name,
      "article:published_time": post.publishedAt,
      "article:section": post.category,
      "article:tag": post.tags.join(", "),
    },
  };
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
