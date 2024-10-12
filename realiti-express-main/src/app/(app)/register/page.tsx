// src/app/(app)/register/page.tsx

import { Section } from '@/components/reusable/section/Section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const RegisterPage = () => {
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
              <label htmlFor="picture" className="block text-realiti-blue2 font-medium">Picture of Yourself:</label>
              <input type="file" id="picture" name="picture" accept="image/*" className="w-full p-2 border border-realiti-blue2 rounded-lg" />
            </div>
            <div>
              <label htmlFor="info" className="block text-realiti-blue2 font-medium">Short Information About Yourself:</label>
              <textarea id="info" name="info" rows={4} className="w-full p-2 border border-realiti-blue2 rounded-lg"></textarea>
            </div>
            <div>
              <label htmlFor="talkTitle" className="block text-realiti-blue2 font-medium">Talk Title:</label>
              <input type="text" id="talkTitle" name="talkTitle" required className="w-full p-2 border border-realiti-blue2 rounded-lg" />
            </div>
            <div>
              <label htmlFor="slides" className="block text-realiti-blue2 font-medium">Presentation Slides:</label>
              <input type="file" id="slides" name="slides" accept=".pdf,.ppt,.pptx" className="w-full p-2 border border-realiti-blue2 rounded-lg" />

            {/* May add travel and accommodation details here */}

            </div>
            <Button type="submit" className='p-6 mt-8 text-lg bg-realiti-blue2 hover:bg-realiti-orange2 hover:text-gray-900'>
              Register
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
    </div>
  );
};

export default RegisterPage;
