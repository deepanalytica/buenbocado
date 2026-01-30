import { prisma } from "@/lib/db";
import { formatPrice, formatDate } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin, CreditCard } from "lucide-react";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';

async function getOrder(id: string) {
    try {
        const order = await prisma.order.findUnique({
            where: { id },
            include: {
                items: {
                    include: {
                        variant: {
                            include: {
                                product: {
                                    include: {
                                        flavor: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
        return order;
    } catch (e) {
        return null;
    }
}

export default async function AdminOrderDetailPage({ params }: { params: { id: string } }) {
    const order = await getOrder(params.id);

    if (!order) {
        notFound();
    }

    const getStatusLabel = (status: string) => {
        const labels: Record<string, string> = {
            pending: 'Pendiente de Pago',
            processing: 'Procesando',
            completed: 'Completado',
            cancelled: 'Cancelado',
        };
        return labels[status.toLowerCase()] || status;
    };

    return (
        <div className="max-w-5xl mx-auto">
            <div className="mb-6 flex items-center gap-4">
                <Link href="/admin/orders" className="text-gray-500 hover:text-green-brand">
                    <ArrowLeft className="w-6 h-6" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-3">
                        Pedido #{order.id.slice(-6).toUpperCase()}
                        <span className="text-sm font-normal px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                            {getStatusLabel(order.status)}
                        </span>
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Realizado el {formatDate(order.createdAt)}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content: Items & Totals */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Order Items */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h2 className="font-semibold mb-4 border-b pb-2">Items del Pedido</h2>
                        <div className="space-y-4">
                            {order.items.map((item) => (
                                <div key={item.id} className="flex gap-4 items-center">
                                    <div
                                        className="w-16 h-16 rounded-md bg-gray-100 flex-shrink-0"
                                        style={{ backgroundColor: item.variant.product.flavor.colorHex + '20' }} // 20% opacity
                                    >
                                        {/* Placeholder image logic since we don't have direct image access in this view easily without more props */}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-medium text-gray-900">
                                            {item.variant.product.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {item.variant.size} · {item.variant.product.flavor.name}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-medium text-gray-900">{formatPrice(item.price)}</p>
                                        <p className="text-xs text-gray-500">Cant: {item.quantity}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Payment Summary */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h2 className="font-semibold mb-4 border-b pb-2">Resumen de Pago</h2>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Subtotal</span>
                                <span>{formatPrice(order.subtotal)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Envío ({order.shippingMethod})</span>
                                <span>{formatPrice(order.shippingCost)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Descuento</span>
                                <span className="text-green-600">-{formatPrice(order.discount)}</span>
                            </div>
                            <div className="border-t pt-2 mt-2 flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>{formatPrice(order.total)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar: Customer Info */}
                <div className="space-y-6">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h2 className="font-semibold mb-4 border-b pb-2">Cliente</h2>
                        <div className="space-y-4 text-sm">
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                    <span className="font-bold text-gray-600">
                                        {order.firstName[0]}{order.lastName[0]}
                                    </span>
                                </div>
                                <div>
                                    <p className="font-medium">{order.firstName} {order.lastName}</p>
                                    <p className="text-gray-500">Cliente Recurrente (Ejemplo)</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center text-gray-600">
                                <Mail className="w-4 h-4" />
                                <a href={`mailto:${order.email}`} className="hover:underline">{order.email}</a>
                            </div>
                            <div className="flex gap-3 items-center text-gray-600">
                                <Phone className="w-4 h-4" />
                                <a href={`tel:${order.phone}`} className="hover:underline">{order.phone}</a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h2 className="font-semibold mb-4 border-b pb-2">Envío</h2>
                        <div className="flex gap-3 text-sm text-gray-600">
                            <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <div>
                                <p>{order.addressStreet} {order.addressNumber}</p>
                                <p>{order.commune}, {order.region}</p>
                                {order.additionalInfo && (
                                    <p className="mt-2 text-xs bg-yellow-50 p-2 rounded text-yellow-800">
                                        Nota: {order.additionalInfo}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h2 className="font-semibold mb-4 border-b pb-2">Pago</h2>
                        <div className="flex gap-3 text-sm text-gray-600 items-center">
                            <CreditCard className="w-4 h-4" />
                            <div>
                                <p className="font-medium">{order.paymentMethod === 'transfer' ? 'Transferencia Bancaria' : order.paymentMethod}</p>
                                <p className={`text-xs mt-1 px-2 py-0.5 rounded-full inline-block ${order.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                    {order.status === 'completed' ? 'Pagado' : 'Pendiente'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
