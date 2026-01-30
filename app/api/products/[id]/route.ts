import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    try {
        const body = await request.json();
        const { name, slug, description, flavorId, status, variants } = body;

        // Transaction to update product and manage variants
        const product = await prisma.$transaction(async (tx: any) => {
            // 1. Update basic info
            const updatedProduct = await tx.product.update({
                where: { id: params.id },
                data: { name, slug, description, flavorId, status }
            });

            // ... (rest of logic) ...

            // Check for deletions (variants in DB but not in payload)
            const existingVariants = await tx.variant.findMany({ where: { productId: params.id } });
            const payloadIds = variants.map((v: { id?: string }) => v.id).filter(Boolean);
            const toDelete = existingVariants.filter((v: { id: string }) => !payloadIds.includes(v.id));

            if (toDelete.length > 0) {
                await tx.variant.deleteMany({
                    where: { id: { in: toDelete.map((v: { id: string }) => v.id) } }
                });
            }

            return updatedProduct;
        });

        return NextResponse.json(product);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Error updating product" }, { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        await prisma.product.delete({
            where: { id: params.id }
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Error deleting product" }, { status: 500 });
    }
}
