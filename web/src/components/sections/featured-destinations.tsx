"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const destinations = [
    {
        id: "srinagar-city",
        title: "Kashmir Valley",
        subtitle: "The Jewel of the North",
        description: "Famous for its houseboats, lakes, and Mughal gardens. Experience tranquility like never before. Explore serene Dal Lake, vibrant Mughal Gardens, and picturesque Pahalgam.",
        image: "/images/Kashmir Dal Lake Background.jpg",
        size: "large"
    },
    {
        id: "mystic-ladakh",
        title: "Mystic Ladakh",
        subtitle: "Land of High Passes",
        description: "A high-altitude desert known for its stunning landscapes, monasteries, and adventure. Trekking, biking, and spiritual retreats await.",
        image: "/images/Leh Ladakh.jpg",
        size: "small"
    },
    {
        id: "gurez",
        title: "Unexplored Gurez",
        subtitle: "The Hidden Gem",
        description: "Off the beaten path, Gurez offers pristine nature, traditional culture, and ultimate peace. A true escape into untouched wilderness.",
        image: "/images/Gurez Habba Khatoon.jpg",
        size: "small"
    },
    {
        id: "sonamarg",
        title: "Sonamarg",
        subtitle: "Meadow of Gold",
        description: "Gateway to Ladakh and a paradise for nature lovers. Home to the Thajiwas Glacier and golden alpine meadows.",
        image: "/images/Sonmarg.jpg",
        size: "small"
    },
    {
        id: "pahalgam",
        title: "Pahalgam",
        subtitle: "Valley of Shepherds",
        description: "Famous for its scenic beauty, lidder river, and lush pine forests. The perfect base for treks and relaxation.",
        image: "/images/Pahalgam.jpg",
        size: "medium"
    },
    {
        id: "gulmarg",
        title: "Gulmarg",
        subtitle: "Meadow of Flowers",
        description: "A premier hill station and skiing destination. World-famous for its gondola, powder snow, and lush summer meadows.",
        image: "/images/gulmarg-featured.jpg",
        size: "small"
    }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const }
    }
};

export function FeaturedDestinations() {
    return (
        <section>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4"
            >
                <div>
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-primary font-medium tracking-wider uppercase mb-2"
                    >
                        Explore
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-3xl md:text-4xl font-bold text-white font-display"
                    >
                        Featured Destinations
                    </motion.h2>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Link
                        href="/destinations"
                        className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
                    >
                        View All Destinations
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="asymmetrical-grid"
            >
                {destinations.map((dest, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="group cursor-pointer"
                    >
                        <Link href={`/destinations/${dest.id}`}>
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className={`${dest.size === "large" ? "h-[600px]" : "h-[300px]"} rounded-2xl overflow-hidden relative shadow-lg border border-white/5 bg-neutral-900 group`}
                            >
                                {/* Image with zoom effect */}
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.7 }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={dest.image}
                                            alt={dest.title}
                                            fill
                                            className="object-cover"
                                            sizes={dest.size === "large" ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
                                        />
                                    </div>
                                </motion.div>

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                                {/* Hover overlay */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    className="absolute inset-0 bg-primary/10 z-20"
                                />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 p-6 w-full z-30">
                                    <motion.div
                                        initial={{ y: 20 }}
                                        whileHover={{ y: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className={`${dest.size === "large" ? "text-3xl" : "text-2xl"} font-bold text-white mb-1 font-display`}>
                                            {dest.title}
                                        </h3>
                                        <p className="text-primary text-sm font-medium mb-3">{dest.subtitle}</p>
                                        <p className={`text-white/80 text-sm ${dest.size === "large" ? "line-clamp-3" : "line-clamp-2"} opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0`}>
                                            {dest.description}
                                        </p>

                                        {/* Explore button */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileHover={{ opacity: 1, y: 0 }}
                                            className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        >
                                            <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold">
                                                Explore <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

            {/* Mobile link */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8 text-center md:hidden"
            >
                <Link
                    href="/destinations"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                >
                    View All Destinations <ArrowRight className="w-4 h-4" />
                </Link>
            </motion.div>
        </section>
    );
}
