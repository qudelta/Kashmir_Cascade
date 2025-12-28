"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mountain, Search } from "lucide-react";
import { WeatherWidget } from "@/components/ui/weather-widget";
import { SearchOverlay } from "@/components/ui/search-overlay";

const navLinks = [
    { href: "/destinations", label: "Destinations" },
    { href: "/packages", label: "Packages" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled || isMobileMenuOpen
                ? "bg-background-dark md:bg-background-dark/95 md:backdrop-blur-lg border-white/10 shadow-lg"
                : "bg-transparent border-transparent"
                }`}
        >
            <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo - scrolls to top on home, navigates to home on other pages */}
                {pathname === "/" ? (
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-3 text-white cursor-pointer group"
                    >
                        <Mountain className="w-8 h-8 text-primary" />
                        <h2 className="text-xl font-bold tracking-tight font-display group-hover:text-primary transition-colors">
                            Kashmir Travels
                        </h2>
                    </button>
                ) : (
                    <Link href="/" className="flex items-center gap-3 text-white cursor-pointer group">
                        <Mountain className="w-8 h-8 text-primary" />
                        <h2 className="text-xl font-bold tracking-tight font-display group-hover:text-primary transition-colors">
                            Kashmir Travels
                        </h2>
                    </Link>
                )}

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <WeatherWidget />
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative text-white/90 hover:text-primary transition-colors text-sm font-medium py-2"
                            >
                                {link.label}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}

                    <button
                        onClick={() => setIsSearchOpen(true)}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white"
                        aria-label="Search"
                    >
                        <Search className="w-5 h-5" />
                    </button>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center rounded-xl h-11 px-6 bg-primary hover:bg-primary/90 text-background-dark text-sm font-bold transition-all "
                        onClick={() => {
                            const modal = document.getElementById("planTripModal");
                            if (modal) modal.classList.add("open");
                            document.body.style.overflow = "hidden";
                        }}
                    >
                        Plan Your Trip
                    </motion.button>
                </nav>

                {/* Mobile Toggle */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <AnimatePresence mode="wait">
                        {isMobileMenuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X className="w-6 h-6" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu className="w-6 h-6" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-background-dark border-t border-white/10 overflow-hidden"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="p-6 flex flex-col gap-2"
                        >
                            {navLinks.map((link, index) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + (index * 0.05) }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={`block py-3 px-4 rounded-xl text-lg font-medium transition-colors ${isActive
                                                ? "bg-primary/10 text-primary"
                                                : "text-white/90 hover:bg-white/5 hover:text-primary"
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                            <button
                                className="w-full h-14 bg-primary text-background-dark font-bold rounded-xl mt-4 "
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    const modal = document.getElementById("planTripModal");
                                    if (modal) modal.classList.add("open");
                                    document.body.style.overflow = "hidden";
                                }}
                            >
                                Plan Your Trip
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </motion.header>
    );
}
