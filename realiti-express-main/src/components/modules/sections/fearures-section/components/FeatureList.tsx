import { Feature } from '../content'

import * as Tabs from '@radix-ui/react-tabs'

export function FeatureList({ features }: { features: Feature[] }) {
  const backgrounds = [
    'bg-realiti-sand',
    'bg-realiti-orange',
    'bg-realiti-blue',
    'bg-realiti-sencha',
  ]

  return (
    <>
      <div className="flex flex-col">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </>
  )
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const backgrounds = [
    'bg-realiti-sand',
    'bg-realiti-orange',
    'bg-realiti-blue',
    'bg-realiti-sencha',
  ]
  return (
    <>
      <div className="flex flex-col items-stretch justify-start w-full">
        <h2 className="text-3xl text-reliti-dark-blue">{feature.title}</h2>
        <p className="text-reliti-dark-blue font-sanchez">{feature.description}</p>
        {feature.keyTopics.map((topic, j) => (
          <p key={j} className="text-reliti-dark-blue font-sanchez">
            <span className={`h-4 w-4 inline-block rounded-md ${backgrounds[index]}`} /> {topic.topic}
          </p>
        ))}
      </div>
    </>
  )
}
