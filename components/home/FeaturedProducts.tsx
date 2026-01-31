"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/product/ProductCard";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface Product {
    id: string;
    name: string;
    slug: string;
    badges: string;
    heroImage?: string | null;
    variants: {
        price: number;
        compareAtPrice?: number | null;
        weight: number;
        flavor: {
            name: string;
            slug: string;
            colorHex: string;
        };
    }[];
}

interface FeaturedProductsProps {
    products: Product[];
}

export const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
    return (
        <section className="relative py-32 md:py-48 overflow-hidden bg-white" id="sabores">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
            <div className="absolute top-40 right-40 w-80 h-80 bg-green-light rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

            <div className="bocado-container relative z-10">
                {/* Elite Section Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-end mb-16 lg:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="inline-flex items-center gap-3 bg-gray-soft border border-gray-100 px-5 py-2.5 rounded-2xl mb-8">
                            <Sparkles className="w-4 h-4 text-green-brand" />
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400">Selección de Elite</span>
                        </div>
                        <h2 className="tracking-tighter">
                            Sabores que <br />
                            <span className="text-gradient">conquistan</span> el día.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:pb-4"
                    >
                        <p className="text-gray-500 font-medium max-w-md lg:ml-auto">
                            Directamente del Valle del Maule. Procesamos solo frutas reales para crear el snack perfecto: nutritivo, práctico y delicioso.
                        </p>
                    </motion.div>
                </div>

                {/* Staggered Grid Experience */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-12 mb-24">
                    {products.length > 0 ? (
                        products.map((product, index) => {
                            const variant = product.variants.find(v => v.weight === 90) || product.variants[0];
                            if (!variant) return null;

                            return (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.1,
                                        ease: [0.16, 1, 0.3, 1]
                                    }}
                                >
                                    <ProductCard
                                        id={product.id}
                                        name={product.name}
                                        slug={product.slug}
                                        price={variant.price}
                                        compareAtPrice={variant.compareAtPrice || undefined}
                                        flavorName={variant.flavor.name}
                                        flavorColor={variant.flavor.colorHex}
                                        image={product.heroImage || `/assets/products/${variant.flavor.slug}.png`}
                                        badges={product.badges ? product.badges.split(',').filter(Boolean) : []}
                                        weight={variant.weight}
                                    />
                                </motion.div>
                            );
                        })
                    ) : (
                        <div className="col-span-full py-32 glass rounded-[3rem] border-dashed border-gray-200 text-center">
                            <p className="text-gray-400 font-black uppercase tracking-widest text-xs">Cargando sabores premium...</p>
                        </div>
                    )}
                </div>

                {/* Tactical Footer CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <Link href="/tienda" className="btn btn-secondary group px-12">
                        <span>Ver Colección Completa</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
