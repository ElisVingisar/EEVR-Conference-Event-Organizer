import { AboutSection } from '@/components/modules/sections/about-section/Section'
import { EventTracksSection } from '@/components/modules/sections/event-tracks-section/Section'
import { HeroSection } from '@/components/modules/sections/hero-section/Section'
import { PartnersSection } from '@/components/modules/sections/partners-section/Section'
import { SpeakersSection } from '@/components/modules/sections/speakers-section/Section'
import { VisitorInfoSection } from '@/components/modules/sections/visitor-info-section/Section'
import { ContactSection } from '@/components/modules/sections/contact-section/Section'
import { BuyTicketsSection } from '@/components/modules/sections/buy-ticket-section/Section'
import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import { FeaturesSection } from '@/components/modules/sections/fearures-section/Section'
import { Section } from '@/components/reusable/section/Section'
import { CTASection } from '@/components/modules/sections/cta-section/Section'
import { TallinnSection } from '@/components/modules/sections/why-tallinn-section/Section'



export default function Home() {


  return (
    <main className="flex flex-col bg-white relative">
      <HeroSection />
      <Navbar />
      <AboutSection />
      <FeaturesSection />
      <CTASection />
      <SpeakersSection />
      <EventTracksSection />
      <PartnersSection />
      <VisitorInfoSection />
      <TallinnSection />
      <ContactSection />
      <BuyTicketsSection />
      <Footer />
    </main>

  )

}
