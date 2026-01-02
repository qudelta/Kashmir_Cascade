import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Link } from "react-router-dom";
import { useMobile } from "@/lib/useMobile";

const faqs = [
    {
        category: "Travel Essentials",
        questions: [
            {
                q: "What is the best time to visit Kashmir?",
                a: "The best time depends on your preferences. For pleasant weather and tulips, visit March-May. For lush greenery and adventure activities, June-August is ideal. For snow experiences and skiing, December-February is perfect. September-November offers beautiful autumn colors."
            },
            {
                q: "Do I need any permits to visit Kashmir?",
                a: "Indian citizens don't need permits for most tourist areas. However, certain areas like Gurez Valley and areas near the Line of Control may require special permits from the District Magistrate's office. Foreign nationals should check current requirements with their embassy."
            },
            {
                q: "Is Kashmir safe for tourists?",
                a: "Yes, Kashmir is generally safe for tourists. The tourist areas like Srinagar, Gulmarg, Pahalgam, and Sonamarg have good security. We recommend staying updated with local news and following standard travel precautions."
            },
            {
                q: "What should I pack for a Kashmir trip?",
                a: "Pack layers as weather can change quickly. Essentials include warm jackets (even in summer for high altitudes), comfortable walking shoes, sunscreen, sunglasses, personal medications, and a good camera. In winter, pack heavy woolens, thermals, and snow boots."
            }
        ]
    },
    {
        category: "Accommodation & Stay",
        questions: [
            {
                q: "What types of accommodations are available?",
                a: "Kashmir offers diverse stays - from luxury hotels and heritage houseboats on Dal Lake to cozy guesthouses and budget hotels. Houseboats are a unique experience we highly recommend. We can arrange stays based on your preference and budget."
            },
            {
                q: "Are houseboats comfortable for families?",
                a: "Absolutely! Houseboats range from budget to deluxe categories with modern amenities. Deluxe houseboats offer attached bathrooms, heating, and excellent food. They're safe for families and provide a unique cultural experience with stunning lake views."
            }
        ]
    },
    {
        category: "Getting Around",
        questions: [
            {
                q: "How do I reach Kashmir?",
                a: "You can fly directly to Srinagar International Airport (SXR) from major Indian cities. Alternatively, take a train to Jammu and then a scenic 8-9 hour drive to Srinagar. We provide airport/station pickup as part of our packages."
            },
            {
                q: "What are the local transport options?",
                a: "Options include private cabs (recommended for comfort), shared taxis, auto-rickshaws in cities, and the famous Shikara rides on Dal Lake. For Gulmarg, you'll experience the Gondola cable car - Asia's highest!"
            },
            {
                q: "Are the roads safe during winter?",
                a: "Main tourist routes are generally maintained, but heavy snowfall can temporarily close some roads. The Srinagar-Gulmarg road is regularly cleared. We monitor conditions closely and adjust itineraries if needed for your safety."
            }
        ]
    },
    {
        category: "Food & Culture",
        questions: [
            {
                q: "What is Kashmiri cuisine like?",
                a: "Kashmiri cuisine is rich and aromatic, featuring dishes like Rogan Josh, Yakhni, Gushtaba, and the famous Wazwan feast. Vegetarian options include Dum Aloo and Haak. Don't miss Kahwa (traditional saffron tea) and fresh apples!"
            },
            {
                q: "What local crafts should I buy?",
                a: "Kashmir is famous for Pashmina shawls, handwoven carpets, papier-mâché items, walnut wood carvings, saffron, and dry fruits. Buy from reputable shops to ensure authenticity. We can recommend trusted artisans."
            },
            {
                q: "Are there any cultural etiquettes to follow?",
                a: "Kashmiris are warm and hospitable. Dress modestly, especially at religious sites. Remove shoes before entering mosques and shrines. Ask permission before photographing locals. A simple 'Assalamu Alaikum' greeting is appreciated."
            }
        ]
    },
    {
        category: "Activities & Experiences",
        questions: [
            {
                q: "What adventure activities are available?",
                a: "Kashmir offers trekking, skiing (Gulmarg), white-water rafting (Pahalgam), paragliding, mountain biking, and fishing. In winter, enjoy snowboarding and sledding. We can customize adventure-focused itineraries."
            },
            {
                q: "Can I experience a Shikara ride?",
                a: "Yes! Shikara rides on Dal Lake are a must-do experience. You can take sunset rides, visit floating markets and gardens, or even have breakfast/dinner on a Shikara. We include this in most of our Srinagar packages."
            },
            {
                q: "Is trekking possible for beginners?",
                a: "Absolutely! Kashmir has treks for all levels. Beginners can enjoy the Tarsar Marsar lake trek or Kashmir Great Lakes (with support). We provide experienced guides, porters, and all necessary equipment."
            }
        ]
    },
    {
        category: "Booking & Payments",
        questions: [
            {
                q: "How far in advance should I book?",
                a: "We recommend booking 2-4 weeks in advance for regular seasons and 1-2 months ahead for peak seasons (April-May, December-January). Last-minute bookings are possible but may have limited options."
            },
            {
                q: "What is your cancellation policy?",
                a: "We offer flexible cancellation with full refund up to 7 days before departure, 50% refund 3-7 days before, and no refund within 72 hours. Special circumstances are handled on a case-by-case basis."
            },
            {
                q: "Do you offer customized packages?",
                a: "Yes! All our packages can be customized based on your preferences, budget, and travel style. Contact us with your requirements, and we'll create a personalized itinerary just for you."
            }
        ]
    }
];

export default function FAQ() {
    const [openItems, setOpenItems] = useState([]);
    const isMobile = useMobile();

    const toggleItem = (id) => {
        setOpenItems(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: isMobile ? 0.05 : 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: isMobile ? 0.3 : 0.5, ease: "easeOut" },
        },
    };

    return (
        <div className="min-h-screen bg-background-dark">
            <PageHeader
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about traveling to Kashmir"
                image="/images/Aruvillage.jpg"
            />

            <div className="max-w-4xl mx-auto px-6 py-20">
                {/* Header - Removed redundant section */}

                {/* FAQ Categories */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >
                    {faqs.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            variants={itemVariants}
                            className="bg-card-dark rounded-2xl border border-white/5 overflow-hidden"
                        >
                            {/* Category Header */}
                            <div className="bg-white/5 px-6 py-4 border-b border-white/5">
                                <h2 className="text-lg font-semibold text-white">{category.category}</h2>
                            </div>

                            {/* Questions */}
                            <div className="divide-y divide-white/5">
                                {category.questions.map((faq, questionIndex) => {
                                    const itemId = `${categoryIndex}-${questionIndex}`;
                                    const isOpen = openItems.includes(itemId);

                                    return (
                                        <div key={itemId}>
                                            <button
                                                onClick={() => toggleItem(itemId)}
                                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                                            >
                                                <span className="text-white font-medium pr-4">{faq.q}</span>
                                                <motion.div
                                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="flex-shrink-0"
                                                >
                                                    <ChevronDown className="w-5 h-5 text-primary" />
                                                </motion.div>
                                            </button>
                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="px-6 pt-2 pb-5 text-white/70 leading-relaxed">
                                                            {faq.a}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20 p-8"
                >
                    <h3 className="text-2xl font-bold text-white mb-2">Still have questions?</h3>
                    <p className="text-white/70 mb-6">We're here to help you plan your perfect Kashmir trip</p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-primary text-background-dark font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors"
                    >
                        Contact Us
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
