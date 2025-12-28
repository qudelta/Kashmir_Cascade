"use client";

import { PageHeader } from "@/components/layout/page-header";
import { Heart, Award, ShieldCheck, Map } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    const values = [
        { icon: Heart, title: "Passion", desc: "Every trip we design is crafted with love and deep knowledge of the land." },
        { icon: Award, title: "Excellence", desc: "We don't settle for good. We aim for unforgettable experiences." },
        { icon: ShieldCheck, title: "Trust", desc: "Your safety and satisfaction are our absolute priorities." },
        { icon: Map, title: "Local Expertise", desc: "We are Kashmiris showing you our home, not outsiders guessing." }
    ];

    const team = [
        { name: "Faisal Ahmad Mir", role: "Founder & Travel Director", img: "/images/team-faisal.png" },
        { name: "Mehvish Akhtar", role: "Customer Relations Manager", img: "/images/team-mehvish.png" },
        { name: "Tariq Hussain Lone", role: "Senior Tour Coordinator", img: "/images/team-tariq.png" }
    ];

    return (
        <div className="min-h-screen bg-background-dark">
            <PageHeader
                title="Our Story"
                subtitle="Authentic Kashmiri Hospitality"
                image="/images/Doodhpathri.jpg"
            />

            {/* Mission */}
            <section className="max-w-[1280px] mx-auto px-6 py-20 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-heading font-bold text-white mb-6">Bringing the World to Paradise</h2>
                    <p className="text-lg text-white/70 leading-relaxed">
                        Founded in 2015, <strong className="text-primary">Kashmir Travels</strong> started with a simple mission: to show the world the true, authentic Kashmir beyond the headlines.
                        We are a team of locals who grew up exploring these mountains, fishing in these lakes, and walking these meadows.
                        We believe that travel isn't just about seeing places; it's about feeling them. Our goal is to make every guest feel not like a tourist, but like a part of our extended Kashmiri family.
                    </p>
                </div>
            </section>

            {/* Values */}
            <section className="bg-card-dark border-y border-white/10 py-20">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {values.map((value) => {
                            const Icon = value.icon;
                            return (
                                <div key={value.title} className="space-y-4">
                                    <div className="w-16 h-16 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
                                        <Icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{value.title}</h3>
                                    <p className="text-white/60 text-sm">{value.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="max-w-[1280px] mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white mb-4">Meet the Team</h2>
                    <p className="text-white/60">The faces behind your perfect holiday</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member) => (
                        <div key={member.name} className="text-center group">
                            <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden mb-6 border-2 border-white/10 group-hover:border-primary/50 transition-all duration-300 relative">
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="192px"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-white">{member.name}</h3>
                            <p className="text-primary font-medium text-sm uppercase tracking-wide">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
