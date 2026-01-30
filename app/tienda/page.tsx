import Link from "next/link";

export default function TiendaPage() {
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
                        <p className="text-gray-600">Mostrando todos los productos</p>
                        <select className="border border-gray-300 rounded-lg px-4 py-2">
                            <option>Más populares</option>
                            <option>Precio: menor a mayor</option>
                            <option>Precio: mayor a menor</option>
                            <option>Más recientes</option>
                        </select>
                    </div>

                    {/* Products */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="card text-center">
                            <div className="relative aspect-square mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                                <p className="text-gray-400">Producto 1</p>
                            </div>
                            <p className="text-gray-600">Los productos se cargarán desde la base de datos</p>
                        </div>
                        <div className="card text-center">
                            <div className="relative aspect-square mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                                <p className="text-gray-400">Producto 2</p>
                            </div>
                            <p className="text-gray-600">Necesitamos configurar la base de datos primero</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
