
// import { requestPayload } from "@/lib/payloadRequest";
import { z } from "zod";

export type EventTracksContent = {
    day1: EventTrack[];
    day2: EventTrack[];
}

export type EventTrack = {
    hourStart: Date;
    hourEnd: Date;
    title: string;
    location?: string;
}

const eventTracksContentSchema = z.object({
    day1: z.array(
        z.object({
            hourStart: z.coerce.date().optional().nullable(),
            hourEnd: z.coerce.date().optional().nullable(),
            title: z.string(),
            location: z.string().nullable().optional(),
        })
    ),
    day2: z.array(
        z.object({
            hourStart: z.coerce.date().optional().nullable(),
            hourEnd: z.coerce.date().optional().nullable(),
            title: z.string(),
            location: z.string().nullable().optional(),
        })
    ),
});


const eventTracksContent: EventTracksContent = {
    day1: [
        {
            hourStart: new Date("2024-07-25T06:30:00.000Z"),
            hourEnd: new Date("2024-07-25T09:00:00.000Z"),
            title: "Keyotes",
            location: "House 10"
        },
        {
            hourStart: new Date("2024-07-25T07:00:00.000Z"),
            hourEnd: new Date("2024-07-25T14:00:00.000Z"),
            title: "Demo in demo room",
            location: "Demo Area"
        },
        {
            hourStart: new Date("2024-07-25T09:00:00.000Z"),
            hourEnd: new Date("2024-07-25T10:00:00.000Z"),
            title: "Coffee, Lunch",
            location: "House 10"
        },
        {
            hourStart: new Date("2024-07-25T10:00:00.000Z"),
            hourEnd: new Date("2024-07-25T12:00:00.000Z"),
            title: "Theme Block 1: Gaming & Entertainment",
            location: "House 10"
        },
        {
            hourStart: new Date("2024-07-25T10:00:00.000Z"),
            hourEnd: new Date("2024-07-25T12:00:00.000Z"),
            title: "Theme Block 2: Improving Public Services through XR: Spatial Planning, Digital Twins",
            location: "House 10"
        },
        {
            hourStart: new Date("2024-07-25T12:00:00.000Z"),
            hourEnd: new Date("2024-07-25T13:00:00.000Z"),
            title: "Presentation and heated debate: XR and AI",
            location: "House 10"
        },
        {
            hourStart: new Date("2024-07-25T13:00:00.000Z"),
            hourEnd: new Date("2024-07-25T15:00:00.000Z"),
            title: "Theme Block 3: Building XR Products for the Global Market",
            location: "House 10"
        },
        {
            hourStart: new Date("2024-07-25T13:00:00.000Z"),
            hourEnd: new Date("2024-07-25T15:00:00.000Z"),
            title: "Theme Block 4: Using XR for Education & Training",
            location: "House 10"
        },
        {
            hourStart: new Date("2024-07-25T16:00:00.000Z"),
            hourEnd: new Date("2024-07-25T19:00:00.000Z"),
            title: "Dinner and Party After. Explore the Telliskivi Industrial Partyland",
        }
    ],
    day2: [
        {
            hourStart: new Date("2024-07-25T07:00:00.000Z"),
            hourEnd: new Date("2024-07-25T09:00:00.000Z"),
            title: "Brunch in Old Town",
            location: "TBA"
        },
        {
            hourStart: new Date("2024-07-25T09:00:00.000Z"),
            hourEnd: new Date("2024-07-25T11:00:00.000Z"),
            title: "WORKSHOP: Developing for Apple Vision Pro",
        },
        {
            hourStart: new Date("2024-07-25T09:00:00.000Z"),
            hourEnd: new Date("2024-07-25T11:00:00.000Z"),
            title: "WORKSHOP: Game Design Deep Dive",
        },
        {
            hourStart: new Date("2024-07-25T11:00:00.000Z"),
            hourEnd: new Date("2024-07-25T13:00:00.000Z"),
            title: "WORKSHOP: Virtual Worlds and Avatars",
        },
        {
            hourStart: new Date("2024-07-25T11:00:00.000Z"),
            hourEnd: new Date("2024-07-25T13:00:00.000Z"),
            title: "WORKSHOP: Selling Abroad using LinkedIn",
        },
        {
            hourStart: new Date("2024-07-25T19:00:00.000Z"),
            hourEnd: new Date("2024-07-25T01:00:00.000Z"),
            title: "MängudeÖÖ - Estonia's largest gaming festival in Apollo Cinema Ülemiste",
            location: "Apollo Cinema Ülemiste"
        }
    ]
}

// Removing Payload from the code
export async function getEventTracksContent(): Promise<EventTracksContent> {
    return eventTracksContent;
    /*
    return await requestPayload<EventTracksContent>({
        slug: 'event-tracks-section',
        schema: eventTracksContentSchema,
        fallback: eventTracksContent,
    })
    */
}