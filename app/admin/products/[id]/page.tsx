import { prisma } from "@/lib/db";
import { ProductForm } from "@/components/admin/ProductForm";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';

export default async function AdminEditProductPage({ params }: { params: { id: string } }) {
    const [product, flavors] = await Promise.all([
        prisma.product.findUnique({
            where: { id: params.id },
            include: { variants: true }
        }),
        prisma.flavor.findMany({ orderBy: { name: 'asc' } })
    ]);

    if (!product) {
        notFound();
    }

    return <ProductForm initialData={product} flavors={flavors} />;
}
