import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search as SearchIcon, MapPin, Package, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { destinations } from "@/lib/data";
import { packages } from "@/lib/data";
import { blogPosts } from "@/lib/blogs";

export function SearchOverlay({ isOpen, onClose }) {
    const [query, setQuery] = useState("");
    const inputRef = useRef(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    // Prevent body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [isOpen]);

    const filteredDestinations = query
        ? destinations.filter(d => d.title.toLowerCase().includes(query.toLowerCase()) || d.description.toLowerCase().includes(query.toLowerCase()))
        : [];

    const filteredPackages = query
        ? packages.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.tagline.toLowerCase().includes(query.toLowerCase()) || p.overview.toLowerCase().includes(query.toLowerCase()))
        : [];

    const filteredBlogs = query
        ? blogPosts.filter(b => b.title.toLowerCase().includes(query.toLowerCase()) || b.excerpt.toLowerCase().includes(query.toLowerCase()))
        : [];

    const hasResults = filteredDestinations.length > 0 || filteredPackages.length > 0 || filteredBlogs.length > 0;

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[100] bg-background-dark/95 backdrop-blur-xl overscroll-contain"
                >
                    <div className="max-w-4xl mx-auto px-6 pt-24 pb-12 h-full flex flex-col">
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-12">
                            <SearchIcon className="w-8 h-8 text-primary" />
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search destinations, packages, or stories..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="flex-1 bg-transparent border-none text-3xl md:text-5xl font-bold text-white placeholder:text-white/20 focus:outline-none focus:ring-0"
                            />
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                            >
                                <X className="w-8 h-8 text-white/50 hover:text-white" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
                            {!query ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div>
                                        <h3 className="text-white/40 font-medium mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
                                        <ul className="space-y-4">
                                            {[
                                                { label: "View All Packages", href: "/packages" },
                                                { label: "Explore Destinations", href: "/destinations" },
                                                { label: "Read Our Blog", href: "/blog" },
                                                { label: "Contact Us", href: "/contact" },
                                            ].map((link) => (
                                                <li key={link.href}>
                                                    <Link
                                                        to={link.href}
                                                        onClick={onClose}
                                                        className="text-2xl font-bold text-white hover:text-primary transition-colors inline-flex items-center gap-3 group"
                                                    >
                                                        {link.label}
                                                        <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-white/40 font-medium mb-6 uppercase tracking-wider text-sm">Popular Searches</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {["Honeymoon", "Gulmarg Skiing", "Houseboat", "Trekking", "Family Trip", "Winter"].map((tag) => (
                                                <button
                                                    key={tag}
                                                    onClick={() => setQuery(tag)}
                                                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-primary/20 hover:border-primary/50 hover:text-white transition-all"
                                                >
                                                    {tag}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-12">
                                    {/* No Results */}
                                    {!hasResults && (
                                        <div className="text-center py-20">
                                            <p className="text-2xl text-white/40">No results found for "{query}"</p>
                                        </div>
                                    )}

                                    {/* Destinations */}
                                    {filteredDestinations.length > 0 && (
                                        <section>
                                            <h3 className="flex items-center gap-2 text-primary font-bold mb-6">
                                                <MapPin className="w-5 h-5" /> Destinations
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {filteredDestinations.map(d => (
                                                    <Link
                                                        key={d.id}
                                                        to={`/destinations/${d.id}`}
                                                        onClick={onClose}
                                                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                                                    >
                                                        <div className="w-16 h-16 rounded-lg bg-white/10 overflow-hidden shrink-0 relative">
                                                            <img
                                                                src={d.image}
                                                                alt={d.title}
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{d.title}</h4>
                                                            <p className="text-sm text-white/50">{d.subtitle}</p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </section>
                                    )}

                                    {/* Packages */}
                                    {filteredPackages.length > 0 && (
                                        <section>
                                            <h3 className="flex items-center gap-2 text-primary font-bold mb-6">
                                                <Package className="w-5 h-5" /> Packages
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {filteredPackages.map(p => (
                                                    <Link
                                                        key={p.id}
                                                        to={`/packages/${p.id}`}
                                                        onClick={onClose}
                                                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                                                    >
                                                        <div className="w-16 h-16 rounded-lg bg-white/10 overflow-hidden shrink-0 relative">
                                                            {/* Assuming first image from gallery or map appropriately */}
                                                            <img
                                                                src={p.gallery?.[0] || p.image}
                                                                alt={p.title}
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{p.title}</h4>
                                                            <p className="text-sm text-white/50">{p.days} Days / {p.nights} Nights • ₹{p.price.toLocaleString()}</p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </section>
                                    )}

                                    {/* Blogs */}
                                    {filteredBlogs.length > 0 && (
                                        <section>
                                            <h3 className="flex items-center gap-2 text-primary font-bold mb-6">
                                                <FileText className="w-5 h-5" /> Stories & Guides
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {filteredBlogs.map(b => (
                                                    <Link
                                                        key={b.id}
                                                        to={`/blog/${b.id}`}
                                                        onClick={onClose}
                                                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                                                    >
                                                        <div className="w-16 h-16 rounded-lg bg-white/10 overflow-hidden shrink-0 relative">
                                                            <img
                                                                src={b.image}
                                                                alt={b.title}
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors line-clamp-1">{b.title}</h4>
                                                            <p className="text-sm text-white/50 line-clamp-1">{b.excerpt}</p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </section>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}
