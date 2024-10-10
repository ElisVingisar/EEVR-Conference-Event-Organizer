import { withPayload } from '@payloadcms/next/withPayload'
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Unsplash
    
        domains: ['localhost', 'images.unsplash.com', 'realitiexpress.com', 'realiti-express.vercel.app'],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default withPayload(nextConfig);

