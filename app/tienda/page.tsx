import { getProducts } from "@/lib/queries";
import { ProductCard } from "@/components/product/ProductCard";
import { SortDropdown } from "@/components/product/SortDropdown";
import Link from "next/link";
import { SlidersHorizontal, Check, Home, Search, Sparkles, Filter } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function TiendaPage() {
    const products = await getProducts();

    return (
        <main className="bg-white min-h-screen">
            {/* Elite Breadcrumbs & Title */}
            <section className="relative pt-24 pb-20 border-b border-gray-50 overflow-hidden">
                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-green-brand/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                <div className="container relative z-10">
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                        <nav className="flex items-center gap-3 mb-10 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                            <Link href="/" className="hover:text-green-brand transition-colors flex items-center gap-2">
                                <Home className="w-3.5 h-3.5 mt-[-2px]" />
                                <span>Inicio</span>
                            </Link>
                            <span className="w-1 h-1 rounded-full bg-gray-200" />
                            <span className="text-gray-900">Catálogo</span>
                        </nav>

                        <h1 className="mb-8 tracking-tighter">
                            Nuestra <span className="text-gradient">Tienda</span>
                        </h1>
                        <p className="text-gray-500 font-medium text-lg leading-relaxed">
                            Snacks saludables diseñados para la vida moderna. 100% fruta real del Valle del Maule, sin sellos y con todo el sabor que tus hijos aman.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* Tactical Sidebar */}
                        <aside className="lg:col-span-3 space-y-16">
                            {/* Filter Control Hub */}
                            <div className="glass p-10 rounded-[2.5rem] border-gray-100 shadow-premium">
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-10 h-10 bg-green-brand rounded-2xl flex items-center justify-center">
                                        <Filter className="w-5 h-5 text-white" />
                                    </div>
                                    <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-900">Filtrar</h2>
                                </div>

                                <div className="space-y-12">
                                    {/* Search Field */}
                                    <div className="relative group">
                                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-green-brand transition-colors" />
                                        <input
                                            type="text"
                                            placeholder="Buscar sabor..."
                                            className="w-full bg-white border border-gray-100 rounded-2xl py-5 pl-14 pr-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-green-brand/5 focus:border-green-brand transition-all shadow-sm"
                                        />
                                    </div>

                                    {/* Flavor Matrix */}
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-8">Sabores</p>
                                        <div className="grid grid-cols-1 gap-3">
                                            {[
                                                { name: "Durazno", color: "bg-orange-400" },
                                                { name: "Mango", color: "bg-yellow-400" },
                                                { name: "Frutilla", color: "bg-red-500" },
                                                { name: "Frambuesa", color: "bg-pink-600" },
                                                { name: "Naranja", color: "bg-orange-500" },
                                                { name: "Pera", color: "bg-green-400" },
                                            ].map((flavor: any) => (
                                                <label key={flavor.name} className="flex items-center gap-4 p-4 rounded-2xl cursor-pointer hover:bg-white hover:shadow-hover transition-all group border border-transparent hover:border-gray-50">
                                                    <div className="relative flex items-center justify-center">
                                                        <input type="checkbox" className="peer appearance-none w-5 h-5 rounded-lg border-2 border-gray-100 checked:bg-green-brand checked:border-green-brand transition-all cursor-pointer" />
                                                        <Check className="w-3.5 h-3.5 text-white absolute scale-0 peer-checked:scale-100 transition-transform stroke-[4px]" />
                                                    </div>
                                                    <div className={`w-3 h-3 rounded-full ${flavor.color} shadow-sm`} />
                                                    <span className="text-sm font-bold text-gray-500 group-hover:text-gray-900 transition-colors">{flavor.name}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Promo Card Elite */}
                            <div className="bg-gray-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl shadow-black/20 group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-green-brand/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-green-brand/30 transition-colors duration-700"></div>
                                <Sparkles className="w-10 h-10 text-green-brand mb-8" />
                                <h4 className="text-2xl font-black mb-4 tracking-tight leading-tight">Pack Mix Personalizado</h4>
                                <p className="text-gray-400 font-medium mb-10 leading-relaxed text-sm">Arma tu propia combinación de sabores favoritos y ahorra un 15%.</p>
                                <Link href="/packs" className="inline-flex h-14 px-10 items-center bg-green-brand text-white text-[10px] font-black uppercase tracking-[0.25em] rounded-2xl hover:bg-green-accent transition-all hover:-translate-y-1 shadow-xl shadow-green-brand/20">
                                    Empezar ahora
                                </Link>
                            </div>
                        </aside>

                        {/* Elite Products Column */}
                        <div className="lg:col-span-9">
                            {/* Sort Header */}
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-10 mb-20 bg-gray-soft/50 rounded-[3rem] p-8 border border-gray-100">
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-premium">
                                        <SlidersHorizontal className="w-6 h-6 text-green-brand" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="font-black text-gray-900 uppercase tracking-widest text-[10px] mb-1">Catálogo</p>
                                        <p className="text-gray-500 font-medium text-sm">
                                            Mostrando <span className="text-green-brand font-black">{products.length}</span> compotas premium
                                        </p>
                                    </div>
                                </div>
                                <SortDropdown />
                            </div>

                            {/* Tactical Grid */}
                            {products.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
                                    {products.map((product: any) => {
                                        const variant = product.variants[0];
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
                                                badges={product.badges ? product.badges.split(',').filter(Boolean) : []}
                                                weight={variant.weight}
                                            />
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center py-40 bg-gray-soft rounded-[4rem] border border-dashed border-gray-200">
                                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-10 shadow-premium">
                                        <Search className="w-10 h-10 text-gray-200" />
                                    </div>
                                    <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tighter">Sin resultados</h3>
                                    <p className="text-gray-500 font-medium mb-12 max-w-sm text-center">No encontramos sabores que coincidan con tu búsqueda. Prueba ajustando los filtros.</p>
                                    <Link href="/tienda" className="btn btn-primary px-14">
                                        Limpiar filtros
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
