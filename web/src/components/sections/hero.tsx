"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center overflow-hidden">
            {/* Image Background with Parallax Effect */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0"
            >
                <img
                    src="/kashmir-dal-lake.jpg"
                    alt="Kashmir Dal Lake"
                    className="w-full h-full object-cover object-center"
                />
            </motion.div>

            {/* Gradient Overlays */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-background-dark/90 via-background-dark/60 to-transparent"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-background-dark/40" />

            {/* Content - Left Aligned with proper spacing from navbar */}
            <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full pt-20">
                <div className="max-w-xl text-white">
                    {/* Animated Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6"
                    >
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        <span className="text-sm font-medium">Discover Kashmir with Local Experts</span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 drop-shadow-lg font-display"
                    >
                        Experience Paradise on Earth
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6"
                    >
                        Beyond the Ordinary
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="text-base md:text-lg text-white/80 font-medium mb-8 max-w-md"
                    >
                        Curated journeys to the heart of the Himalayas. Discover the unseen beauty of Kashmir with local experts.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex flex-wrap gap-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(201, 162, 39, 0.3)" }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 bg-primary text-background-dark font-bold rounded-xl hover:bg-primary/90 transition-colors"
                            onClick={() => {
                                const modal = document.getElementById("planTripModal");
                                if (modal) modal.classList.add("open");
                                document.body.style.overflow = "hidden";
                            }}
                        >
                            Plan Your Trip
                        </motion.button>
                        <Link href="/packages">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl transition-colors"
                            >
                                Explore Packages
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="mt-12 flex gap-8"
                    >
                        {[
                            { value: "500+", label: "Happy Travelers" },
                            { value: "50+", label: "Tour Packages" },
                            { value: "4.9", label: "Rating" },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 1.2 + (i * 0.1) }}
                                className="text-center"
                            >
                                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                                <div className="text-xs text-white/60 uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { duration: 0.6, delay: 1.5 },
                    y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
                <ChevronDown className="w-5 h-5" />
            </motion.div>
        </section>
    );
}
