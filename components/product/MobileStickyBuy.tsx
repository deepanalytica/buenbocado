"use client";

import { useState, useEffect } from "react";
import { formatPrice } from "@/lib/utils";
import { ShoppingCart, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/lib/store/cart";

interface MobileStickyBuyProps {
    product: any;
    activeVariant: any;
}

export function MobileStickyBuy({ product, activeVariant }: MobileStickyBuyProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const addItem = useCartStore((state) => state.addItem);

    useEffect(() => {
        const handleScroll = () => {
            // Show bar after scrolling past the main buy button area (approx 800px)
            setIsVisible(window.scrollY > 800);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleAddToCart = () => {
        addItem({
            variantId: activeVariant.id,
            productId: product.id,
            productName: product.name,
            flavorName: activeVariant.flavor.name,
            weight: activeVariant.weight,
            price: activeVariant.price,
            image: product.heroImage || `/assets/products/${activeVariant.flavor.slug}.png`,
            sku: activeVariant.sku,
        }, 1);

        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2000);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    className="fixed bottom-0 inset-x-0 z-[100] lg:hidden"
                >
                    <div className="bg-white/80 backdrop-blur-2xl border-t border-gray-100 px-6 py-4 pb-safe-area flex items-center justify-between shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Precio Total</span>
                            <span className="text-xl font-black text-gray-900 tracking-tighter">
                                {formatPrice(activeVariant.price)}
                            </span>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            disabled={showSuccess}
                            className={`
                                relative h-14 px-8 rounded-2xl flex items-center gap-3 font-black uppercase text-[10px] tracking-widest transition-all active:scale-95 shadow-xl
                                ${showSuccess
                                    ? 'bg-green-brand text-white'
                                    : 'bg-gray-900 text-white hover:bg-green-brand'
                                }
                            `}
                        >
                            <AnimatePresence mode="wait">
                                {showSuccess ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex items-center gap-2"
                                    >
                                        <Check className="w-4 h-4 stroke-[4px]" />
                                        <span>Añadido</span>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="default"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex items-center gap-2"
                                    >
                                        <ShoppingCart className="w-4 h-4" />
                                        <span>Agregar</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>

                    {/* Safe Area Spacer (CSS fallback) */}
                    <div className="h-[env(safe-area-inset-bottom)] bg-white/80 backdrop-blur-2xl" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
