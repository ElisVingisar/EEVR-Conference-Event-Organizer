// Partners/sponsors
// Logos 
// “Become a partner/sponsor” button (?)

// import { requestPayload } from "@/lib/payloadRequest";
import { z } from "zod";


const partnersContent: PartnersContent = {
    title: 'Our Partners',
    partners: [
        {
            name: 'Partner 1',
            url: 'https://europa.eu/',
            image: {
                url: 'https://via.placeholder.com/150',
                alt: 'EU',
            },
        },
        // {
        //     name: 'Partner 2',
        //     logo: 'https://via.placeholder.com/150',
        // },
        // {
        //     name: 'Partner 3',
        //     logo: 'https://via.placeholder.com/150',
        // },
        // {
        //     name: 'Partner 3',
        //     logo: 'https://via.placeholder.com/150',
        // },
    ]

};

export type PartnersContent = {
    title: string;
    partners: {
        name: string;
        image: {
            url: string;
            alt: string;
        };
        url?: string;
    }[];
}

// Sample
/*
{
"id": 2,
"title": "Partners",

"partners": [

{
"id": "66a2300ff664c7e7e04b13d8",
"name": "EU",

"image": {
"id": 6,
"alt": "EU",
"updatedAt": "2024-07-25T10:57:03.028Z",
"createdAt": "2024-07-25T10:57:03.028Z",
"url": "/api/media/file/eu.jpeg",
"thumbnailURL": null,
"filename": "eu.jpeg",
"mimeType": "image/jpeg",
"filesize": 96000,
"width": 1022,
"height": 594,
"focalX": 50,
"focalY": 50
},
"url": "https://europe.eu"
}
],
"updatedAt": null,
"createdAt": null,
"globalType": "partners-section"
}
*/

const partnersContentSchema = z.object({
    title: z.string(),
    partners: z.array(
        z.object({
            name: z.string(),
            image: z.object({
                url: z.string(),
                alt: z.string(),
            }),
            url: z.string().nullable().optional(),
        })
    ),
});

// Removing Payload from the code
export async function getPartnersContent(): Promise<PartnersContent> {
    return partnersContent;
    /*
    return await requestPayload({
        slug: 'partners-section',
        schema: partnersContentSchema,
        fallback: partnersContent,
    })
    */
}