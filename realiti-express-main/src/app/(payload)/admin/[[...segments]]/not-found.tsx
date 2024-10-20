/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import type { Metadata } from 'next'

import config from '@payload-config'
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
// import { NotFoundPage, generatePageMetadata } from '@payloadcms/next/views'

type Args = {
  params: {
    segments: string[]
  }
  searchParams: {
    [key: string]: string | string[]
  }
}
/*
export const generateMetadata = ({ params, searchParams }: Args): Promise<Metadata> =>
  generatePageMetadata({ config, params, searchParams })

const NotFound = ({ params, searchParams }: Args) => NotFoundPage({ config, params, searchParams })

export default NotFound */

export const generateMetadata = async ({ params, searchParams }: Args) => {
  return {
    title: 'Admin - Not Found',
    description: 'This page is currently not available.',
  };
};

// Define a simple NotFound component as a placeholder
const NotFound = ({ params, searchParams }: Args) => {
  return (
    <div>
      <h1>Admin Page Not Available</h1>
      <p>This page is temporarily disabled.</p>
    </div>
  );
};

export default NotFound;
