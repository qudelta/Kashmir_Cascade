import { Link } from "react-router-dom";
import { Mountain } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#0b1810] border-t border-white/10 pt-16 pb-8">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="flex items-center gap-3 text-white mb-6">
                            <Mountain className="w-8 h-8 text-primary" />
                            <h2 className="text-xl font-bold tracking-tight font-display">Kashmir Travels</h2>
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed mb-6">
                            Your trusted partner for exploring the unseen beauty of Kashmir and Ladakh. Registered with J&K Tourism.
                        </p>
                        <div className="flex gap-3">
                            {/* Facebook */}
                            <a href="https://qudeltasolutions.com" target="_blank" rel="noopener noreferrer" className="size-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#1877F2] hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </a>
                            {/* Instagram */}
                            <a href="https://qudeltasolutions.com" target="_blank" rel="noopener noreferrer" className="size-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 3.808-.06zm0 5.838a3.868 3.868 0 100 7.737 3.868 3.868 0 000-7.737zm5.228-1.65a.965.965 0 110-1.929.965.965 0 010 1.929z" clipRule="evenodd" /></svg>
                            </a>
                            {/* YouTube */}
                            <a href="https://qudeltasolutions.com" target="_blank" rel="noopener noreferrer" className="size-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#FF0000] hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </a>
                            {/* WhatsApp */}
                            <a href="https://wa.me/917006476074?text=Hi%20Qudelta%2C%20I%20saw%20the%20Kashmir%20Tours%20demo%20and%20would%20like%20to%20know%20more" target="_blank" rel="noopener noreferrer" className="size-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#25D366] hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6 font-display">Quick Links</h3>
                        <ul className="flex flex-col gap-4">
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" to="/about">About Us</Link></li>
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" to="/destinations">Destinations</Link></li>
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" to="/packages">Packages</Link></li>
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" to="/blog">Blog</Link></li>
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-bold mb-6 font-display">Support</h3>
                        <ul className="flex flex-col gap-4">
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" to="/terms">Terms & Conditions</Link></li>
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" to="/cancellation-policy">Cancellation Policy</Link></li>
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" to="/faq">FAQs</Link></li>
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" to="/site-map">Sitemap</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white font-bold mb-6 font-display">Newsletter</h3>
                        <p className="text-white/50 text-sm mb-4">Subscribe to get the latest offers and travel tips.</p>
                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="w-full bg-white/5 border border-white/10 rounded-lg h-12 px-4 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-white/30"
                            />
                            <button className="w-full h-12 bg-primary hover:bg-green-500 text-background-dark font-bold rounded-lg transition-colors text-sm">Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-xs">© 2025 Kashmir Travels. All rights reserved.</p>
                    <p className="text-white/40 text-xs text-center md:text-left">
                        Designed with <span className="text-red-500">❤</span> by{" "}
                        <a
                            href="https://qudeltasolutions.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                        >
                            Qudelta Studios
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
