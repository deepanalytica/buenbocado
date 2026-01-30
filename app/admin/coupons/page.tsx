import { prisma } from "@/lib/db";
import { formatDate, formatPrice } from "@/lib/utils";
import Link from "next/link";
import { Plus, Trash, Edit } from "lucide-react";
import { revalidatePath } from "next/cache";

export const dynamic = 'force-dynamic';

async function getCoupons() {
    const coupons = await prisma.coupon.findMany({
        orderBy: { createdAt: 'desc' },
    });
    return coupons;
}

export default async function AdminCouponsPage() {
    const coupons = await getCoupons();

    async function deleteCoupon(formData: FormData) {
        "use server";
        const id = formData.get("id") as string;
        await prisma.coupon.delete({ where: { id } });
        revalidatePath("/admin/coupons");
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Cupones</h1>
                <Link
                    href="/admin/coupons/new"
                    className="btn btn-primary flex items-center gap-2"
                >
                    <Plus className="w-4 h-4" />
                    Nuevo Cupón
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                        <tr>
                            <th className="px-6 py-4">Código</th>
                            <th className="px-6 py-4">Descuento</th>
                            <th className="px-6 py-4">Uso</th>
                            <th className="px-6 py-4">Expiración</th>
                            <th className="px-6 py-4">Estado</th>
                            <th className="px-6 py-4">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coupons.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                                    No hay cupones activos.
                                </td>
                            </tr>
                        ) : (
                            coupons.map((coupon: any) => (
                                <tr key={coupon.id} className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-mono font-bold text-gray-900">
                                        {coupon.code}
                                    </td>
                                    <td className="px-6 py-4">
                                        {coupon.type === 'percentage' ? `${coupon.value}%` : formatPrice(coupon.value)}
                                    </td>
                                    <td className="px-6 py-4">
                                        {coupon.usageCount} / {coupon.maxUsage || '∞'}
                                    </td>
                                    <td className="px-6 py-4">
                                        {coupon.expiry ? formatDate(coupon.expiry) : 'Sin fecha'}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${coupon.enabled ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                            }`}>
                                            {coupon.enabled ? 'Activo' : 'Inactivo'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <form action={deleteCoupon}>
                                            <input type="hidden" name="id" value={coupon.id} />
                                            <button
                                                type="submit"
                                                className="text-gray-400 hover:text-red-600 transition-colors"
                                                title="Eliminar"
                                            >
                                                <Trash className="w-5 h-5" />
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
