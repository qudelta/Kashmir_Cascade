"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { blogPosts } from "@/lib/blogs";
import { useMobile } from "@/lib/useMobile";

export default function BlogPage() {
    const isMobile = useMobile();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: isMobile ? 0.05 : 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: isMobile ? 0.3 : 0.5, ease: "easeOut" as const },
        },
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Sort by date, most recent first
    const sortedPosts = [...blogPosts].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const featuredPost = sortedPosts[0];
    const otherPosts = sortedPosts.slice(1);

    return (
        <main className="min-h-screen bg-background-dark pt-28 pb-20">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span className="text-primary text-sm font-medium">Travel Stories & Tips</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
                        Our Blog
                    </h1>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Insights, tips, and stories from our team and travelers. Real experiences from the heart of Kashmir.
                    </p>
                </motion.div>

                {/* Featured Post */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <Link href={`/blog/${featuredPost.id}`} className="group block">
                        <div className="relative bg-card-dark rounded-2xl border border-white/5 overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-0">
                                <div className="relative h-[250px] md:h-[400px]">
                                    <Image
                                        src={featuredPost.image}
                                        alt={featuredPost.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute top-4 left-4 bg-primary text-background-dark text-xs font-bold px-3 py-1 rounded-full">
                                        Latest
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                                        <span className="bg-white/10 px-3 py-1 rounded-full">{featuredPost.category}</span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {featuredPost.readTime}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors font-display">
                                        {featuredPost.title}
                                    </h2>
                                    <p className="text-white/70 mb-6 line-clamp-3">
                                        {featuredPost.excerpt}
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={featuredPost.authorImage}
                                            alt={featuredPost.author}
                                            width={40}
                                            height={40}
                                            className="rounded-full"
                                        />
                                        <div>
                                            <p className="text-white font-medium text-sm">{featuredPost.author}</p>
                                            <p className="text-white/50 text-xs flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {formatDate(featuredPost.date)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>

                {/* Other Posts Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {otherPosts.map((post) => (
                        <motion.div key={post.id} variants={itemVariants}>
                            <Link href={`/blog/${post.id}`} className="group block h-full">
                                <article className="bg-card-dark rounded-2xl border border-white/5 overflow-hidden h-full flex flex-col">
                                    <div className="relative h-48">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="p-5 flex flex-col flex-1">
                                        <div className="flex items-center gap-3 text-xs text-white/50 mb-3">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {formatDate(post.date)}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-white/60 text-sm mb-4 line-clamp-2 flex-1">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                                            <div className="flex items-center gap-2">
                                                <Image
                                                    src={post.authorImage}
                                                    alt={post.author}
                                                    width={28}
                                                    height={28}
                                                    className="rounded-full"
                                                />
                                                <span className="text-white/70 text-xs">{post.author}</span>
                                            </div>
                                            <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                                Read <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </main>
    );
}
