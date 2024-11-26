import { NextApiRequest, NextApiResponse } from '../../../../node_modules/next/types';
import { HfInference } from '@huggingface/inference';
import * as dotenv from 'dotenv'

dotenv.config()

// Initialize Hugging Face API client
const hf = new HfInference(process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY);


const postGenerator = async (prompt: string) => {
    console.log("here3");
    interface HuggingFaceResponse {
        generated_text: string;
    }

    const temperature = Math.random() * 0.4 +0.6;  //Random temperature
    const response = await hf.textGeneration({
        model: "tiiuae/falcon-7b-instruct",  
        inputs: prompt,
        parameters: { temperature },
    });
    console.log("here4", response);
    const result = response as HuggingFaceResponse;
    const cleanresult = result.generated_text.slice(prompt.length).trim()
    console.log("here5", cleanresult);
    return cleanresult;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        console.log("here1");
        try {
            const { formData } = req.body;
            console.log("here2", formData);
            // Changable info based on the event
            const eventInfo = {
                "name": "Baltic Virtual Reality Event of 2025",
                "dates" : "2025-11-30",
                "hashtag" : "#estonianxr"  
            }


            // Build the prompt based on form data
            const prompt = `Generate a short social media post for the ${eventInfo["name"]}. Include the following information: 
            Talk Title: ${formData['talkTitle']}
            Event dates: ${eventInfo["dates"]}
            Event hashtag: ${eventInfo["hashtag"]}
            Speaker Info: ${formData['info']}
            Include an engaging tone for a professional audience. Write from the perspective of the speaker. 
            Include the event hashtag at the end of the post. Definitely mention the talk title. Do not use any links. 
            Include only one response and nothing else.
            `;

            // Get the response from the Hugging Face model
            const response = await postGenerator(prompt);

            // Return the model response to the frontend
            return res.status(200).json({ success: true, response });
        
        } catch (error) {
            console.error("Error generating response:", error);
            return res.status(500).json({ success: false, message: "Error generating response." });
        }
    } else {
        return res.status(405).json({ success: false, message: "Method not allowed" });
    }
}
