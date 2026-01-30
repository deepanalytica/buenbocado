# Desplegar BuenBocado en Vercel

## Pre-requisitos
- Cuenta en Vercel (https://vercel.com)
- Código en GitHub (ya está: https://github.com/deepanalytica/buenbocado)

## Pasos para Desplegar

### 1. Crear Proyecto en Vercel

1. Ve a https://vercel.com
2. Click en "Add New Project"
3. Importa el repositorio `deepanalytica/buenbocado` desde GitHub
4. Vercel detectará automáticamente que es Next.js

### 2. Configurar Base de Datos PostgreSQL

**Opción A: Vercel Postgres (Recomendado)**
1. En el proyecto de Vercel, ve a Storage → Create Database
2. Selecciona "Postgres"
3. Elige un nombre (ej: "buenbocado-db")
4. Selecciona la región (elige la más cercana a Chile)
5. Click "Create"
6. Vercel automáticamente agregará `DATABASE_URL` a tus variables de entorno

**Opción B: Supabase (Gratis)**
1. Ve a https://supabase.com
2. Crea un nuevo proyecto
3. Copia la "Connection String" (URI format)
4. En Vercel, ve a Settings → Environment Variables
5. Agrega `DATABASE_URL` con el valor de Supabase

### 3. Configurar Variables de Entorno

En Vercel → Settings → Environment Variables, agrega:

```
DATABASE_URL=<se configura automático con Vercel Postgres>
NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app
ADMIN_EMAIL=admin@buenbocado.cl
ADMIN_PASSWORD=<cambia esto por algo seguro>
EMAIL_FROM=pedidos@buenbocado.cl
```

### 4. Desplegar

1. Click en "Deploy"
2. Espera que el build termine (2-3 minutos)
3. Una vez desplegado, ve al dashboard del proyecto

### 5. Inicializar Base de Datos

Después del primer deploy, necesitas crear las tablas y poblar datos:

**Método 1: Vercel CLI (Recomendado)**
```bash
# Instala Vercel CLI
npm i -g vercel

# Login
vercel login

# Link al proyecto
vercel link

# Ejecuta prisma db push
vercel env pull .env.local
pnpm db:push

# Ejecuta el seed
pnpm db:seed
```

**Método 2: Prisma Studio**
```bash
# Con .env.local configurado
npx prisma studio
```
Luego ejecuta el seed localmente pero apuntando a la DB de producción.

**Método 3: Desde tu máquina**
```bash
# Crea .env.production con el DATABASE_URL de Vercel
DATABASE_URL="postgresql://..."

# Push schema
pnpm db:push

# Seed data
pnpm db:seed
```

### 6. Verificar

1. Abre tu sitio: `https://tu-proyecto.vercel.app`
2. Verifica que:
   - Las páginas cargan correctamente
   - Los productos se muestran en `/tienda`
   - El carrito funciona
   - El checkout funciona

### 7. Configurar Dominio Personalizado (Opcional)

1. En Vercel → Settings → Domains
2. Agrega tu dominio personalizado (ej: `buenbocado.cl`)
3. Sigue las instrucciones para configurar los DNS

## Comandos Útiles

```bash
# Deploy manual desde tu máquina
vercel --prod

# Ver logs en vivo
vercel logs --follow

# Ver variables de entorno
vercel env ls

# Pull variables de entorno localmente
vercel env pull
```

## Troubleshooting

### Error: "prisma generate failed"
Vercel ejecuta automáticamente `prisma generate` durante el build. Si falla:
1. Verifica que `@prisma/client` y `prisma` estén en `package.json`
2. Asegúrate que `DATABASE_URL` esté configurada

### Error: "Cannot connect to database"
1. Verifica que `DATABASE_URL` esté correctamente configurada
2. Verifica que la base de datos esté activa
3. Si usas Vercel Postgres, verifica que esté en la misma región

### Imágenes no cargan
Las imágenes están en `/public/assets/` y deberían funcionar automáticamente.
Si no:
1. Verifica que las imágenes estén en el repositorio
2. Verifica que no estén en `.gitignore`
3. Haz un nuevo commit y deploy

### Error 500 en páginas con datos
Significa que la base de datos no está inicializada:
1. Ejecuta `pnpm db:push` apuntando a la DB de producción
2. Ejecuta `pnpm db:seed`

## Recomendaciones

1. **Monitoreo**: Activa Vercel Analytics para ver tráfico y errores
2. **Branch Deployments**: Cada push a `main` desplegará automáticamente
3. **Preview Deployments**: Cada PR creará un preview deployment
4. **Build Cache**: Vercel cachea builds para deploys más rápidos
5. **Edge Functions**: Considera usar Edge Runtime para mejor performance

## Costos

- **Vercel Hobby**: Gratis (suficiente para empezar)
  - 100 GB bandwidth
  - Unlimited deployments
  - SSL automático

- **Vercel Postgres**: 
  - Free tier: 256 MB, 60 horas de compute
  - Hobby: $5/mes por 512 MB

- **Alternativa**: Supabase Free Tier (500 MB, ilimitado)

## Siguiente Paso

Una vez desplegado, puedes:
1. Configurar emails transaccionales (Resend, SendGrid)
2. Agregar analytics (Google Analytics, Plausible)
3. Implementar el panel de administración
4. Configurar pagos (Flow, Webpay, etc.)
