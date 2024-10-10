// We'll deep dive into:
// 1) XR Gaming and Entertainment: Shaping the Future of Interactive Experiences
// This theme block features talks from the creators of some of the most renowned VR titles in the Baltics, along with a few distinguished international guests. A panel discussion will delve into the creative and market opportunities of XR gaming in 2024.
// Key Topics:
// Case studies from leading game studios
// Immersive storytelling and user engagement
// Live demos and hands-on experiences
// 2) Enhancing Public Services with XR: Spatial Planning and Digital Twins
// Talks in this theme will explore how XR technologies are being used to create digital twins of physical spaces, and to navigate spatial designs of places yet to be built, to enhance the design and planning processes in the public and private sector. The panel discusses the best known examples of the use of digital twins and spatial planning, and potential applications in the Baltics.
// Key Topics:
// Case studies in urban development and construction
// Applications of digital twins in architecture
// Enhancing design visualization with XR
// 3) Building XR Products for the Global Market
// Hear from founders about their journeys in developing XR-enabled products for global markets across business, private, and government sectors. The products and platforms vary, but many of the challenges do not. The panel is about sharing lessons how to overcome these challenges.
// Key Topics:
// Determining if AR/VR is core to your product
// Navigating the hardware landscape
// Successful global sales strategies
// 4) Using XR for Education & Training: Transforming Learning Experiences
// Explore the application of VR, AR, and MR in educational settings, from schools to corporations. Despite being a top use case for XR, adoption in some segments of education has been slow. The panel will discuss the challenges and strategies for implementing XR training in various educational environments.
// Key Topics:
// Case studies of XR in education and training
// Pedagogical benefits and challenges of immersive learning
// Designing effective XR educational content
// The full program details will be announced soon.

import { requestPayload } from "@/lib/payloadRequest"
import { z } from "zod"

const featuresContent: FeaturesContent = {
  // title: "We'll deep dive into XR in",
  features: [
    {
      title: 'Gaming and Entertainment',
      subtitle: 'Shaping the Future of Interactive Experiences',
      description:
        'This theme block features talks from the creators of some of the most renowned VR titles in the Baltics, along with a few distinguished international guests. A panel discussion will delve into the creative and market opportunities of XR gaming in 2024.',
      keyTopics: [
        { topic: 'Case studies from leading game studios' },
        { topic: 'Immersive storytelling and user engagement' },
        { topic: 'Live demos and hands-on experiences' },
      ],
    },
    {
      title: 'Public Services',
      subtitle: 'Spatial Planning and Digital Twins',
      description:
        'Talks in this theme will explore how XR technologies are being used to create digital twins of physical spaces, and to navigate spatial designs of places yet to be built, to enhance ns in the Baltics.',
      keyTopics: [
        { topic: 'Case studies in urban development and construction' },
        { topic: 'Applications of digital twins in architecture' },
        { topic: 'Enhancing design visualization with XR' },
      ],
    },
    {
      title: 'Building products for market',
      subtitle: 'Hear from founders about their journeys',
      description:
        'Developing XR-enabled products for global markets across business, private, and government sectors. The products and platforms vary, but many of the challenges do not. The panel is about sharing lessons how to overcome these challenges.',
      keyTopics: [
        { topic: 'Determining if AR/VR is core to your product' },
        { topic: 'Navigating the hardware landscape' },
        { topic: 'Successful global sales strategies' },
      ],
    },
    {
      title: 'Education & Training',
      subtitle: 'Transforming Learning Experiences',
      description:
        'Explore the application of VR, AR, and MR in educational settings, from schools to corporations. Despite being a top use case for XR, adoption in some segments of education has been slow. The panel will discuss the challenges and strategies for implementing XR training in various educational environments.',
      keyTopics: [
        { topic: 'Case studies of XR in education and training' },
        { topic: 'Pedagogical benefits and challenges of immersive learning' },
        { topic: 'Designing effective XR educational content' },
      ],
    },
  ],
}

export type Feature = {
  title: string
  subtitle: string
  description: string
  keyTopics: { topic: string }[]
}

export type FeaturesContent = {
  features: Feature[]
}

const featureContentSchema = z.object({
  // title: z.string(),
  features: z.array(
    z.object({
      title: z.string(),
      // subtitle: z.string(),
      // description: z.string(),
      keyTopics: z.array(z.object({ topic: z.string() })),
    })
  ),
})

export async function getFeaturesContent(): Promise<FeaturesContent> {
  return await requestPayload({
    slug: 'features-section',
    schema: featureContentSchema,
    fallback: featuresContent,
  })
}
