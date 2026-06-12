import { Link } from "wouter";
import logoUrl from "@assets/log_1768761231743.png";

interface FooterProps {
    transparentBg?: boolean;
}

export function Footer({ transparentBg = false }: FooterProps) {
    return (
        <footer className={`relative ${transparentBg ? 'bg-transparent' : 'bg-zinc-950'} text-zinc-400 py-16 border-t border-zinc-800/50 overflow-hidden`}>
            {/* Subtle Cinematic Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 mix-blend-overlay -z-10" />

            {/* Top Gradient Border Accent */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-3 gap-12 lg:gap-20">

                    {/* Brand/About Column */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-4 mb-6 group cursor-pointer">
                            <img
                                src={logoUrl}
                                alt="Jegsen Survey"
                                className="h-14 w-14 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:scale-105"
                            />
                            <span className="text-2xl font-bold font-display tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                                JEGSEN<span className="text-secondary drop-shadow-[0_0_10px_rgba(255,165,0,0.3)]">SURVEY</span>
                            </span>
                        </div>
                        <p className="leading-relaxed font-medium text-sm text-zinc-400 max-w-sm">
                            Setting the standard for survey and positioning surface to subsea. Delivering definitive expertise to global projects.
                        </p>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white font-display uppercase tracking-wider text-sm flex items-center gap-2">
                            <span className="w-8 h-[1px] bg-secondary inline-block" /> Quick Links
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { label: "Home", href: "/" },
                                { label: "About Us", href: "/about" },
                                { label: "Onshore Support", href: "/onshore-support" },
                                { label: "Positioning", href: "/surface-positioning" },
                                { label: "Survey", href: "/survey" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="group inline-flex items-center text-zinc-400 hover:text-white transition-colors duration-300 font-medium text-sm"
                                    >
                                        <span className="w-0 h-[1px] bg-secondary mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <button
                                    onClick={() => {
                                        const el = document.getElementById("contact");
                                        if (el) {
                                            el.scrollIntoView({ behavior: "smooth" });
                                        } else {
                                            window.location.href = "/#contact";
                                        }
                                    }}
                                    className="group inline-flex items-center text-zinc-400 hover:text-white transition-colors duration-300 font-medium text-sm"
                                >
                                    <span className="w-0 h-[1px] bg-secondary mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300" />
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white font-display uppercase tracking-wider text-sm flex items-center gap-2">
                            <span className="w-8 h-[1px] bg-secondary inline-block" /> Legal
                        </h4>
                        <ul className="space-y-4">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-zinc-500 hover:text-zinc-300 transition-colors duration-300 font-medium text-sm"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-zinc-800/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium tracking-wide">
                    <p className="text-zinc-500">
                        &copy; {new Date().getFullYear()} Jegsen Survey Nig Ltd. All rights reserved.
                    </p>
                    <p className="text-secondary/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                        Driven by integrity and excellence.
                    </p>
                </div>
            </div>
        </footer>
    );
}
