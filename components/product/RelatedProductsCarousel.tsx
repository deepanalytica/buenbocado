"use client";

import React from "react";
import { ProductSlider } from "./ProductSlider";
import { ProductCard } from "./ProductCard";

interface RelatedProductsCarouselProps {
    products: any[];
}

export function RelatedProductsCarousel({ products }: RelatedProductsCarouselProps) {
    if (!products || products.length === 0) return null;

    return (
        <section className="py-24 bg-marfil/50 border-t border-gray-100">
            <div className="bocado-container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 lg:mb-16 gap-6 px-4">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                            <span>Recomendados</span>
                        </div>
                        <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter">
                            También te podrían <span className="text-gradient">encantar</span>
                        </h2>
                        <p className="text-gray-500 font-medium prose-bocado">
                            Sabores naturales y nutritivos seleccionados especialmente para ti. Ideales para mantener una alimentación variada y saludable.
                        </p>
                    </div>
                </div>

                <div className="px-4 lg:px-0">
                    <ProductSlider>
                        {products.map((product) => {
                            const variant = product.variants?.[0];
                            if (!variant) return null;

                            return (
                                <div key={product.id} className="flex-[0_0_90%] sm:flex-[0_0_45%] lg:flex-[0_0_28%] xl:flex-[0_0_23%] min-w-0 p-2 lg:p-3">
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
                                </div>
                            );
                        })}
                    </ProductSlider>
                </div>
            </div>
        </section>
    );
}
