/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */

// import config from '@payload-config'
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
// import views from "@payloadcms/next/views"
/* 
type Args = {
  params: {
    segments: string[]
  }
  searchParams: {
    [key: string]: string | string[]
  }
}

export const generateMetadata = ({ params, searchParams }: Args): Promise<Metadata> =>
  views.generatePageMetadata({ config, params, searchParams })

const Page = ({ params, searchParams }: Args) => views.RootPage({ config, params, searchParams })

export default Page
 */
// Page.tsx

import React from 'react';
import type { Metadata } from 'next';

type Args = {
  params: {
    segments: string[];
  };
  searchParams: {
    [key: string]: string | string[];
  };
};

export const generateMetadata = ({ params, searchParams }: Args): Metadata => {
  return {
    title: 'Custom Page Title', // Replace with logic if you want dynamic titles based on `params` or `searchParams`
    description: 'Description for the page', // Replace with dynamic logic if needed
  };
};

const Page = ({ params, searchParams }: Args) => {
  return (
    <main>
      <h1>Welcome to the Custom Page</h1>
      <p>This page was built without Payload CMS.</p>

      {/* Use `params` and `searchParams` if needed */}
      <div>
        <h2>Segments:</h2>
        <ul>
          {params.segments.map((segment, index) => (
            <li key={index}>{segment}</li>
          ))}
        </ul>

        <h2>Search Parameters:</h2>
        <pre>{JSON.stringify(searchParams, null, 2)}</pre>
      </div>
    </main>
  );
};

export default Page;
