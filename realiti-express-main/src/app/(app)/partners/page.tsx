"use client";

import { Section } from '@/components/reusable/section/Section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import {useState} from "react";

{/*const PartnersPage = () => {
  return (
    <div className="w-full">
      // Top Image with Info
      <div className="relative w-full h-64">
        <Image
          src="/ctabg2.jpg"
          alt="Partners Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-6xl lg:text-9xl drop-shadow-xl">Partner with Us</h1>
          <p className="text-lg md:text-xl lg:text-2xl drop-shadow-xl mt-4">Explore collaboration opportunities</p>
        </div>
      </div>*/}

      {/*<Section id="collaboration-options" className="p-8 rounded-lg shadow-lg bg-white max-w-4xl w-full mx-auto mt-8">
        <h2 className='text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-realiti-blue2 mb-8'>
          Collaboration Options
        </h2>
        <div className="space-y-4">
          <p className="text-lg text-realiti-blue2">We offer various collaboration opportunities for our partners. Whether you are looking to sponsor an event, host a workshop, or collaborate on a project, we have options for you.</p>
          <ul className="list-disc list-inside text-realiti-blue2">
            <li>Sponsorship Opportunities</li>
            <li>Workshop Hosting</li>
            <li>Project Collaboration</li>
            <li>Networking Events</li>
          </ul>
        </div>
      </Section>

      <Section id="contact-admin" className="p-8 rounded-lg shadow-lg bg-white max-w-4xl w-full mx-auto mt-8">
        <h2 className='text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-realiti-blue2 mb-8'>
          Contact Us
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-realiti-blue2 font-medium">Name:</label>
            <input type="text" id="name" name="name" required className="w-full p-2 border border-realiti-blue2 rounded-lg" />
          </div>
          <div>
            <label htmlFor="email" className="block text-realiti-blue2 font-medium">Email:</label>
            <input type="email" id="email" name="email" required className="w-full p-2 border border-realiti-blue2 rounded-lg" />
          </div>
          <div>
            <label htmlFor="message" className="block text-realiti-blue2 font-medium">Message:</label>
            <textarea id="message" name="message" rows={4} className="w-full p-2 border border-realiti-blue2 rounded-lg"></textarea>
          </div>
          <Button type="submit" className='p-6 mt-8 text-lg bg-realiti-blue2 hover:bg-realiti-orange2 hover:text-gray-900'>
            Send Message
          </Button>
        </form>
        <Button
          className='p-6 mt-8 text-lg bg-realiti-blue2 hover:bg-realiti-orange2 hover:text-gray-900'
          asChild
        >
          <Link href='/'>
            Back to main page
          </Link>
        </Button>
      </Section>
    </div>
  );
};*/}

// Defining the type for packageId and for the openPackages state
type PackageId = "main" | "theme" | "custom";
type OpenPackagesState = {
  main: boolean;
  theme: boolean;
  custom: boolean;
};

