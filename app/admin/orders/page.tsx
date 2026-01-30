import { prisma } from "@/lib/db";
import { formatPrice, formatDate } from "@/lib/utils";
import Link from "next/link";
import { Eye, MoreHorizontal } from "lucide-react";

export const dynamic = 'force-dynamic';

async function getOrders() {
    try {
        const orders = await prisma.order.findMany({
            orderBy: { createdAt: 'desc' },
            take: 50, // Pagination would be better for real apps
        });
        return orders;
    } catch (e) {
        return [];
    }
}

export default async function AdminOrdersPage() {
    const orders = await getOrders();

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'completed': return 'bg-green-100 text-green-800';
            case 'processing': return 'bg-blue-100 text-blue-800';
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'cancelled': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusLabel = (status: string) => {
        const labels: Record<string, string> = {
            pending: 'Pendiente',
            processing: 'Procesando',
            completed: 'Completado',
            cancelled: 'Cancelado',
        };
        return labels[status.toLowerCase()] || status;
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Pedidos</h1>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                            <tr>
                                <th className="px-6 py-4">ID Pedido</th>
                                <th className="px-6 py-4">Cliente</th>
                                <th className="px-6 py-4">Fecha</th>
                                <th className="px-6 py-4">Total</th>
                                <th className="px-6 py-4">Estado</th>
                                <th className="px-6 py-4">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                                        No se encontraron pedidos.
                                    </td>
                                </tr>
                            ) : (
                                orders.map((order) => (
                                    <tr key={order.id} className="bg-white border-b hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            #{order.id.slice(-6).toUpperCase()}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="font-medium">{order.firstName} {order.lastName}</span>
                                                <span className="text-xs text-gray-500">{order.email}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            {formatDate(order.createdAt)}
                                        </td>
                                        <td className="px-6 py-4 font-medium">
                                            {formatPrice(order.total)}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                                                {getStatusLabel(order.status)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link
                                                href={`/admin/orders/${order.id}`}
                                                className="text-gray-500 hover:text-green-brand transition-colors"
                                                title="Ver detalles"
                                            >
                                                <Eye className="w-5 h-5" />
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
