import { MetadataRoute } from 'next';
import { destinations } from '@/lib/data';
import { packages } from '@/lib/data';
import { blogPosts } from '@/lib/blogs';

const baseUrl = 'https://kashmirtravels.com';

export default function sitemap(): MetadataRoute.Sitemap {
    // Static pages
    const staticPages = [
        { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
        { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/packages`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
        { url: `${baseUrl}/destinations`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
        { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
        { url: `${baseUrl}/gallery`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
        { url: `${baseUrl}/reviews`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
        { url: `${baseUrl}/experiences`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
        { url: `${baseUrl}/site-map`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.3 },
        { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
        { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
        { url: `${baseUrl}/cancellation-policy`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    ];

    // Dynamic destination pages
    const destinationPages = destinations.map((dest) => ({
        url: `${baseUrl}/destinations/${dest.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Dynamic package pages
    const packagePages = packages.map((pkg) => ({
        url: `${baseUrl}/packages/${pkg.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.85,
    }));

    // Dynamic blog pages
    const blogPages = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.id}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticPages, ...destinationPages, ...packagePages, ...blogPages];
}
