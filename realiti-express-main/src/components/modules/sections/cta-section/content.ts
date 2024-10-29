import { requestPayload } from '@/lib/payloadRequest';
import { z } from 'zod';

const ctaContent: CTAContent = {
    title: 'Interested?',
    description: 'Book your TICKET now for a jam-packed day of presentations, discussions and demos, followed by a day of hands-on workshops, topped off by the all-night gaming marathon, MängudeÖÖ.',
    button: 'Get Tickets'
};

export type CTAContent = {
    title: string;
    description: string;
    button: string;
}

const ctaContentSchema = z.object({
    title: z.string(),
    description: z.string(),
    button: z.string()
});

// Removing Payload from the code
export async function getCTAContent(): Promise<CTAContent> {
    return ctaContent;
    /*
    return await requestPayload<CTAContent>({
        slug: 'cta-section',
        schema: ctaContentSchema,
        fallback: ctaContent
    });
    */
}