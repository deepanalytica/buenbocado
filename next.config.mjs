/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    },
    experimental: {
        optimizePackageImports: ['lucide-react'],
    },
};

export default nextConfig;
