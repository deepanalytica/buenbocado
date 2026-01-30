"use client";

import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";

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
        <div className="card group">
            {/* Badges */}
            {badges && badges.length > 0 && (
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                    {badges.map((badge) => (
                        <span
                            key={badge}
                            className="bg-green-brand text-white text-xs font-semibold px-3 py-1 rounded-full"
                        >
                            {badge}
                        </span>
                    ))}
                </div>
            )}

            {/* Image */}
            <Link href={`/producto/${slug}`} className="block relative aspect-square mb-4 overflow-hidden rounded-lg">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
            </Link>

            {/* Flavor badge */}
            <div className="mb-3">
                <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: flavorColor }}
                >
                    {flavorName}
                </span>
            </div>

            {/* Product Info */}
            <Link href={`/producto/${slug}`}>
                <h3 className="font-semibold text-lg mb-1 group-hover:text-green-brand transition-colors">
                    {name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{weight}g</p>
            </Link>

            {/* Price */}
            <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold text-green-brand">
                    {formatPrice(price)}
                </span>
                {compareAtPrice && (
                    <span className="text-sm text-gray-500 line-through">
                        {formatPrice(compareAtPrice)}
                    </span>
                )}
            </div>

            {/* Add to Cart */}
            <Link
                href={`/producto/${slug}`}
                className="btn btn-primary w-full flex items-center justify-center gap-2"
            >
                <ShoppingCart className="w-4 h-4" />
                Ver Detalles
            </Link>
        </div>
    );
}
