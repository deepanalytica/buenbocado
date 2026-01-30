import { getPacks, getFlavors } from "@/lib/queries";
import Link from "next/link";
import { Check } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export const metadata = {
    title: "Packs y Combos | BuenBocado",
    description: "Packs especiales de BuenBocado. Pack Semana, Pack Familia y Mix Favoritos personalizado. Ahorra comprando por packs.",
};

export const dynamic = 'force-dynamic';

export default async function PacksPage() {
    const packs = await getPacks();
    const flavors = await getFlavors();

    return (
        <main>
            {/* Hero */}
            <section className="bg-gradient-to-b from-green-light to-white py-16">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="mb-6">Packs y Combos</h1>
                        <p className="text-xl text-gray-700">
                            Ahorra comprando por packs. Perfectos para la semana, la familia o para armar tu mix favorito.
                        </p>
                    </div>
                </div>
            </section>

            {/* Packs Grid */}
            <section className="py-16">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {packs.map((pack) => {
                            const isCustomizable = pack.slug === 'mix-favoritos';
                            const savings = pack.slug === 'pack-semana' ? '10%' : pack.slug === 'pack-familia' ? '15%' : null;

                            return (
                                <div key={pack.id} className="card relative">
                                    {savings && (
                                        <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                                            Ahorra {savings}
                                        </div>
                                    )}

                                    <div className="text-center mb-6">
                                        <h2 className="text-2xl font-bold mb-2">{pack.name}</h2>
                                        <p className="text-gray-600 text-sm mb-4">{pack.size} pouches</p>

                                        <div className="mb-4">
                                            <span className="text-4xl font-bold text-green-brand">
                                                {formatPrice(pack.price)}
                                            </span>
                                            <p className="text-sm text-gray-500 mt-1">
                                                {formatPrice(Math.round(pack.price / pack.size))} por unidad
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-gray-700 text-center mb-6">
                                        {pack.description}
                                    </p>

                                    {isCustomizable ? (
                                        <div className="mb-6">
                                            <h4 className="font-semibold mb-3 text-sm">Elige tus sabores favoritos:</h4>
                                            <div className="flex flex-wrap gap-2 justify-center">
                                                {flavors.slice(0, 6).map((flavor) => (
                                                    <span
                                                        key={flavor.id}
                                                        className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                                                        style={{ backgroundColor: flavor.colorHex }}
                                                        title={flavor.name}
                                                    />
                                                ))}
                                                <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold">
                                                    +3
                                                </span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="mb-6">
                                            <h4 className="font-semibold mb-3 text-sm">Incluye:</h4>
                                            <ul className="space-y-2">
                                                <li className="flex items-center gap-2 text-sm">
                                                    <Check className="w-4 h-4 text-green-brand flex-shrink-0" />
                                                    <span>{pack.size} pouches de 90g</span>
                                                </li>
                                                <li className="flex items-center gap-2 text-sm">
                                                    <Check className="w-4 h-4 text-green-brand flex-shrink-0" />
                                                    <span>Variedad de sabores</span>
                                                </li>
                                                <li className="flex items-center gap-2 text-sm">
                                                    <Check className="w-4 h-4 text-green-brand flex-shrink-0" />
                                                    <span>Envío gratis en RM</span>
                                                </li>
                                            </ul>
                                        </div>
                                    )}

                                    <Link
                                        href={isCustomizable ? `/packs/${pack.slug}` : `/tienda`}
                                        className="btn btn-primary w-full text-center"
                                    >
                                        {isCustomizable ? 'Personalizar Pack' : 'Comprar Ahora'}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Packs */}
            <section className="py-16 bg-marfil">
                <div className="container">
                    <h2 className="text-center mb-12">¿Por qué comprar en packs?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-brand rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">💰</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Ahorra Dinero</h3>
                            <p className="text-gray-600">
                                Hasta 15% de descuento comprando packs vs. unidades individuales
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-brand rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">⏰</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Listo para la Semana</h3>
                            <p className="text-gray-600">
                                Compra una vez y ten colaciones para toda la semana o el mes
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-brand rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🚚</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Envío Gratis</h3>
                            <p className="text-gray-600">
                                Envío sin costo en packs para la Región Metropolitana
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16">
                <div className="container text-center">
                    <h2 className="mb-4">¿Prefieres comprar por unidad?</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Explora nuestro catálogo completo de sabores
                    </p>
                    <Link href="/tienda" className="btn btn-secondary">
                        Ver Todos los Productos
                    </Link>
                </div>
            </section>
        </main>
    );
}
