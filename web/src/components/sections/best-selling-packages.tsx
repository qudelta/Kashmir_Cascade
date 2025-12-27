"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { packages } from "@/lib/data";
import { Star, Clock, ArrowRight, IndianRupee } from "lucide-react";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const }
    }
};

export function BestSellingPackages() {
    // Get top 3 best-rated packages
    const topPackages = [...packages].sort((a, b) => b.rating - a.rating).slice(0, 3);

    return (
        <section>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-between mb-8"
            >
                <div>
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-primary font-medium tracking-wider uppercase mb-2"
                    >
                        Packages
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-3xl md:text-4xl font-bold text-white font-display"
                    >
                        Best Selling Tours
                    </motion.h2>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Link
                        href="/packages"
                        className="hidden md:flex items-center gap-2 text-primary hover:text-green-400 font-medium transition-colors group"
                    >
                        View all packages
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {topPackages.map((pkg) => (
                    <motion.div
                        key={pkg.id}
                        variants={cardVariants}
                    >
                        <Link
                            href={`/packages/${pkg.id}`}
                            className="block"
                        >
                            <motion.div
                                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(201, 162, 39, 0.15)" }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="bg-card-dark rounded-xl overflow-hidden border border-white/5 group"
                            >
                                <div
                                    className="h-56 bg-cover bg-center relative overflow-hidden"
                                    style={{ backgroundImage: `url('${pkg.image}')` }}
                                >
                                    {/* Image zoom on hover */}
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url('${pkg.image}')` }}
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent z-10" />

                                    {/* Category Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-background-dark text-xs font-bold px-3 py-1 rounded-full z-20"
                                    >
                                        {pkg.category}
                                    </motion.div>

                                    {/* Rating Badge */}
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 z-20">
                                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" /> {pkg.rating}
                                    </div>

                                    {/* Discount Badge */}
                                    {pkg.originalPrice && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            transition={{ type: "spring", delay: 0.4 }}
                                            className="absolute bottom-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full z-20"
                                        >
                                            {Math.round((1 - pkg.price / pkg.originalPrice) * 100)}% OFF
                                        </motion.div>
                                    )}
                                </div>

                                <div className="p-6 relative z-20">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors font-display">
                                            {pkg.title}
                                        </h3>
                                        <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded flex items-center gap-1 whitespace-nowrap">
                                            <Clock className="w-3 h-3" /> {pkg.days}D/{pkg.nights}N
                                        </span>
                                    </div>
                                    <p className="text-white/60 text-sm mb-4 line-clamp-2">{pkg.overview}</p>

                                    {/* Highlights Preview */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {pkg.highlights.slice(0, 2).map((h, i) => (
                                            <motion.span
                                                key={i}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.1 * i }}
                                                className="text-xs bg-white/5 text-white/70 px-2 py-1 rounded"
                                            >
                                                {h}
                                            </motion.span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                                        <div>
                                            <p className="text-xs text-white/50">Starting from</p>
                                            <div className="flex items-center gap-2">
                                                <p className="text-lg font-bold text-white flex items-center">
                                                    <IndianRupee className="w-4 h-4" />
                                                    {pkg.price.toLocaleString('en-IN')}
                                                </p>
                                                {pkg.originalPrice && (
                                                    <span className="text-xs text-white/40 line-through">
                                                        ₹{pkg.originalPrice.toLocaleString('en-IN')}
                                                    </span>
                                                )}
                                            </div>
                                            <span className="text-xs text-white/50">per person</span>
                                        </div>
                                        <motion.span
                                            whileHover={{ x: 5 }}
                                            className="px-4 py-2 rounded-lg bg-white/5 group-hover:bg-primary group-hover:text-background-dark text-white text-sm font-medium transition-colors flex items-center gap-1"
                                        >
                                            View Details <ArrowRight className="w-4 h-4" />
                                        </motion.span>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

            {/* Mobile View All Link */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8 text-center md:hidden"
            >
                <Link
                    href="/packages"
                    className="inline-flex items-center gap-2 text-primary hover:text-green-400 font-medium transition-colors"
                >
                    View all packages <ArrowRight className="w-4 h-4" />
                </Link>
            </motion.div>
        </section>
    );
}
