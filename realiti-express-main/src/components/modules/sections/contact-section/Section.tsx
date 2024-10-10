import { ArrowLeft, ArrowRight } from 'lucide-react'
import { ContactContent, getContactContent } from './content'

import { Section } from '@/components/reusable/section/Section'
import { Button } from '@/components/ui/button'
import { Sentence } from './components/Sentence'

export async function ContactSection() {
  const content: ContactContent = await getContactContent()

  return (
    <div className='bg-realiti-orange2'>
      <Section id="contact">
        <Sentence email={content.targetMail} />
      </Section>
    </div>
  )
}
