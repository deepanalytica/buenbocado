"use client";

import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
    id: string;
    name: string;
    slug: string;
    price: number;
    compareAtPrice?: number;
    flavorName: string;
    flavorColor: string;
    image: string;
    badges?: string[];
    weight: number;
}

export function ProductCard({
    id,
    name,
    slug,
    price,
    compareAtPrice,
    flavorName,
    flavorColor,
    image,
    badges,
    weight,
}: ProductCardProps) {
    return (
        <div className="group relative bg-white rounded-[1.5rem] lg:rounded-[2rem] border border-gray-100/50 p-2 lg:p-4 transition-all duration-500 hover:shadow-hover hover:-translate-y-2">
            {/* Top Badge Overlay */}
            <div className="absolute top-8 left-8 z-20 flex flex-col gap-2">
                {badges && badges.slice(0, 1).map((badge, idx) => (
                    <div
                        key={idx}
                        className="glass px-4 py-2 rounded-full border-white/50 shadow-sm"
                    >
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-900">
                            {badge}
                        </span>
                    </div>
                ))}
            </div>

            {/* Social Proof Overlay */}
            <div className="absolute top-8 right-8 z-20 glass px-3 py-2 rounded-2xl border-white/50 shadow-sm flex items-center gap-1.5">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                <span className="text-[10px] font-black text-gray-900">4.9</span>
            </div>

            {/* Image Stage */}
            <Link href={`/producto/${slug}`} className="block relative bg-gray-soft rounded-[1.25rem] lg:rounded-[1.5rem] p-4 lg:p-10 overflow-hidden mb-4 lg:mb-8 group-hover:bg-white transition-colors duration-500">
                {/* 3D Depth Aura */}
                <div className="absolute inset-10 bg-black/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative aspect-square">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-700 ease-[0.16,1,0.3,1] drop-shadow-[0_20px_20px_rgba(0,0,0,0.1)] group-hover:drop-shadow-[0_40px_40px_rgba(0,0,0,0.2)]"
                    />
                </div>
            </Link>

            {/* Content Area */}
            <div className="px-4 pb-4">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-brand animate-pulse" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Stock Disponible</span>
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 px-3 py-1 bg-gray-50 rounded-lg">
                        {weight}g
                    </span>
                </div>

                <Link href={`/producto/${slug}`} className="block mb-4 lg:mb-6">
                    <h3 className="product-card-title text-gray-900 group-hover:text-green-brand transition-colors">
                        {name}
                    </h3>
                </Link>

                <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col">
                        {compareAtPrice && (
                            <span className="text-[10px] text-gray-300 line-through font-bold">
                                {formatPrice(compareAtPrice)}
                            </span>
                        )}
                        <span className="text-lg lg:text-2xl font-black text-gray-900 tracking-tighter">
                            {formatPrice(price)}
                        </span>
                    </div>

                    <Link
                        href={`/producto/${slug}`}
                        className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-900 text-white rounded-xl lg:rounded-[1.2rem] flex items-center justify-center hover:bg-green-brand transition-all shadow-xl hover:-translate-y-1 active:scale-95 group/btn"
                    >
                        <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5 group-hover/btn:scale-110 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
