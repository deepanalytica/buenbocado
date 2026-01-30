"use client";

import { useState } from "react";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/lib/store/cart";
import { ShoppingCart, Minus, Plus, Check, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AddToCartButtonProps {
    product: any;
    variants: any[];
    defaultVariant: any;
}

export function AddToCartButton({ product, variants, defaultVariant }: AddToCartButtonProps) {
    const [selectedVariantId, setSelectedVariantId] = useState(defaultVariant.id);
    const [quantity, setQuantity] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const addItem = useCartStore((state) => state.addItem);

    const selectedVariant = variants.find(v => v.id === selectedVariantId) || defaultVariant;
    const weights = [...new Set(variants.map(v => v.weight))].sort();

    const handleAddToCart = () => {
        addItem({
            variantId: selectedVariant.id,
            productId: product.id,
            productName: product.name,
            flavorName: selectedVariant.flavor.name,
            weight: selectedVariant.weight,
            price: selectedVariant.price,
            image: product.heroImage || `/assets/products/${selectedVariant.flavor.slug}.png`,
            sku: selectedVariant.sku,
        }, quantity);

        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
        setQuantity(1);
    };

    const savings = selectedVariant.compareAtPrice
        ? selectedVariant.compareAtPrice - selectedVariant.price
        : 0;
    const savingsPercent = selectedVariant.compareAtPrice
        ? Math.round((savings / selectedVariant.compareAtPrice) * 100)
        : 0;

    return (
        <div className="relative">
            {/* Price Identity Section */}
            <div className="mb-12">
                <div className="flex items-center gap-6 mb-4">
                    <motion.div
                        key={selectedVariant.id}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-6xl font-black text-gray-900 tracking-tighter"
                    >
                        {formatPrice(selectedVariant.price)}
                    </motion.div>
                    {selectedVariant.compareAtPrice && (
                        <div className="flex flex-col">
                            <span className="text-xl text-gray-400 line-through font-medium">
                                {formatPrice(selectedVariant.compareAtPrice)}
                            </span>
                            <div className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-brand text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-widest border border-orange-100 mt-1">
                                <Sparkles className="w-3 h-3" />
                                -{savingsPercent}% Dcto
                            </div>
                        </div>
                    )}
                </div>
                {selectedVariant.compareAtPrice && (
                    <p className="text-[10px] text-green-600 font-black uppercase tracking-[0.2em]">
                        ¡Ahorro Elite: {formatPrice(savings)}!
                    </p>
                )}
            </div>

            {/* Tactical Weight Dispatcher */}
            {weights.length > 1 && (
                <div className="mb-10">
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6">
                        Seleccionar Formato
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                        {weights.map((weight) => {
                            const variant = variants.find(v => v.weight === weight);
                            if (!variant) return null;

                            const isSelected = selectedVariantId === variant.id;

                            return (
                                <button
                                    key={variant.id}
                                    onClick={() => setSelectedVariantId(variant.id)}
                                    className={`
                                        group relative px-6 py-6 rounded-[1.5rem] border-2 transition-all text-left overflow-hidden
                                        ${isSelected
                                            ? 'border-green-brand bg-white shadow-premium'
                                            : 'border-gray-100 bg-gray-soft/30 hover:border-gray-200'
                                        }
                                    `}
                                >
                                    <div className="relative z-10">
                                        <div className={`text-lg font-black tracking-tight ${isSelected ? 'text-gray-900' : 'text-gray-400'}`}>
                                            {weight}g
                                        </div>
                                        <div className={`text-xs font-bold ${isSelected ? 'text-green-brand' : 'text-gray-400'}`}>
                                            {formatPrice(variant.price)}
                                        </div>
                                    </div>
                                    {isSelected && (
                                        <div className="absolute top-4 right-4">
                                            <div className="w-6 h-6 bg-green-brand rounded-lg flex items-center justify-center">
                                                <Check className="w-3.5 h-3.5 text-white stroke-[4px]" />
                                            </div>
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Operational Controls Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4">
                        Cantidad
                    </label>
                    <div className="flex items-center bg-white border border-gray-100 rounded-[1.5rem] p-2 shadow-sm">
                        <button
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="w-12 h-12 rounded-xl flex items-center justify-center hover:bg-gray-soft transition-colors disabled:opacity-30"
                            disabled={quantity <= 1}
                        >
                            <Minus className="w-5 h-5 text-gray-900" />
                        </button>
                        <span className="flex-1 text-center font-black text-xl text-gray-900">
                            {quantity}
                        </span>
                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="w-12 h-12 rounded-xl flex items-center justify-center hover:bg-gray-soft transition-colors"
                        >
                            <Plus className="w-5 h-5 text-gray-900" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-col justify-end">
                    <motion.button
                        onClick={handleAddToCart}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="h-16 bg-gray-900 text-white rounded-[1.5rem] flex items-center justify-center gap-3 relative overflow-hidden group shadow-xl shadow-black/10 active:shadow-inner"
                    >
                        <div className="absolute inset-0 bg-green-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <ShoppingCart className="w-5 h-5 relative z-10" />
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] relative z-10">Agregar</span>
                    </motion.button>
                </div>
            </div>

            {/* Success Micro-Notification */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute -bottom-2 w-full glass px-6 py-4 rounded-2xl border-green-brand/10 shadow-premium flex items-center gap-4 z-50 pointer-events-none"
                    >
                        <div className="w-8 h-8 rounded-xl bg-green-brand flex items-center justify-center">
                            <Check className="w-4 h-4 text-white stroke-[4px]" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-gray-900 uppercase tracking-widest">Éxito en Logística</p>
                            <p className="text-xs text-gray-500 font-medium">{quantity} unidades listas para envío</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Financial Summary */}
            <div className="mt-12 pt-10 border-t border-gray-50 flex items-center justify-between">
                <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-1">Total Transacción</p>
                    <p className="text-xs text-gray-400 font-medium">Incluye impuestos locales</p>
                </div>
                <motion.div
                    key={selectedVariant.price * quantity}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl font-black text-gray-900 tracking-tighter"
                >
                    {formatPrice(selectedVariant.price * quantity)}
                </motion.div>
            </div>
        </div>
    );
}
