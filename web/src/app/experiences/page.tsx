import { PageHeader } from "@/components/layout/page-header";
import { experiences } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ExperiencesPage() {
    return (
        <div className="min-h-screen">
            <PageHeader
                title="Unforgettable Experiences"
                subtitle="More than just sightseeing"
                image="/images/Doodhpathri.jpg"
            />

            <section className="container py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src={exp.image}
                                    alt={exp.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />

                            <div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                                <div className="w-12 h-1 bg-secondary mb-4 transition-all duration-300 group-hover:w-20" />
                                <h3 className="text-2xl font-bold text-white mb-2 font-heading">{exp.title}</h3>
                                <p className="text-gray-300 mb-6 line-clamp-2 max-w-sm group-hover:line-clamp-none transition-all">
                                    {exp.description}
                                </p>
                                <span className="inline-flex items-center gap-2 text-secondary font-bold text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
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
