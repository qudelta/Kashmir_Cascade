import { motion } from "framer-motion";
import { ArrowRight, Snowflake, Calendar } from "lucide-react";

export function SeasonalOffers() {
    const handleClaimOffer = () => {
        // Dispatch event to open the Plan Trip modal with pre-filled details
        window.dispatchEvent(new CustomEvent('open-plan-trip', {
            detail: {
                tripType: 'Winter Special',
                message: "I'm interested in the Winter Wonderland Special Offer (Flat 20% Off)."
            }
        }));
    };

    return (
        <section className="relative -mt-10 mx-6 md:mx-0 z-20">
            <div className="max-w-[1280px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10 relative overflow-hidden"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <Snowflake className="w-64 h-64 text-white rotate-12" />
                    </div>
                    <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                        {/* Content */}
                        <div className="text-center md:text-left max-w-2xl">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-primary font-medium text-sm mb-6 border border-white/5">
                                <Snowflake className="w-4 h-4" />
                                <span>Winter Season Special</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                                Experience the Magic of <span className="text-primary">Winter Kashmir</span>
                            </h2>
                            <p className="text-white/70 text-lg mb-8 leading-relaxed">
                                Book your winter getaway now and experience premium skiing packages in Gulmarg and luxury houseboat stays. Offer valid for bookings made this month.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 text-white/80 text-sm">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-primary" />
                                    <span>Valid through March 2026</span>
                                </div>
                                <div className="hidden sm:block w-px h-4 bg-white/20"></div>
                                <div><span className="text-white/80">Limited Time Offer</span></div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="shrink-0">
                            <button
                                onClick={handleClaimOffer}
                                className="group relative px-8 py-4 bg-primary hover:bg-primary-dark text-background-dark font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(255,159,28,0.3)] hover:shadow-[0_0_30px_rgba(255,159,28,0.5)] flex items-center gap-3 overflow-hidden"
                            >
                                <span className="relative z-10 text-lg">Claim Offer Now</span>
                                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </button>
                            <p className="text-white/40 text-xs text-center mt-3">Limited availability. T&C apply.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
