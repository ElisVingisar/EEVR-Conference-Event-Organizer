// Visitor Info
// Map
// Hotel information
// Why Tallinn?
// How to get there?

// import { requestPayload } from "@/lib/payloadRequest";
import { z } from "zod";


//hotels:

// Hotel Telegraaf - A luxury hotel located about 0.3 km from the venue, offering elegant rooms and high-end amenities.  // https://www.telegraafhotel.com/?gad_source=1&gclid=Cj0KCQjw-uK0BhC0ARIsANQtgGO-pPIfniMDAfq92IeAnlRBg5Y-s60_DXPtafftthuj6ACffoF6ERcaAoxSEALw_wcB
// Savoy Boutique Hotel - A stylish hotel located approximately 0.2 km away, known for its Art Deco design and modern comforts.  // https://www.rixwell.com/en/hotels/savoy-boutique-hotel-tallinn
// Meriton Old Town Garden Hotel - A cozy hotel situated around 0.2 km from the venue, featuring a charming garden and comfortable rooms. // https://www.meritonhotels.com/
// Hotel Palace - Positioned about 0.5 km away, this hotel provides modern amenities and is known for its excellent service and comfort. // https://www.radissonhotels.com/en-us/hotels/radisson-individuals-palace-tallinn
// Hestia Hotel Barons - Approximately 0.2 km from the venue, this hotel offers a classic style and convenient location in the Old Town. // https://www.hestiahotels.com/barons/en/



const visitorInfoContent: VisitorInfoContent = {
    title: 'Visitor Info',
    howToGetThere: {
        title: 'How to get there?',
        content: 'Tallinn is well-connected to major European cities, making it easily accessible for international attendees. The city`s efficient public transport system and compact size ensure convenient travel and accommodation options. Tallinn Airport, located just a short drive from the city center, offers direct flights to numerous destinations.'
    },
    nearbyHotels: {
        title: 'Nearby Hotels to stay in Tallinn',
        content: [
            {
                title: 'Hotel Telegraaf ',
                description: '- A luxury hotel located about 0.3 km from the venue',
                link: 'https://www.telegraafhotel.com/?gad_source=1&gclid=Cj0KCQjw-uK0BhC0ARIsANQtgGO-pPIfniMDAfq92IeAnlRBg5Y-s60_DXPtafftthuj6ACffoF6ERcaAoxSEALw_wcB'
            },
            {
                title: 'Savoy Boutique Hotel',
                description: ' - A stylish hotel located approximately 0.2 km away',
                link: 'https://www.rixwell.com/en/hotels'
            },
            {
                title: 'Meriton Old Town Garden Hotel',
                description: ' - A cozy hotel situated around 0.2 km from the venue',
                link: 'https://www.meritonhotels.com/'
            },
            {
                title: 'Hotel Palace',
                description: ' - located about 0.5 km away',
                link: 'https://www.radissonhotels.com/en-us/hotels/radisson-individuals-palace-tallinn'
            },
            {
                title: 'Hestia Hotel Barons',
                description: ' - Approximately 0.2 km from the venue',
                link: 'https://www.hestiahotels.com/barons/en/'
            }

        ]
    }
};

export type VisitorInfoContent = {
    title: string;
    howToGetThere: {
        title: string;
        content: string;
    };
    nearbyHotels: {
        title: string;
        content: {
            title: string;
            description: string;
            link: string;
        }[];
    }
};

const visitorInfoContentSchema = z.object({
    title: z.string(),
    howToGetThere: z.object({
        title: z.string(),
        content: z.string(),
    }),
    nearbyHotels: z.object({
        title: z.string(),
        content: z.array(
            z.object({
                title: z.string(),
                description: z.string(),
                link: z.string(),
            })
        )
    })
});

// Removing Payload from the code
export async function getVisitorInfoContent(): Promise<VisitorInfoContent> {
    return visitorInfoContent;
    /*
    return await requestPayload({
        slug: 'visitors-info-section',
        schema: visitorInfoContentSchema,
        fallback: visitorInfoContent,
    })
    */
}