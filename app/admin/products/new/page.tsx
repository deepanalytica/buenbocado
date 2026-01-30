import { prisma } from "@/lib/db";
import { ProductForm } from "@/components/admin/ProductForm";

export const dynamic = 'force-dynamic';

export default async function AdminNewProductPage() {
    const flavors = await prisma.flavor.findMany({ orderBy: { name: 'asc' } });

    return <ProductForm flavors={flavors} />;
}
