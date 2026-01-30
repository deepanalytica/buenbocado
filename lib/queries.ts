import { prisma } from './db';

// Get all products with their variants and flavors
export async function getProducts() {
    return await prisma.product.findMany({
        where: { status: 'active' },
        include: {
            variants: {
                include: {
                    flavor: true,
                },
            },
        },
        orderBy: {
            createdAt: 'desc',
        },
    });
}

// Get single product by slug
export async function getProductBySlug(slug: string) {
    return await prisma.product.findUnique({
        where: { slug },
        include: {
            variants: {
                include: {
                    flavor: true,
                },
            },
        },
    });
}

// Get all flavors
export async function getFlavors() {
    return await prisma.flavor.findMany({
        orderBy: {
            sortOrder: 'asc',
        },
    });
}

// Get all packs
export async function getPacks() {
    return await prisma.pack.findMany({
        where: { enabled: true },
        orderBy: {
            size: 'asc',
        },
    });
}

// Get shipping rates
export async function getShippingRates() {
    return await prisma.shippingRate.findMany({
        where: { enabled: true },
        orderBy: {
            sortOrder: 'asc',
        },
    });
}

// Validate coupon
export async function validateCoupon(code: string) {
    const coupon = await prisma.coupon.findUnique({
        where: { code: code.toUpperCase() },
    });

    if (!coupon || !coupon.enabled) {
        return { valid: false, error: 'Cupón inválido' };
    }

    if (coupon.expiry && coupon.expiry < new Date()) {
        return { valid: false, error: 'Cupón expirado' };
    }

    if (coupon.maxUsage && coupon.usageCount >= coupon.maxUsage) {
        return { valid: false, error: 'Cupón ya utilizado' };
    }

    return {
        valid: true,
        coupon: {
            code: coupon.code,
            type: coupon.type,
            value: coupon.value,
        },
    };
}

// Get content block
export async function getContentBlock(page: string, sectionKey: string = 'content') {
    return await prisma.contentBlock.findUnique({
        where: {
            page_sectionKey: {
                page,
                sectionKey,
            },
        },
    });
}

// Create order
export async function createOrder(orderData: any) {
    return await prisma.order.create({
        data: {
            ...orderData,
            items: {
                create: orderData.items,
            },
        },
        include: {
            items: true,
        },
    });
}

// Create B2B lead
export async function createB2BLead(leadData: any) {
    return await prisma.b2BLead.create({
        data: leadData,
    });
}
