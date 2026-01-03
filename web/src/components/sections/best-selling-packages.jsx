import { Link } from "react-router-dom";
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
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export function BestSellingPackages() {
    // Get top 3 best-rated packages, excluding Ladakh
    const topPackages = [...packages]
        .filter(pkg => !pkg.id.toLowerCase().includes('ladakh'))
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

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
                        className="text-3xl md:text-4xl font-bold text-text-dark font-display"
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
                        to="/packages"
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
                            to={`/packages/${pkg.id}`}
                            className="block group"
                        >
                            <motion.div
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="relative bg-transparent"
                            >
                                {/* Image Container - Taller and Rounded */}
                                <div className="h-72 relative rounded-[2rem] overflow-hidden shadow-md">
                                    <img
                                        src={pkg.image}
                                        alt={pkg.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Category Badge - Floating */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-text-dark text-xs font-bold px-3 py-1 rounded-full z-20 shadow-sm"
                                    >
                                        {pkg.category}
                                    </motion.div>

                                    {/* Rating Badge */}
                                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 z-20">
                                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" /> {pkg.rating}
                                    </div>
                                </div>

                                {/* Content Container - Overlapping & Floating */}
                                <div className="mx-4 -mt-16 relative z-10 bg-white p-6 rounded-[1.5rem] shadow-xl border border-gray-100 flex flex-col gap-3">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-lg font-bold text-text-dark group-hover:text-primary transition-colors font-display leading-tight">
                                            {pkg.title}
                                        </h3>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-text-dark/60">
                                        <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md">
                                            <Clock className="w-3 h-3" /> {pkg.days}D/{pkg.nights}N
                                        </span>
                                        {pkg.highlights.slice(0, 1).map((h, i) => (
                                            <span key={i} className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md">
                                                {h}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-text-dark/70 text-sm line-clamp-2 leading-relaxed">
                                        {pkg.overview}
                                    </p>

                                    <div className="flex items-center justify-between mt-2 pt-3 border-t border-dashed border-gray-200">
                                        <div>
                                            <p className="text-[10px] uppercase tracking-wider text-text-dark/50 font-bold">Starting from</p>
                                            <div className="flex items-center gap-2">
                                                <p className="text-lg font-bold text-primary flex items-center">
                                                    <IndianRupee className="w-4 h-4" />
                                                    {pkg.price.toLocaleString('en-IN')}
                                                </p>
                                                {pkg.originalPrice && (
                                                    <span className="text-xs text-text-dark/40 line-through">
                                                        ₹{pkg.originalPrice.toLocaleString('en-IN')}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors"
                                        >
                                            <ArrowRight className="w-5 h-5" />
                                        </motion.div>
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
                    to="/packages"
                    className="inline-flex items-center gap-2 text-primary hover:text-green-400 font-medium transition-colors"
                >
                    View all packages <ArrowRight className="w-4 h-4" />
                </Link>
            </motion.div>
        </section>
    );
}
