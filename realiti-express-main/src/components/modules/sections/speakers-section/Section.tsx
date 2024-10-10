import { Section } from '@/components/reusable/section/Section'
import { getSpeakersContent, SpeakersContent } from './content'
import { SpeakerList } from './components/SpeakerList'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


export async function SpeakersSection() {
  const content: SpeakersContent = await getSpeakersContent()

  return (
    <div className='w-full overflow-hidden'>
      <Section id="speakers">
        {/* <marquee> */}
        <h2 className='text-4xl font-extrabold tracking-tight  sm:text-5xl lg:text-6xl text-realiti-blue2 mb-8'>
          {content.title}
        </h2>
        {/* </marquee> */}
        <div>
          <SpeakerList speakers={content.speakers} />
        </div>
        {content.speakers.length > 8 && (
          <div className='flex justify-end items-center '>
            <Button
              className='p-6 mt-8 text-lg bg-realiti-blue1 hover:bg-realiti-orange2 hover:text-gray-900 '
              asChild

            >
              <Link href='/speakers-page'>
                View all speakers
              </Link>
            </Button>
          </div>

        )}

      </Section>
    </div>
  )
}
