import { prisma } from "@/lib/db";
import { formatPrice } from "@/lib/utils";
import { Users, ShoppingBag, Package, DollarSign } from "lucide-react";

export const dynamic = 'force-dynamic';

async function getStats() {
    // In a real scenario, use actual DB queries
    // For now, since DB is fresh or empty, we'll try to query but expect defaults
    try {
        const productsCount = await prisma.product.count({ where: { status: 'active' } });
        const ordersCount = await prisma.order.count();
        const lowStockCount = await prisma.variant.count({ where: { stock: { lt: 10 } } });

        // Calculate total revenue
        // This aggregate might be heavy on large DBs, but fine for now
        const orders = await prisma.order.findMany({ select: { total: true } });
        const totalRevenue = orders.reduce((acc: number, order: { total: number }) => acc + order.total, 0);

        return {
            productsCount,
            ordersCount,
            totalRevenue,
            lowStockCount
        };
    } catch (e) {
        return {
            productsCount: 0,
            ordersCount: 0,
            totalRevenue: 0,
            lowStockCount: 0
        };
    }
}

export default async function AdminDashboard() {
    const stats = await getStats();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Ventas Totales</p>
                        <p className="text-2xl font-bold">{formatPrice(stats.totalRevenue)}</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-green-600" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Pedidos Totales</p>
                        <p className="text-2xl font-bold">{stats.ordersCount}</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <ShoppingBag className="w-6 h-6 text-blue-600" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Productos Activos</p>
                        <p className="text-2xl font-bold">{stats.productsCount}</p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <Package className="w-6 h-6 text-orange-600" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Stock Bajo</p>
                        <p className="text-2xl font-bold">{stats.lowStockCount}</p>
                    </div>
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-red-600" />
                    </div>
                </div>
            </div>

            {/* Recent Activity Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="font-semibold mb-4">Pedidos Recientes</h2>
                    <div className="text-center py-8 text-gray-500">
                        No hay pedidos recientes para mostrar.
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="font-semibold mb-4">Productos más vendidos</h2>
                    <div className="text-center py-8 text-gray-500">
                        No hay datos suficientes.
                    </div>
                </div>
            </div>
        </div>
    );
}
