"use client";

import { useState } from "react";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/lib/store/cart";
import { ShoppingCart, Minus, Plus } from "lucide-react";

interface AddToCartButtonProps {
    product: any;
    variants: any[];
    defaultVariant: any;
}

export function AddToCartButton({ product, variants, defaultVariant }: AddToCartButtonProps) {
    const [selectedVariantId, setSelectedVariantId] = useState(defaultVariant.id);
    const [quantity, setQuantity] = useState(1);
    const addItem = useCartStore((state) => state.addItem);

    const selectedVariant = variants.find(v => v.id === selectedVariantId) || defaultVariant;

    // Group variants by weight
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

        // Show feedback (could be a toast notification)
        alert(`¡${quantity} ${quantity === 1 ? 'producto agregado' : 'productos agregados'} al carrito!`);
        setQuantity(1);
    };

    return (
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            {/* Price */}
            <div className="mb-6">
                <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-green-brand">
                        {formatPrice(selectedVariant.price)}
                    </span>
                    {selectedVariant.compareAtPrice && (
                        <span className="text-lg text-gray-500 line-through">
                            {formatPrice(selectedVariant.compareAtPrice)}
                        </span>
                    )}
                </div>
                {selectedVariant.compareAtPrice && (
                    <p className="text-sm text-green-brand font-medium mt-1">
                        Ahorra {formatPrice(selectedVariant.compareAtPrice - selectedVariant.price)}
                    </p>
                )}
            </div>

            {/* Weight Selector */}
            {weights.length > 1 && (
                <div className="mb-6">
                    <label className="block font-medium mb-3">Tamaño</label>
                    <div className="grid grid-cols-2 gap-3">
                        {weights.map((weight) => {
                            const variant = variants.find(v => v.weight === weight);
                            if (!variant) return null;

                            const isSelected = selectedVariantId === variant.id;

                            return (
                                <button
                                    key={variant.id}
                                    onClick={() => setSelectedVariantId(variant.id)}
                                    className={`
                    px-4 py-3 rounded-lg border-2 transition-all font-medium
                    ${isSelected
                                            ? 'border-green-brand bg-green-light text-green-dark'
                                            : 'border-gray-300 hover:border-green-brand'
                                        }
                  `}
                                >
                                    {weight}g
                                    <div className="text-sm font-normal text-gray-600">
                                        {formatPrice(variant.price)}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-6">
                <label className="block font-medium mb-3">Cantidad</label>
                <div className="flex items-center border-2 border-gray-300 rounded-lg w-fit">
                    <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-3 hover:bg-gray-100 transition-colors"
                        disabled={quantity <= 1}
                    >
                        <Minus className="w-5 h-5" />
                    </button>
                    <span className="px-6 py-3 font-bold text-lg min-w-[60px] text-center">
                        {quantity}
                    </span>
                    <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-3 hover:bg-gray-100 transition-colors"
                    >
                        <Plus className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Add to Cart Button */}
            <button
                onClick={handleAddToCart}
                className="btn btn-primary w-full text-lg flex items-center justify-center gap-3"
            >
                <ShoppingCart className="w-5 h-5" />
                Agregar al Carrito
            </button>

            {/* Total */}
            <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total:</span>
                    <span className="text-2xl font-bold text-green-brand">
                        {formatPrice(selectedVariant.price * quantity)}
                    </span>
                </div>
            </div>
        </div>
    );
}
