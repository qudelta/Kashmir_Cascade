import { useState } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

// Using local images we have verified so far
const galleryImages = [
    { id: 1, src: "/images/Kashmir Dal Lake Background.jpg", category: "Landscapes", title: "Serene Dal Lake" },
    { id: 2, src: "/images/Winter white snow gulmatg.jpg", category: "Winter", title: "Snowy Gulmarg" },
    { id: 3, src: "/images/kashmiri wazwan.jpg", category: "Food & Culture", title: "Traditional Wazwan" },
    { id: 4, src: "/images/Pahalgam.jpg", category: "Landscapes", title: "Lidder River, Pahalgam" },
    { id: 5, src: "/images/Gurez Habba Khatoon.jpg", category: "Landscapes", title: "Gurez Valley" },
    { id: 6, src: "/images/Sonmarg.jpg", category: "Landscapes", title: "Thajiwas Glacier" },
    { id: 7, src: "/images/indian woman.jpg", category: "People", title: "Local Hospitality" },
    { id: 8, src: "/images/Leh Ladakh.jpg", category: "Adventure", title: "Road to Ladakh" },
    { id: 9, src: "/images/Doodhpathri.jpg", category: "Landscapes", title: "Doodhpathri Meadows" },
    { id: 10, src: "/images/Hazratbal Shrine.jpg", category: "Culture", title: "Hazratbal Shrine" },
    { id: 11, src: "/images/Mughal gardens.jpg", category: "Culture", title: "Nishat Garden" },
    { id: 12, src: "/images/Aruvillage.jpg", category: "Landscapes", title: "Aru Valley" },
];

const categories = ["All", "Landscapes", "Winter", "Culture", "Food & Culture", "People", "Adventure"];

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredImages = activeCategory === "All"
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    return (
        <div className="min-h-screen bg-background-light">
            <PageHeader
                title="Visual Journey"
                subtitle="Capturing the Soul of Kashmir"
                image="/images/Sonmarg.jpg"
            />

            <section className="max-w-[1280px] mx-auto px-6 py-20">
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full border transition-all duration-300 font-medium ${activeCategory === category
                                ? "bg-primary text-background-dark border-primary"
                                : "bg-transparent border-text-dark/10 text-text-dark/80 hover:border-primary/50 hover:text-text-dark"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredImages.map((image) => (
                            <motion.div
                                layout
                                key={image.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                                onClick={() => setSelectedImage(image)}
                            >
                                <div className="absolute inset-0 w-full h-full">
                                    <img
                                        src={image.src}
                                        alt={image.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <ZoomIn className="w-8 h-8 text-text-dark mx-auto mb-2" />
                                        <p className="text-text-dark font-bold">{image.title}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-text-dark hover:bg-white/20 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="relative max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-full">
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    className="max-w-full max-h-[85vh] object-contain"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <h3 className="text-2xl font-bold text-text-dark mb-1">{selectedImage.title}</h3>
                                <p className="text-primary font-medium">{selectedImage.category}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
