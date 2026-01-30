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
            <div className="container">
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
                                className="relative text-[10px] font-black uppercase tracking-[0.25em] text-gray-500 hover:text-green-brand transition-colors group"
                            >
                                <span>{link.name}</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-brand transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Action Hub */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/carrito"
                            className="relative w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-2xl hover:bg-green-brand transition-all shadow-xl hover:-translate-y-1 active:scale-95 group"
                        >
                            <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            {mounted && itemCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-green-brand text-white text-[9px] font-black rounded-full w-6 h-6 flex items-center justify-center shadow-lg border-2 border-white animate-bounce-short">
                                    {itemCount}
                                </span>
                            )}
                        </Link>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden w-12 h-12 flex items-center justify-center bg-marfil border border-gray-100 rounded-2xl text-gray-900 hover:text-green-brand transition-all"
                        >
                            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Premium Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-x-4 top-24 z-50 lg:hidden"
                    >
                        <div className="bg-white/90 backdrop-blur-2xl border border-white/50 rounded-[2.5rem] p-8 shadow-2xl">
                            <nav className="flex flex-col gap-2">
                                {navLinks.map((link, idx) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="flex items-center justify-between p-5 rounded-2xl hover:bg-green-brand/5 text-[11px] font-black uppercase tracking-widest text-gray-900 group"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <span>{link.name}</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-green-brand" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
