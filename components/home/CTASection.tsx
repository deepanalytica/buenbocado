"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Star, Users, Shield } from "lucide-react";

export const CTASection = () => {
    return (
        <section className="relative overflow-hidden bg-[#0A0A0A] py-32 md:py-48" id="cta">
            {/* Elite Background Art */}
            <div className="absolute top-0 right-0 w-[60rem] h-[60rem] bg-green-brand/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

            <div className="container relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Elite Badge */}
                        <div className="inline-flex items-center gap-4 dark-glass text-white px-8 py-3 rounded-2xl mb-12 shadow-2xl">
                            <Sparkles className="w-4 h-4 text-green-accent" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Membresía VIP BuenBocado</span>
                        </div>

                        {/* Disruptive Headline */}
                        <h2 className="text-white mb-12 leading-[0.9]">
                            Nutrición real para un <br />
                            <span className="text-gradient">momento feliz.</span>
                        </h2>

                        <p className="text-gray-400 text-lg md:text-xl font-medium mb-16 max-w-2xl mx-auto">
                            Únete a miles de familias que ya transformaron la colación escolar en el momento favorito del día.
                        </p>

                        {/* Action Lane */}
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-24">
                            <Link
                                href="/tienda"
                                className="btn btn-primary bg-white text-gray-900 hover:bg-green-brand hover:text-white group w-full sm:w-auto"
                            >
                                <span>Empezar mi Pedido</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </Link>

                            <Link
                                href="/packs"
                                className="btn btn-secondary border-white/10 bg-white/5 text-white hover:bg-white/10 w-full sm:w-auto"
                            >
                                <span>Ver Planes de Ahorro</span>
                            </Link>
                        </div>

                        {/* Glass Proof Bar */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-white/5">
                            {[
                                { icon: Star, text: "4.9/5 Rating Global", color: "text-yellow-400", sub: "Más de 200 reseñas" },
                                { icon: Users, text: "5k+ Familias", color: "text-green-accent", sub: "Comunidad activa" },
                                { icon: Shield, text: "Certificación Real", color: "text-blue-400", sub: "ISO 9001 Food Style" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center md:items-start gap-2">
                                    <div className="flex items-center gap-3">
                                        <item.icon className={`w-5 h-5 ${item.color} fill-current`} />
                                        <span className="text-white font-black text-[11px] uppercase tracking-widest">{item.text}</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-8">{item.sub}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
