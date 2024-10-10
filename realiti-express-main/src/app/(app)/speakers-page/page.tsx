import { SpeakerList2 } from "@/components/modules/sections/speakers-section/components/SpeakerList2"
import { getSpeakersContent, SpeakersContent } from "@/components/modules/sections/speakers-section/content"
import { Section } from "@/components/reusable/section/Section"
import { Button } from "@/components/ui/button"
import Link from "next/link"



export default async function Page() {
    const content: SpeakersContent = await getSpeakersContent()

    return (
        <div className='w-full overflow-hidden'>
            <Section id="speakers">
                {/* <marquee> */}
                <Button
                    className='p-6 my-8 text-lg bg-realiti-blue2 hover:bg-realiti-orange2 hover:text-gray-900 '
                    asChild

                >
                    <Link href='/'>
                        Back to main page
                    </Link>
                </Button>
                <h2 className='text-4xl font-extrabold tracking-tight  sm:text-5xl lg:text-6xl text-realiti-blue2 mb-8'>
                    {content.title}
                </h2>
                {/* </marquee> */}
                <div>
                    <SpeakerList2 speakers={content.speakers} />
                </div>
                <Button
                    className='p-6 mt-8 text-lg bg-realiti-blue2 hover:bg-realiti-orange2 hover:text-gray-900 '
                    asChild

                >
                    <Link href='/'>
                        Back to main page
                    </Link>
                </Button>
            </Section>
        </div>
    )
}