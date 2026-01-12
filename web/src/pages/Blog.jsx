import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { blogPosts } from "@/lib/blogs";
import { useMobile } from "@/lib/useMobile";
import { PageHeader } from "@/components/layout/page-header";
import { Footer } from "@/components/layout/footer";
import SEO from "@/components/layout/SEO";

export default function Blog() {
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
            transition: { duration: isMobile ? 0.3 : 0.5, ease: "easeOut" },
        },
    };

    const formatDate = (dateString) => {
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
        <div className="min-h-screen bg-background-light">
            <SEO
                title="Blog"
                description="Travel stories, guides, and tips for exploring Kashmir and Ladakh. Learn about the best time to visit, places to see, and more."
                canonical="/blog"
            />
            <PageHeader
                title="Our Blog"
                subtitle={<>Travel <span className="text-primary">Stories</span> & Tips from Kashmir</>}
                image="/images/Great Lakes.jpg"
            />

            <main className="py-20">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Featured Post */}
                    {featuredPost && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-12"
                        >
                            <Link to={`/blog/${featuredPost.id}`} className="group block">
                                <div className="relative bg-white rounded-2xl border border-text-dark/10 overflow-hidden">
                                    <div className="grid md:grid-cols-2 gap-0">
                                        <div className="relative h-[250px] md:h-[400px]">
                                            <img
                                                src={featuredPost.image}
                                                alt={featuredPost.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 left-4 bg-primary text-background-dark text-xs font-bold px-3 py-1 rounded-full">
                                                Latest
                                            </div>
                                        </div>
                                        <div className="p-6 md:p-8 flex flex-col justify-center">
                                            <div className="flex items-center gap-4 text-sm text-text-dark/80 mb-4">
                                                <span className="bg-white/10 px-3 py-1 rounded-full">{featuredPost.category}</span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {featuredPost.readTime}
                                                </span>
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-4 group-hover:text-primary transition-colors font-display">
                                                {featuredPost.title}
                                            </h2>
                                            <p className="text-text-dark/90 mb-6 line-clamp-3">
                                                {featuredPost.excerpt}
                                            </p>
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={featuredPost.authorImage}
                                                    alt={featuredPost.author}
                                                    className="w-10 h-10 rounded-full"
                                                />
                                                <div>
                                                    <p className="text-text-dark font-medium text-sm">{featuredPost.author}</p>
                                                    <p className="text-text-dark/70 text-xs flex items-center gap-1">
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
                    )}

                    {/* Other Posts Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {otherPosts.map((post) => (
                            <motion.div key={post.id} variants={itemVariants}>
                                <Link to={`/blog/${post.id}`} className="group block h-full">
                                    <article className="bg-white rounded-2xl border border-text-dark/10 overflow-hidden h-full flex flex-col">
                                        <div className="relative h-48">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-sm text-text-dark text-xs font-medium px-3 py-1 rounded-full">
                                                {post.category}
                                            </div>
                                        </div>
                                        <div className="p-5 flex flex-col flex-1">
                                            <div className="flex items-center gap-3 text-xs text-text-dark/70 mb-3">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {formatDate(post.date)}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold text-text-dark mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-text-dark/80 text-sm mb-4 line-clamp-2 flex-1">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-text-dark/10">
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        src={post.authorImage}
                                                        alt={post.author}
                                                        className="w-7 h-7 rounded-full"
                                                    />
                                                    <span className="text-text-dark/90 text-xs">{post.author}</span>
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
        </div>
    );
}
