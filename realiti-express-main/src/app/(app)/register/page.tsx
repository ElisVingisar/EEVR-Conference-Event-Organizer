// src/app/(app)/register/page.tsx
"use client"
import { Section } from '@/components/reusable/section/Section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    info: '',
    talkTitle: '',
    picture: null, // Picture file
    slides: null,  // Slides file
    arrivalDate: '',
    departureDate: '',
    flightInfo: '',
    hotelAccommodation: '',
    dietaryRestrictions: '',
    accessibilityNeeds: '',
    specialRequests: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload

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
    data.append('flightInfo', formData.flightInfo);
    data.append('hotelAccommodation', formData.hotelAccommodation);
    data.append('dietaryRestrictions', formData.dietaryRestrictions);
    data.append('accessibilityNeeds', formData.accessibilityNeeds);
    data.append('specialRequests', formData.specialRequests);

    const arrivalDateISO = new Date(formData.arrivalDate).toISOString();
    const departureDateISO = new Date(formData.departureDate).toISOString();

    const dataToSubmit = {
      ...formData,
      arrivalDate: arrivalDateISO,
      departureDate: departureDateISO,
    };


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
      <div className="relative w-full h-64">
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
        <Section id="register" className="p-8 rounded-lg shadow-lg bg-white max-w-4xl w-full mx-auto">
          <h2 className='text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-realiti-blue2 mb-8'>
            Register as a Speaker!
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-realiti-blue2 font-medium">Name:</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} // Bind to state
                onChange={handleChange} // Update state on input change
                required 
                className="w-full p-2 border border-realiti-blue2 rounded-lg" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-realiti-blue2 font-medium">Email:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} // Bind to state
                onChange={handleChange} // Update state on input change
                required 
                className="w-full p-2 border border-realiti-blue2 rounded-lg" 
              />
            </div>
            <div>
              <label htmlFor="picture" className="block text-realiti-blue2 font-medium">Picture of Yourself:</label>
              <input 
                type="file" 
                id="picture" 
                name="picture" 
                accept="image/*" 
                onChange={handleFileChange} // Handle file selection
                className="w-full p-2 border border-realiti-blue2 rounded-lg" 
              />
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
              ></textarea>
            </div>
            <div>
              <label htmlFor="talkTitle" className="block text-realiti-blue2 font-medium">Talk Title:</label>
              <input 
                type="text" 
                id="talkTitle" 
                name="talkTitle" 
                value={formData.talkTitle} // Bind to state
                onChange={handleChange} // Update state on input change
                required 
                className="w-full p-2 border border-realiti-blue2 rounded-lg" 
              />
            </div>
            <div>
              <label htmlFor="slides" className="block text-realiti-blue2 font-medium">Presentation Slides:</label>
              <input 
                type="file" 
                id="slides" 
                name="slides" 
                accept=".pdf,.ppt,.pptx" 
                onChange={handleFileChange} // Handle file selection
                className="w-full p-2 border border-realiti-blue2 rounded-lg" 
              />
            </div>

            <div>
              <label htmlFor="arrivalDate" className="block text-realiti-blue2 font-medium">Arrival Date:</label>
              <input type="datetime-local" id="arrivalDate" name="arrivalDate" className="w-full p-2 border border-realiti-blue2 rounded-lg" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="departureDate" className="block text-realiti-blue2 font-medium">Departure Date:</label>
              <input type="datetime-local" id="departureDate" name="departureDate" className="w-full p-2 border border-realiti-blue2 rounded-lg" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="flightInfo" className="block text-realiti-blue2 font-medium">Flight Information:</label>
              <input type="text" id="flightInfo" name="flightInfo" className="w-full p-2 border border-realiti-blue2 rounded-lg" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="hotelAccommodation" className="block text-realiti-blue2 font-medium">Hotel Accommodation:</label>
              <input type="text" id="hotelAccommodation" name="hotelAccommodation" className="w-full p-2 border border-realiti-blue2 rounded-lg" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="dietaryRestrictions" className="block text-realiti-blue2 font-medium">Dietary Restrictions:</label>
              <input type="text" id="dietaryRestrictions" name="dietaryRestrictions" className="w-full p-2 border border-realiti-blue2 rounded-lg" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="accessibilityNeeds" className="block text-realiti-blue2 font-medium">Accessibility Needs:</label>
              <input type="text" id="accessibilityNeeds" name="accessibilityNeeds" className="w-full p-2 border border-realiti-blue2 rounded-lg" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="specialRequests" className="block text-realiti-blue2 font-medium">Special Requests:</label>
              <textarea id="specialRequests" name="specialRequests" rows={4} className="w-full p-2 border border-realiti-blue2 rounded-lg" onChange={handleChange}></textarea>
            </div>

            <div className="flex items-center space-x-4">
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

