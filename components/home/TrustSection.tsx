"use client";

import { motion } from "framer-motion";
import { Heart, Leaf, Zap, Shield, Sparkles, Orbit } from "lucide-react";

const features = [
    {
        title: "Sabor Superior",
        description: "Frutas reales del Maule, procesadas al punto exacto de dulzor natural.",
        icon: Heart,
        color: "bg-rose-50",
        iconColor: "text-rose-500"
    },
    {
        title: "Pureza Garantizada",
        description: "Sin azúcar añadida, sin colorantes, sin compromisos químicos.",
        icon: Leaf,
        color: "bg-green-50",
        iconColor: "text-green-500"
    },
    {
        title: "Energía Nativa",
        description: "Vitaminas y fibras intactas para el desarrollo saludable de tus hijos.",
        icon: Zap,
        color: "bg-amber-50",
        iconColor: "text-amber-500"
    },
    {
        title: "Trazabilidad Elite",
        description: "Control absoluto desde la cosecha hasta que llega a tu hogar.",
        icon: Shield,
        color: "bg-blue-50",
        iconColor: "text-blue-500"
    }
];

export const TrustSection = () => {
    return (
        <section className="relative py-32 md:py-48 overflow-hidden bg-white">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-orange-50/20 rounded-full blur-[120px] pointer-events-none opacity-40"></div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="inline-flex items-center gap-3 glass px-5 py-2.5 rounded-2xl mb-8 border-gray-100 shadow-sm">
                            <Orbit className="w-4 h-4 text-green-brand animate-spin-slow" />
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400">Nuestro Compromiso</span>
                        </div>
                        <h2 className="mb-8 tracking-tighter">
                            Nutrición real para <br />
                            <span className="text-gradient">niños activos.</span>
                        </h2>
                        <p className="text-gray-500 font-medium max-w-lg leading-relaxed">
                            No solo hacemos compotas de fruta; diseñamos momentos de bienestar. La tranquilidad de saber que están recibiendo lo mejor de la naturaleza, sin atajos.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative hidden lg:block"
                    >
                        <div className="aspect-[4/3] bg-gray-soft rounded-[3rem] overflow-hidden relative group border border-gray-100 shadow-premium">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-brand/5 to-transparent"></div>
                            <div className="absolute inset-0 flex items-center justify-center p-20">
                                <Sparkles className="w-32 h-32 text-green-brand/10 group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            {/* Decorative Label */}
                            <div className="absolute bottom-10 left-10 glass px-6 py-4 rounded-3xl border-white/50">
                                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Certificación</p>
                                <p className="text-sm font-black text-gray-900">Agricultura Limpia 2024</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Tactical Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group p-10 rounded-[2.5rem] bg-white border border-gray-100/50 hover:shadow-hover hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                            </div>
                            <h3 className="text-xl font-black mb-4 text-gray-900 group-hover:text-green-brand transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 font-medium leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
