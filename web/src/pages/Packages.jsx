import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/layout/page-header";
import { packages } from "@/lib/data";
import { Clock, Star, ArrowRight, IndianRupee, MapPin, Filter, Map, Search, ArrowUpDown, ChevronDown } from "lucide-react";

const categories = ["All", "Honeymoon", "Family", "Adventure", "Spiritual", "Winter Special", "Budget", "Photography", "Senior Special"];
const regions = ["All", "Kashmir", "Ladakh"];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const Packages = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeRegion, setActiveRegion] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("featured");

    useEffect(() => {
        const regionParam = searchParams.get("region");
        if (regionParam && ["Kashmir", "Ladakh"].includes(regionParam)) {
            setActiveRegion(regionParam);
        } else {
            setActiveRegion("All");
        }
    }, [searchParams]);

    const handleRegionChange = (region) => {
        setActiveRegion(region);
        if (region === "All") {
            setSearchParams({});
        } else {
            setSearchParams({ region });
        }
        setActiveCategory("All");
    };

    const filteredPackages = packages
        .filter(pkg => {
            const categoryMatch = activeCategory === "All" || pkg.category === activeCategory;
            const regionMatch = activeRegion === "All" || pkg.region === activeRegion;
            const searchMatch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                pkg.overview.toLowerCase().includes(searchTerm.toLowerCase()) ||
                pkg.route.some(r => r.toLowerCase().includes(searchTerm.toLowerCase()));
            return categoryMatch && regionMatch && searchMatch;
        })
        .sort((a, b) => {
            if (sortBy === "price-low-high") return a.price - b.price;
            if (sortBy === "price-high-low") return b.price - a.price;
            if (sortBy === "rating") return b.rating - a.rating;
            return 0; // featured/default
        });

    return (
        <div className="min-h-screen bg-background-light">
            <PageHeader
                title="Curated Packages"
                subtitle={<>Handpicked <span className="text-primary">Itineraries</span> for You</>}
                image="/images/Sonmarg.jpg"
            />

            <section className="max-w-[1280px] mx-auto px-6 py-16">

                {/* Main Filter Controls */}
                <div className="flex flex-col gap-10 mb-16">
                    {/* Top Row: Search and Region */}
                    <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-between">
                        {/* Region Toggle */}
                        <div className="bg-white border border-text-dark/10 p-2 rounded-[3rem] flex relative w-full lg:w-auto shadow-xl shadow-black/[0.03]">
                            {regions.map((region) => (
                                <button
                                    key={region}
                                    onClick={() => handleRegionChange(region)}
                                    className={`relative flex-1 lg:flex-none px-6 lg:px-14 py-4.5 rounded-[2.5rem] text-sm font-bold z-10 transition-all duration-300 ${activeRegion === region
                                        ? "text-background-dark"
                                        : "text-text-dark/60 hover:text-text-dark"
                                        }`}
                                >
                                    {activeRegion === region && (
                                        <motion.div
                                            layoutId="activeRegion"
                                            className="absolute inset-0 bg-primary rounded-[2.5rem] -z-10 shadow-[0_8px_25px_rgba(201,162,39,0.25)]"
                                            transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                                        />
                                    )}
                                    <span className="relative whitespace-nowrap block">
                                        {region === "All" ? "All Regions" : region}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Search Bar */}
                        <div className="relative w-full lg:max-w-md group">
                            <Search className="absolute left-7 top-1/2 -translate-y-1/2 w-5 h-5 text-text-dark/40 group-focus-within:text-primary transition-colors z-10" />
                            <input
                                type="text"
                                placeholder="Search by destination, title..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-white border border-text-dark/10 rounded-[3rem] py-6 pl-16 pr-8 text-text-dark text-base focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all shadow-xl shadow-black/[0.03] placeholder:text-text-dark/30"
                            />
                        </div>

                        {/* Sort Dropdown */}
                        <div className="relative w-full lg:w-auto">
                            <div className="flex items-center bg-white border border-text-dark/10 p-1.5 rounded-[3rem] shadow-xl shadow-black/[0.03] group hover:border-text-dark/20 transition-all">
                                <div className="flex items-center gap-3 text-text-dark/50 px-5 border-r border-text-dark/5 py-2">
                                    <ArrowUpDown className="w-4 h-4 group-hover:text-primary transition-colors shrink-0" />
                                    <div className="flex flex-col">
                                        <span className="text-[8px] font-black uppercase tracking-widest leading-none">Sort</span>
                                        <span className="text-[8px] font-black uppercase tracking-widest leading-none">By</span>
                                    </div>
                                </div>
                                <div className="relative flex-grow">
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="bg-transparent text-sm font-bold text-text-dark pr-12 pl-4 py-4 focus:outline-none appearance-none cursor-pointer w-full min-w-[180px]"
                                    >
                                        <option value="featured">Featured Search</option>
                                        <option value="price-low-high">Price: Low to High</option>
                                        <option value="price-high-low">Price: High to Low</option>
                                        <option value="rating">Best Rated</option>
                                    </select>
                                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dark/40 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-8 py-3.5 rounded-[1.25rem] text-sm font-bold transition-all duration-300 border-2 ${activeCategory === category
                                    ? "bg-text-dark text-white border-text-dark shadow-[0_10px_25px_rgba(0,0,0,0.1)] scale-105"
                                    : "bg-white text-text-dark/60 border-text-dark/5 hover:border-text-dark/20 hover:text-text-dark hover:bg-gray-50 shadow-sm"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Stats & Results Count */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-between mb-10 bg-white/50 backdrop-blur-sm border border-text-dark/5 px-8 py-4 rounded-2xl"
                >
                    <p className="text-sm text-text-dark/60 font-semibold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        Showing <span className="text-text-dark font-black tabular-nums">{filteredPackages.length}</span> luxury itineraries
                    </p>
                    {(activeRegion !== "All" || activeCategory !== "All" || searchTerm) && (
                        <button
                            onClick={() => {
                                setActiveRegion("All");
                                setActiveCategory("All");
                                setSearchTerm("");
                                setSortBy("featured");
                                setSearchParams({});
                            }}
                            className="text-xs font-black text-primary hover:text-primary-dark flex items-center gap-2 transition-all group"
                        >
                            <span className="w-4 h-4 flex items-center justify-center rounded-full border-2 border-primary group-hover:bg-primary group-hover:text-white transition-all">×</span>
                            Reset filters
                        </button>
                    )}
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    key={`${activeRegion}-${activeCategory}`} // Re-animate when filter changes
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredPackages.map((pkg) => (
                        <motion.div
                            key={pkg.id}
                            variants={cardVariants}
                            layout
                        >
                            <Link
                                to={`/packages/${pkg.id}`}
                                className="group block"
                            >
                                <motion.div
                                    whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(201, 162, 39, 0.15)" }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="flex flex-col bg-white border border-text-dark/10 rounded-2xl overflow-hidden h-full"
                                >
                                    {/* Image Section */}
                                    <div className="relative h-64 overflow-hidden bg-white">
                                        <div className="absolute inset-0 w-full h-full">
                                            <img
                                                src={pkg.image}
                                                alt={pkg.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                        </div>
                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                        {/* Top Badges */}
                                        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                                            <motion.span
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                                className="bg-primary/90 backdrop-blur-sm text-background-dark text-xs font-bold px-3 py-1.5 rounded-full"
                                            >
                                                {pkg.category}
                                            </motion.span>
                                            {pkg.originalPrice && (
                                                <motion.span
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ type: "spring", delay: 0.3 }}
                                                    className="bg-green-500 text-text-dark text-xs font-bold px-3 py-1.5 rounded-full"
                                                >
                                                    {Math.round((1 - pkg.price / pkg.originalPrice) * 100)}% OFF
                                                </motion.span>
                                            )}
                                        </div>

                                        {/* Bottom Info */}
                                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                            <div className="flex items-center gap-2 text-white">
                                                <Clock className="w-4 h-4" />
                                                <span className="text-sm font-medium">{pkg.days}D / {pkg.nights}N</span>
                                            </div>
                                            <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                                                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                                                <span className="text-xs font-bold text-white">{pkg.rating}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center justify-between mb-2">
                                            <h2 className="text-xl font-bold font-heading text-text-dark group-hover:text-primary transition-colors">
                                                {pkg.title}
                                            </h2>
                                        </div>

                                        <p className="text-sm text-text-dark/80 mb-4 line-clamp-2">
                                            {pkg.overview}
                                        </p>

                                        {/* Route Preview */}
                                        <div className="flex items-center gap-2 text-xs text-text-dark/70 mb-4">
                                            <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                                            <span className="truncate">{pkg.route.join(" → ")}</span>
                                        </div>

                                        {/* Region Badge (New) */}
                                        <div className="mb-4">
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${pkg.region === "Ladakh"
                                                ? "border-orange-500 text-orange-600 bg-orange-50"
                                                : "border-green-500 text-green-600 bg-green-50"
                                                }`}>
                                                {pkg.region}
                                            </span>
                                        </div>

                                        {/* Highlights Preview */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {pkg.highlights.slice(0, 3).map((highlight, i) => (
                                                <motion.span
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.1 * i }}
                                                    className="text-xs bg-white/5 text-text-dark/80 px-2 py-1 rounded-full border border-text-dark/5"
                                                >
                                                    {highlight}
                                                </motion.span>
                                            ))}
                                            {pkg.highlights.length > 3 && (
                                                <span className="text-xs text-primary font-medium">
                                                    +{pkg.highlights.length - 3} more
                                                </span>
                                            )}
                                        </div>

                                        {/* Price & CTA */}
                                        <div className="mt-auto pt-4 border-t border-text-dark/10 flex items-center justify-between">
                                            <div>
                                                <span className="text-xs text-text-dark/70 block">From</span>
                                                <div className="flex items-center gap-2">
                                                    <span className="flex items-center text-2xl font-bold text-text-dark">
                                                        <IndianRupee className="w-5 h-5" />
                                                        {pkg.price.toLocaleString('en-IN')}
                                                    </span>
                                                    {pkg.originalPrice && (
                                                        <span className="text-sm text-text-dark/40 line-through">
                                                            ₹{pkg.originalPrice.toLocaleString('en-IN')}
                                                        </span>
                                                    )}
                                                </div>
                                                <span className="text-xs text-text-dark/70">per person</span>
                                            </div>
                                            <motion.span
                                                whileHover={{ x: 5 }}
                                                className="flex items-center gap-1 text-sm font-semibold text-primary"
                                            >
                                                View Details <ArrowRight className="h-4 w-4" />
                                            </motion.span>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Empty State */}
                {filteredPackages.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-16"
                    >
                        <p className="text-xl text-text-dark/80 mb-4">No packages found for this selection.</p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => { setActiveRegion("All"); setActiveCategory("All"); setSearchParams({}); }}
                            className="px-6 py-2 rounded-full bg-primary text-background-dark font-bold hover:bg-primary/90 transition-colors"
                        >
                            Reset Filters
                        </motion.button>
                    </motion.div>
                )}

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 text-center bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 rounded-3xl p-12 relative overflow-hidden"
                >
                    {/* Background decoration */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
                    />

                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-dark mb-4 relative z-10">
                        Can't Find What You're Looking For?
                    </h2>
                    <p className="text-lg text-text-dark/90 mb-8 max-w-2xl mx-auto relative z-10">
                        Let us create a custom itinerary tailored to your preferences, budget, and travel dates.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(201, 162, 39, 0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 rounded-xl bg-primary text-background-dark font-bold hover:bg-primary/90 transition-colors relative z-10"
                        onClick={() => {
                            const modal = document.getElementById("planTripModal");
                            if (modal) modal.classList.add("open");
                            document.body.style.overflow = "hidden";
                        }}
                    >
                        Plan Custom Trip
                    </motion.button>
                </motion.div>
            </section>
        </div>
    );
};

export default Packages;
