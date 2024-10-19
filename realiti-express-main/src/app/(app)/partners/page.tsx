import { Section } from '@/components/reusable/section/Section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const PartnersPage = () => {
  return (
    <div className="w-full">
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

      <Section id="collaboration-options" className="p-8 rounded-lg shadow-lg bg-white max-w-4xl w-full mx-auto mt-8">
        <h2 className='text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-realiti-blue2 mb-8'>
          Collaboration Options
        </h2>
        <div className="space-y-4">
          <p className="text-lg text-realiti-blue2">We offer various collaboration opportunities for our partners. Whether you're looking to sponsor an event, host a workshop, or collaborate on a project, we have options for you.</p>
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
};

export default PartnersPage;
