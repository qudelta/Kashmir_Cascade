import { PageHeader } from "@/components/layout/page-header";
import { motion } from "framer-motion";
import { Star, Quote, Calendar } from "lucide-react";

const reviews = [
    {
        id: 1,
        name: "Sarah & Rahul",
        location: "Mumbai",
        date: "December 2024",
        rating: 5,
        image: "/images/indian couple reddy.jpg",
        title: "A Winter Fairytale",
        text: "We booked our honeymoon with Kashmir Travels and it was absolutely magical. The houseboat stay in Dal Lake was the highlight. Faisal bhai arranged a private shikara ride that we'll never forget. Highly recommended for couples!"
    },
    {
        id: 2,
        name: "David T.",
        location: "London, UK",
        date: "October 2024",
        rating: 5,
        image: "/images/indian person.jpg",
        title: "Impeccable Service",
        text: "I was skeptical about traveling solo, but the team made me feel completely at home. The trek to Great Lakes was organized perfectly. The guides were knowledgeable and safety was their top priority. Kashmir is truly safe and beautiful."
    },
    {
        id: 3,
        name: "Priya Sharma",
        location: "Delhi",
        date: "August 2024",
        rating: 5,
        image: "/images/indian woman.jpg",
        title: "Best Family Vacation",
        text: "Took my parents and kids to Kashmir. Tariq ji customized the itinerary so it wasn't too tiring for my parents but still fun for the kids. The hotels were excellent and the food recommendations were spot on."
    },
    {
        id: 4,
        name: "Arjun Mehta",
        location: "Bangalore",
        date: "July 2024",
        rating: 5,
        image: "/images/team-faisal.png",
        title: "Gurez Valley is a Must!",
        text: "If you go to Kashmir, don't miss Gurez. It's untouched paradise. Thanks to Kashmir Travels for suggesting this hidden gem. The log hut stay was cozy and the locals were so welcoming."
    },
    {
        id: 5,
        name: "Dr. Anjali Gupta",
        location: "Pune",
        date: "November 2024",
        rating: 5,
        image: "/images/team-mehvish.png",
        title: "Professional & Personal",
        text: "What sets them apart is the personal touch. Mehvish checked on us every single day. When my daughter got a bit of altitude sickness in Gulmarg, they immediately arranged medical help. That's what you need in a travel agent."
    },
    {
        id: 6,
        name: "The Reddy Family",
        location: "Hyderabad",
        date: "September 2024",
        rating: 5,
        image: "/images/indian couple reddy.jpg",
        title: "Wazwan Experience",
        text: "The authentic Wazwan dinner arranged at a local home was the best meal of our lives. It wasn't just food, it was culture on a plate. Thank you for this unique experience."
    }
];

export default function Reviews() {
    return (
        <div className="min-h-screen bg-background-dark">
            <PageHeader
                title="Guest Stories"
                subtitle="Memories created with Kashmir Travels"
                image="/images/Kashmir 2.jpg"
            />

            <section className="max-w-[1280px] mx-auto px-6 py-20">
                {/* Intro */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white mb-6">Real Reviews from Real Travelers</h2>
                    <p className="text-white/60 text-lg">
                        We don't just book trips; we craft experiences. Here's what our guests have to say about their journey through paradise with us.
                    </p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {reviews.map((review, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            key={review.id}
                            className="bg-card-dark border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-colors group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors relative">
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">{review.name}</h3>
                                    <p className="text-white/40 text-xs">{review.location}</p>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`} />
                                ))}
                            </div>

                            <h4 className="text-xl font-bold text-white mb-3 font-display">"{review.title}"</h4>
                            <p className="text-white/70 leading-relaxed text-sm mb-6">
                                {review.text}
                            </p>

                            <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs text-white/40">
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-3 h-3" /> {review.date}
                                </span>
                                <Quote className="w-6 h-6 text-primary/20" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="bg-primary/10 border border-primary/20 rounded-3xl p-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Have you traveled with us?</h2>
                    <p className="text-white/70 mb-8 max-w-xl mx-auto">We'd love to hear your story! Your feedback helps us create even better experiences for future travelers.</p>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center h-14 px-8 rounded-xl bg-primary text-background-dark font-bold text-lg hover:bg-primary/90 transition-colors "
                    >
                        Share Your Story
                    </a>
                </div>
            </section>
        </div>
    );
}
