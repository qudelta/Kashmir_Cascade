import { motion } from "framer-motion";
import { PageHeader } from "@/components/layout/page-header";
import { FileText, Users, CreditCard, AlertTriangle, Scale, Mail } from "lucide-react";

const sections = [
    {
        icon: FileText,
        title: "1. Booking & Reservations",
        content: `All bookings are subject to availability and confirmation. A booking is confirmed only after:
        
• Receipt of the required advance payment
• Written confirmation from Kashmir Travels
• Verification of travel documents (if applicable)

We reserve the right to decline any booking without stating reasons. Prices are subject to change without prior notice until booking is confirmed.`
    },
    {
        icon: CreditCard,
        title: "2. Payment Terms",
        content: `Payment structure for all tour packages:

• 30% advance payment at the time of booking
• Remaining 70% must be paid 15 days before departure
• For bookings made within 15 days of departure, full payment is required
• Payments can be made via bank transfer, UPI, or credit/debit cards
• All prices are quoted in Indian Rupees (INR) inclusive of applicable taxes`
    },
    {
        icon: Users,
        title: "3. Traveler Responsibilities",
        content: `Travelers are responsible for:

• Providing accurate personal and travel information
• Carrying valid identification documents
• Arriving at designated pickup points on time
• Adhering to local laws and customs
• Respecting fellow travelers and tour guides
• Taking care of personal belongings and valuables
• Informing us of any medical conditions or dietary restrictions`
    },
    {
        icon: AlertTriangle,
        title: "4. Liability & Limitations",
        content: `Kashmir Travels shall not be liable for:

• Delays or changes due to weather, natural disasters, or political unrest
• Personal injury, loss, or damage to belongings
• Actions of third-party service providers (hotels, airlines, etc.)
• Visa rejections or immigration issues
• Force majeure events beyond our control

We strongly recommend purchasing comprehensive travel insurance for all trips.`
    },
    {
        icon: Scale,
        title: "5. Disputes & Governing Law",
        content: `These terms are governed by the laws of India:

• Any disputes shall be subject to the jurisdiction of courts in Srinagar, J&K
• We encourage resolving disputes through mutual discussion first
• Written complaints must be submitted within 30 days of travel completion
• Our decision on complaints shall be final and binding

By booking with us, you agree to these terms and conditions in their entirety.`
    }
];

export default function Terms() {
    return (
        <div className="min-h-screen bg-background-light">
            <PageHeader
                title="Terms & Conditions"
                subtitle="Please read carefully before booking"
                image="/images/Kashmir 2.jpg"
            />

            <section className="max-w-4xl mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <p className="text-lg text-text-dark/90 mb-4">
                        Last updated: December 2024
                    </p>
                    <p className="text-text-dark/90 mb-12">
                        By using our services and booking tours with Kashmir Travels, you agree to
                        comply with and be bound by the following terms and conditions. Please review
                        them carefully.
                    </p>

                    <div className="space-y-8">
                        {sections.map((section, index) => {
                            const Icon = section.icon;
                            return (
                                <motion.div
                                    key={section.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white border border-text-dark/10 rounded-2xl p-8"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-xl font-bold text-text-dark">{section.title}</h2>
                                    </div>
                                    <div className="text-text-dark/90 whitespace-pre-line leading-relaxed">
                                        {section.content}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-8"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <AlertTriangle className="w-6 h-6 text-yellow-500" />
                            <h3 className="text-lg font-bold text-text-dark">Important Notice</h3>
                        </div>
                        <p className="text-text-dark/90">
                            These terms and conditions are subject to change. We recommend reviewing
                            them periodically. Continued use of our services after modifications
                            constitutes acceptance of the updated terms.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center"
                    >
                        <p className="text-text-dark/80 mb-4">Have questions about our terms?</p>
                        <a
                            href="mailto:legal@kashmirtravels.com"
                            className="inline-flex items-center gap-2 text-primary hover:underline"
                        >
                            <Mail className="w-4 h-4" />
                            legal@kashmirtravels.com
                        </a>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
}
