import { Hero } from "@/components/home/Hero";
import { TrustSection } from "@/components/home/TrustSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { PacksSection } from "@/components/home/PacksSection";
import { CTASection } from "@/components/home/CTASection";
import { prisma } from "@/lib/db";

// Ensure fresh data
export const dynamic = "force-dynamic";

async function getFeaturedProducts() {
    try {
        const products = await prisma.product.findMany({
            take: 4,
            where: { status: 'active' },
            orderBy: { name: 'asc' }, // Or by popularity if you had a field
            include: {
                variants: {
                    include: { flavor: true },
                    orderBy: { weight: 'asc' }
                }
            }
        });

        // Transform data for client component (handle Decimals)
        return products.map(p => ({
            id: p.id,
            name: p.name,
            slug: p.slug,
            badges: p.badges,
            heroImage: p.heroImage,
            variants: p.variants.map(v => ({
                price: Number(v.price),
                compareAtPrice: v.compareAtPrice ? Number(v.compareAtPrice) : null,
                weight: v.weight,
                flavor: {
                    name: v.flavor.name,
                    slug: v.flavor.slug,
                    colorHex: v.flavor.colorHex
                }
            }))
        }));
    } catch (e) {
        console.error("Error fetching featured products:", e);
        return [];
    }
}

export default async function HomePage() {
    const products = await getFeaturedProducts();

    return (
        <main className="overflow-x-hidden">
            <Hero />
            <TrustSection />
            <FeaturedProducts products={products} />
            <PacksSection />
            <CTASection />
        </main>
    );
}
