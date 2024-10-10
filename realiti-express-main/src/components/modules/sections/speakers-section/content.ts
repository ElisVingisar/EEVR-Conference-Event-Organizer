// Speakers (5-10)
// Petri Rajahalme * Founding Partner, FOV Ventures * X, LinkedIn 
// Rein Zobel * Creative Director, Maru VR *  LinkedIn

import { requestPayload } from "@/lib/payloadRequest";
import { bigint, z } from "zod";

// Jeremy Dalton, Head of Immsersive, PWC
// Andres Maremäe, 
// Ana Ribeiro, 
// Vlad Rannik

const speakersContent: SpeakersContent = {
    title: 'Our Speakers',
    speakers: [
        {
            name: 'Petri Rajahalme',
            position: 'Founding Partner, FOV Ventures',
            xUrl: 'https://x.com/prajahalme',
            linkedinUrl: 'https://www.linkedin.com/in/petrirajahalme/',
            image: {
                url: '/assets/people/petri_rajahalme.jpg',
                alt: 'Petri Rajahalme'
            },
        },
        {
            name: 'Rein Zobel',
            position: 'Creative Director, Maru VR',
            linkedinUrl: 'https://www.linkedin.com/in/rein-zobel-71669170/',
            image: {
                url: '/assets/people/rein_zobel.jpg',
                alt: 'Rein Zobel'
            },
        },
        {
            name: 'TBA',

            // name: 'Jeremy Dalton',
            // position: 'Head of Immersive, PWC',
            // linkedInUrl: 'https://www.linkedin.com',
            // photo: '/assets/speakers/jeremy-dalton.jpg'
        },
        {
            name: 'TBA',
            // name: 'Andres Maremäe',
            // photo: '/assets/speakers/andres-maremäe.jpg'
        },
        {
            name: 'TBA',
            // name: 'Ana Ribeiro',
            // photo: '/assets/speakers/ana-ribeiro.jpg'
        },
        {
            name: 'TBA',
            // name: 'Vlad Rannik',
            // photo: '/assets/speakers/vlad-rannik.jpg'
        }
    ]
};

export type SpeakersContent = {
    title: string;
    speakers: Speaker[];
}

export type Speaker = {
    name: string;
    position?: string;
    xUrl?: string;
    linkedinUrl?: string
    image?: {
        url: string;
        alt: string;
    };
    isDisclosed?: boolean;
    bio?: string;
    talkTitle?: string;
}

const speakersContentSchema = z.object({
    title: z.string(),
    speakers: z.array(
        z.object({
            name: z.string().nullable().optional(),
            position: z.string().nullable().optional(),
            xUrl: z.string().nullable().optional(),
            linkedinUrl: z.string().nullable().optional(),
            image: z.object({
                url: z.string(),
                alt: z.string(),
            }).nullable().optional(),
            isDisclosed: z.boolean().nullable().optional(),
            bio: z.string().nullable().optional(),
            talkTitle: z.string().nullable().optional(),
        })
    )

})


export async function getSpeakersContent(): Promise<SpeakersContent> {
    return await requestPayload<SpeakersContent>({
        slug: 'speakers-section',
        schema: speakersContentSchema,
        fallback: speakersContent
    });
}