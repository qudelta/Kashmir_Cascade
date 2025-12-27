import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-[#0b1810] border-t border-white/10 pt-16 pb-8">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex items-center gap-3 text-white mb-6">
                            <span className="material-symbols-outlined text-4xl text-primary">landscape</span>
                            <h2 className="text-xl font-bold tracking-tight font-display">Kashmir Travels</h2>
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed mb-6">
                            Your trusted partner for exploring the unseen beauty of Kashmir and Ladakh. Registered with J&K Tourism.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-background-dark transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-background-dark transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 3.808-.06zm0 5.838a3.868 3.868 0 100 7.737 3.868 3.868 0 000-7.737zm5.228-1.65a.965.965 0 110-1.929.965.965 0 010 1.929z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-background-dark transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6 font-display">Quick Links</h3>
                        <ul className="flex flex-col gap-4">
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" href="/about">About Us</Link></li>
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" href="/destinations">Destinations</Link></li>
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" href="/packages">Packages</Link></li>
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" href="#">Blog</Link></li>
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" href="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-bold mb-6 font-display">Support</h3>
                        <ul className="flex flex-col gap-4">
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" href="#">Terms & Conditions</Link></li>
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" href="#">Privacy Policy</Link></li>
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" href="#">Cancellation Policy</Link></li>
                            <li><Link className="text-white/60 hover:text-primary transition-colors text-sm" href="#">FAQs</Link></li>
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
                    <p className="text-white/40 text-xs">© 2024 Kashmir Travels. All rights reserved.</p>
                    <p className="text-white/40 text-xs flex items-center gap-1">Designed with <span className="material-symbols-outlined text-[16px] text-red-500">favorite</span> in Srinagar</p>
                </div>
            </div>
        </footer>
    );
}
