import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  // Extract the cookie value safely
  const locale = request.cookies.get('payload-lng')?.value || 'en';
  const language = await request.headers.get('Accept-Language') || 'en';

  // Set these values as query parameters if needed
  request.nextUrl.searchParams.set('locale', locale);
  request.nextUrl.searchParams.set('lang', language);

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/:path*'], // Adjust paths as needed
};
