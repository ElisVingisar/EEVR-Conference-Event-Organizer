import { Section, SectionTitle } from '@/components/reusable/section/Section'
import { FeaturesContent, getFeaturesContent } from './content'
import { FeatureScrollable } from './components/FeatureScrollable'

export async function FeaturesSection() {
  const content: FeaturesContent = await getFeaturesContent()

  return (
    <div className="bg-realiti-orange2" style={{
      backgroundImage: `url(/rough.png)`,
      backgroundBlendMode: 'soft-light'

    }}>
      <Section id="features" className=' w-full'>
        <FeatureScrollable features={content.features} />
      </Section>
    </div >
  )
}
