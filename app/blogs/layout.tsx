import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Blog - Expert Insights & Market Analysis | HomeGeeni",
  description:
    "Discover expert real estate insights, market analysis, investment strategies, and home buying guides. AI-powered content and industry expertise to help you navigate the property market.",
  keywords:
    "real estate blog, property market analysis, home buying guide, real estate investment, market trends, property insights, AI real estate",
  openGraph: {
    title: "Real Estate Blog - Expert Insights & Market Analysis | HomeGeeni",
    description:
      "Discover expert real estate insights, market analysis, investment strategies, and home buying guides. AI-powered content and industry expertise.",
    url: "https://homegeeni.com/blogs",
    siteName: "HomeGeeni",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "HomeGeeni Real Estate Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Blog - Expert Insights & Market Analysis | HomeGeeni",
    description:
      "Discover expert real estate insights, market analysis, investment strategies, and home buying guides.",
    images: [
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=630&fit=crop",
    ],
    creator: "@homegeeni",
  },
  alternates: {
    canonical: "https://homegeeni.com/blogs",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
