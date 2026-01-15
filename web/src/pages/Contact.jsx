import { PageHeader } from "@/components/layout/page-header";
import { Mail, Phone, MapPin, Clock, Send, User } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { submitLead } from "@/lib/api";
import SEO from "@/components/layout/SEO";

export default function Contact() {
    const contactInfo = [
        {
            icon: Phone,
            title: "Phone & WhatsApp",
            lines: [
                "+91 6006 853 203 (WhatsApp)",
                "+91 7006 348 236 (Helpline)"
            ]
        },
        {
            icon: Mail,
            title: "Email Us",
            lines: ["info@kashmircascade.com"]
        },
        {
            icon: MapPin,
            title: "Visit Our Office",
            lines: ["Patigooro Complex, Main Chowk", "Sopore, Jammu & Kashmir - 193201"]
        },
        {
            icon: Clock,
            title: "Office Hours",
            lines: ["Mon - Sat: 09:00 AM - 05:00 PM", "Sun: Closed"]
        }
    ];

    const teamMembers = [
        {
            name: "Sheikh Sakib",
            role: "Lead – Travel Operations",
            image: "/images/team/sakib-v3.png"
        },
        {
            name: "Sheikh Ubaid",
            role: "Lead – Client Relations & Sales",
            phone: "+91 6006 853 203",
            image: "/images/team/ubaid.jpg?v=updated"
        }
    ];

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const fullName = `${formData.firstName} ${formData.lastName}`.trim();

        // Submit lead concurrently
        submitLead({
            name: fullName,
            email: formData.email,
            phone_number: formData.phone,
            trip_type: "General/Contact Inquiry",
            custom_requirements: formData.message
        }).catch(err => console.error("Background API submission failed:", err));

        const waMessage = `*KASHMIR CASCADE - CONTACT INQUIRY*
- Experience the Art of Travel -

*Customer Details:*
• Name: ${fullName}
• Email: ${formData.email || "Not provided"}
• Phone: ${formData.phone}

*Message:*
${formData.message || "I'm looking for more information about your services."}

---
_Sent via kashmircascade.com_`;

        const encodedMessage = encodeURIComponent(waMessage);
        const whatsappUrl = `https://wa.me/916006853203?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="min-h-screen bg-background-light">
            <SEO
                title="Contact Us"
                description="Get in touch with Kashmir Cascade for custom tour planning, package inquiries, and travel assistance in Kashmir and Ladakh."
                canonical="/contact"
            />
            <PageHeader
                title="Get in Touch"
                subtitle={<>Let's Plan Your <span className="text-primary">Dream Vacation</span></>}
                image="/images/Kashmir 2.jpg"
            />

            <section className="max-w-[1280px] mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-heading font-bold text-text-dark mb-6">Contact Information</h2>
                            <p className="text-text-dark mb-12 text-lg">
                                Have questions about a package or need a custom itinerary? Our travel experts are here to help you 24/7.
                                <br />
                                <span className="text-sm font-semibold text-primary/80 mt-2 block">J&K Tourism (Excursion Agent) Reg No: JKEA00005258</span>
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon;
                                return (
                                    <motion.div
                                        key={info.title}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-text-dark text-lg group-hover:text-primary transition-colors">
                                                {info.title}
                                            </h3>
                                            {info.lines.map((line, i) => (
                                                <p key={i} className="text-text-dark">{line}</p>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Quick Contact CTA */}
                        <motion.a
                            href="https://wa.me/916006853203?text=Hi%20Kashmir%20Cascade%2C%20I%20want%20to%20enquire%20about%20a%20custom%20trip."
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-12 p-6 bg-gradient-to-r from-[#25D366]/20 to-[#25D366]/5 border border-[#25D366]/30 rounded-2xl flex items-center gap-4 hover:border-[#25D366]/50 transition-colors group cursor-pointer block"
                        >
                            <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-text-dark" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            </div>
                            <div>
                                <p className="text-text-dark font-bold text-lg">Quick Response via WhatsApp</p>
                                <p className="text-text-dark text-sm">Typically replies within 15 minutes during business hours</p>
                            </div>
                        </motion.a>
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl border border-text-dark/10 p-8 md:p-12"
                    >
                        <h3 className="text-2xl font-bold text-text-dark mb-6">Send us a Message</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text-dark">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full h-12 px-4 rounded-xl bg-white/5 border border-text-dark/10 focus:border-primary focus:ring-1 focus:ring-primary/50 text-text-dark placeholder:text-text-dark/50 outline-none transition-all"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text-dark">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        required
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full h-12 px-4 rounded-xl bg-white/5 border border-text-dark/10 focus:border-primary focus:ring-1 focus:ring-primary/50 text-text-dark placeholder:text-text-dark/50 outline-none transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-text-dark">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full h-12 px-4 rounded-xl bg-white/5 border border-text-dark/10 focus:border-primary focus:ring-1 focus:ring-primary/50 text-text-dark placeholder:text-text-dark/50 outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-text-dark">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full h-12 px-4 rounded-xl bg-white/5 border border-text-dark/10 focus:border-primary focus:ring-1 focus:ring-primary/50 text-text-dark placeholder:text-text-dark/50 outline-none transition-all"
                                    placeholder="+91 9999999999"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-text-dark">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full h-32 px-4 py-3 rounded-xl bg-white/5 border border-text-dark/10 focus:border-primary focus:ring-1 focus:ring-primary/50 text-text-dark placeholder:text-text-dark/50 outline-none transition-all resize-none"
                                    placeholder="Tell us about your travel plans..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full h-14 rounded-xl bg-primary text-background-dark font-bold text-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                            >
                                Send via WhatsApp <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Meet Our Team */}
            <section className="bg-white py-20">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-text-dark mb-4 font-display">Meet Your Travel Experts</h2>
                            <p className="text-text-dark max-w-2xl mx-auto">Our dedicated team of Kashmiri locals is ready to make your journey unforgettable</p>
                        </motion.div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-background-dark rounded-2xl border border-text-dark/10 p-6 text-center group hover:border-primary/30 transition-colors"
                            >
                                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full bg-background-light flex items-center justify-center overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-colors">
                                    {member.image ? (
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className={`w-full h-full transition-transform duration-500 group-hover:scale-110 
                                                ${member.name === 'Sakib'
                                                    ? 'object-contain object-bottom'
                                                    : 'object-cover object-center'
                                                }
                                            `}
                                        />
                                    ) : (
                                        <User className="w-16 h-16 text-text-dark/30 group-hover:text-primary transition-colors" />
                                    )}
                                </div>
                                <h3 className="text-xl font-bold text-text-dark mb-1">{member.name}</h3>
                                <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                                {member.phone && (
                                    <a
                                        href={`tel:${member.phone.replace(/\s/g, '')}`}
                                        className="inline-flex items-center gap-2 text-text-dark text-sm hover:text-primary transition-colors"
                                    >
                                        <Phone className="w-4 h-4" />
                                        {member.phone}
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
