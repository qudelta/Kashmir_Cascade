"use client";

import { PageHeader } from "@/components/layout/page-header";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Image from "next/image";

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

const teamMembers = [
    {
        name: "Faisal Ahmad Mir",
        role: "Founder & Travel Director",
        image: "/images/team-faisal.png",
        phone: "+91 9906XXXXXX"
    },
    {
        name: "Mehvish Akhtar",
        role: "Customer Relations Manager",
        image: "/images/team-mehvish.png",
        phone: "+91 7006XXXXXX"
    },
    {
        name: "Tariq Hussain Lone",
        role: "Senior Tour Coordinator",
        image: "/images/team-tariq.png",
        phone: "+91 9419XXXXXX"
    }
];

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background-dark">
            <PageHeader
                title="Get in Touch"
                subtitle="Let's plan your dream vacation"
                image="/images/Kashmir 2.jpg"
            />

            <section className="max-w-[1280px] mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-6">Contact Information</h2>
                        <p className="text-white/60 mb-12 text-lg">
                            Have questions about a package or need a custom itinerary? Our travel experts are here to help you 24/7.
                        </p>

                        <div className="space-y-8">
                            {contactInfo.map((info) => {
                                const Icon = info.icon;
                                return (
                                    <div key={info.title} className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white text-lg group-hover:text-primary transition-colors">
                                                {info.title}
                                            </h3>
                                            {info.lines.map((line, i) => (
                                                <p key={i} className="text-white/60">{line}</p>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Quick Contact CTA */}
                        <a
                            href="https://wa.me/919906123456"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-12 p-6 bg-gradient-to-r from-[#25D366]/20 to-[#25D366]/5 border border-[#25D366]/30 rounded-2xl flex items-center gap-4 hover:border-[#25D366]/50 transition-colors group cursor-pointer block"
                        >
                            <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            </div>
                            <div>
                                <p className="text-white font-bold text-lg">Quick Response via WhatsApp</p>
                                <p className="text-white/60 text-sm">Typically replies within 15 minutes during business hours</p>
                            </div>
                        </a>
                    </div>

                    {/* Form */}
                    <div className="bg-card-dark rounded-2xl border border-white/10 p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/80">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/50 text-white placeholder:text-white/30 outline-none transition-all"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/80">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/50 text-white placeholder:text-white/30 outline-none transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/80">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/50 text-white placeholder:text-white/30 outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/80">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/50 text-white placeholder:text-white/30 outline-none transition-all"
                                    placeholder="+91 9999999999"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/80">Message</label>
                                <textarea
                                    className="w-full h-32 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/50 text-white placeholder:text-white/30 outline-none transition-all resize-none"
                                    placeholder="Tell us about your travel plans..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full h-14 rounded-xl bg-primary text-background-dark font-bold text-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                            >
                                Send Message <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Meet Our Team */}
            <section className="bg-card-dark py-20">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4 font-display">Meet Your Travel Experts</h2>
                        <p className="text-white/60 max-w-2xl mx-auto">Our dedicated team of Kashmiri locals is ready to make your journey unforgettable</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member) => (
                            <div
                                key={member.name}
                                className="bg-background-dark rounded-2xl border border-white/10 p-6 text-center group hover:border-primary/30 transition-colors"
                            >
                                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-colors">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                                <a
                                    href={`tel:${member.phone.replace(/\s/g, '')}`}
                                    className="inline-flex items-center gap-2 text-white/60 text-sm hover:text-primary transition-colors"
                                >
                                    <Phone className="w-4 h-4" />
                                    {member.phone}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
