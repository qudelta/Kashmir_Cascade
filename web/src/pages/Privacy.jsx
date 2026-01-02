import { motion } from "framer-motion";
import { PageHeader } from "@/components/layout/page-header";
import { Shield, Lock, Eye, Database, Mail, Globe } from "lucide-react";

const sections = [
    {
        icon: Database,
        title: "Information We Collect",
        content: [
            "Personal identification information (name, email, phone number)",
            "Booking and travel preferences",
            "Payment information (processed securely via third-party providers)",
            "Communication history with our team",
            "Website usage data and cookies"
        ]
    },
    {
        icon: Eye,
        title: "How We Use Your Information",
        content: [
            "To process and manage your travel bookings",
            "To communicate important updates about your trips",
            "To send promotional offers (only with your consent)",
            "To improve our services and website experience",
            "To comply with legal and regulatory requirements"
        ]
    },
    {
        icon: Lock,
        title: "Data Security",
        content: [
            "We use SSL encryption for all data transmission",
            "Payment details are handled by PCI-compliant providers",
            "Access to personal data is restricted to authorized personnel",
            "Regular security audits and updates are performed",
            "Data is stored on secure, protected servers"
        ]
    },
    {
        icon: Globe,
        title: "Third-Party Sharing",
        content: [
            "We share data with hotels and transport providers to fulfill bookings",
            "Payment processors receive necessary transaction details",
            "We do not sell your personal information to third parties",
            "Analytics services may receive anonymized usage data",
            "Legal authorities may receive data when required by law"
        ]
    }
];

export default function Privacy() {
    return (
        <div className="min-h-screen bg-background-dark">
            <PageHeader
                title="Privacy Policy"
                subtitle="Your privacy is important to us"
                image="/images/Kashmir 2.jpg"
            />

            <section className="max-w-4xl mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="prose prose-invert max-w-none"
                >
                    <p className="text-lg text-white/70 mb-8">
                        Last updated: December 2024
                    </p>

                    <p className="text-white/70 mb-12">
                        Kashmir Travels ("we," "our," or "us") is committed to protecting your privacy.
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your
                        information when you visit our website or use our services.
                    </p>

                    <div className="space-y-12">
                        {sections.map((section, index) => {
                            const Icon = section.icon;
                            return (
                                <motion.div
                                    key={section.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-card-dark border border-white/10 rounded-2xl p-8"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-xl font-bold text-white">{section.title}</h2>
                                    </div>
                                    <ul className="space-y-3">
                                        {section.content.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-white/70">
                                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 bg-primary/10 border border-primary/20 rounded-2xl p-8"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <Shield className="w-8 h-8 text-primary" />
                            <h2 className="text-xl font-bold text-white">Your Rights</h2>
                        </div>
                        <p className="text-white/70 mb-4">You have the right to:</p>
                        <ul className="space-y-2 text-white/70">
                            <li>• Access your personal data we hold</li>
                            <li>• Request correction of inaccurate data</li>
                            <li>• Request deletion of your data</li>
                            <li>• Opt-out of marketing communications</li>
                            <li>• Lodge a complaint with regulatory authorities</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center"
                    >
                        <p className="text-white/60 mb-4">Questions about our privacy practices?</p>
                        <a
                            href="mailto:privacy@kashmirtravels.com"
                            className="inline-flex items-center gap-2 text-primary hover:underline"
                        >
                            <Mail className="w-4 h-4" />
                            privacy@kashmirtravels.com
                        </a>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
}
