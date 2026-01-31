"use client";

import { Sparkles, TrendingUp, ArrowRight, Package } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface UpsellSectionProps {
    currentVariant: any;
    upsellPack: any;
}

export function UpsellSection({ currentVariant, upsellPack }: UpsellSectionProps) {
    const router = useRouter();
    if (!upsellPack) return null;

    const packPrice = upsellPack.price;
    const unitPriceInPack = packPrice / upsellPack.size;
    const savings = (currentVariant.price * upsellPack.size) - packPrice;
    const savingsPercent = Math.round((savings / (currentVariant.price * upsellPack.size)) * 100);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="overflow-hidden rounded-3xl bg-gray-50/50 border border-gray-100 p-8 lg:p-12 relative"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-brand/10 text-green-700 p-2 rounded-xl">
                    <TrendingUp className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="text-[11px] font-black text-green-800 uppercase tracking-widest">
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

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 bg-white rounded-2xl p-7 lg:p-8 mb-8 border border-gray-100 shadow-sm">
                <div className="flex-1 text-center sm:text-left">
                    <div className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-2 flex items-center justify-center sm:justify-start gap-1">
                        Precio por Unidad
                    </div>
                    <div className="flex items-baseline justify-center sm:justify-start gap-2">
                        <span className="text-xl font-extrabold text-gray-900">{formatPrice(unitPriceInPack)}</span>
                        <span className="text-sm text-gray-300 line-through font-bold">{formatPrice(currentVariant.price)}</span>
                    </div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-gray-100 mx-2" />
                <div className="flex-1 text-center sm:text-left">
                    <div className="text-xs text-green-700 uppercase font-bold tracking-widest mb-2 italic">Total del Pack (10u)</div>
                    <div className="text-xl font-extrabold text-green-brand">{formatPrice(packPrice)}</div>
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
                <Package className="w-5 h-5" aria-hidden="true" />
                <span>Cambiar a Pack de {upsellPack.size} y Ahorrar</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </motion.button>

            <div className="mt-4 flex items-center justify-center gap-4 text-[11px] font-black text-gray-400 uppercase tracking-widest">
                <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-green-500" aria-hidden="true" />
                    Envío gratis
                </span>
                <span className="w-1 h-1 bg-gray-200 rounded-full" aria-hidden="true" />
                <span>Garantía BuenBocado</span>
            </div>
        </motion.div>
    );
}
