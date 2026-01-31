import { getProductBySlug, getRelatedProducts, getUpsellPacks } from "@/lib/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import { AddToCartButton } from "@/components/product/AddToCartButton";
import { RelatedProductsCarousel } from "@/components/product/RelatedProductsCarousel";
import { UpsellSection } from "@/components/product/UpsellSection";
import { DownsellSection } from "@/components/product/DownsellSection";
import Link from "next/link";
import { ArrowLeft, Check, Truck, Shield, RotateCcw, Star, Leaf, Award, ChevronDown, Sparkles } from "lucide-react";
import { MobileStickyBuy } from "@/components/product/MobileStickyBuy";

export default async function ProductPage({ params }: { params: { slug: string } }) {
    const product = await getProductBySlug(params.slug);

    if (!product) {
        notFound();
    }

    const relatedProducts = await getRelatedProducts(product.id, product.category || "Fruit pouch", 8);
    const packs = await getUpsellPacks();
    const defaultVariant = product.variants.find((v: any) => v.weight === 90) || product.variants[0];
    const upsellPack = packs.find((p: any) => p.size === 10);
    const downsellVariant = product.variants.find((v: any) => v.weight === 90 && v.id !== defaultVariant?.id);

    if (!defaultVariant) {
        notFound();
    }

    return (
        <main className="min-h-screen pb-32 lg:pb-32 bg-white">
            <div className="container lg:pt-32 pt-24 pb-16">
                {/* Elite Back Navigation */}
                <Link
                    href="/tienda"
                    className="inline-flex items-center gap-3 text-gray-400 hover:text-green-brand transition-all mb-16 font-black uppercase text-[10px] tracking-[0.3em] group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
                    <span>Volver al Catálogo</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    {/* Visual Showcase Column */}
                    <div className="lg:col-span-5 relative">
                        <div className="lg:sticky lg:top-32">
                            <div className="relative aspect-square rounded-[4rem] overflow-hidden bg-gray-soft/50 border border-gray-100 group shadow-premium">
                                <Image
                                    src={product.heroImage || `/assets/products/${defaultVariant.flavor.slug}.png`}
                                    alt={product.name}
                                    fill
                                    className="object-contain p-12 lg:p-20 transition-transform duration-1000 group-hover:scale-110"
                                    priority
                                />
                                {/* Ambient Decorative Glows */}
                                <div className="absolute -top-32 -left-32 w-80 h-80 bg-green-brand/10 rounded-full blur-[120px] pointer-events-none" />
                                <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-brand/10 rounded-full blur-[120px] pointer-events-none" />
                            </div>

                            {/* Trust Signals Matrix */}
                            <div className="grid grid-cols-3 gap-6 mt-12">
                                {[
                                    { icon: Truck, text: "Logística Express", color: "text-green-brand" },
                                    { icon: Shield, text: "Pago Blindado", color: "text-blue-brand" },
                                    { icon: RotateCcw, text: "Cambio Fácil", color: "text-orange-brand" }
                                ].map((badge, i) => (
                                    <div key={i} className="flex flex-col items-center text-center gap-4 group">
                                        <div className="w-16 h-16 rounded-3xl bg-white border border-gray-100 shadow-sm flex items-center justify-center transition-all group-hover:shadow-hover group-hover:-translate-y-1">
                                            <badge.icon className={`w-7 h-7 ${badge.color}`} />
                                        </div>
                                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 group-hover:text-gray-900 transition-colors">{badge.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Elite Content Column */}
                    <div className="lg:col-span-7 pt-4">
                        <div className="flex flex-col">
                            <div className="flex flex-wrap items-center gap-4 mb-10">
                                <div className="glass px-5 py-2.5 rounded-full border-gray-100 shadow-sm flex items-center gap-3">
                                    <div className="w-2 h-2 bg-green-brand rounded-full animate-pulse" />
                                    <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest">Disponibilidad Inmediata</span>
                                </div>
                                <div className="inline-flex items-center gap-2 text-orange-brand bg-orange-50 px-5 py-2.5 rounded-full border border-orange-100">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Fórmula Premium</span>
                                </div>
                            </div>

                            <h1 className="mb-8 tracking-tighter">
                                {product.name}
                            </h1>

                            <div className="flex items-center gap-8 mb-12">
                                <div className="flex items-center gap-1.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <div className="h-4 w-[1px] bg-gray-200" />
                                <span className="text-sm font-bold text-gray-400 flex items-center gap-3">
                                    <span className="text-gray-900">4.9/5</span>
                                    <span className="text-[10px] uppercase font-black tracking-widest">+120 Reseñas Reales</span>
                                </span>
                            </div>

                            <p className="text-xl text-gray-500 leading-relaxed font-medium mb-16 max-w-3xl">
                                {product.description || `Redefiniendo el snack saludable con compota de fruta 100% natural. Diseñado para el desarrollo de tus hijos, sin ingredientes artificiales y con el sabor puro del campo chileno.`}
                            </p>

                            {/* Benefit Indicators */}
                            <div className="grid grid-cols-2 gap-4 mb-20">
                                {[
                                    { icon: Leaf, text: "100% Fruta Nativa", color: "bg-green-50 text-green-700 border-green-100" },
                                    { icon: Shield, text: "Clean Label Certificado", color: "bg-blue-50 text-blue-700 border-blue-100" },
                                    { icon: Award, text: "Calidad de Exportación", color: "bg-orange-50 text-orange-700 border-orange-100" },
                                    { icon: Check, text: "Suscripción Disponible", color: "bg-purple-50 text-purple-700 border-purple-100" },
                                ].map((benefit, i) => (
                                    <div key={i} className={`flex items-center gap-5 p-5 rounded-[1.5rem] border transition-all ${benefit.color}`}>
                                        <benefit.icon className="w-5 h-5 shrink-0" />
                                        <span className="text-[11px] font-black uppercase tracking-widest">{benefit.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Master Purchase Interface */}
                            <div className="glass rounded-[4rem] p-10 lg:p-16 border-white shadow-premium mb-16 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-brand/50 via-green-brand to-green-brand/50" />

                                <div className="space-y-12">
                                    <AddToCartButton
                                        product={product}
                                        variants={product.variants}
                                        defaultVariant={defaultVariant}
                                    />

                                    <div className="pt-12 border-t border-gray-100/50">
                                        <UpsellSection
                                            currentVariant={defaultVariant}
                                            upsellPack={upsellPack}
                                        />
                                    </div>

                                    {downsellVariant && (
                                        <div className="pt-4">
                                            <DownsellSection downsellVariant={downsellVariant} />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Elite Specifications Accordion */}
                            <div className="space-y-4">
                                {[
                                    { title: "Composición & Pureza", content: "Nuestras compotas se elaboran exclusivamente con pulpas de fruta seleccionada del Valle del Maule. No utilizamos concentrados, espesantes ni ningún tipo de aditivo químico. 100% Pureza garantizada.", icon: Leaf, color: "text-green-brand bg-green-50" },
                                    { title: "Garantía de Satisfacción", content: "Si tus hijos no aman el sabor de BuenBocado, te devolvemos tu dinero o cambiamos el producto por otro sabor de tu preferencia. Creemos en la calidad de nuestra fruta.", icon: Shield, color: "text-blue-brand bg-blue-50" },
                                ].map((item, i) => (
                                    <details key={i} className="group bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden transition-all hover:border-gray-200">
                                        <summary className="flex items-center justify-between p-8 cursor-pointer list-none outline-none">
                                            <div className="flex items-center gap-6">
                                                <div className={`p-4 rounded-2xl ${item.color}`}>
                                                    <item.icon className="w-5 h-5" />
                                                </div>
                                                <span className="font-black text-gray-900 uppercase tracking-widest text-xs">{item.title}</span>
                                            </div>
                                            <ChevronDown className="w-5 h-5 text-gray-300 group-open:rotate-180 transition-transform duration-300" />
                                        </summary>
                                        <div className="px-10 pb-12 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-10 font-medium animate-slide-up">
                                            {item.content}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Elite Recommendations */}
            <section className="mt-32 pt-24 bg-gray-soft/30 border-t border-gray-50">
                <RelatedProductsCarousel products={relatedProducts} />
            </section>

            {/* Mobile Conversion Trigger */}
            <MobileStickyBuy product={product} activeVariant={defaultVariant} />
        </main>
    );
}
