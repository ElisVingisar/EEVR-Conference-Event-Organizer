// Why Tallinn, Estonia?
// 1. Tech-Savvy Culture
// Estonia is a global leader in digital innovation, often referred to as the "Silicon Valley of Europe." 
// 2. Vibrant Startup Scene
// Estonia is home to several unicorns, including Skype and TransferWise, which highlight its capacity for nurturing successful tech ventures. 
// 3. Historical and Modern Fusion
// Tallinn's picturesque Old Town is a UNESCO World Heritage site and seamlessly merges historical architecture with modern facilities.

import { requestPayload } from "@/lib/payloadRequest";
import { z } from "zod";

const tallinnContent: TallinnContent = {
    title: 'Why Tallinn, Estonia?',
    reasons: [
        {
            title: 'Tech-Savvy Culture',
            text: `Estonia is a global leader in digital innovation, often referred to as the "Silicon Valley of Europe.`
        },
        {
            title: 'Vibrant Startup Scene',
            text: `Estonia is home to several unicorns, including Skype and TransferWise, which highlight its capacity for nurturing successful tech ventures.`
        },
        {
            title: 'Historical and Modern Fusion',
            text: `Tallinn's picturesque Old Town is a UNESCO World Heritage site and seamlessly merges historical architecture with modern facilities.`
        }
    ]
};

export type TallinnContent = {
    title: string;
    reasons: {
        title: string;
        text: string;
    }[];
}

const tallinnContentSchema = z.object({
    title: z.string(),
    reasons: z.array(
        z.object({
            title: z.string(),
            text: z.string(),
        })
    ),
});

export async function getTallinnContent(): Promise<TallinnContent> {
    return await requestPayload<TallinnContent>({
        slug: 'why-tallinn-section',
        schema: tallinnContentSchema,
        fallback: tallinnContent,
    })
}