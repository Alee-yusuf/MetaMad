/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true, // Disable Image Optimization
    },
};

export default nextConfig;
