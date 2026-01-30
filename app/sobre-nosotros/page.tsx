import Link from "next/link";

export default function SobreNosotrosPage() {
    return (
        <main>
            {/* Hero */}
            <section className="bg-gradient-to-b from-green-light to-white py-16">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="mb-6">Sobre BuenBocado</h1>
                        <p className="text-xl text-gray-700">
                            Creamos colaciones que los niños disfrutan y que los padres aprueban
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-16">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <h2 className="mb-4">Nuestra Misión</h2>
                                <p className="text-gray-700 mb-4">
                                    En BuenBocado, creemos que las colaciones para niños deben ser simples, ricas y prácticas. Por eso hacemos pouches de puré de fruta con ingredientes que puedes entender y sabor que los niños realmente disfrutan.
                                </p>
                                <p className="text-gray-700">
                                    Sin promesas complicadas, sin ingredientes difíciles de pronunciar. Solo fruta, sabor y practicidad para el día a día.
                                </p>
                            </div>
                            <div className="bg-gray-100 aspect-square rounded-lg"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                            <div className="bg-gray-100 aspect-square rounded-lg md:order-first"></div>
                            <div className="md:order-last">
                                <h2 className="mb-4">Qué Nos Hace Diferentes</h2>
                                <ul className="space-y-4">
                                    <li className="flex gap-3">
                                        <span className="text-green-brand text-xl">✓</span>
                                        <div>
                                            <strong>Ingredientes simples:</strong> Sin palabras complicadas en la lista de ingredientes
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-green-brand text-xl">✓</span>
                                        <div>
                                            <strong>Pensado para niños:</strong> Sabores suaves que les gustan de verdad
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-green-brand text-xl">✓</span>
                                        <div>
                                            <strong>Práctico:</strong> Listo para llevar en la mochila, sin cucharas ni líos
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-green-brand text-xl">✓</span>
                                        <div>
                                            <strong>Hecho en Chile:</strong> Para familias chilenas
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 bg-marfil">
                <div className="container">
                    <h2 className="text-center mb-12">Nuestros Valores</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-brand rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🍎</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Simplicidad</h3>
                            <p className="text-gray-600">
                                Ingredientes claros y etiquetas honestas
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-brand rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">👨‍👩‍👧‍👦</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Familias</h3>
                            <p className="text-gray-600">
                                Productos pensados para el día a día de las familias chilenas
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-brand rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🌱</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Responsabilidad</h3>
                            <p className="text-gray-600">
                                Transparencia en lo que hacemos y cómo lo comunicamos
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16">
                <div className="container text-center">
                    <h2 className="mb-4">¿Listo para probar BuenBocado?</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Descubre todos nuestros sabores y encuentra el favorito de tus niños
                    </p>
                    <Link href="/tienda" className="btn btn-primary">
                        Ver la Tienda
                    </Link>
                </div>
            </section>
        </main>
    );
}
