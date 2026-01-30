import { getPacks, getFlavors } from "@/lib/queries";
import Link from "next/link";
import { Check, Home, Sparkles, TrendingUp, Truck, Package, RotateCcw } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export const metadata = {
    title: "Packs Familiares | BuenBocado Elite",
    description: "Soluciones de nutrición real para toda la familia. Ahorra hasta un 15% con nuestros packs premium de compota de fruta natural.",
};

export const dynamic = 'force-dynamic';

export default async function PacksPage() {
    const packs = await getPacks();
    const flavors = await getFlavors();

    return (
        <main className="bg-white min-h-screen">
            {/* Elite Section Header */}
            <section className="relative pt-24 pb-20 border-b border-gray-50 overflow-hidden">
                <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-blue-brand/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>

                <div className="container relative z-10">
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                        <nav className="flex items-center gap-3 mb-10 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                            <Link href="/" className="hover:text-green-brand transition-colors flex items-center gap-2">
                                <Home className="w-3.5 h-3.5 mt-[-2px]" />
                                <span>Inicio</span>
                            </Link>
                            <span className="w-1 h-1 rounded-full bg-gray-200" />
                            <span className="text-gray-900">Packs</span>
                        </nav>

                        <h1 className="mb-8 tracking-tighter">
                            Ahorra con nuestros <span className="text-gradient">Packs</span>
                        </h1>
                        <p className="text-gray-500 font-medium text-lg leading-relaxed">
                            Diseñados para familias que no quieren sacrificar calidad por conveniencia. Nutrición premium certificada en formatos diseñados para tu ritmo de vida.
                        </p>
                    </div>
                </div>
            </section>

            {/* Elite Packs Grid */}
            <section className="py-24">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {packs.map((pack: any) => {
                            const isCustomizable = pack.slug === 'mix-favoritos';
                            const savings = pack.slug === 'pack-semana' ? '10%' : pack.slug === 'pack-familia' ? '15%' : null;

                            return (
                                <div key={pack.id} className="group relative">
                                    <div className="bg-white rounded-[3rem] p-10 lg:p-14 border border-gray-100 shadow-premium hover:shadow-hover transition-all duration-500 flex flex-col h-full overflow-hidden">
                                        {/* Ambient Glow */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-brand/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                        {/* Pack Status */}
                                        <div className="flex items-center justify-between mb-12">
                                            <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-xl border-gray-100">
                                                <Package className="w-4 h-4 text-green-brand" />
                                                <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest">{pack.size} pouches</span>
                                            </div>
                                            {savings && (
                                                <div className="bg-orange-brand/10 text-orange-brand text-[9px] font-black px-4 py-2 rounded-xl uppercase tracking-widest border border-orange-brand/20">
                                                    -{savings} Off
                                                </div>
                                            )}
                                        </div>

                                        <div className="mb-10">
                                            <h2 className="text-3xl font-black text-gray-900 mb-6 tracking-tight group-hover:text-green-brand transition-colors">
                                                {pack.name}
                                            </h2>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-5xl font-black text-gray-900 tracking-tighter">
                                                    {formatPrice(pack.price)}
                                                </span>
                                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">CLP</span>
                                            </div>
                                            <p className="text-xs font-bold text-gray-400 mt-2">
                                                Solo {formatPrice(Math.round(pack.price / pack.size))} por unidad
                                            </p>
                                        </div>

                                        <p className="text-gray-500 font-medium mb-10 leading-relaxed text-sm">
                                            {pack.description}
                                        </p>

                                        {isCustomizable ? (
                                            <div className="mb-12 pt-10 border-t border-gray-50">
                                                <div className="flex flex-wrap gap-2.5">
                                                    {flavors.slice(0, 6).map((flavor: any) => (
                                                        <div
                                                            key={flavor.id}
                                                            className="w-10 h-10 rounded-full border-4 border-white shadow-premium hover:scale-110 transition-transform cursor-help"
                                                            style={{ backgroundColor: flavor.colorHex }}
                                                            title={flavor.name}
                                                        />
                                                    ))}
                                                    <div className="w-10 h-10 rounded-full bg-gray-soft flex items-center justify-center text-xs font-black text-gray-400 border-2 border-dashed border-gray-200">
                                                        +
                                                    </div>
                                                </div>
                                                <p className="text-[9px] font-black text-gray-300 uppercase tracking-[0.2em] mt-6">Cualquier combinación</p>
                                            </div>
                                        ) : (
                                            <div className="mb-12 pt-10 border-t border-gray-50">
                                                <ul className="space-y-4">
                                                    {[
                                                        "Mix de sabores estacionales",
                                                        "Formato pouch 90g ultra-práctico",
                                                        "Envío express incluido RM"
                                                    ].map((benefit, i) => (
                                                        <li key={i} className="flex items-center gap-4 text-xs font-bold text-gray-600">
                                                            <div className="w-5 h-5 rounded-full bg-green-brand/10 flex items-center justify-center flex-shrink-0">
                                                                <Check className="w-3 h-3 text-green-brand stroke-[4px]" />
                                                            </div>
                                                            <span>{benefit}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        <div className="mt-auto">
                                            <Link
                                                href={isCustomizable ? `/packs/${pack.slug}` : `/tienda`}
                                                className={`btn w-full text-center py-6 rounded-2xl text-[10px] font-black uppercase tracking-[0.25em] transition-all hover:-translate-y-1 ${isCustomizable
                                                    ? 'bg-gray-900 text-white hover:bg-black shadow-xl shadow-black/10'
                                                    : 'bg-green-brand text-white hover:bg-green-accent shadow-xl shadow-green-brand/20'
                                                    }`}
                                            >
                                                {isCustomizable ? 'Configurar Pack' : 'Comprar Ahora'}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Tactical Value Props */}
            <section className="py-32 bg-gray-soft/30 border-y border-gray-50">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
                        {[
                            {
                                icon: Sparkles,
                                title: "Eficiencia de Costo",
                                desc: "Diseñado para familias inteligentes: obtén valor premium a escala de ahorro.",
                                color: "text-orange-600"
                            },
                            {
                                icon: TrendingUp,
                                title: "Suministro Crítico",
                                desc: "Garantiza las colaciones de toda la semana sin interrupciones ni stock-outs.",
                                color: "text-blue-600"
                            },
                            {
                                icon: Truck,
                                title: "Logística Express",
                                desc: "Prioridad máxima en despacho para todos los pedidos de formato Pack.",
                                color: "text-green-brand"
                            }
                        ].map((prop, i) => (
                            <div key={i} className="flex flex-col items-center text-center group">
                                <div className={`w-20 h-20 rounded-[2rem] bg-white flex items-center justify-center mb-10 shadow-premium group-hover:scale-110 transition-transform`}>
                                    <prop.icon className={`w-8 h-8 ${prop.color}`} />
                                </div>
                                <h3 className="text-xl font-black mb-4 tracking-tight text-gray-900">{prop.title}</h3>
                                <p className="text-gray-500 font-medium leading-relaxed text-sm">{prop.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium CTA Bottom */}
            <section className="py-32 relative overflow-hidden">
                {/* Decorative background glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] bg-green-brand/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container relative z-10 text-center">
                    <div className="max-w-4xl mx-auto glass p-16 lg:p-24 rounded-[4rem] border-white shadow-premium">
                        <div className="inline-flex items-center gap-2 text-green-brand text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                            <RotateCcw className="w-4 h-4" />
                            <span>Explora Más</span>
                        </div>
                        <h2 className="mb-8 tracking-tighter">¿Buscas algo <span className="text-gradient">específico?</span></h2>
                        <p className="text-gray-500 font-medium mb-14 text-lg max-w-2xl mx-auto">
                            Si prefieres seleccionar unidades individuales de compota, nuestro catálogo completo te espera con 12 sabores premium.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/tienda" className="btn btn-secondary px-12 h-16 flex items-center justify-center">
                                Ver Catálogo
                            </Link>
                            <Link href="/contacto" className="btn btn-ghost px-12 h-16 flex items-center justify-center">
                                Hablar con Soporte
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
