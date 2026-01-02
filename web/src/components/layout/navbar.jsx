import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mountain, Search, ChevronDown } from "lucide-react";
import { WeatherWidget } from "@/components/ui/weather-widget";
import { SearchOverlay } from "@/components/ui/search-overlay";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/destinations", label: "Destinations" },
    { href: "/packages", label: "Packages" },
    { href: "/destination-weddings", label: "Weddings" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isDestDropdownOpen, setIsDestDropdownOpen] = useState(false);
    const [isPkgDropdownOpen, setIsPkgDropdownOpen] = useState(false);
    const location = useLocation();
    const pathname = location.pathname;

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
                ? "bg-white md:bg-white/95 md:backdrop-blur-lg border-text-dark/10 shadow-lg"
                : "bg-transparent border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between relative">

                {/* Desktop Left Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.slice(0, 4).map((link) => {
                        const isActive = pathname === link.href || pathname.startsWith(link.href + "/");

                        // Dropdown Logic for Destinations (Index 0) and Packages (Index 1)
                        if (link.href === "/destinations") {
                            return (
                                <div
                                    key={link.href}
                                    className="relative"
                                    onMouseEnter={() => setIsDestDropdownOpen(true)}
                                    onMouseLeave={() => setIsDestDropdownOpen(false)}
                                >
                                    <Link
                                        to={link.href}
                                        className={`relative hover:text-primary transition-colors text-sm font-medium py-2 flex items-center gap-1 ${isScrolled ? 'text-text-dark/80' : 'text-white/90'}`}
                                    >
                                        {link.label}
                                        <ChevronDown className={`w-3 h-3 transition-transform ${isDestDropdownOpen ? 'rotate-180' : ''}`} />
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeNav"
                                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                    <AnimatePresence>
                                        {isDestDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-text-dark/10 overflow-hidden z-50"
                                            >
                                                <Link to="/destinations" className="block px-4 py-3 text-sm font-medium text-text-dark hover:bg-primary/5 hover:text-primary transition-colors border-b border-text-dark/5">All Destinations</Link>
                                                <Link to="/destinations?region=Kashmir" className="block px-4 py-3 text-sm font-medium text-text-dark hover:bg-primary/5 hover:text-primary transition-colors">Kashmir Valley</Link>
                                                <Link to="/destinations?region=Ladakh" className="block px-4 py-3 text-sm font-medium text-text-dark hover:bg-primary/5 hover:text-primary transition-colors">Ladakh</Link>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        }
                        if (link.href === "/packages") {
                            return (
                                <div
                                    key={link.href}
                                    className="relative"
                                    onMouseEnter={() => setIsPkgDropdownOpen(true)}
                                    onMouseLeave={() => setIsPkgDropdownOpen(false)}
                                >
                                    <Link
                                        to={link.href}
                                        className={`relative hover:text-primary transition-colors text-sm font-medium py-2 flex items-center gap-1 ${isScrolled ? 'text-text-dark/80' : 'text-white/90'}`}
                                    >
                                        {link.label}
                                        <ChevronDown className={`w-3 h-3 transition-transform ${isPkgDropdownOpen ? 'rotate-180' : ''}`} />
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeNav"
                                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                    <AnimatePresence>
                                        {isPkgDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-text-dark/10 overflow-hidden z-50"
                                            >
                                                <Link to="/packages" className="block px-4 py-3 text-sm font-medium text-text-dark hover:bg-primary/5 hover:text-primary transition-colors border-b border-text-dark/5">All Packages</Link>
                                                <Link to="/packages?region=Kashmir" className="block px-4 py-3 text-sm font-medium text-text-dark hover:bg-primary/5 hover:text-primary transition-colors">Kashmir Packages</Link>
                                                <Link to="/packages?region=Ladakh" className="block px-4 py-3 text-sm font-medium text-text-dark hover:bg-primary/5 hover:text-primary transition-colors">Ladakh Packages</Link>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={`relative hover:text-primary transition-colors text-sm font-medium py-2 ${isScrolled ? 'text-text-dark/80' : 'text-white/90'}`}
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
                </nav>

                {/* Logo - Centered on Desktop (absolute), Left on Mobile */}
                <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex-shrink-0 z-10">
                    {pathname === "/" ? (
                        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block cursor-pointer">
                            <img
                                src={(isScrolled || isMobileMenuOpen) ? "/logo-black.png" : "/logo-white.png"}
                                alt="Kashmir Cascade"
                                className="h-10 md:h-16 w-auto object-contain transition-all duration-300"
                            />
                        </button>
                    ) : (
                        <Link to="/" className="block cursor-pointer">
                            <img
                                src={(isScrolled || isMobileMenuOpen) ? "/logo-black.png" : "/logo-white.png"}
                                alt="Kashmir Cascade"
                                className="h-10 md:h-16 w-auto object-contain transition-all duration-300"
                            />
                        </Link>
                    )}
                </div>

                {/* Desktop Right Nav (Links + Actions) */}
                <nav className="hidden md:flex items-center gap-6 justify-end">
                    {navLinks.slice(4).map((link) => {
                        const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                        return (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={`relative hover:text-primary transition-colors text-sm font-medium py-2 ${isScrolled ? 'text-text-dark/80' : 'text-white/90'}`}
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

                    <div className="flex items-center gap-3 pl-2 border-l border-white/20">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className={`p-2 rounded-full transition-colors ${isScrolled ? 'hover:bg-text-dark/10 text-text-dark/80 hover:text-text-dark' : 'hover:bg-white/10 text-white/80 hover:text-white'}`}
                            aria-label="Search"
                        >
                            <Search className="w-5 h-5" />
                        </button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center rounded-full h-10 px-6 bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-all shadow-md"
                            onClick={() => {
                                const modal = document.getElementById("planTripModal");
                                if (modal) modal.classList.add("open");
                                document.body.style.overflow = "hidden";
                            }}
                        >
                            Plan Trip
                        </motion.button>
                    </div>
                </nav>

                {/* Mobile Toggle */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className={`md:hidden p-2 ${isScrolled || isMobileMenuOpen ? 'text-text-dark' : 'text-white'}`}
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
                        className="md:hidden bg-white border-t border-text-dark/10 overflow-hidden"
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
                                            to={link.href}
                                            className={`block py-3 px-4 rounded-xl text-lg font-medium transition-colors ${isActive
                                                ? "bg-primary/10 text-primary"
                                                : "text-text-dark/80 hover:bg-text-dark/5 hover:text-primary"
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                            <button
                                className="w-full h-14 bg-primary hover:bg-primary-dark text-text-dark font-bold rounded-xl mt-4"
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
