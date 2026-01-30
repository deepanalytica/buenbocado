import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, slug, description, flavorId, status, variants } = body;

        const product = await prisma.product.create({
            data: {
                name,
                slug,
                description,
                flavorId,
                status,
                colorHex: '#000000', // Default placeholder, ideally fetched from Flavor or input
                variants: {
                    create: variants.map((v: any) => ({
                        size: v.size,
                        sku: v.sku,
                        price: v.price,
                        stock: v.stock
                    }))
                }
            }
        });

        return NextResponse.json(product);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Error creating product" }, { status: 500 });
    }
}
