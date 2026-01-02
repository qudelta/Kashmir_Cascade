import { PageHeader } from "@/components/layout/page-header";
import { experiences } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Experiences() {
    return (
        <div className="min-h-screen">
            <PageHeader
                title="Unforgettable Experiences"
                subtitle="More than just sightseeing"
                image="/images/Doodhpathri.jpg"
                className="bg-black" // Fallback color
            />

            <section className="max-w-[1280px] mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <div className="absolute inset-0 w-full h-full">
                                <img
                                    src={exp.image}
                                    alt={exp.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />

                            <div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                                <div className="w-12 h-1 bg-primary mb-4 transition-all duration-300 group-hover:w-20" />
                                <h3 className="text-2xl font-bold text-white mb-2 font-heading">{exp.title}</h3>
                                <p className="text-gray-300 mb-6 line-clamp-2 max-w-sm group-hover:line-clamp-none transition-all">
                                    {exp.description}
                                </p>
                                <span className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    Book Experience <ArrowUpRight className="h-4 w-4" />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
