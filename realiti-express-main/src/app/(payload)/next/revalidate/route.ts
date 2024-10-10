import { revalidateTag } from 'next/cache'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function GET(request: NextRequest): Promise<Response> {
    const tag = request.nextUrl.searchParams.get('tag')
    const secret = request.nextUrl.searchParams.get('secret')

    console.log('Revalidating (from next): ', tag)

    // const revalidationKey = process.env.NEXT_PRIVATE_REVALIDATION_KEY
    const revalidationKey = 'A'

    if (
        !secret ||
        secret !== revalidationKey ||
        typeof tag !== 'string'
    ) {
        // Do not indicate that the revalidation key is incorrect in the response
        // This will protect this API route from being exploited
        return new Response('Invalid request', { status: 400 })
    }

    if (typeof tag === 'string') {
        revalidateTag(`${tag}`)
        console.log(`Revalidated tag: [${tag}]`)
        return NextResponse.json({ revalidated: true, now: Date.now() })
    }

    return NextResponse.json({ revalidated: false, now: Date.now() })
}