const PartnersPage = () => {
  const [openPackages, setOpenPackages] = useState<OpenPackagesState>({ main: false, theme: false, custom: false });
  const [selectedSponsorship, setSelectedSponsorship] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const togglePackage = (packageId: PackageId) => {
    setOpenPackages((prev) => ({
      ...prev,
      [packageId]: !prev[packageId],
    }));
  };

  const handleSelectOption = (option: string) => {
    setSelectedSponsorship((prev) => (prev === option ? null : option));
  };

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setSelectedFile(file); // Store file if it’s of the correct type
    } else {
      alert("Please select a .jpg or .png file");
    }
  };

  return (
    <div>
      {/* Top Image with Info */}
      <div className="relative w-full h-64">
        <Image
          src="/ctabg2.jpg"
          alt="Partners Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-6xl lg:text-9xl drop-shadow-xl">Partner with Us</h1>
          <p className="text-lg md:text-xl lg:text-2xl drop-shadow-xl mt-4">Explore collaboration opportunities</p>
        </div>
      </div>

      {/* Sponsorship Packages Section */}
      <Section id="sponsorship-packages" className="flex flex-col bg-white relative">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-realiti-blue2 mb-8">
          Sponsorship Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Sponsorship */}
          <div className="border border-yellow-500 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 self-start min-h-[100px]">
            <div onClick={() => togglePackage('main')} className="cursor-pointer">
              <h3 className="text-2xl font-bold text-yellow-100">
                Main Sponsorship - €5000 (+VAT)
              </h3>
            </div>
            {openPackages.main && (
              <>
              <ul className="list-disc list-inside mt-4 text-yellow-100 space-y-2">
                <li>Logo in the most prominent position on all event materials</li>
                <li>Brand featured visually and verbally at the beginning and end of keynotes and main stage presentations</li>
                <li>Exclusive branding at the event venue, including the main stage</li>
                <li>Opportunity to present your company with a main stage talk</li>
                <li>4 VIP tickets for all events, including speaker dinners</li>
              </ul>
                <Button
                className={`mt-4 ${selectedSponsorship === "Main Sponsorship" ? "bg-yellow-700 text-white" : "bg-yellow-500 text-yellow-100"} hover:bg-yellow-600`}
                onClick={() => handleSelectOption("Main Sponsorship")}
              >
                {selectedSponsorship === "Main Sponsorship" ? "Unselect" : "Choose this option"}
              </Button>
            </>
            )}
          </div>

          {/* Theme Block Sponsorship */}
          <div className="border border-gray-400 bg-gradient-to-r from-gray-500 to-gray-400 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 self-start min-h-[100px]">
            <div onClick={() => togglePackage('theme')} className="cursor-pointer">
              <h3 className="text-2xl font-bold text-gray-100">
                Theme Block Sponsorship - €1000 (+VAT)
              </h3>
            </div>
            {openPackages.theme && (
              <>
              <ul className="list-disc list-inside mt-4 text-gray-100 space-y-2">
                <li>Logo on all digital marketing materials</li>
                <li>Brand featured at the beginning and end of the sponsored theme block</li>
                <li>Opportunity to display your marketing materials (roll-ups, posters, etc.)</li>
                <li>Option to moderate a panel discussion within the supported block</li>
                <li>2 VIP tickets for all events, including speaker dinners</li>
              </ul>
              <Button
                  className={`mt-4 ${selectedSponsorship === "Theme Block Sponsorship" ? "bg-gray-700 text-white" : "bg-gray-500 text-gray-100"} hover:bg-gray-600`}
                  onClick={() => handleSelectOption("Theme Block Sponsorship")}
                >
                  {selectedSponsorship === "Theme Block Sponsorship" ? "Unselect" : "Choose this option"}
                </Button>
              </>
            )}
          </div>

          {/* Custom Sponsorship */}
          <div className="md:col-span-2 border border-blue-400 bg-gradient-to-r from-blue-400 to-blue-300 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 self-start">
            <div onClick={() => togglePackage('custom')} className="cursor-pointer">
              <h3 className="text-2xl font-bold text-blue-50">Custom Sponsorship</h3>
            </div>
            {openPackages.custom && (
              <>
              <p className="mt-4 text-blue-50">
                We are open to discussing tailored sponsorship conditions to fit your specific needs. Contact us to arrange a custom agreement.
              </p>
              <Button
                  className={`mt-4 ${selectedSponsorship === "Custom Sponsorship" ? "bg-blue-700 text-white" : "bg-blue-500 text-blue-100"} hover:bg-blue-600`}
                  onClick={() => handleSelectOption("Custom Sponsorship")}
                >
                  {selectedSponsorship === "Custom Sponsorship" ? "Unselect" : "Choose this option"}
                </Button>
              </>
            )}
          </div>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section id="contact-admin" className="mt-0">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-realiti-blue2 mb-8">
          Contact Us
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-realiti-blue2 font-medium">Name:<span className="text-red-700 font-bold">*</span></label>
            <input type="text" id="name" name="name" required className="w-full p-2 border border-realiti-blue2 rounded-lg" />
          </div>
          <div>
            <label htmlFor="email" className="block text-realiti-blue2 font-medium">Email:<span className="text-red-700 font-bold">*</span></label>
            <input type="email" id="email" name="email" required className="w-full p-2 border border-realiti-blue2 rounded-lg" />
          </div>

          {/* Conditionally Render Chosen Sponsorship Option */}
          {selectedSponsorship ? (
            <div>
              <label className="block text-realiti-blue2 font-medium">Chosen Sponsorship Option:</label>
              <input
                type="text"
                name="chosenSponsorshipOption"
                className="w-full p-2 border border-realiti-blue2 rounded-lg"
                value={selectedSponsorship}
                readOnly
              />
            </div>
          ) : (
            <p className="text-red-500">Please select a sponsorship option before submitting.</p>
          )}

          {/* File Upload Section */}
          <div>
            <label htmlFor="picture" className="block text-realiti-blue2 font-medium">
              Upload Your Logo (.jpg or .png)
            </label>
            <input
              type="file"
              id="picture"
              name="picture"
              accept=".jpg,.jpeg,.png"
              onChange={handleFileChange}
              className="hidden" // Hide the default file input
            />
            <div className="flex items-center gap-2 mt-2">
              <Button asChild className="p-6 text-lg bg-realiti-blue2 hover:bg-realiti-orange2 text-white hover:text-realiti-blue2 rounded-lg cursor-pointer">
                <label htmlFor="picture" className="cursor-pointer">Choose Picture</label>
              </Button>
              <span className="text-sm text-gray-600">
                {selectedFile ? selectedFile.name : 'No file chosen'}
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-realiti-blue2 font-medium">Message:</label>
            <textarea id="message" name="message" rows={4} className="w-full p-2 border border-realiti-blue2 rounded-lg"></textarea>
          </div>
          <Button type="submit" className="p-6 mt-8 text-lg bg-realiti-blue2 hover:bg-realiti-orange2 hover:text-gray-900"
            disabled={!selectedSponsorship}
          >
            Send Message
          </Button>
        </form>
        <Button
          className="p-6 mt-8 text-lg bg-realiti-blue2 hover:bg-realiti-orange2 hover:text-gray-900" asChild>
          <Link href="/">
            Back to main page
          </Link>
        </Button>
      </Section>
    </div>
  );
};


export default PartnersPage;
