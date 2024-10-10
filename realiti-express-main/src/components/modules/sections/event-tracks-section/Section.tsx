import { Section, SectionTitle } from '@/components/reusable/section/Section'
import { EventTracksContent, getEventTracksContent } from './content'
import { TracksTable } from './components/TracksTable'

export async function EventTracksSection() {
  const content: EventTracksContent = await getEventTracksContent()

  return (
    <Section id="tracks" className=''>
      {/* <TrackCalendar track={content.track} /> */}
      <TracksTable content={content} />
    </Section>
  )
}
