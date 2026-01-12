import { Link } from "react-router-dom";
import { Mountain } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="bg-[#0b1810] border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
            {/* Watermark Logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] opacity-[0.03] pointer-events-none select-none z-0">
                <img src="/logo-white.png" alt="" className="w-full h-full object-contain" />
            </div>
            <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
                {/* Top Section: Brand CTA */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display tracking-tight">Ready to Experience <span className="text-secondary">Kashmir</span>?</h2>
                        <p className="text-white/70 mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
                            Discover the breathtaking beauty of the valley with our curated premium packages,
                            designed to give you memories that last a lifetime.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <Link
                                to="/packages"
                                className="h-14 px-10 bg-primary hover:bg-primary-dark text-background-dark font-bold rounded-full transition-all shadow-xl hover:shadow-primary/30 flex items-center justify-center group"
                            >
                                Explore Our Packages
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link
                                to="/contact"
                                className="h-14 px-10 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full transition-all border border-white/10 backdrop-blur-sm flex items-center justify-center"
                            >
                                Contact Our Experts
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16"></div>

                {/* Middle Section: Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
                    {/* Brand & Socials */}
                    <div className="flex flex-col items-center md:items-start">
                        <Link to="/" className="block mb-6">
                            <img
                                src="/logo-white.png"
                                alt="Kashmir Cascade"
                                className="h-24 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm">
                            Your trusted partner for exploring the unseen beauty of Kashmir and Ladakh. Registered with J&K Tourism (Excursion Agent) Reg No: JKEA00005258
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons */}
                            <a href="https://www.instagram.com/kashmircascade/" target="_blank" rel="noopener noreferrer" className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:border-transparent transition-all transform hover:-translate-y-1">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 3.808-.06zm0 5.838a3.868 3.868 0 100 7.737 3.868 3.868 0 000-7.737zm5.228-1.65a.965.965 0 110-1.929.965.965 0 010 1.929z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="https://wa.me/916006853203?text=Hi%20Kashmir%20Cascade%2C%20I%20saw%20your%20website%20and%20want%20to%20enquire%20about%20your%20tour%20packages." target="_blank" rel="noopener noreferrer" className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all transform hover:-translate-y-1">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-white font-bold mb-6 font-display uppercase tracking-widest text-sm">Explore</h3>
                        <ul className="flex flex-col gap-4">
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" to="/about">About Us</Link></li>
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" to="/destinations">Destinations</Link></li>
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" to="/packages">Packages</Link></li>
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" to="/blog">Blog</Link></li>
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-white font-bold mb-6 font-display uppercase tracking-widest text-sm">Support</h3>
                        <ul className="flex flex-col gap-4">
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" to="/terms">Terms & Conditions</Link></li>
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" to="/cancellation-policy">Cancellation Policy</Link></li>
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" to="/faq">FAQs</Link></li>
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" to="/sitemap">Sitemap</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 pt-10 flex flex-col items-center gap-6 text-center">
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-white/40 text-xs tracking-widest uppercase">© 2026 Kashmir Cascade. All rights reserved.</p>
                        <div className="w-12 h-0.5 bg-primary/30 rounded-full"></div>
                    </div>

                    <p className="text-white/40 text-[10px] sm:text-xs">
                        Handcrafted with passion by{" "}
                        <a
                            href="https://qudeltastudios.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-white transition-colors font-medium border-b border-primary/20 hover:border-white/40"
                        >
                            Qudelta Studios
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
