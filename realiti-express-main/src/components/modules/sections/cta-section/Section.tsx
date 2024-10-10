import { Section } from "@/components/reusable/section/Section"
import { getCTAContent } from "./content"
import { CTAContent } from "./content"
import { CtaBlock } from "./components/CtaBlock"

export async function CTASection() {
  const content: CTAContent = await getCTAContent()

  return (
    <div className="relative">
      <div style={{ backgroundImage: "url('/ctabg2.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: 'fixed' }} className="h-full blur-xxs w-full absolute z-10"></div>
      <Section
        id="cta"
        className="relative z-20"
      >
        <CtaBlock title={content.title} description={content.description} buttonText={content.button} />
      </Section>
    </div >
  )
}
