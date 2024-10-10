import { Section, SectionTitle } from "@/components/reusable/section/Section"
import { getTallinnContent } from "./content"
import { TallinnContent } from "./content"

import tallinnImage from './tallinn.jpg'

import Image from 'next/image'

export async function TallinnSection() {
  const content: TallinnContent = await getTallinnContent()

  return (
    <div className="relative bg-realiti-gray-light " style={{ backgroundImage: `url(${tallinnImage.src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: 'fixed' }}>
      {/* <div style={{ backgroundImage: "url('/ctabg2.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: 'fixed' }} className="h-full blur-xxs w-full absolute z-10"></div> */}
      <div className="max-w-7xl w-full mx-auto  px-4  sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-bl-lg rounded-br-lg">

          <h2 className=" text-4xl lg:text-6xl  font-sanchez font-bold text-left">{content.title}</h2>
        </div>
        <div className="h-[50vh]"></div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {content.reasons.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 bg-white p-8 rounded-lg md:rounded-br-none md:rounded-bl-none">
              <h3 className="text-2xl lg:text-4xl  font-sanchez font-bold">{item.title}</h3>
              <p className=" font-sans font-medium">{item.text}</p>
            </div>
          ))}
        </div>


      </div>
    </div >
  )
}
