import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useMobile } from "@/lib/useMobile";

export function Hero() {
    const isMobile = useMobile();

    return (
        <section className="relative h-screen w-full flex items-end pb-24 md:pb-32 overflow-hidden">
            {/* Image Background with Parallax Effect */}
            <motion.div
                initial={{ scale: isMobile ? 1 : 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: isMobile ? 0.8 : 1.5, ease: "easeOut" }}
                className="absolute inset-0"
            >
                <img
                    src="/images/Kashmir Dal Lake Background.jpg"
                    alt="Kashmir Dal Lake"
                    className="w-full h-full object-cover object-center"
                />
            </motion.div>

            {/* Gradient Overlays */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* Content - Bottom Left Aligned */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
                <div className="max-w-2xl text-white">
                    {/* Animated Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 pl-1 mb-6"
                    >
                        <span className="text-2xl md:text-3xl font-accent text-primary">Experience the art of travel</span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6 font-display text-white tracking-tighter"
                    >
                        Experience <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Paradise</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-xl md:text-2xl font-medium text-white/80 mb-10 max-w-lg leading-relaxed"
                    >
                        Curated journeys to the heart of the Himalayas. Discover the unseen beauty of Kashmir.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex flex-wrap gap-4 items-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-primary text-background-dark font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                            onClick={() => {
                                const modal = document.getElementById("planTripModal");
                                if (modal) modal.classList.add("open");
                                document.body.style.overflow = "hidden";
                            }}
                        >
                            Plan Your Trip
                        </motion.button>

                        <Link to="/packages" className="group flex items-center gap-2 px-6 py-4 text-white font-medium hover:text-primary transition-colors">
                            <span>Explore Packages</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </motion.div>

                    {/* Stats - Minimal */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="hidden md:flex gap-12 mt-16 border-t border-white/10 pt-8"
                    >
                        {[
                            { value: "500+", label: "Travelers" },
                            { value: "98%", label: "Satisfaction" },
                        ].map((stat, i) => (
                            <div key={stat.label}>
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator - Right Side Vertical */}
            {!isMobile && (
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute bottom-12 right-12 z-20 hidden md:flex flex-col items-center gap-6"
                >
                    <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-white/50 to-white"></div>
                    <span
                        className="text-xs font-medium text-white/60 tracking-[0.3em] uppercase whitespace-nowrap"
                        style={{ writingMode: 'vertical-rl' }}
                    >
                        Scroll to Explore
                    </span>
                </motion.div>
            )}
        </section>
    );
}
