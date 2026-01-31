import Link from "next/link";
import { Home, Heart, Target, ShieldCheck } from "lucide-react";

export default function SobreNosotrosPage() {
    return (
        <main className="bg-marfil min-h-screen">
            {/* Page Header */}
            <section className="bg-white border-b border-gray-100 pb-16 pt-20">
                <div className="bocado-container text-center">
                    <div className="flex flex-col items-center text-center">
                        <nav className="flex items-center gap-2 mb-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                            <Link href="/" className="hover:text-green-brand transition-colors flex items-center gap-1.5">
                                <Home className="w-3 h-3" />
                                <span>Inicio</span>
                            </Link>
                            <span className="opacity-30">/</span>
                            <span className="text-gray-900">Sobre Nosotros</span>
                        </nav>

                        <h1 className="mb-6 tracking-tighter">
                            Nuestra <span className="text-gradient">Historia</span>
                        </h1>
                        <p className="text-gray-600 font-medium prose-bocado mx-auto">
                            Creamos colaciones que los niños disfrutan de verdad y que los padres aprueban con total tranquilidad.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section-py">
                <div className="bocado-container text-center">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
                            <div className="order-2 lg:order-1">
                                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                                    <Target className="w-3.5 h-3.5" />
                                    <span>Nuestra Misión</span>
                                </div>
                                <h2 className="text-4xl font-black mb-8 tracking-tight text-gray-900">Compotas honestas para familias reales.</h2>
                                <div className="space-y-6 text-gray-600 font-medium leading-relaxed">
                                    <p>
                                        En BuenBocado, creemos que las colaciones para niños deben ser simples, ricas y prácticas. Por eso hacemos pouches de compota de fruta con ingredientes que puedes entender y sabor que los niños realmente disfrutan.
                                    </p>
                                    <p>
                                        Sin promesas complicadas, sin ingredientes difíciles de pronunciar. Solo fruta, sabor y practicidad para el día a día escolar.
                                    </p>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="aspect-square rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-green-brand/5 group-hover:bg-green-brand/0 transition-colors duration-500" />
                                    <div className="w-full h-full bg-gray-50 flex items-center justify-center text-gray-200">
                                        {/* Placeholder for real image */}
                                        <Heart className="w-20 h-20 opacity-20" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Values Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-16 border-t border-gray-100">
                            {[
                                {
                                    icon: Heart,
                                    title: "Simplicidad",
                                    desc: "Ingredientes claros y etiquetas 100% honestas. Si no lo entiendes, no lo usamos.",
                                    color: "bg-orange-50 text-orange-600"
                                },
                                {
                                    icon: Target,
                                    title: "Enfocado en Niños",
                                    desc: "Sabores desarrollados específicamente para el paladar infantil, suaves y naturales.",
                                    color: "bg-blue-50 text-blue-600"
                                },
                                {
                                    icon: ShieldCheck,
                                    title: "Responsabilidad",
                                    desc: "Transparencia absoluta en nuestros procesos y compromiso con la salud nutricional.",
                                    color: "bg-green-50 text-green-600"
                                }
                            ].map((value, i) => (
                                <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-50 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2">
                                    <div className={`w-14 h-14 rounded-2xl ${value.color} flex items-center justify-center mb-8 shadow-sm`}>
                                        <value.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 tracking-tight">{value.title}</h3>
                                    <p className="text-gray-500 font-medium leading-relaxed text-sm">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="section-py">
                <div className="container text-center">
                    <div className="bg-white border border-gray-100 p-16 rounded-[4rem] shadow-2xl shadow-black/5 max-w-4xl mx-auto">
                        <h2 className="mb-6 tracking-tight">¿Listo para probar BuenBocado?</h2>
                        <p className="text-gray-600 font-medium mb-12 prose-bocado mx-auto">
                            Descubre por qué miles de familias chilenas ya confían en nosotros para sus colaciones diarias.
                        </p>
                        <Link href="/tienda" className="btn btn-primary px-12">
                            Explorar Sabores
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
