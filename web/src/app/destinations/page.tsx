"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/layout/page-header";
import { destinations } from "@/lib/data";
import { ArrowRight, MapPin, Calendar, Navigation } from "lucide-react";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const }
    }
};

export default function DestinationsPage() {
    return (
        <div className="min-h-screen bg-background-dark">
            <PageHeader
                title="Explore Destinations"
                subtitle="The gems of Kashmir & Ladakh"
                image="https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=2000"
            />

            <section className="max-w-[1280px] mx-auto px-6 py-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
                >
                    {destinations.map((dest, index) => (
                        <motion.div
                            key={dest.id}
                            variants={cardVariants}
                        >
                            <Link
                                href={`/destinations/${dest.id}`}
                                className="group block"
                            >
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="relative h-80 rounded-2xl overflow-hidden mb-6 border border-white/10 group-hover:border-primary/30 transition-colors"
                                >
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.7 }}
                                        src={dest.image}
                                        alt={dest.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent" />

                                    {/* Hover overlay */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        className="absolute inset-0 bg-primary/10"
                                    />

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileHover={{ opacity: 1, y: 0 }}
                                        className="absolute bottom-4 right-4 bg-primary/90 backdrop-blur px-4 py-2 rounded-full text-sm font-bold text-background-dark flex items-center gap-2"
                                    >
                                        Explore <ArrowRight className="h-4 w-4" />
                                    </motion.div>
                                </motion.div>

                                <motion.h2
                                    whileHover={{ x: 10 }}
                                    className="text-3xl font-heading font-bold text-white mb-2 group-hover:text-primary transition-colors"
                                >
                                    {dest.title}
                                </motion.h2>
                                <p className="text-primary font-bold text-sm tracking-widest uppercase mb-3">{dest.subtitle}</p>
                                <p className="text-white/60 line-clamp-2">{dest.description}</p>

                                <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
                                    <motion.span
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full"
                                    >
                                        <Navigation className="h-3.5 w-3.5 text-primary" /> {dest.stats.altitude}
                                    </motion.span>
                                    <motion.span
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full"
                                    >
                                        <Calendar className="h-3.5 w-3.5 text-primary" /> {dest.stats.bestTime}
                                    </motion.span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </div>
    );
}
