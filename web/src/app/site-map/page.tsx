import Link from "next/link";
import { Metadata } from "next";
import { destinations } from "@/lib/data";
import { packages } from "@/lib/data";
import { blogPosts } from "@/lib/blogs";
import { MapPin, Package, FileText, Info, Phone, HelpCircle, Image, Star, Shield, Calendar, BookOpen } from "lucide-react";

export const metadata: Metadata = {
    title: "Sitemap",
    description: "Complete sitemap of Kashmir Travels website. Find all our pages including destinations, tour packages, blog posts, and more.",
};

const mainPages = [
    { name: "Home", href: "/", icon: MapPin, description: "Welcome to Kashmir Travels" },
    { name: "About Us", href: "/about", icon: Info, description: "Our story and team" },
    { name: "Contact", href: "/contact", icon: Phone, description: "Get in touch with us" },
    { name: "FAQ", href: "/faq", icon: HelpCircle, description: "Frequently asked questions" },
    { name: "Gallery", href: "/gallery", icon: Image, description: "Photo gallery of Kashmir" },
    { name: "Reviews", href: "/reviews", icon: Star, description: "Customer testimonials" },
    { name: "Experiences", href: "/experiences", icon: Calendar, description: "Unique Kashmir experiences" },
];

const legalPages = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cancellation Policy", href: "/cancellation-policy" },
];

export default function SitemapPage() {
    return (
        <main className="min-h-screen bg-background-dark pt-28 pb-20">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Navigation</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4 font-display">
                        Sitemap
                    </h1>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Find everything on our website. Navigate to any page quickly from here.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Main Pages */}
                    <div className="bg-card-dark rounded-2xl border border-white/10 p-6">
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-primary" />
                            Main Pages
                        </h2>
                        <ul className="space-y-3">
                            {mainPages.map((page) => (
                                <li key={page.href}>
                                    <Link
                                        href={page.href}
                                        className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors group"
                                    >
                                        <page.icon className="w-4 h-4 text-primary/60 group-hover:text-primary" />
                                        <span>{page.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Destinations */}
                    <div className="bg-card-dark rounded-2xl border border-white/10 p-6">
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-primary" />
                            Destinations
                        </h2>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/destinations"
                                    className="text-primary font-medium hover:underline"
                                >
                                    All Destinations →
                                </Link>
                            </li>
                            {destinations.map((dest) => (
                                <li key={dest.id}>
                                    <Link
                                        href={`/destinations/${dest.id}`}
                                        className="text-white/70 hover:text-primary transition-colors"
                                    >
                                        {dest.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Packages */}
                    <div className="bg-card-dark rounded-2xl border border-white/10 p-6">
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Package className="w-5 h-5 text-primary" />
                            Tour Packages
                        </h2>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/packages"
                                    className="text-primary font-medium hover:underline"
                                >
                                    All Packages →
                                </Link>
                            </li>
                            {packages.map((pkg) => (
                                <li key={pkg.id}>
                                    <Link
                                        href={`/packages/${pkg.id}`}
                                        className="text-white/70 hover:text-primary transition-colors"
                                    >
                                        {pkg.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Blog Posts */}
                    <div className="bg-card-dark rounded-2xl border border-white/10 p-6">
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-primary" />
                            Blog & Articles
                        </h2>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/blog"
                                    className="text-primary font-medium hover:underline"
                                >
                                    All Blog Posts →
                                </Link>
                            </li>
                            {blogPosts.slice(0, 8).map((post) => (
                                <li key={post.id}>
                                    <Link
                                        href={`/blog/${post.id}`}
                                        className="text-white/70 hover:text-primary transition-colors line-clamp-1"
                                    >
                                        {post.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Pages */}
                    <div className="bg-card-dark rounded-2xl border border-white/10 p-6">
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-primary" />
                            Legal & Policies
                        </h2>
                        <ul className="space-y-3">
                            {legalPages.map((page) => (
                                <li key={page.href}>
                                    <Link
                                        href={page.href}
                                        className="text-white/70 hover:text-primary transition-colors"
                                    >
                                        {page.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* XML Sitemap */}
                    <div className="bg-card-dark rounded-2xl border border-white/10 p-6">
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-primary" />
                            For Search Engines
                        </h2>
                        <p className="text-white/60 mb-4 text-sm">
                            Search engines can access our XML sitemap for better indexing.
                        </p>
                        <a
                            href="/sitemap.xml"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary hover:underline"
                        >
                            View sitemap.xml →
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
