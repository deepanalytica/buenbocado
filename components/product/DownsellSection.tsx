"use client";

import { Info, HelpCircle } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { motion } from "framer-motion";

interface DownsellSectionProps {
    downsellVariant: any;
}

export function DownsellSection({ downsellVariant }: DownsellSectionProps) {
    if (!downsellVariant) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/30 relative overflow-hidden group hover:border-green-brand/30 transition-colors"
        >
            <div className="flex items-start gap-4 relative z-10">
                <div className="bg-white text-gray-400 p-2.5 rounded-xl shadow-sm border border-gray-100 group-hover:text-green-brand transition-colors">
                    <HelpCircle className="w-5 h-5" />
                </div>
                <div className="flex-1">
                    <p className="text-sm font-black text-gray-900 mb-1.5 uppercase tracking-wide">
                        ¿Prefieres probar primero?
                    </p>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        También tenemos disponible la versión individual de <span className="font-bold text-gray-900">{downsellVariant.weight}g</span> por solo <span className="font-bold text-green-brand">{formatPrice(downsellVariant.price)}</span>. Una excelente opción para conocer el sabor.
                    </p>

                    <button
                        onClick={() => {
                            const selector = document.getElementById('variant-selector');
                            if (selector) selector.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-xs font-black text-green-brand hover:text-green-dark flex items-center gap-1.5 transition-all group-hover:translate-x-1"
                    >
                        <span>Ver opción de {downsellVariant.weight}g</span>
                        <span className="text-xl">→</span>
                    </button>
                </div>
            </div>

            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gray-100 rounded-full blur-2xl group-hover:bg-green-brand/5 transition-colors" />
        </motion.div>
    );
}
