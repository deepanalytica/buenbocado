import { getProductBySlug } from "@/lib/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { AddToCartButton } from "@/components/product/AddToCartButton";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const product = await getProductBySlug(params.slug);

    if (!product) {
        return {
            title: 'Producto no encontrado',
        };
    }

    return {
        title: `${product.name} | BuenBocado`,
        description: product.seoDescription || product.description,
    };
}

export default async function ProductoPage({ params }: { params: { slug: string } }) {
    const product = await getProductBySlug(params.slug);

    if (!product) {
        notFound();
    }

    // Group variants by weight
    const variant90 = product.variants.find(v => v.weight === 90);
    const variant120 = product.variants.find(v => v.weight === 120);
    const defaultVariant = variant90 || variant120 || product.variants[0];

    if (!defaultVariant) {
        notFound();
    }

    return (
        <main className="container py-12">
            {/* Breadcrumb */}
            <div className="mb-8">
                <Link
                    href="/tienda"
                    className="inline-flex items-center gap-2 text-green-brand hover:text-green-dark"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Volver a la tienda
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Product Image */}
                <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden">
                    <Image
                        src={product.heroImage || `/assets/products/${defaultVariant.flavor.slug}.png`}
                        alt={product.name}
                        fill
                        className="object-contain p-8"
                        priority
                    />
                </div>

                {/* Product Info */}
                <div>
                    {/* Flavor Badge */}
                    <div className="mb-4">
                        <span
                            className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white"
                            style={{ backgroundColor: defaultVariant.flavor.colorHex }}
                        >
                            {defaultVariant.flavor.name}
                        </span>
                    </div>

                    <h1 className="mb-4">{product.name}</h1>

                    <p className="text-lg text-gray-700 mb-6">
                        {product.description}
                    </p>

                    {/* Badges */}
                    {product.badges.length > 0 && (
                        <div className="flex gap-2 mb-6">
                            {product.badges.map((badge) => (
                                <span
                                    key={badge}
                                    className="bg-green-light text-green-dark text-sm font-semibold px-3 py-1 rounded-full"
                                >
                                    {badge}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Add to Cart Section */}
                    <AddToCartButton
                        product={product}
                        variants={product.variants}
                        defaultVariant={defaultVariant}
                    />

                    {/* Claims */}
                    {defaultVariant.claimIngredientesSimples && (
                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <h3 className="font-semibold mb-4">Características</h3>
                            <div className="space-y-3">
                                {defaultVariant.claimIngredientesSimples && (
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-green-light rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-green-brand font-bold">✓</span>
                                        </div>
                                        <span className="text-gray-700">Ingredientes simples</span>
                                    </div>
                                )}
                                {defaultVariant.claimSinSellos && (
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-green-light rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-green-brand font-bold">✓</span>
                                        </div>
                                        <span className="text-gray-700">Sin sellos</span>
                                    </div>
                                )}
                                {defaultVariant.claimSinAzucar && (
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-green-light rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-green-brand font-bold">✓</span>
                                        </div>
                                        <span className="text-gray-700">Sin azúcar añadida</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Product Details */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <h3 className="font-semibold mb-4">Detalles del Producto</h3>
                        <dl className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <dt className="text-gray-600">SKU:</dt>
                                <dd className="font-medium">{defaultVariant.sku}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Categoría:</dt>
                                <dd className="font-medium capitalize">{product.category}</dd>
                            </div>
                            {defaultVariant.stock !== null && (
                                <div className="flex justify-between">
                                    <dt className="text-gray-600">Disponibilidad:</dt>
                                    <dd className="font-medium">
                                        {defaultVariant.stock > 0 ? 'En stock' : 'Agotado'}
                                    </dd>
                                </div>
                            )}
                        </dl>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-8 p-6 bg-marfil rounded-lg">
                        <div className="space-y-2 text-sm">
                            <p className="flex items-center gap-2">
                                <span className="text-green-brand">✓</span>
                                Envío a todo Chile
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="text-green-brand">✓</span>
                                Devoluciones fáciles
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="text-green-brand">✓</span>
                                Pago seguro
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
