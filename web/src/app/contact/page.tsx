"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/layout/page-header";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const contactInfo = [
    {
        icon: Phone,
        title: "Phone & WhatsApp",
        lines: ["+91 9906XXXXXX", "+91 7006XXXXXX"]
    },
    {
        icon: Mail,
        title: "Email Us",
        lines: ["info@kashmirtravels.com", "bookings@kashmirtravels.com"]
    },
    {
        icon: MapPin,
        title: "Visit Our Office",
        lines: ["2nd Floor, Tourism Complex,", "Boulevard Road, Dal Lake,", "Srinagar, Kashmir - 190001"]
    },
    {
        icon: Clock,
        title: "Office Hours",
        lines: ["Mon - Sat: 09:00 AM - 08:00 PM", "Sun: 10:00 AM - 04:00 PM"]
    }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background-dark">
            <PageHeader
                title="Get in Touch"
                subtitle="Let's plan your dream vacation"
                image="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2000"
            />

            <section className="max-w-[1280px] mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-heading font-bold text-white mb-6"
                        >
                            Contact Information
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-white/60 mb-12 text-lg"
                        >
                            Have questions about a package or need a custom itinerary? Our travel experts are here to help you 24/7.
                        </motion.p>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon;
                                return (
                                    <motion.div
                                        key={info.title}
                                        variants={itemVariants}
                                        whileHover={{ x: 10 }}
                                        className="flex items-start gap-4 group cursor-pointer"
                                    >
                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                            className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-background-dark transition-colors"
                                        >
                                            <Icon className="h-6 w-6" />
                                        </motion.div>
                                        <div>
                                            <h3 className="font-bold text-white text-lg group-hover:text-primary transition-colors">
                                                {info.title}
                                            </h3>
                                            {info.lines.map((line, i) => (
                                                <p key={i} className="text-white/60">{line}</p>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* Quick Contact CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-12 p-6 bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 rounded-2xl"
                        >
                            <div className="flex items-center gap-4">
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center"
                                >
                                    <MessageCircle className="w-6 h-6 text-white" />
                                </motion.div>
                                <div>
                                    <p className="text-white font-bold">Chat with us on WhatsApp</p>
                                    <p className="text-white/60 text-sm">Get instant responses</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-card-dark rounded-2xl border border-white/10 p-8 md:p-12"
                    >
                        <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl font-bold text-white mb-6"
                        >
                            Send us a Message
                        </motion.h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="space-y-2"
                                >
                                    <label className="text-sm font-medium text-white/80">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/50 text-white placeholder:text-white/30 outline-none transition-all"
                                        placeholder="John"
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.15 }}
                                    className="space-y-2"
                                >
                                    <label className="text-sm font-medium text-white/80">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/50 text-white placeholder:text-white/30 outline-none transition-all"
                                        placeholder="Doe"
                                    />
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="space-y-2"
                            >
                                <label className="text-sm font-medium text-white/80">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/50 text-white placeholder:text-white/30 outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.25 }}
                                className="space-y-2"
                            >
                                <label className="text-sm font-medium text-white/80">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/50 text-white placeholder:text-white/30 outline-none transition-all"
                                    placeholder="+91 9999999999"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="space-y-2"
                            >
                                <label className="text-sm font-medium text-white/80">Message</label>
                                <textarea
                                    className="w-full h-32 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/50 text-white placeholder:text-white/30 outline-none transition-all resize-none"
                                    placeholder="Tell us about your travel plans..."
                                />
                            </motion.div>

                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.35 }}
                                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(201, 162, 39, 0.3)" }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full h-14 rounded-xl bg-primary text-background-dark font-bold text-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                            >
                                Send Message <Send className="w-5 h-5" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
