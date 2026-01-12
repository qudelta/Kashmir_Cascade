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
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const inputRef = useRef(null);
    const resultRefs = useRef([]);
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

    const allResults = [
        ...filteredDestinations.map(d => ({ ...d, type: 'destination', link: `/destinations/${d.id}` })),
        ...filteredPackages.map(p => ({ ...p, type: 'package', link: `/packages/${p.id}` })),
        ...filteredBlogs.map(b => ({ ...b, type: 'blog', link: `/blog/${b.id}` }))
    ];

    const hasResults = allResults.length > 0;

    // Reset selection when query changes
    useEffect(() => {
        setSelectedIndex(-1);
    }, [query]);

    // Handle Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;

            if (e.key === "Escape") {
                onClose();
            } else if (e.key === "ArrowDown") {
                e.preventDefault();
                setSelectedIndex(prev => (prev < allResults.length - 1 ? prev + 1 : prev));
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
            } else if (e.key === "Enter" && selectedIndex >= 0) {
                e.preventDefault();
                // Trigger navigation
                const selectedItem = allResults[selectedIndex];
                if (selectedItem) {
                    const linkButton = resultRefs.current[selectedIndex];
                    if (linkButton) linkButton.click();
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, allResults, selectedIndex, onClose]);

    // Scroll selected item into view
    useEffect(() => {
        if (selectedIndex >= 0 && resultRefs.current[selectedIndex]) {
            resultRefs.current[selectedIndex].scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        }
    }, [selectedIndex]);


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
                                className="flex-1 bg-transparent border-none text-3xl md:text-5xl font-bold text-text-dark placeholder:text-text-dark/20 focus:outline-none focus:ring-0"
                                aria-expanded={hasResults}
                                aria-activedescendant={selectedIndex >= 0 ? `result-${selectedIndex}` : undefined}
                                role="combobox"
                                aria-controls="search-results"
                            />
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                            >
                                <X className="w-8 h-8 text-text-dark/70 hover:text-text-dark" />
                            </button>
                        </div>

                        {/* Content */}
                        <div id="search-results" className="flex-1 overflow-y-auto pr-4 custom-scrollbar" role="listbox">
                            {!query ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div>
                                        <h3 className="text-text-dark/40 font-medium mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
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
                                                        className="text-2xl font-bold text-text-dark hover:text-primary transition-colors inline-flex items-center gap-3 group"
                                                    >
                                                        {link.label}
                                                        <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-text-dark/40 font-medium mb-6 uppercase tracking-wider text-sm">Popular Searches</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {["Honeymoon", "Gulmarg Skiing", "Houseboat", "Trekking", "Family Trip", "Winter"].map((tag) => (
                                                <button
                                                    key={tag}
                                                    onClick={() => setQuery(tag)}
                                                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-text-dark/80 hover:bg-primary/20 hover:border-primary/50 hover:text-text-dark transition-all"
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
                                            <p className="text-2xl text-text-dark/40">No results found for "{query}"</p>
                                        </div>
                                    )}

                                    {/* All Results Mapped */}
                                    {hasResults && (
                                        <section>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {allResults.map((item, index) => (
                                                    <Link
                                                        key={item.id}
                                                        id={`result-${index}`}
                                                        ref={el => resultRefs.current[index] = el}
                                                        to={item.link}
                                                        onClick={onClose}
                                                        className={`flex items-center gap-4 p-4 rounded-xl transition-colors group ${index === selectedIndex ? 'bg-white/10 ring-2 ring-primary/50' : 'bg-white/5 hover:bg-white/10'
                                                            }`}
                                                        aria-selected={index === selectedIndex}
                                                        role="option"
                                                    >
                                                        <div className="w-16 h-16 rounded-lg bg-white/10 overflow-hidden shrink-0 relative">
                                                            <img
                                                                src={item.image || (item.gallery && item.gallery[0])}
                                                                alt={item.title}
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                            />
                                                            {/* Type Badge */}
                                                            <div className="absolute top-0 right-0 bg-black/60 text-white xs-text px-1 text-[10px] uppercase">
                                                                {item.type}
                                                            </div>
                                                        </div>
                                                        <div className="min-w-0">
                                                            <h4 className="text-lg font-bold text-text-dark group-hover:text-primary transition-colors truncate">{item.title}</h4>
                                                            <p className="text-sm text-text-dark/70 truncate">
                                                                {item.subtitle || item.tagline || item.excerpt || `${item.days} Days / ${item.nights} Nights`}
                                                            </p>
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
