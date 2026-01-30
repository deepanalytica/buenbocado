import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function HomePage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-marfil to-white py-20 overflow-hidden">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Hero Content */}
                        <div className="animate-fade-in">
                            <h1 className="text-balance mb-6">
                                Colaciones ricas y simples, hechas para niños.
                            </h1>
                            <p className="text-xl text-gray-700 mb-8 text-balance">
                                Ingredientes que se entienden, porciones prácticas y sabores que les gustan.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link href="/tienda" className="btn btn-primary">
                                    Comprar ahora
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                                <Link href="/tienda#sabores" className="btn btn-secondary">
                                    Ver sabores
                                </Link>
                            </div>

                            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-brand" />
                                    Despacho en Chile
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-brand" />
                                    Pago seguro
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-brand" />
                                    Soporte por WhatsApp
                                </div>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative h-[400px] lg:h-[500px]">
                            <Image
                                src="/assets/hero_banner_1769801150940.png"
                                alt="Niños felices con BuenBocado"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-16 bg-white">
                <div className="container">
                    <h2 className="text-center mb-12">
                        Por qué a los niños les gusta (y a ti te deja tranquilo)
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Trust Point 1 */}
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-4 relative">
                                <Image
                                    src="/assets/icon_simple_ingredients_1769801235502.png"
                                    alt="Ingredientes simples"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-green-brand">Rico de verdad</h3>
                            <p className="text-gray-600 text-sm">
                                Sabores suaves, pensados para niños.
                            </p>
                        </div>

                        {/* Trust Point 2 */}
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-4 relative">
                                <Image
                                    src="/assets/icon_simple_ingredients_1769801235502.png"
                                    alt="Simple"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-green-brand">Simple</h3>
                            <p className="text-gray-600 text-sm">
                                Ingredientes claros y una porción lista para llevar.
                            </p>
                        </div>

                        {/* Trust Point 3 */}
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-4 relative">
                                <Image
                                    src="/assets/icon_practical_portion_1769801250693.png"
                                    alt="Práctico"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-green-brand">Práctico</h3>
                            <p className="text-gray-600 text-sm">
                                Sin cucharas, sin derrames, sin complicaciones.
                            </p>
                        </div>

                        {/* Trust Point 4 */}
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-4 relative">
                                <Image
                                    src="/assets/icon_quality_1769801280974.png"
                                    alt="Confiable"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-green-brand">Confiable</h3>
                            <p className="text-gray-600 text-sm">
                                Estándares y trazabilidad por lote (cuando aplique).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-16 bg-marfil">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Sabores Favoritos</h2>
                        <p className="text-gray-600 text-lg">
                            Descubre nuestros pouches de puré de fruta más populares
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                        {/* Placeholder for products - will be loaded from DB */}
                        <div className="card text-center">
                            <div className="relative aspect-square mb-4 bg-gray-100 rounded-lg"></div>
                            <p className="text-gray-500">Cargando productos...</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link href="/tienda" className="btn btn-primary">
                            Ver todos los sabores
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Packs Section */}
            <section className="py-16 bg-white">
                <div className="container">
                    <h2 className="text-center mb-12">Packs que te simplifican la semana</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Pack Semana */}
                        <div className="card text-center">
                            <div className="bg-green-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl font-bold text-green-brand">10</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Pack Semana</h3>
                            <p className="text-gray-600 mb-4">
                                10 pouches para toda la semana escolar
                            </p>
                            <Link href="/packs/pack-semana" className="btn btn-secondary">
                                Ver pack
                            </Link>
                        </div>

                        {/* Pack Familia */}
                        <div className="card text-center">
                            <div className="bg-green-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl font-bold text-green-brand">20</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Pack Familia</h3>
                            <p className="text-gray-600 mb-4">
                                20 pouches para el mes completo
                            </p>
                            <Link href="/packs/pack-familia" className="btn btn-secondary">
                                Ver pack
                            </Link>
                        </div>

                        {/* Mix Favoritos */}
                        <div className="card text-center">
                            <div className="bg-green-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl font-bold text-green-brand">Mix</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Mix Favoritos</h3>
                            <p className="text-gray-600 mb-4">
                                Arma tu pack con los sabores que más les gustan
                            </p>
                            <Link href="/packs/mix-favoritos" className="btn btn-primary">
                                Armar mi pack
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-green text-white">
                <div className="container text-center">
                    <h2 className="mb-4 text-white">¿Listo para simplificar las colaciones?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Empieza hoy con un pack que se ajuste a tu rutina
                    </p>
                    <Link href="/tienda" className="btn bg-white text-green-brand hover:bg-gray-100">
                        Comprar ahora
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
