import { PageHeader } from "@/components/layout/page-header";
import { Heart, Award, ShieldCheck, Map } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background-dark">
            <PageHeader
                title="Our Story"
                subtitle="Born in Kashmir, For the World"
                image="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2000"
            />

            {/* Mission */}
            <section className="max-w-[1280px] mx-auto px-6 py-20 text-center max-w-4xl">
                <h2 className="text-3xl font-heading font-bold text-white mb-6">Bringing the World to Paradise</h2>
                <p className="text-lg text-white/70 leading-relaxed">
                    Founded in 2015, <strong className="text-primary">Kashmir Travels</strong> started with a simple mission: to show the world the true, authentic Kashmir beyond the headlines.
                    We are a team of locals who grew up exploring these mountains, fishing in these lakes, and walking these meadows.
                    We believe that travel isn't just about seeing places; it's about feeling them. Our goal is to make every guest feel not like a tourist, but like a part of our extended Kashmiri family.
                </p>
            </section>

            {/* Values */}
            <section className="bg-card-dark border-y border-white/10 py-20">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        <div className="space-y-4">
                            <div className="w-16 h-16 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
                                <Heart className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Passion</h3>
                            <p className="text-white/60 text-sm">We don't just work here; we love this land and want you to fall in love with it too.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="w-16 h-16 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
                                <Award className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Excellence</h3>
                            <p className="text-white/60 text-sm">From luxury houseboats to high-altitude camps, we select only the best for you.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="w-16 h-16 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
                                <ShieldCheck className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Trust</h3>
                            <p className="text-white/60 text-sm">Registered with J&K Tourism. Zero hidden costs. 100% transparency.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="w-16 h-16 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
                                <Map className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Local Expertise</h3>
                            <p className="text-white/60 text-sm">We know the hidden trails and secret viewpoints that Google Maps doesn't.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Snippet */}
            <section className="max-w-[1280px] mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white mb-4">Meet the Team</h2>
                    <p className="text-white/60">The faces behind your perfect holiday</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { name: "Aamir Khan", role: "Founder & CEO", img: 21 },
                        { name: "Faisal Mir", role: "Tour Manager", img: 22 },
                        { name: "Rashid Bhat", role: "Trek Leader", img: 23 },
                    ].map((member) => (
                        <div key={member.name} className="text-center group">
                            <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden mb-6 border-2 border-white/10 group-hover:border-primary/50 transition-colors">
                                <img
                                    src={`https://randomuser.me/api/portraits/men/${member.img}.jpg`}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
