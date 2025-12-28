"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/layout/page-header";
import { Calendar, AlertCircle, RefreshCcw, XCircle, Clock, Mail } from "lucide-react";

const cancellationTiers = [
    {
        period: "30+ days before departure",
        refund: "90%",
        deduction: "10% processing fee",
        color: "text-green-400",
        bg: "bg-green-500/10",
        border: "border-green-500/20"
    },
    {
        period: "15-29 days before departure",
        refund: "70%",
        deduction: "30% cancellation fee",
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20"
    },
    {
        period: "7-14 days before departure",
        refund: "50%",
        deduction: "50% cancellation fee",
        color: "text-orange-400",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20"
    },
    {
        period: "Less than 7 days",
        refund: "0%",
        deduction: "No refund",
        color: "text-red-400",
        bg: "bg-red-500/10",
        border: "border-red-500/20"
    }
];

export default function CancellationPolicyPage() {
    return (
        <div className="min-h-screen bg-background-dark">
            <PageHeader
                title="Cancellation Policy"
                subtitle="Flexible policies for peace of mind"
                image="/images/Kashmir 2.jpg"
            />

            <section className="max-w-4xl mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <p className="text-lg text-white/70 mb-4">
                        Last updated: December 2024
                    </p>
                    <p className="text-white/70 mb-12">
                        We understand that plans can change. Our cancellation policy is designed to be
                        fair to both travelers and our team. Please review the following guidelines.
                    </p>

                    {/* Cancellation Tiers */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Refund Schedule</h2>
                        </div>

                        <div className="grid gap-4">
                            {cancellationTiers.map((tier, index) => (
                                <motion.div
                                    key={tier.period}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`${tier.bg} ${tier.border} border rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4`}
                                >
                                    <div className="flex items-center gap-4">
                                        <Clock className={`w-5 h-5 ${tier.color}`} />
                                        <span className="text-white font-medium">{tier.period}</span>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="text-center">
                                            <p className={`text-2xl font-bold ${tier.color}`}>{tier.refund}</p>
                                            <p className="text-xs text-white/50">Refund</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-white/70 text-sm">{tier.deduction}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Modification Policy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-card-dark border border-white/10 rounded-2xl p-8 mb-8"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                                <RefreshCcw className="w-6 h-6" />
                            </div>
                            <h2 className="text-xl font-bold text-white">Date Modification</h2>
                        </div>
                        <ul className="space-y-3 text-white/70">
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                                One free date change allowed if requested 30+ days before departure
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                                Date changes within 30 days incur a ₹2,000 modification fee
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                                Subject to availability of hotels and transport
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                                Price differences for peak season dates must be paid
                            </li>
                        </ul>
                    </motion.div>

                    {/* Non-Refundable Items */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-card-dark border border-white/10 rounded-2xl p-8 mb-8"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400">
                                <XCircle className="w-6 h-6" />
                            </div>
                            <h2 className="text-xl font-bold text-white">Non-Refundable Items</h2>
                        </div>
                        <ul className="space-y-3 text-white/70">
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                                Flight tickets (airline policies apply separately)
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                                Visa processing fees
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                                Travel insurance premiums
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                                Special event tickets or permits already booked
                            </li>
                        </ul>
                    </motion.div>

                    {/* Important Notice */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-primary/10 border border-primary/20 rounded-2xl p-8 mb-8"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <AlertCircle className="w-6 h-6 text-primary" />
                            <h3 className="text-lg font-bold text-white">How to Cancel</h3>
                        </div>
                        <ol className="space-y-3 text-white/70 list-decimal list-inside">
                            <li>Send a cancellation request via email with your booking reference</li>
                            <li>Include the reason for cancellation (optional)</li>
                            <li>Receive confirmation within 24 hours</li>
                            <li>Refund processed within 7-10 business days to original payment method</li>
                        </ol>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <p className="text-white/60 mb-4">Need to modify or cancel your booking?</p>
                        <a
                            href="mailto:bookings@kashmirtravels.com"
                            className="inline-flex items-center gap-2 text-primary hover:underline"
                        >
                            <Mail className="w-4 h-4" />
                            bookings@kashmirtravels.com
                        </a>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
}
