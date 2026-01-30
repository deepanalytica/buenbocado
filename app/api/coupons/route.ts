import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { code, type, value, expiry, maxUsage, enabled } = body;

        const coupon = await prisma.coupon.create({
            data: {
                code: code.toUpperCase(),
                type,
                value,
                expiry,
                maxUsage,
                enabled,
            }
        });

        return NextResponse.json(coupon);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Error creating coupon" }, { status: 500 });
    }
}
