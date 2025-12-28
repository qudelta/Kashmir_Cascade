"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/layout/page-header";
import { packages } from "@/lib/data";
import { Clock, Star, ArrowRight, IndianRupee, Users, MapPin, Filter } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Honeymoon", "Family", "Adventure", "Spiritual", "Winter Special"];

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
        transition: { duration: 0.5, ease: "easeOut" as const }
    }
};

export default function PackagesPage() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredPackages = activeFilter === "All"
        ? packages
        : packages.filter(pkg => pkg.category === activeFilter);

    return (
        <div className="min-h-screen bg-background-dark">
            <PageHeader
                title="Curated Packages"
                subtitle="Crafted Itineraries for Every Traveler"
                image="/images/Sonmarg.jpg"
            />

            <section className="max-w-[1280px] mx-auto px-6 py-16">
                {/* Category Filters */}
                <div className="flex flex-wrap gap-3 mb-12 justify-center">
                    <div className="flex items-center gap-2 text-white/50 mr-4">
                        <Filter className="w-4 h-4" />
                        <span className="text-sm font-medium">Filter:</span>
                    </div>
                    {categories.map((filter) => (
                        <button
                            key={filter}
                            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${filter === activeFilter
                                ? "bg-primary text-background-dark shadow-lg shadow-primary/30"
                                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                                }`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center mb-12"
                >
                    <p className="text-white/60">
                        Showing <span className="font-bold text-primary">{filteredPackages.length}</span> packages
                        {activeFilter !== "All" && ` in ${activeFilter}`}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    key={activeFilter} // Re-animate when filter changes
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredPackages.map((pkg) => (
                        <motion.div
                            key={pkg.id}
                            variants={cardVariants}
                            layout
                        >
                            <Link
                                href={`/packages/${pkg.id}`}
                                className="group block"
                            >
                                <motion.div
                                    whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(201, 162, 39, 0.15)" }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="flex flex-col bg-card-dark border border-white/5 rounded-2xl overflow-hidden h-full"
                                >
                                    {/* Image Section */}
                                    <div className="relative h-64 overflow-hidden">
                                        <div className="absolute inset-0 w-full h-full">
                                            <Image
                                                src={pkg.image}
                                                alt={pkg.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </div>
                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent" />

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
                                                    className="bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full"
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
                                        <h2 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-primary transition-colors">
                                            {pkg.title}
                                        </h2>
                                        <p className="text-sm text-white/60 mb-4 line-clamp-2">
                                            {pkg.overview}
                                        </p>

                                        {/* Route Preview */}
                                        <div className="flex items-center gap-2 text-xs text-white/50 mb-4">
                                            <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                                            <span className="truncate">{pkg.route.join(" → ")}</span>
                                        </div>

                                        {/* Highlights Preview */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {pkg.highlights.slice(0, 3).map((highlight, i) => (
                                                <motion.span
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.1 * i }}
                                                    className="text-xs bg-white/5 text-white/60 px-2 py-1 rounded-full"
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
                                        <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                                            <div>
                                                <span className="text-xs text-white/50 block">From</span>
                                                <div className="flex items-center gap-2">
                                                    <span className="flex items-center text-2xl font-bold text-white">
                                                        <IndianRupee className="w-5 h-5" />
                                                        {pkg.price.toLocaleString('en-IN')}
                                                    </span>
                                                    {pkg.originalPrice && (
                                                        <span className="text-sm text-white/40 line-through">
                                                            ₹{pkg.originalPrice.toLocaleString('en-IN')}
                                                        </span>
                                                    )}
                                                </div>
                                                <span className="text-xs text-white/50">per person</span>
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
                        <p className="text-xl text-white/60 mb-4">No packages found in this category.</p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveFilter("All")}
                            className="px-6 py-2 rounded-full bg-white/10 text-white hover:bg-primary hover:text-background-dark transition-colors"
                        >
                            View All Packages
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

                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4 relative z-10">
                        Can't Find What You're Looking For?
                    </h2>
                    <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto relative z-10">
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
}
