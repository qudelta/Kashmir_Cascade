import { PageHeader } from "@/components/layout/page-header";
import { Heart, Award, ShieldCheck, Map, User } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/layout/SEO";

export default function About() {
    const values = [
        { icon: Heart, title: "Passion", desc: "Every trip we design is crafted with love and deep knowledge of the land." },
        { icon: Award, title: "Excellence", desc: "We don't settle for good. We aim for unforgettable experiences." },
        { icon: ShieldCheck, title: "Trust", desc: "Your safety and satisfaction are our absolute priorities." },
        { icon: Map, title: "Local Expertise", desc: "We are Kashmiris showing you our home, not outsiders guessing." }
    ];

    const team = [
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

    return (
        <div className="min-h-screen bg-background-light">
            <SEO
                title="Our Story"
                description="Learn about Kashmir Cascade, our mission to show the authentic beauty of Kashmir, and the team behind your perfect holiday."
                canonical="/about"
            />
            <PageHeader
                title="Our Story"
                subtitle={<>Authentic Kashmiri <span className="text-primary">Hospitality</span></>}
                image="/images/Doodhpathri.jpg"
            />

            {/* Mission */}
            <section className="max-w-[1280px] mx-auto px-6 py-20 text-center">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-heading font-bold text-text-dark mb-6"
                    >
                        Bringing the World to Paradise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-text-dark/90 leading-relaxed"
                    >
                        Founded in 2025, <strong className="text-primary">Kashmir Cascade</strong> started with a simple mission: to show the world the true, authentic Kashmir beyond the headlines.
                        We are a team of locals who grew up exploring these mountains, fishing in these lakes, and walking these meadows.
                        We believe that travel isn't just about seeing places; it's about feeling them. Our goal is to make every guest feel not like a tourist, but like a part of our extended Kashmiri family.
                    </motion.p>
                </div>
            </section>

            {/* Values */}
            <section className="bg-white border-y border-text-dark/10 py-20">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="space-y-4"
                                >
                                    <div className="w-16 h-16 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
                                        <Icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-text-dark">{value.title}</h3>
                                    <p className="text-text-dark text-sm">{value.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="max-w-[1280px] mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-heading font-bold text-text-dark mb-4">Meet the Team</h2>
                        <p className="text-text-dark">The faces behind your perfect holiday</p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="w-48 h-48 mx-auto rounded-full bg-background-dark/5 flex items-center justify-center mb-6 border-2 border-text-dark/10 group-hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
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
                                    <User className="w-20 h-20 text-text-dark/30 group-hover:text-primary transition-colors" />
                                )}
                            </div>
                            <h3 className="text-xl font-bold text-text-dark">{member.name}</h3>
                            <p className="text-primary font-medium text-sm uppercase tracking-wide">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
