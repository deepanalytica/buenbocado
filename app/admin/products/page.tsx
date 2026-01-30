import { prisma } from "@/lib/db";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Edit, Plus, Archive } from "lucide-react";

export const dynamic = 'force-dynamic';

async function getProducts() {
    const products = await prisma.product.findMany({
        include: {
            flavor: true,
            variants: true,
        },
        orderBy: { name: 'asc' },
    });
    return products;
}

export default async function AdminProductsPage() {
    const products = await getProducts();

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Productos</h1>
                <Link
                    href="/admin/products/new"
                    className="btn btn-primary flex items-center gap-2"
                >
                    <Plus className="w-4 h-4" />
                    Nuevo Producto
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                        <tr>
                            <th className="px-6 py-4">Producto</th>
                            <th className="px-6 py-4">Sabor</th>
                            <th className="px-6 py-4">Variantes</th>
                            <th className="px-6 py-4">Stock Total</th>
                            <th className="px-6 py-4">Estado</th>
                            <th className="px-6 py-4">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                                    No se encontraron productos.
                                </td>
                            </tr>
                        ) : (
                            products.map((product) => {
                                const totalStock = product.variants.reduce((acc: number, v: { stock: number | null }) => acc + (v.stock || 0), 0);
                                // Placeholder image based on flavor logic we used elsewhere
                                const imagePath = `/assets/products/${product.slug.split('-')[1] || 'durazno'}.png`;

                                return (
                                    <tr key={product.id} className="bg-white border-b hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 relative bg-gray-100 rounded-md flex-shrink-0 overflow-hidden">
                                                    {/* We try to load the image if it matches our convention, else generic */}
                                                    <Image
                                                        src={`/assets/products/${product.flavor.name.toLowerCase()}.png`}
                                                        alt={product.name}
                                                        fill
                                                        className="object-cover"
                                                        onError={(e) => {
                                                            // Fallback would be handled by a proper image component in a real app
                                                            // For now, we trust our seeding conventions
                                                        }}
                                                    />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">{product.name}</p>
                                                    <p className="text-xs text-gray-500">SKU: {product.variants[0]?.sku.split('-')[0] ?? 'N/A'}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span
                                                className="px-2 py-1 rounded-full text-xs font-semibold border"
                                                style={{
                                                    backgroundColor: product.flavor.colorHex + '20',
                                                    color: product.flavor.colorHex,
                                                    borderColor: product.flavor.colorHex + '40'
                                                }}
                                            >
                                                {product.flavor.name}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-1">
                                                {product.variants.map((v: { id: string; size: string; price: number }) => (
                                                    <span key={v.id} className="text-xs text-gray-600">
                                                        {v.size} - {formatPrice(v.price)}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-medium">
                                            {totalStock} un.
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${product.status === 'active'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-gray-100 text-gray-800'
                                                }`}>
                                                {product.status === 'active' ? 'Activo' : 'Borrador'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-2">
                                                <Link
                                                    href={`/admin/products/${product.id}`}
                                                    className="text-gray-500 hover:text-green-brand transition-colors p-1"
                                                    title="Editar"
                                                >
                                                    <Edit className="w-5 h-5" />
                                                </Link>
                                                {/* More actions could go here */}
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
