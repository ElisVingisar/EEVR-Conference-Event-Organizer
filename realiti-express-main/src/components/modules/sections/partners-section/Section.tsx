import { Section } from '@/components/reusable/section/Section'
import { getPartnersContent, PartnersContent } from './content'
import Image from 'next/image'
import Link from 'next/link'

export async function PartnersSection() {
  const content: PartnersContent = await getPartnersContent()

  return (
    <Section
      id="partners"
      className="min-h-96 flex flex-col items-center justify-center bg-white"
    >
      <div className="max-w-7xl w-full h-full">
        <h2 className="text-4xl font-extrabold tracking-tight  sm:text-5xl lg:text-6xl text-realiti-blue2 md:mb-8">{content.title}</h2>
        {/* <p className="text-white">Partners Section</p> */}
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-16'>
          {content.partners.map((partner, index) => {

            if (partner.image.url.startsWith('/api/media/file/')) {
              partner.image.url = partner.image.url.replace('/api/media/file/', `${process.env.NEXT_PUBLIC_SITE_URL}/api/media/file/`)
            }

            if (partner.url) {
              return (
                <Link key={partner.url} href={partner.url} className='flex items-center justify-center aspect-square w-full group' >
                  <Image width={1022} height={594} src={partner.image.url} alt={partner.name} className='w-full md:grayscale group-hover:filter-none ' />
                </Link>)
            } else {
              return (
                <div key={partner.name} className="flex items-center justify-center aspect-square w-full group">
                  <Image width={1022} height={594} src={partner.image.url} alt={partner.name} className='w-full md:grayscale group-hover:filter-none ' />
                </div>)
            }
          })}
        </div>
      </div>
    </Section>
  )
}
