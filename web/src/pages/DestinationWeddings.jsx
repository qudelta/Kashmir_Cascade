import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/layout/page-header";
import { weddingVenues, weddingServices, weddingPackages } from "@/lib/data";
import {
    Heart, MapPin, Star,
    ClipboardList, Palette, ChefHat, Music, Camera, Car, Hotel,
    Phone, Sparkles, Crown, Castle
} from "lucide-react";

const iconMap = {
    ClipboardList, Palette, ChefHat, Music, Camera, Car, Hotel, Heart
};

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function DestinationWeddings() {
    return (
        <div className="min-h-screen bg-background-light">
            {/* Hero Section */}
            <PageHeader
                title="Destination Weddings"
                subtitle={<>The <span className="text-primary">Experience</span> Art of Travel</>}
                image="/images/indian couple reddy.jpg"
            />

            {/* Intro Section */}
            <section className="max-w-[1280px] mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                        <Crown className="w-4 h-4" />
                        <span className="text-sm font-semibold">Royal Celebrations</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-dark mb-6">
                        Say "I Do" in Paradise
                    </h2>
                    <p className="text-lg text-text-dark/80 leading-relaxed">
                        Imagine exchanging vows on a decorated houseboat floating on Dal Lake,
                        with the majestic Himalayas as your witness. Or dancing under the stars in
                        a Mughal garden where emperors once celebrated love. Kashmir offers the most
                        romantic and unique wedding destinations in India – a place where every moment
                        becomes a fairytale.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
                >
                    {[
                        { value: "500+", label: "Weddings Planned" },
                        { value: "50+", label: "Premium Venues" },
                        { value: "100%", label: "Happy Couples" },
                        { value: "15+", label: "Years Experience" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center p-6 bg-white rounded-2xl border border-text-dark/5 shadow-sm">
                            <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                            <p className="text-sm text-text-dark/70">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* Why Kashmir Section */}
            <section className="bg-gradient-to-b from-primary/5 to-transparent py-20">
                <div className="max-w-[1280px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-dark mb-4">
                            Why Kashmir for Your Wedding?
                        </h2>
                        <p className="text-text-dark/70 max-w-2xl mx-auto">
                            Beyond its breathtaking beauty, Kashmir offers unique experiences that make your wedding unforgettable.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Castle,
                                title: "Magical Venues",
                                desc: "From heritage palaces to floating houseboats, choose from venues that exist nowhere else on Earth."
                            },
                            {
                                icon: ChefHat,
                                title: "Royal Wazwan Feast",
                                desc: "Treat guests to the legendary 36-course Kashmiri Wazwan, a culinary experience fit for royalty."
                            },
                            {
                                icon: Camera,
                                title: "Picture-Perfect Backdrops",
                                desc: "Snow-capped mountains, serene lakes, and Mughal gardens create the most photogenic wedding album."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-2xl border border-text-dark/5 shadow-sm text-center group hover:shadow-lg transition-shadow"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                                    <item.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-text-dark mb-3">{item.title}</h3>
                                <p className="text-text-dark/70">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium Venues Section */}
            <section className="max-w-[1280px] mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-semibold">Premium Venues</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-dark mb-4">
                        Luxury Wedding Venues & Hotels
                    </h2>
                    <p className="text-text-dark/70 max-w-2xl mx-auto">
                        Handpicked venues that offer world-class luxury and unforgettable experiences for your special day.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {weddingVenues.map((venue) => (
                        <motion.div
                            key={venue.id}
                            variants={itemVariants}
                            className="group bg-white rounded-2xl overflow-hidden border border-text-dark/5 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={venue.image}
                                    alt={venue.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-primary text-background-dark text-xs font-bold px-3 py-1.5 rounded-full">
                                        {venue.type}
                                    </span>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-xl font-bold text-white mb-1">{venue.name}</h3>
                                    <div className="flex items-center gap-1 text-white/80 text-sm">
                                        <MapPin className="w-3.5 h-3.5" />
                                        <span>{venue.location}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-text-dark/70 text-sm mb-4 line-clamp-2">{venue.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {venue.highlights.slice(0, 3).map((h, i) => (
                                        <span key={i} className="text-xs bg-primary/5 text-primary px-2 py-1 rounded-full">
                                            {h}
                                        </span>
                                    ))}
                                </div>
                                <button
                                    onClick={() => {
                                        window.dispatchEvent(new CustomEvent('open-plan-trip', {
                                            detail: { tripType: 'Destination Wedding', message: `Inquiry for venue: ${venue.name}` }
                                        }));
                                    }}
                                    className="w-full py-2.5 bg-text-dark text-white font-semibold rounded-xl hover:bg-primary transition-colors"
                                >
                                    Enquire Now
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Services Section */}
            <section className="bg-text-dark py-20">
                <div className="max-w-[1280px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
                            Our Wedding Services
                        </h2>
                        <p className="text-white/70 max-w-2xl mx-auto">
                            From planning to execution, we handle every detail so you can focus on celebrating.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    >
                        {weddingServices.map((service) => {
                            const Icon = iconMap[service.icon] || Heart;
                            return (
                                <motion.div
                                    key={service.id}
                                    variants={itemVariants}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
                                >
                                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-bold text-white mb-2">{service.title}</h3>
                                    <p className="text-white/60 text-sm">{service.description}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Wedding Packages Section */}
            <section className="max-w-[1280px] mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-dark mb-4">
                        Wedding Packages
                    </h2>
                    <p className="text-text-dark/70 max-w-2xl mx-auto">
                        Curated packages for every scale of celebration, fully customizable to your vision.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {weddingPackages.map((pkg, i) => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative rounded-2xl p-8 ${i === 1 ? "bg-primary text-background-dark" : "bg-white border border-text-dark/10"}`}
                        >
                            {i === 1 && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-text-dark text-white text-xs font-bold px-3 py-1 rounded-full">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                            <p className={`text-sm mb-4 ${i === 1 ? "text-background-dark/70" : "text-text-dark/70"}`}>
                                {pkg.duration}
                            </p>

                            <ul className="space-y-3 mb-8">
                                {pkg.includes.map((item, j) => (
                                    <li key={j} className="flex items-center gap-2 text-sm">
                                        <Star className={`w-4 h-4 ${i === 1 ? "text-background-dark" : "text-primary"}`} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => {
                                    window.dispatchEvent(new CustomEvent('open-plan-trip', {
                                        detail: { tripType: 'Destination Wedding', selectedPackage: pkg.title }
                                    }));
                                }}
                                className={`w-full py-3 font-bold rounded-xl transition-colors ${i === 1
                                    ? "bg-white text-primary hover:bg-white/90"
                                    : "bg-primary text-background-dark hover:bg-primary/90"
                                    }`}
                            >
                                Enquire Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 py-20">
                <div className="max-w-[1280px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-dark mb-4">
                            Let's Plan Your Dream Wedding
                        </h2>
                        <p className="text-text-dark/70 max-w-2xl mx-auto mb-8">
                            Our wedding specialists are ready to turn your vision into reality.
                            Get a personalized quote within 24 hours.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    window.dispatchEvent(new CustomEvent('open-plan-trip', {
                                        detail: { tripType: 'Destination Wedding' }
                                    }));
                                }}
                                className="px-8 py-4 bg-primary text-background-dark font-bold rounded-xl shadow-lg shadow-primary/30 flex items-center gap-2"
                            >
                                <Heart className="w-5 h-5" />
                                Plan My Wedding
                            </motion.button>
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-white text-text-dark font-bold rounded-xl border border-text-dark/10 flex items-center gap-2 hover:border-primary transition-colors"
                            >
                                <Phone className="w-5 h-5" />
                                Talk to Expert
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
