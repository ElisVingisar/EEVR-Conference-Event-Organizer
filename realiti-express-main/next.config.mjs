// Algne 
/*
import { withPayload } from '@payloadcms/next/withPayload'
/** @type {import('next').NextConfig} */ /*
const nextConfig = {
    images: {
        // Unsplash
    
        domains: ['localhost', 'images.unsplash.com', 'realitiexpress.com', 'realiti-express.vercel.app', 'via.placeholder.com'],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default withPayload(nextConfig);*/

// Uus -------------------------------------------------------------------------

import { withPayload } from '@payloadcms/next/withPayload'
import path from 'path'
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
    images: {
      domains: ['localhost', 'images.unsplash.com', 'realitiexpress.com', 'realiti-express.vercel.app', 'via.placeholder.com'],
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    outputFileTracingExcludes: {
      '.next/server': ['./src/payload'],
    },
    webpack: (config) => {
      config.resolve.alias['@payload-config'] = path.join(__dirname, 'src/payload.config.ts');
      return config;
    },
};

export default withPayload(nextConfig);






