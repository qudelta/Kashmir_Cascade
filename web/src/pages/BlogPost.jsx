import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Tag, Share2 } from "lucide-react";
import { blogPosts } from "@/lib/blogs";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function BlogPost() {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === id);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Get related posts (same category, excluding current)
    const relatedPosts = blogPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 2);

    return (
        <div className="min-h-screen bg-background-dark">
            <main className="pt-28 pb-20">
                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative h-[300px] md:h-[450px] w-full mb-8"
                >
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent" />
                </motion.div>

                <div className="max-w-3xl mx-auto px-6">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mb-6"
                    >
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Blog
                        </Link>
                    </motion.div>

                    {/* Meta */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-wrap items-center gap-4 text-sm text-white/60 mb-4"
                    >
                        <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-medium">
                            {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display leading-tight"
                    >
                        {post.title}
                    </motion.h1>

                    {/* Author */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex items-center gap-4 pb-8 mb-8 border-b border-white/10"
                    >
                        <img
                            src={post.authorImage}
                            alt={post.author}
                            className="w-14 h-14 rounded-full"
                        />
                        <div>
                            <p className="text-white font-semibold">{post.author}</p>
                            <p className="text-white/50 text-sm">{post.authorRole}</p>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="prose prose-lg prose-invert max-w-none mb-12"
                    >
                        <div className="text-white/80 leading-relaxed space-y-4 blog-content">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    h2: ({ ...props }) => <h2 className="text-2xl font-bold text-white mt-10 mb-4 font-display" {...props} />,
                                    h3: ({ ...props }) => <h3 className="text-xl font-bold text-white mt-8 mb-3" {...props} />,
                                    p: ({ ...props }) => <p className="text-white/80 leading-relaxed mb-4" {...props} />,
                                    ul: ({ ...props }) => <ul className="list-disc list-inside text-white/80 mb-4 space-y-2" {...props} />,
                                    ol: ({ ...props }) => <ol className="list-decimal list-inside text-white/80 mb-4 space-y-2" {...props} />,
                                    li: ({ ...props }) => <li className="ml-4" {...props} />,
                                    strong: ({ ...props }) => <strong className="text-white font-semibold" {...props} />,
                                    table: ({ ...props }) => (
                                        <div className="overflow-x-auto my-6">
                                            <table className="w-full border-collapse text-sm" {...props} />
                                        </div>
                                    ),
                                    th: ({ ...props }) => <th className="text-left py-3 px-4 text-primary font-semibold border-b border-white/20" {...props} />,
                                    td: ({ ...props }) => <td className="py-3 px-4 border-b border-white/10 text-white/80" {...props} />,
                                    // Custom components for images in markdown
                                    img: ({ src, alt, ...props }) => (
                                        <img
                                            src={src}
                                            alt={alt}
                                            className="w-full rounded-xl my-6"
                                            {...props}
                                        />
                                    )
                                }}
                            >
                                {post.content}
                            </ReactMarkdown>
                        </div>
                    </motion.article>

                    {/* Tags */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-wrap items-center gap-2 pb-8 mb-8 border-b border-white/10"
                    >
                        <Tag className="w-4 h-4 text-white/50" />
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="bg-white/5 text-white/70 px-3 py-1 rounded-full text-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20 p-8 text-center mb-12"
                    >
                        <h3 className="text-2xl font-bold text-white mb-3 font-display">Ready to Experience Kashmir?</h3>
                        <p className="text-white/70 mb-6">Let us help you plan your perfect trip</p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-primary text-background-dark font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors"
                        >
                            Start Planning
                        </Link>
                    </motion.div>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {relatedPosts.map((relatedPost) => (
                                    <Link
                                        key={relatedPost.id}
                                        to={`/blog/${relatedPost.id}`}
                                        className="group bg-card-dark rounded-xl border border-white/5 overflow-hidden flex"
                                    >
                                        <div className="relative w-24 md:w-32 flex-shrink-0">
                                            <img
                                                src={relatedPost.image}
                                                alt={relatedPost.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-4 flex flex-col justify-center">
                                            <h4 className="text-white font-medium group-hover:text-primary transition-colors line-clamp-2 text-sm">
                                                {relatedPost.title}
                                            </h4>
                                            <p className="text-white/50 text-xs mt-1">{relatedPost.readTime}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>
            </main>
        </div>
    );
}
