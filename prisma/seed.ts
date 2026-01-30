import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting database seed...');

    // Create Flavors
    console.log('📦 Creating flavors...');
    const flavors = await Promise.all([
        prisma.flavor.create({
            data: {
                name: 'Durazno',
                slug: 'durazno',
                colorHex: '#FFB86C',
                sortOrder: 1,
            },
        }),
        prisma.flavor.create({
            data: {
                name: 'Mango',
                slug: 'mango',
                colorHex: '#FFA94D',
                sortOrder: 2,
            },
        }),
        prisma.flavor.create({
            data: {
                name: 'Frutilla',
                slug: 'frutilla',
                colorHex: '#FF6B9D',
                sortOrder: 3,
            },
        }),
        prisma.flavor.create({
            data: {
                name: 'Frambuesa',
                slug: 'frambuesa',
                colorHex: '#C7417B',
                sortOrder: 4,
            },
        }),
        prisma.flavor.create({
            data: {
                name: 'Naranja',
                slug: 'naranja',
                colorHex: '#FF8C42',
                sortOrder: 5,
            },
        }),
        prisma.flavor.create({
            data: {
                name: 'Pera',
                slug: 'pera',
                colorHex: '#C8D96F',
                sortOrder: 6,
            },
        }),
        prisma.flavor.create({
            data: {
                name: 'Manzana',
                slug: 'manzana',
                colorHex: '#90C695',
                sortOrder: 7,
            },
        }),
        prisma.flavor.create({
            data: {
                name: 'Papaya',
                slug: 'papaya',
                colorHex: '#FFB347',
                sortOrder: 8,
            },
        }),
        prisma.flavor.create({
            data: {
                name: 'Arándano',
                slug: 'arandano',
                colorHex: '#6B5CA5',
                sortOrder: 9,
            },
        }),
    ]);

    console.log(`✅ Created ${flavors.length} flavors`);

    // Create Products with Variants
    console.log('📦 Creating products and variants...');

    for (const flavor of flavors) {
        const product = await prisma.product.create({
            data: {
                name: `Puré de ${flavor.name}`,
                slug: `pure-${flavor.slug}`,
                description: `Delicioso puré de ${flavor.name.toLowerCase()} en pouch práctico. Perfecto para colaciones escolares.`,
                category: 'pouch',
                status: 'active',
                heroImage: `/assets/products/${flavor.slug}.png`,
                badges: flavor.sortOrder <= 3 ? 'Favorito' : '',
                seoTitle: `Puré de ${flavor.name} - BuenBocado`,
                seoDescription: `Compra puré de ${flavor.name.toLowerCase()} en pouch. Colación práctica y rica para niños. Envío a todo Chile.`,
            },
        });

        // Create 90g variant
        await prisma.variant.create({
            data: {
                productId: product.id,
                flavorId: flavor.id,
                weight: 90,
                sku: `BB-${flavor.slug.toUpperCase().substring(0, 3)}-90G`,
                price: 1500,
                compareAtPrice: null,
                stock: 100,
                claimIngredientesSimples: true,
            },
        });

        // Create 120g variant
        await prisma.variant.create({
            data: {
                productId: product.id,
                flavorId: flavor.id,
                weight: 120,
                sku: `BB-${flavor.slug.toUpperCase().substring(0, 3)}-120G`,
                price: 1900,
                compareAtPrice: 2200,
                stock: 100,
                claimIngredientesSimples: true,
            },
        });

        console.log(`  ✅ Created product: ${product.name} with 2 variants`);
    }

    // Create Packs
    console.log('📦 Creating packs...');
    await prisma.pack.createMany({
        data: [
            {
                name: 'Pack Semana',
                slug: 'pack-semana',
                size: 10,
                price: 13500,
                description: '10 pouches para toda la semana escolar. Ahorra 10%.',
                minPerFlavor: 1,
                maxPerFlavor: 10,
                enabled: true,
            },
            {
                name: 'Pack Familia',
                slug: 'pack-familia',
                size: 20,
                price: 25000,
                description: '20 pouches para toda la familia. Ahorra 15%.',
                minPerFlavor: 1,
                maxPerFlavor: 20,
                enabled: true,
            },
            {
                name: 'Mix Favoritos',
                slug: 'mix-favoritos',
                size: 10,
                price: 14000,
                description: 'Arma tu pack eligiendo los sabores que más te gusten.',
                minPerFlavor: 1,
                maxPerFlavor: 5,
                enabled: true,
            },
        ],
    });

    console.log('✅ Created 3 packs');

    // Create Shipping Rates
    console.log('📦 Creating shipping rates...');
    await prisma.shippingRate.createMany({
        data: [
            {
                regionName: 'Región Metropolitana',
                price: 3000,
                etaText: '2-3 días hábiles',
                enabled: true,
                sortOrder: 1,
            },
            {
                regionName: 'Regiones (Nacional)',
                price: 5000,
                etaText: '4-7 días hábiles',
                enabled: true,
                sortOrder: 2,
            },
        ],
    });

    console.log('✅ Created 2 shipping rates');

    // Create Sample Coupon
    console.log('📦 Creating sample coupon...');
    await prisma.coupon.create({
        data: {
            code: 'BIENVENIDO',
            type: 'percentage',
            value: 10,
            expiry: new Date('2026-12-31'),
            enabled: true,
        },
    });

    console.log('✅ Created sample coupon: BIENVENIDO (10% off)');

    // Create Content Blocks for Policies
    console.log('📦 Creating content blocks...');
    await prisma.contentBlock.createMany({
        data: [
            {
                page: 'terms',
                sectionKey: 'content',
                title: 'Términos y Condiciones',
                body: `# Términos y Condiciones

Última actualización: ${new Date().toLocaleDateString('es-CL')}

## 1. Aceptación de Términos
Al acceder y usar este sitio web, aceptas estar sujeto a estos términos y condiciones.

## 2. Productos
Los productos mostrados en este sitio están sujetos a disponibilidad. Nos reservamos el derecho de limitar las cantidades de cualquier producto.

## 3. Precios
Todos los precios están en pesos chilenos (CLP) e incluyen IVA. Los precios pueden cambiar sin previo aviso.

## 4. Pedidos
Al realizar un pedido, garantizas que la información proporcionada es correcta y completa.

## 5. Envíos
Los tiempos de envío son estimados y pueden variar según la ubicación y disponibilidad.

## 6. Devoluciones
Aceptamos devoluciones dentro de los 7 días de recibido el producto, siempre que esté en su empaque original.`,
                enabled: true,
                sortOrder: 1,
            },
            {
                page: 'privacy',
                sectionKey: 'content',
                title: 'Política de Privacidad',
                body: `# Política de Privacidad

Última actualización: ${new Date().toLocaleDateString('es-CL')}

## Información que Recopilamos
Recopilamos información que nos proporcionas directamente, como nombre, email, dirección y teléfono al realizar un pedido.

## Uso de la Información
Usamos tu información para:
- Procesar y enviar tus pedidos
- Comunicarnos contigo sobre tu pedido
- Mejorar nuestros productos y servicios

## Protección de Datos
Implementamos medidas de seguridad para proteger tu información personal.

## Cookies
Usamos cookies para mejorar tu experiencia en nuestro sitio.

## Contacto
Si tienes preguntas sobre nuestra política de privacidad, contáctanos en contacto@buenbocado.cl`,
                enabled: true,
                sortOrder: 1,
            },
            {
                page: 'shipping',
                sectionKey: 'content',
                title: 'Política de Envíos',
                body: `# Política de Envíos

## Zonas de Envío
Despachamos a todo Chile continental.

## Tiempos de Entrega
- Región Metropolitana: 2-3 días hábiles
- Regiones: 4-7 días hábiles

## Costos de Envío
- Región Metropolitana: $3.000
- Regiones: $5.000

## Seguimiento
Recibirás un email con el número de seguimiento una vez que tu pedido sea despachado.

## Problemas con el Envío
Si hay algún problema con tu envío, contáctanos inmediatamente.`,
                enabled: true,
                sortOrder: 1,
            },
            {
                page: 'returns',
                sectionKey: 'content',
                title: 'Cambios y Devoluciones',
                body: `# Política de Cambios y Devoluciones

## Plazo
Tienes 7 días desde la recepción del producto para solicitar un cambio o devolución.

## Condiciones
- El producto debe estar en su empaque original
- No debe estar abierto ni consumido
- Debe incluir toda la documentación original

## Proceso
1. Contáctanos en contacto@buenbocado.cl
2. Envía fotos del producto
3. Te proporcionaremos instrucciones de devolución
4. Una vez recibido, procesaremos el reembolso o cambio

## Reembolsos
Los reembolsos se procesarán dentro de 7-10 días hábiles.

## Productos Dañados
Si tu producto llega dañado, contáctanos inmediatamente con fotos. Te enviaremos un reemplazo sin costo.`,
                enabled: true,
                sortOrder: 1,
            },
        ],
    });

    console.log('✅ Created 4 content blocks for policies');

    console.log('🎉 Seed completed successfully!');
}

main()
    .catch((e) => {
        console.error('❌ Error seeding database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
