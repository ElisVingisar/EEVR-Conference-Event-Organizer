// src/app/(app)/register/page.tsx
"use client"
import { Section } from '@/components/reusable/section/Section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { NextApiRequest, NextApiResponse } from 'next';
import { HfInference } from '@huggingface/inference';
import * as dotenv from 'dotenv';
import { ClipLoader } from "react-spinners";

dotenv.config()

const deadline = new Date('2024-10-30');

const RegisterPage = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    info: string;
    talkTitle: string;
    picture: File | null;
    slides: File | null;
    arrivalDate: string;
    departureDate: string;
    hotelAccommodation: string;
    dietaryRestrictions: string;
    specialRequests: string;
  }>({
    name: '',
    email: '',
    info: '',
    talkTitle: '',
    picture: null,
    slides: null,
    arrivalDate: '',
    departureDate: '',
    hotelAccommodation: '', // Initial state
    dietaryRestrictions: '',
    specialRequests: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
  const [slidesWarning, setSlidesWarning] = useState<string | null>(null);
  const [generatedPost, setGeneratedPost] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [generatedImageURL, setGeneratedImageURL] = useState<string | null>(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0], // Save the first selected file
      }));
    }
  };

  const postGenerator = async (prompt: string) => {
    const hf = new HfInference(process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY);   
    interface HuggingFaceResponse {
        generated_text: string;
    }

    const temperature = Math.random() * 0.4 +0.6;  //Random temperature
    const response = await hf.textGeneration({
        model: "tiiuae/falcon-7b-instruct",  
        inputs: prompt,
        parameters: { temperature },
    });
    const result = response as HuggingFaceResponse;
    const cleanresult = result.generated_text.slice(prompt.length).trim()
    setLoading(false);
    setGeneratedPost(cleanresult);
    return cleanresult;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Post copied to clipboard!');
    });
  };

  const handleGeneratePost = async() => {
    setLoading(true);
    const eventInfo = {
      "name": "Baltic Virtual Reality Event of 2025",
      "dates" : "2025-11-30",
      "hashtag" : "#estonianxr"  
    }


      // Build the prompt based on form data
    const prompt = `Act as a social media post generator. Generate a concise, engaging social media post about the ${eventInfo["name"]}. Include: 
    Talk Title: ${formData['talkTitle']}
    Event dates: ${eventInfo["dates"]}
    Event hashtag: ${eventInfo["hashtag"]}
    Speaker Info: ${formData['info']}
    Use an engaging tone for a professional audience, written from the perspective of the speaker. 
    Ensure the event hashtag is included at the end, do not use any other hashtags. Mention the talk title clearly.
    Avoid links, names of people, quotation marks, or any formatting.
    Respond only with the generated post text, and nothing else. Do not make incomplete sentences.
    `;

    
    const postContent = await postGenerator(prompt);
    console.log("Generated post content: ", postContent);
    

    // Generate Promotional Photo
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) {
      console.error("Failed to get canvas context");
      setLoading(false);
      return;
    }

    const uploadedImage = formData.picture? URL.createObjectURL(formData.picture): null;

    const eventBackground = "/ctabg.jpg"; // Background for the frame/label

    const img1 = document.createElement("img") as HTMLImageElement;
    const img2 = document.createElement("img") as HTMLImageElement;

    img1.src = uploadedImage!;
    img2.src = eventBackground;

    // Wait for both images to load
    img1.onload = () => {
      img2.onload = () => {
        // Set canvas dimensions to match the uploaded image
        canvas.width = img1.width;
        canvas.height = img1.height;

        // Draw the uploaded image
        context.drawImage(img1, 0, 0, canvas.width, canvas.height);

        // Draw the event frame or label at the bottom
        const frameHeight = canvas.height * 0.1; // 20% of the image height
        context.drawImage(img2, 0, canvas.height - frameHeight, canvas.width, frameHeight);

        const textYPosition = canvas.height - frameHeight / 4;
        // Add the event name text
        context.font = "bold 15px Arial";
        context.fillStyle = "white";
        context.textAlign = "center";
        context.fillText(
          "realiti.express",
          canvas.width / 2,
          textYPosition
        );

        // Provide a download link for the generated image
        const generatedImage = canvas.toDataURL("image/png");
        setGeneratedImageURL(generatedImage);
        
        //const downloadLink = document.createElement("a");
        //downloadLink.href = generatedImage;
        //downloadLink.download = "promotional_photo.png";
        document.createElement("a").click();

        setLoading(false);
      };
    };
    



  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload

    console.log('Form Data before submission:', formData);
    setSubmissionStatus(null);

    // Prepare form data for submission
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('info', formData.info);
    data.append('talkTitle', formData.talkTitle);
    if (formData.picture) {
      data.append('picture', formData.picture);
    }
    if (formData.slides) {
      data.append('slides', formData.slides);
    }
    data.append('arrivalDate', formData.arrivalDate);
    data.append('departureDate', formData.departureDate);
    data.append('hotelAccommodation', formData.hotelAccommodation);
    data.append('dietaryRestrictions', formData.dietaryRestrictions);
    data.append('specialRequests', formData.specialRequests);

    const arrivalDateISO = new Date(formData.arrivalDate).toISOString();
    const departureDateISO = new Date(formData.departureDate).toISOString();

    const dataToSubmit = {
      ...formData,
      arrivalDate: arrivalDateISO,
      departureDate: departureDateISO,
    };

    if (!formData.slides) {
      const currentDate = new Date();
      if (currentDate < deadline) {
        setSlidesWarning(`Please upload your slides before the deadline of ${deadline.toDateString()}.`);
      } else {
        setSlidesWarning(null); // Clear any existing warning
      }
    } else {
      setSlidesWarning(null); // Clear the warning if slides are present
    }

    /* ----------to generate ai post through api--------------
      const modelResponse = await fetch('/api/aimodel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData )

      })

      const modelText = await modelResponse.json();
      if (modelText.success){
        console.log('Model response: ', modelText.response)
      }else{
        console.log('Model fail :(')
      }
    } */
    

    try {

      const response = await fetch('/api/register', {
        method: 'POST',
        body: data, // Send form data
      });


      if (response.ok) {
        const responseData = await response.json();  // Now we read the response body
        if (responseData.success) {
          setSubmissionStatus('success');
          console.log('Form submission successful!');


        } else {
          setSubmissionStatus('error');
          console.error('Form submission failed.');
        }
      } else {
        setSubmissionStatus('error');
        console.error('Failed to submit the form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }  finally {
      console.log(`Setting submission status: ${submissionStatus}`);
    }
  };

  useEffect(() => {
    if (submissionStatus) {
      console.log(`Submission status updated: ${submissionStatus}`);
    }
  }, [submissionStatus]);



  return (
    <div className="w-full">
      {/* Top Image with Info */}
      <div className="relative w-full h-64 mb-8">
        <Image
          src="/ctabg.jpg"
          alt="Top Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-6xl lg:text-9xl drop-shadow-xl">realiti.express</h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
            <p className="text-lg md:text-xl lg:text-2xl drop-shadow-xl">Oct 18 - Oct 19, 2024</p>
            <p className="text-lg md:text-xl lg:text-2xl drop-shadow-xl">Baltic XR Conference</p>
            <p className="text-lg md:text-xl lg:text-2xl drop-shadow-xl">Tallinn, Estonia</p>
          </div>
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center">
        <Section id="register" className="p-8 rounded-lg shadow-lg  max-w-4xl w-full mx-auto" style={{ paddingTop: '60px', paddingBottom: '60px', backgroundColor: '#DBA643'}}>
          <h2 className='text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-realiti-blue2 mb-8'>
            Register as a Speaker!
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-realiti-blue2 font-medium">Name: <span className="text-red-700 font-bold">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name} // Bind to state
                onChange={handleChange} // Update state on input change
                required
                className="w-full p-2 border border-realiti-blue2 rounded-lg"
                style={{borderColor: '#ECC47A', borderWidth: '3px'}}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-realiti-blue2 font-medium">Email: <span className="text-red-700 font-bold">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email} // Bind to state
                onChange={handleChange} // Update state on input change
                required
                className="w-full p-2 border border-realiti-blue2 rounded-lg"
                style={{borderColor: '#ECC47A', borderWidth: '3px'}}
              />
            </div>

            {/*<div>
              <label htmlFor="picture" className="block text-realiti-blue2 font-medium">Picture of Yourself:</label>
              <input
                type="file"
                id="picture"
                name="picture"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden" // Hide the default file input
              />
              <Button asChild className="p-6 mt-2 text-lg bg-realiti-blue2 hover:bg-[#ECC47A] text-white hover:text-realiti-blue2 rounded-lg cursor-pointer">
                <label htmlFor="picture" className="cursor-pointer">Choose Picture</label>
              </Button>
            </div>*/}
            {/*  Modified  version of the "Picture of Yourself" with an information indicator
            (left the previous one as a comment just in case) */}
            <div>
              <div className="flex items-center gap-2">
                <label htmlFor="picture" className="block text-realiti-blue2 font-medium">
                  Picture of Yourself
                </label>

                {/* Info Button with Tooltip */}
                <div className="relative group">
                  <button
                    type="button"
                    className="bg-realiti-blue2 text-white rounded-full pt-1 pb-1 px-3 hover:bg-realiti-orange2"
                    aria-label="Information about picture upload"
                  >
                    i
                  </button>

                  {/* Tooltip */}
                  <div className="absolute left-full ml-2 w-48 p-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    The photo will be uploaded to the main page to represent you as a speaker. Make sure it is with good quality and with a neutral background.
                  </div>
                </div>
              </div>

              <input
                type="file"
                id="picture"
                name="picture"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden" // Hide the default file input
              />
              <div className="flex items-center gap-2 mt-2">
                <Button asChild className="p-6 text-lg bg-realiti-blue2 hover:bg-[#ECC47A] text-white hover:text-realiti-blue2 rounded-lg cursor-pointer">
                  <label htmlFor="picture" className="cursor-pointer">Choose a Photo</label>
                </Button>
                  <span className="text-sm text-gray-600">
                      {formData.picture ? formData.picture.name : 'No file chosen'}
                  </span>
              </div>
            </div>

            <div>
              <label htmlFor="info" className="block text-realiti-blue2 font-medium">Short Information About Yourself:</label>
              <textarea
                id="info"
                name="info"
                rows={4}
                value={formData.info} // Bind to state
                onChange={handleChange} // Update state on input change
                className="w-full p-2 border border-realiti-blue2 rounded-lg"
                style={{borderColor: '#ECC47A', borderWidth: '3px'}}
              ></textarea>
            </div>
            <div>
              <label htmlFor="talkTitle" className="block text-realiti-blue2 font-medium">Talk Title: <span className="text-red-700 font-bold">*</span></label>
              <input
                type="text"
                id="talkTitle"
                name="talkTitle"
                value={formData.talkTitle} // Bind to state
                onChange={handleChange} // Update state on input change
                required
                className="w-full p-2 border border-realiti-blue2 rounded-lg"
                style={{borderColor: '#ECC47A', borderWidth: '3px'}}
              />
            </div>
            <div>
              <label htmlFor="slides" className="block text-realiti-blue2 font-medium">Presentation Slides:</label>
              <input
                type="file"
                id="slides"
                name="slides"
                accept=".pdf,.ppt,.pptx"
                onChange={handleFileChange}
                className="hidden" // Hide the default file input
              />
              <div className="flex items-center gap-2 mt-2">
                <Button asChild className="p-6 text-lg bg-realiti-blue2 hover:bg-[#ECC47A] text-white hover:text-realiti-blue2 rounded-lg cursor-pointer">
                  <label htmlFor="slides">Upload Slides</label>
                </Button>
                <span className="text-sm text-gray-600">
                    {formData.slides ? formData.slides.name : 'No file chosen'}
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="arrivalDate" className="block text-realiti-blue2 font-medium">Arrival Date:</label>
              <input type="datetime-local"
                     id="arrivalDate"
                     name="arrivalDate"
                     className="w-full p-2 border border-realiti-blue2 rounded-lg"
                     onChange={handleChange}
                     style={{borderColor: '#ECC47A', borderWidth: '3px'}}/>

            </div>
            <div>
              <label htmlFor="departureDate" className="block text-realiti-blue2 font-medium">Departure Date:</label>
              <input type="datetime-local"
                     id="departureDate"
                     name="departureDate"
                     className="w-full p-2 border border-realiti-blue2 rounded-lg"
                     onChange={handleChange}
                     style={{borderColor: '#ECC47A', borderWidth: '3px'}}/>
            </div>

            {/* Left out those fields but left them as comments just in case*/}

            {/*<div>
              <label htmlFor="flightInfo" className="block text-realiti-blue2 font-medium">Flight Information:</label>
              <input type="text"
                     id="flightInfo"
                     name="flightInfo"
                     className="w-full p-2 border border-realiti-blue2 rounded-lg"
                     onChange={handleChange}
                     style={{borderColor: '#ECC47A', borderWidth: '3px'}}/>
            </div>*/}
            {/*<div>
              <label htmlFor="hotelAccommodation" className="block text-realiti-blue2 font-medium">Hotel Accommodation:</label>
              <input type="text"
                     id="hotelAccommodation"
                     name="hotelAccommodation"
                     className="w-full p-2 border border-realiti-blue2 rounded-lg"
                     onChange={handleChange}
                     style={{borderColor: '#ECC47A', borderWidth: '3px'}}/>
            </div>*/}

            <div>
              <label htmlFor="hotelAccommodation" className="block text-realiti-blue2 font-medium">
                Hotel Accommodation:
              </label>

              <div className="mt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="hotelAccommodation"
                    value="ownAccommodation"
                    onChange={handleChange}
                    className="border-realiti-blue2 text-realiti-blue2 focus:ring-realiti-blue2"
                  />
                  <span>I have made or will make my own accommodation arrangements</span>
                </label>

                <label className="flex items-center gap-2 mt-2">
                  <input
                    type="radio"
                    name="hotelAccommodation"
                    value="needAccommodation"
                    onChange={handleChange}
                    className="border-realiti-blue2 text-realiti-blue2 focus:ring-realiti-blue2"
                  />
                  <span>I require accommodation assistance</span>
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="dietaryRestrictions" className="block text-realiti-blue2 font-medium">Dietary Restrictions:</label>
              <input type="text"
                     id="dietaryRestrictions"
                     name="dietaryRestrictions"
                     className="w-full p-2 border border-realiti-blue2 rounded-lg"
                     onChange={handleChange}
                     style={{borderColor: '#ECC47A', borderWidth: '3px'}}/>
            </div>
            <div>
              <label htmlFor="specialRequests" className="block text-realiti-blue2 font-medium">Special Needs:</label>
              <input type="text"
                     id="specialRequests"
                     name="specialRequests"
                     className="w-full p-2 border border-realiti-blue2 rounded-lg"
                     onChange={handleChange}
                     style={{borderColor: '#ECC47A', borderWidth: '3px'}}/>
            </div>

            {/* Left out this field but left it as a comment just in case*/}

            {/*<div>
              <label htmlFor="specialRequests" className="block text-realiti-blue2 font-medium">Special Requests:</label>
              <textarea id="specialRequests"
                        name="specialRequests"
                        rows={4}
                        className="w-full p-2 border border-realiti-blue2 rounded-lg"
                        onChange={handleChange}
                        style={{borderColor: '#ECC47A', borderWidth: '3px'}}></textarea>
            </div>*/}
            <div className="flex flex-col space-y-0">
            <div className="flex items-center space-x-4 ">
              <Button type="submit" className="p-6 mt-8 text-lg bg-realiti-blue2 hover:bg-realiti-orange2 hover:text-gray-900">
                Register
              </Button>

              {/* Conditionally Render the Success/Error Message */}
              {submissionStatus === 'success' && (
                <p className="text-green-600 mt-8">Form submission successful!</p>
              )}
              {submissionStatus === 'error' && (
                <p className="text-red-600 mt-8">Form submission failed. Please try again.</p>
              )}
            </div>
            {slidesWarning && <p className="text-yellow-500 mt-4">{slidesWarning}</p>}
            
            <div className="flex items-center space-x-4">
              <Button onClick={handleGeneratePost} className="p-6 mt-8 text-lg bg-gray-500 hover:bg-realiti-orange2 hover:text-gray-900">
                Generate with AI ! 
              </Button>
              {/*<p className="mt-8">Clicking on this button will generate a social media post for you to share on your accounts!</p>*/}
              {/* Conditionally Render the Success/Error Message */}
              
              {/* Info Button with Tooltip */}
              <div className="relative group mt-8">
                <button
                  type="button"
                  className="bg-realiti-blue2 text-white rounded-full pt-1 pb-1 px-3 hover:bg-realiti-orange2"
                  aria-label="Information about AI post generation"
                >
                  i
                </button>

                {/* Tooltip */}
                <div className="absolute left-full ml-2 w-48 p-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Clicking this button will generate a caption and photo with our event name for you to share on your accounts!
                </div>
              </div>

            </div>

            </div>
            {loading && (
            <div className="mt-4 text-center">
              <ClipLoader color="#123456" loading={loading} size={50} />
            </div>
            )}
            {generatedPost && (
                <div className="bg-gray-100 rounded-md p-4 shadow-lg">
                <div className="max-w-3xl mx-auto">
                  <textarea
                    value={generatedPost}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded-md mt-4 mb-4 resize-none"
                    rows={6}
                  />
                  <div className="flex justify-between">
                    <button
                      onClick={() => copyToClipboard(generatedPost)}
                      className="bg-realiti-blue1 text-white px-4 py-2 rounded-md hover:bg-realiti-orange2"
                    >
                      Copy to Clipboard
                    </button>
                  </div>
                </div>
              </div>
              )}
          
          {generatedImageURL && (
          <div className="mt-4 text-center">
            <p className="mb-2 text-lg font-medium">Your Promotional Image:</p>
            <img
              src={generatedImageURL}
              alt="Generated Promotional"
              className="mx-auto border border-gray-300 rounded-md shadow-lg"
            />
            <a
              href={generatedImageURL}
              download="promotional_photo.png"
              className="mt-2 inline-block px-4 py-2 bg-realiti-blue2 text-white rounded-md hover:bg-realiti-orange2"
            >
              Download Image
            </a>
          </div>
        )}
            
          </form>
          <Button className='p-6 mt-8 text-lg bg-realiti-blue2 hover:bg-realiti-orange2 hover:text-gray-900' asChild>
            <Link href='/'>
              Back to main page
            </Link>
          </Button>
        </Section>
      </div>
    </div>
  );
};

export default RegisterPage;

