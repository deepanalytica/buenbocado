"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCartStore } from "@/lib/store/cart";
import { useState } from "react";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const itemCount = useCartStore((state) => state.getItemCount());

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            {/* Top bar */}
            <div className="bg-green-brand text-white py-2 text-center text-sm">
                Despacho en Chile · Pago seguro · Soporte por WhatsApp
            </div>

            {/* Main header */}
            <div className="container">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="BuenBocado"
                            width={180}
                            height={50}
                            className="h-12 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            href="/tienda"
                            className="text-gray-700 hover:text-green-brand font-medium transition-colors"
                        >
                            Tienda
                        </Link>
                        <Link
                            href="/packs"
                            className="text-gray-700 hover:text-green-brand font-medium transition-colors"
                        >
                            Packs
                        </Link>
                        <Link
                            href="/b2b"
                            className="text-gray-700 hover:text-green-brand font-medium transition-colors"
                        >
                            Colegios y Kioscos
                        </Link>
                        <Link
                            href="/faq"
                            className="text-gray-700 hover:text-green-brand font-medium transition-colors"
                        >
                            FAQ
                        </Link>
                        <Link
                            href="/sobre-nosotros"
                            className="text-gray-700 hover:text-green-brand font-medium transition-colors"
                        >
                            Sobre Nosotros
                        </Link>
                    </nav>

                    {/* Cart & Mobile Menu */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/carrito"
                            className="relative p-2 hover:bg-green-light rounded-lg transition-colors"
                        >
                            <ShoppingCart className="w-6 h-6 text-green-brand" />
                            {itemCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-green-brand text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                    {itemCount}
                                </span>
                            )}
                        </Link>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 hover:bg-green-light rounded-lg transition-colors"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6 text-green-brand" />
                            ) : (
                                <Menu className="w-6 h-6 text-green-brand" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white">
                    <nav className="container py-4 flex flex-col gap-4">
                        <Link
                            href="/tienda"
                            className="text-gray-700 hover:text-green-brand font-medium transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Tienda
                        </Link>
                        <Link
                            href="/packs"
                            className="text-gray-700 hover:text-green-brand font-medium transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Packs
                        </Link>
                        <Link
                            href="/b2b"
                            className="text-gray-700 hover:text-green-brand font-medium transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Colegios y Kioscos
                        </Link>
                        <Link
                            href="/faq"
                            className="text-gray-700 hover:text-green-brand font-medium transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            FAQ
                        </Link>
                        <Link
                            href="/sobre-nosotros"
                            className="text-gray-700 hover:text-green-brand font-medium transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Sobre Nosotros
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
