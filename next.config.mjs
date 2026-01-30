/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.dicebear.com',
                pathname: '/**',
            },
        ],
        formats: ['image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    },
    experimental: {
        optimizePackageImports: ['lucide-react'],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
