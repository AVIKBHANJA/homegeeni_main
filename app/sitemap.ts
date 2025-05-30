import { getAllBlogPosts } from '@/lib/blogData';

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://homegeeni.com';
  
  // Get all blog posts
  const posts = getAllBlogPosts();
    // Generate blog post URLs
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/${post.id}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Generate category URLs
  const categories = Array.from(new Set(posts.map(post => post.category)));
  const categoryUrls = categories.map((category) => ({
    url: `${baseUrl}/blogs?category=${encodeURIComponent(category)}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  // Static pages
  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-use`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/fair-housing-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },  ];

  return [...staticUrls, ...blogUrls, ...categoryUrls];
}
