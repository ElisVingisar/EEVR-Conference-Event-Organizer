// src\app\(payload)\admin\[[...segments]]\page.tsx

/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import type { Metadata } from 'next'

import config from '@payload-config';
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import { RootPage, generatePageMetadata } from '@payloadcms/next/views';
type Args = {
  params: {
    segments: string[]
  }
  searchParams: {
    [key: string]: string | string[]
  }
}


<<<<<<< HEAD
const Page = ({ params, searchParams }: Args) => views.RootPage({ config, params, searchParams })

export default Page
 */
// Page.tsx

import React from 'react';
import type { Metadata } from 'next';

type Args = {
  params: { segments?: string[] }; // Keep params synchronous and structured as required
  searchParams: Promise<{ [key: string]: string | string[] }>; // Adjust searchParams to be a Promise
=======
export const generateMetadata = async ({ params, searchParams }: Args): Promise<Metadata> => {
  const resolvedParams = await params; // Ensure params are awaited
  return generatePageMetadata({
    config,
    params: resolvedParams,
    searchParams,
  });
>>>>>>> 0c547e35d56af0216de849534c91645fcdebbda5
};

const Page = async ({ params, searchParams }: Args) => {
  const resolvedParams = await params; // Same for the main page logic
  return RootPage({
    config,
    params: resolvedParams,
    searchParams,
  });
};

export default Page;