import { Section, SectionTitle } from '@/components/reusable/section/Section'
import { BuyTicketContent, getBuyTicketContent } from './content'
import { Button } from '@/components/ui/button'
import { TicketList } from './components/TicketList'

export async function BuyTicketsSection() {
  const content: BuyTicketContent = await getBuyTicketContent()

  return (
    <div className="bg-gray-100">
      <Section id="tickets">
        <SectionTitle>{content.title}</SectionTitle>
        <TicketList tickets={content} />
      </Section>
    </div>
  )
}
