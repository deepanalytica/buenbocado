"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, X, ArrowRight } from "lucide-react";
import { useCartStore } from "@/lib/store/cart";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    const itemCount = useCartStore((state) => state.getItemCount());

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Tienda", href: "/tienda" },
        { name: "Packs", href: "/packs" },
        { name: "Colegios", href: "/b2b" },
        { name: "Suscripción", href: "/#cta" },
        { name: "Nosotros", href: "/sobre-nosotros" }
    ];

    return (
        <header
            className={`sticky top-0 z-[100] transition-all duration-500 ${scrolled
                ? "py-3 bg-white/70 backdrop-blur-2xl border-b border-gray-100/50 shadow-premium"
                : "py-6 bg-transparent"
                }`}
        >
            <div className="bocado-container">
                <div className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-[2rem] px-8 py-4 flex items-center justify-between shadow-premium transition-all">
                    {/* Logo Area */}
                    <Link href="/" className="flex items-center group">
                        <div className="relative h-10 w-auto">
                            <Image
                                src="/assets/logo.png"
                                alt="BuenBocado"
                                width={160}
                                height={50}
                                className="h-full w-auto object-contain group-hover:scale-105 transition-transform"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Elite Navigation */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative text-[11px] font-black uppercase tracking-[0.25em] text-gray-500 hover:text-green-brand transition-colors group"
                            >
                                <span>{link.name}</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-brand transition-all group-hover:w-full" aria-hidden="true" />
                            </Link>
                        ))}
                    </nav>

                    {/* Action Hub */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/carrito"
                            className="relative w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-2xl hover:bg-green-brand transition-all shadow-xl hover:-translate-y-1 active:scale-95 group"
                            aria-label={`Ver carrito de compras, ${itemCount} productos`}
                        >
                            <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                            {mounted && itemCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-green-brand text-white text-[9px] font-black rounded-full w-6 h-6 flex items-center justify-center shadow-lg border-2 border-white animate-bounce-short">
                                    {itemCount}
                                </span>
                            )}
                        </Link>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden w-12 h-12 flex items-center justify-center bg-marfil border border-gray-100 rounded-2xl text-gray-900 hover:text-green-brand transition-all"
                            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                            aria-expanded={mobileMenuOpen}
                        >
                            {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Premium Mobile Menu - Full Screen Elite Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[150] lg:hidden"
                    >
                        {/* Backdrop with Blur */}
                        <div
                            className="absolute inset-0 bg-white/60 backdrop-blur-3xl"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Drawer Content */}
                        <div className="absolute inset-x-0 top-0 bottom-0 bg-white/80 border-l border-gray-100/50 flex flex-col pt-32 pb-12 px-8 overflow-y-auto">
                            <nav className="flex flex-col gap-4">
                                {navLinks.map((link, idx) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                        transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="flex items-center justify-between py-6 border-b border-gray-50 text-2xl font-black uppercase tracking-tight text-gray-900 group"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <span className="group-hover:text-green-brand transition-colors">{link.name}</span>
                                            <ArrowRight className="w-6 h-6 text-green-brand opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" aria-hidden="true" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Mobile Drawer Footer */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-auto pt-12"
                            >
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6">Soporte Elite</p>
                                <div className="p-8 rounded-[2rem] bg-gray-soft border border-gray-100">
                                    <p className="font-bold text-gray-900 mb-2">contacto@buenbocado.cl</p>
                                    <p className="text-sm text-gray-500">Villa Alegre, Maule, Chile</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Close Trigger - Corner Optimized */}
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="absolute top-10 right-10 w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center shadow-2xl z-[200]"
                            aria-label="Cerrar menú"
                        >
                            <X className="w-6 h-6" aria-hidden="true" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
