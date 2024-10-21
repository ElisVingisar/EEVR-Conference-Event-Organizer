// src/app/(app)/register/page.tsx
"use client"
import { Section } from '@/components/reusable/section/Section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    info: '',
    talkTitle: '',
    picture: null, // Picture file
    slides: null,  // Slides file
  });

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

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: data, // Send form data
      });
      
      const responseText = await response.text();
      console.log('Raw response:', responseText);

      if (response.ok) {
        const responseData = await response.json();
        console.log('Speaker registered:', responseData);
      } else {
        console.error('Failed to register speaker');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

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

            <Button type="submit" className='p-6 mt-8 text-lg bg-realiti-blue2 hover:bg-realiti-orange2 hover:text-gray-900'>
              Register
            </Button>
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

