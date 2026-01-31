"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Star } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden bg-white">
            {/* Ambient Background - High End Art Direction */}
            <div className="absolute top-0 right-0 w-[60rem] h-[60rem] bg-green-light rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2 opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-orange-50 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2 opacity-30"></div>

            <div className="bocado-container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Brand Content */}
                    <div className="lg:col-span-7 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="inline-flex items-center gap-4 bg-white border border-gray-100 px-6 py-3 rounded-full shadow-premium mb-12">
                                <span className="flex h-2 w-2 rounded-full bg-green-brand animate-pulse" aria-hidden="true"></span>
                                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">Snacks de Próxima Generación</span>
                            </div>

                            <h1 className="display-title mb-8 lg:mb-12">
                                El futuro de su <br />
                                <span className="text-gradient">nutrición</span> es <br />
                                <span className="relative">
                                    natural.
                                    <svg className="absolute -bottom-4 left-0 w-full h-4 text-green-brand/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                                    </svg>
                                </span>
                            </h1>

                            <p className="max-w-xl mx-auto lg:mx-0 mb-10 lg:mb-16 text-gray-500 font-medium leading-relaxed pr-4">
                                Redefinimos la colación escolar con compotas de fruta 100% real.
                                Sin compromisos, sin sellos, solo el sabor puro que les encanta y la energía que necesitan.
                            </p>

                            <div className="flex flex-col sm:flex-row items-stretch lg:items-center gap-4 lg:gap-6 justify-center lg:justify-start">
                                <Link
                                    href="/tienda"
                                    className="btn btn-primary group w-full sm:w-auto"
                                >
                                    <span>Explorar Tienda</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </Link>
                                <Link
                                    href="/packs"
                                    className="glass px-8 py-5 rounded-2xl flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-gray-900 transition-all w-full sm:w-auto active:scale-95"
                                >
                                    <span>Ver Packs Familiares</span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual Focal Point */}
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            <div className="absolute inset-0 border-[2px] border-dashed border-gray-100 rounded-full animate-spin-slow -z-10 scale-125"></div>

                            <div className="relative aspect-square max-w-lg mx-auto">
                                <Image
                                    src="/assets/hero.png"
                                    alt="Compota BuenBocado Premium de fruta 100% natural"
                                    fill
                                    className="object-contain drop-shadow-[0_60px_60px_rgba(0,0,0,0.12)]"
                                    priority
                                />

                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-10 -right-10 glass p-6 rounded-[2rem] shadow-premium hidden md:block"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-green-light rounded-2xl flex items-center justify-center">
                                            <Sparkles className="w-6 h-6 text-green-brand" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Calidad</p>
                                            <p className="text-sm font-black text-gray-900">100% Orgánico</p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 15, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -bottom-10 -left-10 glass p-6 rounded-[2.5rem] shadow-premium hidden md:block"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-sm">
                                                    <Image src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 50}`} alt="user" width={40} height={40} />
                                                </div>
                                            ))}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-1">
                                                <Star className="w-3 h-3 text-yellow-400 fill-current" aria-hidden="true" />
                                                <span className="text-sm font-black">4.9/5</span>
                                            </div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Basado en reseñas</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
