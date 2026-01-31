"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Instagram, Facebook, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#0A0A0A] text-white relative overflow-hidden">
            {/* Elite Background Accents */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-green-brand/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-blue-brand/5 rounded-full blur-[150px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

            <div className="bocado-container relative z-10 py-24 lg:py-32">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-12 gap-y-20">
                    {/* Brand Pillar */}
                    <div className="lg:col-span-4 space-y-12">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/assets/logo.png"
                                alt="BuenBocado"
                                width={200}
                                height={60}
                                className="brightness-0 invert w-48 h-auto"
                                priority
                            />
                        </Link>
                        <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-sm">
                            Redefiniendo el snack escolar con el poder de la fruta real. Sin sellos, sin compromisos. Nutrición premium para familias modernas.
                        </p>
                        {/* Social Hub */}
                        <div className="flex gap-4">
                            {[
                                { Icon: Instagram, href: "https://instagram.com/buenbocado" },
                                { Icon: Facebook, href: "https://facebook.com/buenbocado" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 dark-glass rounded-2xl flex items-center justify-center transition-all hover:-translate-y-1 hover:bg-green-brand hover:border-green-brand border-white/5 shadow-xl group"
                                    aria-label={`Seguir en ${social.href.split('/').pop()}`}
                                >
                                    <social.Icon className="w-5 h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-2 space-y-10">
                        <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-white/20">Experiencia</h4>
                        <ul className="space-y-6">
                            {[
                                { label: "Catálogo", href: "/tienda" },
                                { label: "Packs Ahorro", href: "/packs" },
                                { label: "Suscripciones", href: "/#cta" },
                                { label: "Planes B2B", href: "/b2b" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-500 hover:text-white transition-all inline-flex items-center gap-3 group text-sm font-bold tracking-tight"
                                    >
                                        <div className="w-1 h-1 rounded-full bg-green-brand scale-0 group-hover:scale-100 transition-all opacity-0 group-hover:opacity-100" />
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2 space-y-10">
                        <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-white/20">Comunidad</h4>
                        <ul className="space-y-6">
                            {[
                                { label: "Nuestra Misión", href: "/sobre-nosotros" },
                                { label: "Blog Nutricional", href: "/blog" },
                                { label: "Preguntas", href: "/faq" },
                                { label: "Prensa", href: "/prensa" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-500 hover:text-white transition-all inline-flex items-center gap-3 group text-sm font-bold tracking-tight"
                                    >
                                        <div className="w-1 h-1 rounded-full bg-blue-brand scale-0 group-hover:scale-100 transition-all opacity-0 group-hover:opacity-100" />
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Direct Contact Hub */}
                    <div className="lg:col-span-4 space-y-10">
                        <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-white/20">Soporte Directo</h4>
                        <div className="space-y-8">
                            <a
                                href="mailto:hola@buenbocado.cl"
                                className="flex items-center gap-6 group"
                                aria-label="Enviar correo electrónico a hola@buenbocado.cl"
                            >
                                <div className="w-14 h-14 dark-glass rounded-2xl flex items-center justify-center group-hover:bg-green-brand group-hover:border-green-brand transition-all flex-shrink-0">
                                    <Mail className="w-6 h-6" aria-hidden="true" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-1">Elite Support</p>
                                    <p className="font-black text-sm tracking-tight">hola@buenbocado.cl</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 dark-glass rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6" aria-hidden="true" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-1">Base de Operaciones</p>
                                    <p className="font-black text-sm tracking-tight text-white/60">RM — Santiago, Chile</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tactical Bottom Bar */}
                <div className="border-t border-white/5 mt-24 pt-12 flex flex-col md:flex-row justify-between items-center gap-10">
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 flex items-center gap-3">
                        <span>© {new Date().getFullYear()} BuenBocado Corp</span>
                        <span className="w-1 h-1 rounded-full bg-white/10" />
                        <span>High-End Nutrition Group</span>
                    </p>
                    <div className="flex gap-10 text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
                        <Link href="/politicas/terminos" className="hover:text-white transition-colors">Términos</Link>
                        <Link href="/politicas/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
                        <Link href="/politicas/cookies" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
