import { Section, SectionTitle } from '@/components/reusable/section/Section'
import { AboutContent, getAboutContent } from './content'
import { ArrowRight } from 'lucide-react'

export async function AboutSection() {
  const content: AboutContent = await getAboutContent()

  return (
    <Section id="about">

      <div className='w-full flex flex-row justify-start items-center'>
        {/* <ArrowRight
          className="mx-2 h-14 w-14 md:h-14 md:w-14 lg:w-28 lg:h-28 stroke-[0.28rem] text-realiti-gray"
          style={{
            strokeLinecap: 'butt',
          }}
        /> */}
        <SectionTitle className=''>{content.title}</SectionTitle>
      </div>
      <div className="w-full flex flex-col justify-start items-end">
        <p className="text-reliti-dark-blue font-sanchez mt-8 text-lg w-3/4">
          {content.description}
        </p>
      </div>
    </Section>
  )
}
