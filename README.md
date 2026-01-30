# BuenBocado Ecommerce

Sitio web ecommerce completo para BuenBocado - pouches de puré de fruta para niños en Chile.

## 🚀 Características

- **D2C (Direct to Consumer)**: Tienda online completa con carrito y checkout
- **B2B**: Canal para colegios, kioscos y minimarkets
- **Gestión de Productos**: 9 sabores de pouches (durazno, mango, frutilla, frambuesa, naranja, pera, manzana, papaya, arándano)
- **Packs**: Pack Semana (10), Pack Familia (20), Mix Favoritos (personalizable)
- **Sistema de Cupones**: Descuentos por porcentaje o monto fijo
- **Envío**: Configuración por zonas con cálculo automático
- **Admin Panel**: Gestión completa de productos, pedidos, contenido y más
- **Responsive**: Mobile-first design optimizado para todos los dispositivos

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript (strict mode)
- **Estilos**: Tailwind CSS v4
- **Base de Datos**: PostgreSQL con Prisma ORM
- **Estado**: Zustand (carrito)
- **Formularios**: React Hook Form + Zod
- **Iconos**: Lucide React
- **Package Manager**: pnpm

## 📦 Instalación

```bash
# Clonar el repositorio
git clone git@github.com:deepanalytica/buenbocado.git
cd buenbocado

# Instalar dependencias
pnpm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales de base de datos

# Configurar la base de datos
pnpm db:push

# (Opcional) Poblar con datos iniciales
pnpm db:seed

# Iniciar servidor de desarrollo
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🗂️ Estructura del Proyecto

```
buenbocado/
├── app/                    # Next.js App Router
│   ├── (shop)/            # Rutas de tienda (home, shop, product, cart, checkout)
│   ├── (content)/         # Páginas de contenido (about, faq, contact, policies)
│   ├── (admin)/           # Panel de administración
│   ├── b2b/               # Landing B2B
│   └── api/               # API routes
├── components/
│   ├── layout/            # Header, Footer, Nav
│   ├── product/           # Product cards, grids
│   ├── cart/              # Carrito
│   └── ui/                # Componentes reutilizables
├── lib/
│   ├── db.ts              # Cliente Prisma
│   ├── utils.ts           # Utilidades
│   └── store/             # Zustand stores
├── prisma/
│   ├── schema.prisma      # Esquema de base de datos
│   └── seed.ts            # Datos iniciales
└── public/
    └── assets/            # Imágenes, logo, productos
```

## 🎨 Paleta de Colores

- **Marfil**: `#FAF7F2` (fondo principal)
- **Verde Marca**: `#4A7C59` (primario)
- **Verde Oscuro**: `#3A5F47` (hover/contraste)
- **Verde Claro**: `#E8F4ED` (fondos suaves)

**Colores por Sabor:**
- Durazno: `#FFB86C`
- Mango: `#FFA94D`
- Frutilla: `#FF6B9D`
- Frambuesa: `#C7417B`
- Naranja: `#FF8C42`
- Pera: `#C8D96F`
- Manzana: `#90C695`
- Papaya: `#FFB347`
- Arándano: `#6B5CA5`

## 📄 Páginas Principales

### Cliente
- `/` - Home/Landing
- `/tienda` - Catálogo de productos
- `/producto/[slug]` - Detalle de producto
- `/carrito` - Carrito de compras
- `/checkout` - Proceso de compra
- `/confirmacion/[orderId]` - Confirmación de pedido
- `/packs` - Packs (Semana, Familia, Mix Favoritos)
- `/sobre-nosotros` - Sobre BuenBocado
- `/faq` - Preguntas frecuentes
- `/contacto` - Formulario de contacto
- `/b2b` - Colegios y Kioscos
- `/politicas/*` - Términos, privacidad, envíos, devoluciones

### Admin (por implementar)
- `/admin/dashboard` - Panel principal
- `/admin/productos` - Gestión de productos
- `/admin/pedidos` - Gestión de pedidos
- `/admin/cupones` - Gestión de cupones
- `/admin/contenido` - Editor de contenido

## 🔧 Scripts Disponibles

```bash
pnpm dev          # Servidor de desarrollo
pnpm build        # Build de producción
pnpm start        # Servidor de producción
pnpm lint         # Linter
pnpm db:push      # Sincronizar schema con DB
pnpm db:seed      # Poblar base de datos
```

## 🌐 Variables de Entorno

```env
DATABASE_URL="postgresql://..."
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
ADMIN_EMAIL="admin@buenbocado.cl"
ADMIN_PASSWORD="..." 
EMAIL_FROM="pedidos@buenbocado.cl"
```

## 🚀 Deploy

El sitio está optimizado para deployar en Vercel:

```bash
# Conectar con Vercel
vercel

# Deploy a producción
vercel --prod
```

## 📝 Licencia

© 2026 BuenBocado. Todos los derechos reservados.

## 📧 Contacto

- Email: contacto@buenbocado.cl
- WhatsApp: +56 9 XXXX XXXX
