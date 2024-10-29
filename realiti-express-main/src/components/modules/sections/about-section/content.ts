
// import { requestPayload } from '@/lib/payloadRequest';
import { z } from 'zod';

// realiti.express is a two-day conference that aspires to become the premier annual gathering for XR developers in the Baltic states and beyond. The inaugural event will welcome a select audience of 120 participants in a stylish venue in Tallinn Old Town, focusing on themes that Baltic XR companies are renowned for. realiti.express is organized by the Estonian VR and AR Association (EEVR), which has been serving XR companies and institutions in the region since 2014.
// Event Features
// Insightful Keynotes: Gain insights from experts on various aspects of XR technology adoption.
// Thematic Blocks: Dive into XR verticals such as digital twins, education, gaming, and more.
// Networking Opportunities: Connect with XR companies from the Baltics and Scandinavia.
// Hands-On Demos: Experience practical demonstrations of cutting-edge XR applications.
// Deep-Dive Workshops: Participate in in-depth workshops to expand your XR expertise.
// Immersive Tours: Enjoy guided tours of medieval Tallinn and explore its vibrant nightlife.


const aboutContent: AboutContent = {
    title: 'About the Event',
    description: 'realiti.express is a two-day conference that aspires to become the premier annual gathering for XR developers in the Baltic states and beyond. The inaugural event will welcome a select audience of 120 participants in a stylish venue in Tallinn Old Town, focusing on themes that Baltic XR companies are renowned for. realiti.express is organized by the Estonian VR and AR Association (EEVR), which has been serving XR companies and institutions in the region since 2014.'
};

export type AboutContent = {
    title: string;
    description: string;
}

const aboutContentSchema = z.object({
    title: z.string(),
    description: z.string()
});

// Removing Payload from the code

export async function getAboutContent(): Promise<AboutContent> {
    return aboutContent;
    /*
    return await requestPayload({
        slug: 'about-section',
        schema: aboutContentSchema,
        fallback: aboutContent
    })
    */
}