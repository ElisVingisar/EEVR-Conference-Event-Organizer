// Contact
// Organizer contacts
// Social media

// import { requestPayload } from "@/lib/payloadRequest";
import { z } from "zod";

const contactContent: ContactContent = {
    title: 'Contact Us',
    targetMail: 'eva@eevr.com',
};

export type ContactContent = {
    title: string;
    targetMail: string;
}

const contactContentSchema = z.object({
    title: z.string(),
    targetMail: z.string(),
});

// Removing Payload from the code
export async function getContactContent(): Promise<ContactContent> {
    return contactContent;
    /*
    return await requestPayload({
        slug: 'contact-section',
        schema: contactContentSchema,
        fallback: contactContent
    });
    */
}