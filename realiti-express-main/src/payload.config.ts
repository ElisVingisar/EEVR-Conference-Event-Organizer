import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import path from 'path';
import sharp from 'sharp';
import 'dotenv/config';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';

import { Users } from './payload/collections/Users';
import { Media } from './payload/collections/Media';
import { Feedback } from './payload/collections/Feedback';

import { Posts } from './payload/collections/Posts';
import { AboutSection } from './payload/globals/sections/AboutSection';
import { BuyTicketSection } from './payload/globals/sections/BuyTicketSection';
import { ContactSection } from './payload/globals/sections/ContactSection';
import { CTASection } from './payload/globals/sections/CtaSection';
import { EventTracksSection } from './payload/globals/sections/EventTracksSection';
import { FeaturesSection } from './payload/globals/sections/FeaturesSection';
import { HeroSection } from './payload/globals/sections/HeroSection';
import { PartnersSection } from './payload/globals/sections/PartnersSection';
import { SpeakersSection } from './payload/globals/sections/SpeakersSection';
import { VisitorInfoSection } from './payload/globals/sections/VisitorsInfoSection';
import { WhyTallinnSection } from './payload/globals/sections/WhyTallinnSection';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const testUserEmail = process.env.TEST_EMAIL || '';
const testUserPassword = process.env.TEST_PASSWORD || '';


export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
    autoLogin: process.env.NEXT_PUBLIC_ENABLE_AUTOLOGIN === 'true'
      ? {
          email: 'test@example.com',
          password: 'test',
          prefillOnly: true,
        }
      : false,
  },
  collections: [Users, Media, Feedback],
  globals: [
    AboutSection,
    BuyTicketSection,
    ContactSection,
    CTASection,
    EventTracksSection,
    FeaturesSection,
    // HeroSection,
    PartnersSection,
    SpeakersSection,
    VisitorInfoSection,
    WhyTallinnSection,
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'fallback-secret',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.VERCEL_POSTGRES_URL || process.env.POSTGRES_URL,
    },
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      access: 'public',
      enabled: true,
      collections: {
        [Media.slug]: true,
      },
      token:
        process.env.VERCEL_BLOB_READ_WRITE_TOKEN ||
        process.env.BLOB_READ_WRITE_TOKEN ||
        (() => {
          throw new Error('Missing Vercel Blob Read/Write Token');
        })(),
    }),
  ],
});
