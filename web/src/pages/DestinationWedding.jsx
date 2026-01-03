import { motion } from "framer-motion";
import { Heart, Calendar, Users, Sparkles, MapPin, Camera, Music, Utensils } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { useState } from "react";

const weddingVenues = [
    {
        id: 1,
        name: "Dal Lake Heritage Houseboats",
        location: "Srinagar",
        image: "/images/Kashmir Dal Lake Background.jpg",
        capacity: "50-100 guests",
        highlights: ["Lakeside ceremony", "Traditional decor", "Shikara procession"],
        price: "₹8,00,000+"
    },
    {
        id: 2,
        name: "Gulmarg Snow Resort",
        location: "Gulmarg",
        image: "/images/gulmarg-featured.jpg",
        capacity: "100-200 guests",
        highlights: ["Mountain backdrop", "Snow ceremonies", "Gondola rides"],
        price: "₹12,00,000+"
    },
    {
        id: 3,
        name: "Mughal Gardens Estate",
        location: "Srinagar",
        image: "/images/Mughal gardens.jpg",
        capacity: "200-300 guests",
        highlights: ["Royal heritage", "Fountain shows", "Mughal architecture"],
        price: "₹15,00,000+"
    }
];

const services = [
    { icon: Camera, title: "Photography", description: "Professional wedding shoots with scenic backdrops" },
    { icon: Music, title: "Entertainment", description: "Traditional Kashmiri music & modern DJ services" },
    { icon: Utensils, title: "Catering", description: "Authentic Wazwan & multi-cuisine menus" },
    { icon: Sparkles, title: "Decoration", description: "Floral arrangements & traditional Kashmiri setups" }
];

export default function DestinationWedding() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        guests: "",
        budget: "",
        venue: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = `*KASHMIR CASCADE - WEDDING INQUIRY*
- Experience the Art of Travel -

*Customer Details:*
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}

*Wedding Details:*
• Date: ${formData.date}
• Guests: ${formData.guests}
• Budget: ${formData.budget || "Not specified"}
• Venue: ${formData.venue || "To be decided"}

*Special Requirements:*
${formData.message || "I'm looking for the perfect destination wedding in Kashmir!"}

---
_Sent via kashmircascade.com_`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/916006853203?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");

        setFormData({ name: "", email: "", phone: "", date: "", guests: "", budget: "", venue: "", message: "" });
    };

    return (
        <div className="min-h-screen bg-background-light">
            <PageHeader
                title="Destination Weddings"
                subtitle="Say 'I Do' in Paradise - Unforgettable Kashmir Weddings"
                backgroundImage="/images/Kashmir 2.jpg"
            />

            <main className="max-w-6xl mx-auto px-6 py-16">
                {/* Intro Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-text-dark/90 text-lg max-w-2xl mx-auto">
                        Create magical moments against the breathtaking backdrop of Kashmir's snow-capped mountains,
                        serene lakes, and lush valleys. Your dream wedding awaits in heaven on earth.
                    </p>
                </motion.div>

                {/* Wedding Venues */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-text-dark mb-8 font-display">Featured Venues</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {weddingVenues.map((venue, index) => (
                            <motion.div
                                key={venue.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden border border-text-dark/10 group hover:border-primary/30 transition-all"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={venue.image}
                                        alt={venue.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-text-dark mb-2">{venue.name}</h3>
                                    <p className="text-text-dark/80 text-sm flex items-center gap-2 mb-4">
                                        <MapPin className="w-4 h-4 text-primary" />
                                        {venue.location}
                                    </p>
                                    <p className="text-text-dark/70 text-sm mb-3 flex items-center gap-2">
                                        <Users className="w-4 h-4" />
                                        {venue.capacity}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {venue.highlights.map((highlight, i) => (
                                            <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-accent font-bold text-lg">{venue.price}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Services */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-text-dark mb-8 font-display">Our Services</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/50 p-6 rounded-xl text-center border border-text-dark/10 hover:border-primary/30 transition-all"
                                >
                                    <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                                    <h3 className="text-text-dark font-bold mb-2">{service.title}</h3>
                                    <p className="text-text-dark/80 text-sm">{service.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* Inquiry Form */}
                <section className="bg-white/30 p-8 md:p-12 rounded-3xl border border-text-dark/10">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-text-dark mb-2 font-display text-center">Plan Your Dream Wedding</h2>
                        <p className="text-text-dark/80 text-center mb-8">Fill out the form and we'll create a custom package for you</p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <input
                                    type="text"
                                    placeholder="Your Name *"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="bg-background-dark/50 border border-text-dark/10 rounded-xl px-4 py-3 text-text-dark placeholder:text-text-dark/40 focus:border-primary focus:outline-none transition-all"
                                />
                                <input
                                    type="email"
                                    placeholder="Email *"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="bg-background-dark/50 border border-text-dark/10 rounded-xl px-4 py-3 text-text-dark placeholder:text-text-dark/40 focus:border-primary focus:outline-none transition-all"
                                />
                            </div>
                            <div className="grid md:grid-cols-2 gap-5">
                                <input
                                    type="tel"
                                    placeholder="Phone Number *"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="bg-background-dark/50 border border-text-dark/10 rounded-xl px-4 py-3 text-text-dark placeholder:text-text-dark/40 focus:border-primary focus:outline-none transition-all"
                                />
                                <input
                                    type="date"
                                    placeholder="Wedding Date *"
                                    required
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    className="bg-background-dark/50 border border-text-dark/10 rounded-xl px-4 py-3 text-text-dark placeholder:text-text-dark/40 focus:border-primary focus:outline-none transition-all"
                                />
                            </div>
                            <div className="grid md:grid-cols-2 gap-5">
                                <input
                                    type="number"
                                    placeholder="Number of Guests *"
                                    required
                                    value={formData.guests}
                                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                    className="bg-background-dark/50 border border-text-dark/10 rounded-xl px-4 py-3 text-text-dark placeholder:text-text-dark/40 focus:border-primary focus:outline-none transition-all"
                                />
                                <select
                                    value={formData.budget}
                                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                    className="bg-background-dark/50 border border-text-dark/10 rounded-xl px-4 py-3 text-text-dark focus:border-primary focus:outline-none transition-all"
                                >
                                    <option value="">Budget Range</option>
                                    <option value="5-10L">₹5-10 Lakhs</option>
                                    <option value="10-20L">₹10-20 Lakhs</option>
                                    <option value="20L+">₹20 Lakhs+</option>
                                </select>
                            </div>
                            <select
                                value={formData.venue}
                                onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                                className="w-full bg-background-dark/50 border border-text-dark/10 rounded-xl px-4 py-3 text-text-dark focus:border-primary focus:outline-none transition-all"
                            >
                                <option value="">Preferred Venue (Optional)</option>
                                {weddingVenues.map((v) => (
                                    <option key={v.id} value={v.name}>{v.name}</option>
                                ))}
                            </select>
                            <textarea
                                placeholder="Special Requests or Questions"
                                rows={4}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-background-dark/50 border border-text-dark/10 rounded-xl px-4 py-3 text-text-dark placeholder:text-text-dark/40 focus:border-primary focus:outline-none transition-all resize-none"
                            />
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-primary hover:bg-primary-dark text-text-dark font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                            >
                                <Calendar className="w-5 h-5" />
                                Submit Inquiry
                            </motion.button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}
