"use client";

import { Sparkles, TrendingUp, ArrowRight, Package } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { motion } from "framer-motion";

interface UpsellSectionProps {
    currentVariant: any;
    upsellPack: any;
}

export function UpsellSection({ currentVariant, upsellPack }: UpsellSectionProps) {
    if (!upsellPack) return null;

    const packPrice = upsellPack.price;
    const unitPriceInPack = packPrice / upsellPack.size;
    const savings = (currentVariant.price * upsellPack.size) - packPrice;
    const savingsPercent = Math.round((savings / (currentVariant.price * upsellPack.size)) * 100);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="overflow-hidden rounded-3xl bg-gray-50/50 border border-gray-100 p-8 lg:p-10 relative"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-brand/10 text-green-700 p-2 rounded-xl">
                    <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-xs font-black text-green-800 uppercase tracking-widest">
                    Opción Recomendada: {upsellPack.name}
                </span>
            </div>

            <h3 className="text-xl font-black text-gray-900 mb-2 leading-tight">
                ¿Llevas para toda la semana? <br />
                <span className="text-green-brand text-lg">Ahorra {formatPrice(savings)} adicionales</span>
            </h3>

            <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-md font-medium">
                Al elegir el pack de {upsellPack.size} unidades, el precio por unidad baja de {formatPrice(currentVariant.price)} a <span className="text-gray-900 font-bold">{formatPrice(unitPriceInPack)}</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 bg-white rounded-2xl p-6 mb-8 border border-gray-100 shadow-sm">
                <div className="flex-1">
                    <div className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1.5 flex items-center gap-1">
                        Precio por Unidad
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-gray-900">{formatPrice(unitPriceInPack)}</span>
                        <span className="text-sm text-gray-300 line-through font-bold">{formatPrice(currentVariant.price)}</span>
                    </div>
                </div>
                <div className="hidden sm:block w-px h-10 bg-gray-100" />
                <div className="flex-1">
                    <div className="text-[10px] text-green-700 uppercase font-bold tracking-widest mb-1.5 italic">Total del Pack (10u)</div>
                    <div className="text-2xl font-black text-green-brand">{formatPrice(packPrice)}</div>
                </div>
            </div>

            <motion.button
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => {
                    window.location.href = `/packs`;
                }}
                className="w-full bg-white border-2 border-green-brand py-4 rounded-xl text-green-brand font-black text-base flex items-center justify-center gap-3 hover:bg-green-brand hover:text-white transition-all duration-300 shadow-sm"
            >
                <Package className="w-5 h-5" />
                <span>Cambiar a Pack de {upsellPack.size} y Ahorrar</span>
                <ArrowRight className="w-4 h-4" />
            </motion.button>

            <div className="mt-4 flex items-center justify-center gap-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-green-500" />
                    Envío gratis
                </span>
                <span className="w-1 h-1 bg-gray-200 rounded-full" />
                <span>Garantía BuenBocado</span>
            </div>
        </motion.div>
    );
}
