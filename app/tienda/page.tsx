import { getProducts } from "@/lib/queries";
import { ProductCard } from "@/components/product/ProductCard";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default async function TiendaPage() {
    const products = await getProducts();

    return (
        <main className="container py-12">
            <div className="mb-8">
                <h1 className="mb-4">Tienda</h1>
                <p className="text-xl text-gray-600">
                    Descubre todos nuestros sabores de pouches de puré de fruta
                </p>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar Filters */}
                <aside className="lg:col-span-1">
                    <div className="card">
                        <h3 className="font-semibold mb-4">Filtrar por</h3>

                        <div className="mb-6">
                            <h4 className="font-medium mb-3 text-sm">Sabor</h4>
                            <div className="space-y-2">
                                {[
                                    { name: "Durazno", color: "#FFB86C" },
                                    { name: "Mango", color: "#FFA94D" },
                                    { name: "Frutilla", color: "#FF6B9D" },
                                    { name: "Frambuesa", color: "#C7417B" },
                                    { name: "Naranja", color: "#FF8C42" },
                                    { name: "Pera", color: "#C8D96F" },
                                    { name: "Manzana", color: "#90C695" },
                                    { name: "Papaya", color: "#FFB347" },
                                    { name: "Arándano", color: "#6B5CA5" },
                                ].map((flavor) => (
                                    <label key={flavor.name} className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="rounded" />
                                        <span
                                            className="w-4 h-4 rounded-full"
                                            style={{ backgroundColor: flavor.color }}
                                        />
                                        <span className="text-sm">{flavor.name}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <h4 className="font-medium mb-3 text-sm">Tamaño</h4>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="rounded" />
                                    <span className="text-sm">90g</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="rounded" />
                                    <span className="text-sm">120g</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Products Grid */}
                <div className="lg:col-span-3">
                    {/* Sort */}
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-gray-600">
                            Mostrando {products.length} productos
                        </p>
                        <select className="border border-gray-300 rounded-lg px-4 py-2">
                            <option>Más populares</option>
                            <option>Precio: menor a mayor</option>
                            <option>Precio: mayor a menor</option>
                            <option>Más recientes</option>
                        </select>
                    </div>

                    {/* Products */}
                    {products.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product) => {
                                const variant = product.variants[0]; // Get first variant (90g)
                                if (!variant) return null;

                                return (
                                    <ProductCard
                                        key={product.id}
                                        id={product.id}
                                        name={product.name}
                                        slug={product.slug}
                                        price={variant.price}
                                        compareAtPrice={variant.compareAtPrice || undefined}
                                        flavorName={variant.flavor.name}
                                        flavorColor={variant.flavor.colorHex}
                                        image={product.heroImage || `/assets/products/${variant.flavor.slug}.png`}
                                        badges={product.badges}
                                        weight={variant.weight}
                                    />
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-500 mb-4">No hay productos disponibles</p>
                            <Link href="/" className="btn btn-primary">
                                Volver al inicio
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
