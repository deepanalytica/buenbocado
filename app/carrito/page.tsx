"use client";

import { useCartStore } from "@/lib/store/cart";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";

export default function CarritoPage() {
    const { items, removeItem, updateQuantity, getSubtotal, getTotal, couponDiscount, couponCode } = useCartStore();

    const subtotal = getSubtotal();
    const total = getTotal();

    if (items.length === 0) {
        return (
            <main className="container py-20">
                <div className="max-w-md mx-auto text-center">
                    <ShoppingCart className="w-20 h-20 mx-auto mb-6 text-gray-300" />
                    <h1 className="mb-4">Tu carrito está vacío</h1>
                    <p className="text-gray-600 mb-8">
                        Agrega algunos pouches deliciosos para empezar
                    </p>
                    <Link href="/tienda" className="btn btn-primary">
                        Ir a la tienda
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="container py-12">
            <h1 className="mb-8">Carrito de Compras</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                    <div className="space-y-4">
                        {items.map((item) => (
                            <div key={item.variantId} className="card">
                                <div className="flex gap-4">
                                    {/* Image */}
                                    {item.image && (
                                        <div className="relative w-24 h-24 flex-shrink-0">
                                            <Image
                                                src={item.image}
                                                alt={item.productName}
                                                fill
                                                className="object-contain rounded-lg"
                                            />
                                        </div>
                                    )}

                                    {/* Details */}
                                    <div className="flex-grow">
                                        <h3 className="font-semibold">{item.productName}</h3>
                                        <p className="text-sm text-gray-600">
                                            {item.flavorName} · {item.weight}g
                                        </p>
                                        <p className="text-sm text-gray-500 mt-1">SKU: {item.sku}</p>
                                    </div>

                                    {/* Price & Actions */}
                                    <div className="flex flex-col items-end justify-between">
                                        <button
                                            onClick={() => removeItem(item.variantId)}
                                            className="text-red-500 hover:text-red-700 p-2"
                                            title="Eliminar"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>

                                        <div className="text-right">
                                            <p className="font-bold text-lg text-green-brand">
                                                {formatPrice(item.price * item.quantity)}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {formatPrice(item.price)} c/u
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Quantity Controls */}
                                <div className="flex items-center gap-3 mt-4">
                                    <span className="text-sm text-gray-600">Cantidad:</span>
                                    <div className="flex items-center border border-gray-300 rounded-lg">
                                        <button
                                            onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                                            className="p-2 hover:bg-gray-100"
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="px-4 py-2 font-medium">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                                            className="p-2 hover:bg-gray-100"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Continue Shopping */}
                    <div className="mt-6">
                        <Link
                            href="/tienda"
                            className="text-green-brand hover:text-green-dark font-medium inline-flex items-center"
                        >
                            ← Continuar comprando
                        </Link>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="card sticky top-24">
                        <h2 className="text-xl font-bold mb-6">Resumen del Pedido</h2>

                        {/* Subtotal */}
                        <div className="flex justify-between mb-3">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-medium">{formatPrice(subtotal)}</span>
                        </div>

                        {/* Coupon */}
                        {couponCode && (
                            <div className="flex justify-between mb-3 text-green-brand">
                                <span>Cupón ({couponCode})</span>
                                <span>-{formatPrice(couponDiscount)}</span>
                            </div>
                        )}

                        {/* Shipping */}
                        <div className="flex justify-between mb-3">
                            <span className="text-gray-600">Envío</span>
                            <span className="text-sm text-gray-500">Calculado en checkout</span>
                        </div>

                        <div className="border-t border-gray-200 my-4"></div>

                        {/* Total */}
                        <div className="flex justify-between mb-6">
                            <span className="text-lg font-bold">Total</span>
                            <span className="text-2xl font-bold text-green-brand">
                                {formatPrice(total)}
                            </span>
                        </div>

                        {/* Checkout Button */}
                        <Link href="/checkout" className="btn btn-primary w-full block text-center">
                            Ir al Checkout
                        </Link>

                        {/* Trust Badges */}
                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <div className="text-sm text-gray-600 space-y-2">
                                <p>✓ Pago seguro</p>
                                <p>✓ Envío a todo Chile</p>
                                <p>✓ Devoluciones fáciles</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
