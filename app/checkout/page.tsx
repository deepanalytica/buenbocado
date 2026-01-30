"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/lib/store/cart";
import { formatPrice } from "@/lib/utils";
import { ArrowLeft, CreditCard } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
    const router = useRouter();
    const { items, getSubtotal, getTotal, couponDiscount, clearCart } = useCartStore();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        customerName: "",
        customerEmail: "",
        customerPhone: "",
        address: "",
        addressNumber: "",
        commune: "",
        region: "Región Metropolitana",
        postalCode: "",
        deliveryNotes: "",
    });

    const [selectedShipping, setSelectedShipping] = useState<number>(3000); // Default RM

    const subtotal = getSubtotal();
    const discount = couponDiscount;
    const shipping = selectedShipping;
    const total = getTotal() + shipping;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate order creation
        // TODO: Implement actual API call to create order
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Create order ID (in real app, this comes from API)
        const orderId = 'BB-' + Date.now();

        // Clear cart
        clearCart();

        // Redirect to confirmation
        router.push(`/confirmacion/${orderId}`);
    };

    if (items.length === 0) {
        return (
            <main className="container py-20">
                <div className="max-w-md mx-auto text-center">
                    <h1 className="mb-4">Tu carrito está vacío</h1>
                    <p className="text-gray-600 mb-8">
                        Agrega algunos productos para continuar con la compra
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
            <div className="mb-8">
                <Link
                    href="/carrito"
                    className="inline-flex items-center gap-2 text-green-brand hover:text-green-dark"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Volver al carrito
                </Link>
            </div>

            <h1 className="mb-8">Finalizar Compra</h1>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Checkout Form */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Contact Information */}
                        <div className="card">
                            <h2 className="text-xl font-bold mb-6">Información de Contacto</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="customerName" className="block font-medium mb-2">
                                        Nombre completo *
                                    </label>
                                    <input
                                        type="text"
                                        id="customerName"
                                        required
                                        value={formData.customerName}
                                        onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-brand"
                                        placeholder="Juan Pérez"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="customerEmail" className="block font-medium mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="customerEmail"
                                        required
                                        value={formData.customerEmail}
                                        onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-brand"
                                        placeholder="tu@email.com"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label htmlFor="customerPhone" className="block font-medium mb-2">
                                        Teléfono *
                                    </label>
                                    <input
                                        type="tel"
                                        id="customerPhone"
                                        required
                                        value={formData.customerPhone}
                                        onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-brand"
                                        placeholder="+56 9 1234 5678"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Shipping Address */}
                        <div className="card">
                            <h2 className="text-xl font-bold mb-6">Dirección de Envío</h2>

                            <div className="space-y-4">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="col-span-2">
                                        <label htmlFor="address" className="block font-medium mb-2">
                                            Calle *
                                        </label>
                                        <input
                                            type="text"
                                            id="address"
                                            required
                                            value={formData.address}
                                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-brand"
                                            placeholder="Avenida Libertador"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="addressNumber" className="block font-medium mb-2">
                                            Número *
                                        </label>
                                        <input
                                            type="text"
                                            id="addressNumber"
                                            required
                                            value={formData.addressNumber}
                                            onChange={(e) => setFormData({ ...formData, addressNumber: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-brand"
                                            placeholder="1234"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="commune" className="block font-medium mb-2">
                                            Comuna *
                                        </label>
                                        <input
                                            type="text"
                                            id="commune"
                                            required
                                            value={formData.commune}
                                            onChange={(e) => setFormData({ ...formData, commune: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-brand"
                                            placeholder="Santiago"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="region" className="block font-medium mb-2">
                                            Región *
                                        </label>
                                        <select
                                            id="region"
                                            required
                                            value={formData.region}
                                            onChange={(e) => {
                                                setFormData({ ...formData, region: e.target.value });
                                                setSelectedShipping(e.target.value === 'Región Metropolitana' ? 3000 : 5000);
                                            }}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-brand"
                                        >
                                            <option>Región Metropolitana</option>
                                            <option>Regiones</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="deliveryNotes" className="block font-medium mb-2">
                                        Notas de entrega (opcional)
                                    </label>
                                    <textarea
                                        id="deliveryNotes"
                                        value={formData.deliveryNotes}
                                        onChange={(e) => setFormData({ ...formData, deliveryNotes: e.target.value })}
                                        rows={3}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-brand resize-none"
                                        placeholder="Ej: Dejar en portería, timbre no funciona, etc."
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="card">
                            <h2 className="text-xl font-bold mb-6">Método de Pago</h2>

                            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                                <div className="flex items-start gap-4">
                                    <CreditCard className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold mb-2">Transferencia Bancaria</h3>
                                        <p className="text-sm text-gray-700 mb-4">
                                            Recibirás los datos bancarios por email para realizar la transferencia.
                                            Tu pedido se procesará una vez confirmado el pago.
                                        </p>
                                        <div className="text-sm bg-white rounded p-3">
                                            <p className="font-medium mb-1">Banco: Banco Estado</p>
                                            <p className="font-medium mb-1">Cuenta Corriente: 123456789</p>
                                            <p className="font-medium">RUT: 12.345.678-9</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="card sticky top-24">
                            <h2 className="text-xl font-bold mb-6">Resumen del Pedido</h2>

                            {/* Items */}
                            <div className="mb-6 space-y-4">
                                {items.map((item) => (
                                    <div key={item.variantId} className="flex gap-3">
                                        <div className="flex-grow">
                                            <p className="font-medium text-sm">{item.productName}</p>
                                            <p className="text-xs text-gray-600">
                                                {item.flavorName} · {item.weight}g × {item.quantity}
                                            </p>
                                        </div>
                                        <div className="text-sm font-medium">
                                            {formatPrice(item.price * item.quantity)}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-gray-200 pt-4 space-y-2 mb-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span>{formatPrice(subtotal)}</span>
                                </div>

                                {discount > 0 && (
                                    <div className="flex justify-between text-sm text-green-brand">
                                        <span>Descuento</span>
                                        <span>-{formatPrice(discount)}</span>
                                    </div>
                                )}

                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Envío</span>
                                    <span>{formatPrice(shipping)}</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-4 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-lg font-bold">Total</span>
                                    <span className="text-2xl font-bold text-green-brand">
                                        {formatPrice(total)}
                                    </span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="btn btn-primary w-full"
                            >
                                {loading ? 'Procesando...' : 'Confirmar Pedido'}
                            </button>

                            <p className="text-xs text-gray-500 mt-4 text-center">
                                Al confirmar tu pedido, aceptas nuestros{' '}
                                <Link href="/politicas/terminos" className="text-green-brand hover:underline">
                                    Términos y Condiciones
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </main>
    );
}
