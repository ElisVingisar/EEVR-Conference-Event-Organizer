/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY it because it could be re-written at any time. */
/* import config from '@payload-config'
import { GRAPHQL_PLAYGROUND_GET } from '@payloadcms/next/routes'

export const GET = GRAPHQL_PLAYGROUND_GET(config)
 */

import { NextRequest, NextResponse } from 'next/server';

export const GET = (req: NextRequest) => {
  return NextResponse.json({
    message: 'GraphQL Playground is currently unavailable.',
  });
};