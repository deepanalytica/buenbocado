"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Sparkles, Box } from "lucide-react";

const PACKS = [
    {
        id: "semana",
        name: "Pack Semana",
        size: "10x",
        description: "Perfecto para la colación diaria. Asegura una semana completa de nutrición natural.",
        type: "secondary",
        href: "/packs",
        badge: null
    },
    {
        id: "familia",
        name: "Pack Familia",
        size: "20x",
        description: "Nuestra mejor relación precio-valor. Ideal para familias que no se complican.",
        type: "featured",
        href: "/packs",
        badge: "Más Popular"
    },
    {
        id: "mix",
        name: "Tu Propio Mix",
        size: "MIX",
        description: "Combina los sabores favoritos de tus hijos como tú quieras y ahorra.",
        type: "secondary",
        href: "/tienda",
        badge: null
    }
];

export const PacksSection = () => {
    return (
        <section className="relative py-32 md:py-48 bg-gray-soft overflow-hidden">
            {/* Ambient Elements */}
            <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-green-light rounded-full blur-[150px] opacity-40 pointer-events-none"></div>

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-24 max-w-2xl mx-auto"
                >
                    <div className="inline-flex items-center gap-3 glass border-white/50 px-5 py-2.5 rounded-2xl mb-8 shadow-sm">
                        <Box className="w-4 h-4 text-green-brand" />
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400">Logística Inteligente</span>
                    </div>
                    <h2 className="tracking-tighter mb-6 lg:mb-8">Packs que <span className="text-gradient">simplifican</span> todo.</h2>
                    <p className="text-gray-500 font-medium text-sm lg:text-base pr-4">
                        Selecciona el formato ideal para tu hogar y asegura que nunca falte una colación nutritiva en la mesa.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 max-w-7xl mx-auto">
                    {PACKS.map((pack, idx) => {
                        const isFeatured = pack.type === 'featured';

                        return (
                            <motion.div
                                key={pack.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className={`relative group group flex flex-col h-full bg-white rounded-[2.5rem] lg:rounded-[3rem] p-8 lg:p-12 transition-all duration-500 hover:shadow-hover hover:-translate-y-4 border ${isFeatured ? 'ring-[6px] ring-green-brand/5 border-green-brand/20' : 'border-gray-100'}`}
                            >
                                {pack.badge && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 bg-gray-900 text-white text-[9px] font-black px-6 py-2.5 rounded-full uppercase tracking-widest shadow-xl">
                                        {pack.badge}
                                    </div>
                                )}

                                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-10 text-2xl font-black transition-all group-hover:scale-110 group-hover:rotate-3 ${isFeatured ? 'bg-green-brand text-white shadow-lg shadow-green-brand/20' : 'bg-gray-soft text-gray-900 border border-gray-100'}`}>
                                    {pack.size}
                                </div>

                                <h3 className="text-3xl font-black mb-6 text-gray-900 tracking-tight group-hover:text-green-brand transition-colors">
                                    {pack.name}
                                </h3>

                                <p className="text-gray-500 mb-12 font-medium leading-relaxed">
                                    {pack.description}
                                </p>

                                <div className="mt-auto space-y-4">
                                    <div className="pt-8 border-t border-gray-100 mb-8 space-y-4">
                                        {[
                                            "Ahorro de hasta el 15%",
                                            "Envío Express Prioritario",
                                            "Nutrición Real Garantizada"
                                        ].map((benefit, i) => (
                                            <div key={i} className="flex items-center gap-3 text-[11px] font-bold text-gray-500">
                                                <div className="w-5 h-5 rounded-full bg-green-light flex items-center justify-center">
                                                    <Check className="w-3 h-3 text-green-brand" />
                                                </div>
                                                <span>{benefit}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        href={pack.href}
                                        className={`btn w-full ${isFeatured ? 'btn-primary' : 'btn-secondary shadow-sm'}`}
                                    >
                                        <span>{isFeatured ? 'Comprar ahora' : 'Ver Detalles'}</span>
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
