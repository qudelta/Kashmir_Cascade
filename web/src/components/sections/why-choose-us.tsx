"use client";

import { motion } from "framer-motion";
import { Users, Headphones, BadgeCheck, Quote, Star } from "lucide-react";
import { useMobile } from "@/lib/useMobile";

const testimonials = [
    {
        text: "The trip to Ladakh was magical. The team handled our permits and accommodation flawlessly. Highly recommended for anyone looking for a hassle-free adventure.",
        name: "Sarah Johnson",
        location: "USA",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5
    },
    {
        text: "Kashmir is truly paradise. The houseboat stay arranged by Kashmir Travels was the highlight of our honeymoon. The food was amazing!",
        name: "Rahul Mehta",
        location: "Mumbai, India",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5
    },
    {
        text: "Safe, reliable, and friendly. We did the Gurez valley trek and the local guide was incredibly knowledgeable. Will definitely come back.",
        name: "Elena Rodriguez",
        location: "Spain",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 5
    }
];

const features = [
    {
        icon: Users,
        title: "Local Experts",
        description: "Our team consists of locals who know every hidden alley, viewpoint, and story of the valley."
    },
    {
        icon: Headphones,
        title: "24/7 On-Ground Support",
        description: "We are with you every step of the way. From arrival to departure, help is just a call away."
    },
    {
        icon: BadgeCheck,
        title: "No Hidden Costs",
        description: "Transparent pricing is our core value. What you see is exactly what you pay."
    }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const }
    }
};

export function WhyChooseUs() {
    const isMobile = useMobile();

    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Why Us */}
                <motion.div
                    initial={{ opacity: 0, x: isMobile ? 0 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: isMobile ? 0.4 : 0.6 }}
                    className="bg-card-dark rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden"
                >
                    {/* Animated background orbs - only on desktop */}
                    {!isMobile && (
                        <>
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.05, 0.1, 0.05]
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
                            />
                            <motion.div
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.05, 0.08, 0.05]
                                }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
                            />
                        </>
                    )}

                    <div className="relative z-10 text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-4xl font-bold text-white mb-4 font-display"
                        >
                            Why Travel With Us?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-white/60 max-w-2xl mx-auto"
                        >
                            We don't just sell packages; we craft experiences. Here is why thousands of travelers trust us with their Kashmir journey.
                        </motion.p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            const isLast = index === features.length - 1;
                            return (
                                <motion.div
                                    key={feature.title}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                                    className={`flex flex-col items-center text-center p-6 rounded-2xl transition-colors cursor-pointer ${isLast ? "md:col-span-2" : ""}`}
                                >
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6"
                                    >
                                        <Icon className="w-8 h-8" />
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-white mb-3 font-display">{feature.title}</h3>
                                    <p className="text-white/60 text-sm">{feature.description}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>

                {/* Testimonials */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-card-dark rounded-3xl p-8 md:p-12 border border-white/5 flex flex-col justify-center"
                >
                    <div className="text-center mb-8">
                        <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-primary font-medium tracking-wider uppercase mb-2"
                        >
                            Testimonials
                        </motion.h3>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl md:text-4xl font-bold text-white font-display"
                        >
                            What Our Travelers Say
                        </motion.h2>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 gap-4"
                    >
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02, borderColor: "rgba(201, 162, 39, 0.3)" }}
                                className="p-6 rounded-2xl border border-white/5 relative bg-background-dark overflow-hidden group"
                            >
                                {/* Quote icon */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 0.1, scale: 1 }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="absolute top-2 right-2"
                                >
                                    <Quote className="w-12 h-12 text-primary" />
                                </motion.div>

                                {/* Rating stars */}
                                <div className="flex gap-1 mb-3">
                                    {[...Array(t.rating)].map((_, starIndex) => (
                                        <motion.div
                                            key={starIndex}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.2 + (starIndex * 0.05) }}
                                        >
                                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        </motion.div>
                                    ))}
                                </div>

                                <p className="text-white/80 mb-4 relative z-10 text-sm leading-relaxed">"{t.text}"</p>
                                <div className="flex items-center gap-3">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="size-10 rounded-full bg-cover bg-center border-2 border-primary/50 group-hover:border-primary transition-colors"
                                        style={{ backgroundImage: `url('${t.image}')` }}
                                    />
                                    <div>
                                        <h4 className="text-white font-bold text-sm">{t.name}</h4>
                                        <p className="text-white/40 text-xs">{t.location}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
