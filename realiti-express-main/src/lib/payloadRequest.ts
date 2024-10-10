import { create } from "domain";
import { z } from "zod";

export async function requestPayload<T>({
    slug,
    schema,
    fallback
}: {
    slug: string;
    // zod schema
    schema: z.ZodObject<any, any, any>;
    fallback: T;
}): Promise<T> {

    const url = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_VERCEL_URL

    try {

        const response = await fetch(`${url}/api/globals/${slug}`, {
            // TODO: rework to revalidation
            next: {
                tags: ['api', `payload-${slug}`]
            }
        })

        console.log(`Tag: [payload-${slug}]`)

        if (!response.ok) {
            console.error(`Failed to fetch payload for ${slug}`, response);
            return fallback;

        }

        const payload = await response.json();

        const validatedPayload = schema.parse(payload);

        return validatedPayload as T;
    } catch (error) {
        console.error(JSON.stringify(error, null, 2));
        return fallback;
    }
}