import { Bed, MapPin } from 'lucide-react'
import { Map } from './components/Map'
import { getVisitorInfoContent, VisitorInfoContent } from './content'
import { Section } from '@/components/reusable/section/Section'

export async function VisitorInfoSection() {
  const content: VisitorInfoContent = await getVisitorInfoContent()
  return (
    <div className='h-full w-full bg-realiti-blue2'>
      <Section
        id="info"
        className=" flex flex-col items-center justify-center py-16 "
      >
        <div className="max-w-7xl">
          <h2 className='text-4xl font-extrabold tracking-tight  sm:text-5xl lg:text-6xl text-realiti-gray-light mb-8'>{content.title}</h2>

          <div className="grid grid-cols-1 gap-4 p-4 text-white md:grid-cols-2 w-full max-w-7xl">
            <div className="w-full ">
              <Map />
            </div>
            <div className="w-full">
              <div className="w-full h-full flex flex-col items-center justify-center px-4">
                <div className="h-full w-full text-white mt-10 md:mt-0">
                  <div className='flex flex-row items-center justify-start gap-2'>
                    <MapPin className='-translate-y-[12.5%]' />
                    <h3 className="text-3xl">{content.howToGetThere.title}</h3>
                  </div>
                  <p className="text-lg  pt-4">{content.howToGetThere.content}</p>
                </div>
                <div className="h-full w-full hidden md:block">
                  <div className='flex flex-row items-center justify-start gap-2'>
                    <Bed className='-translate-y-[12.5%]' />
                    <h3 className="text-3xl">{content.nearbyHotels.title}</h3>
                  </div>
                  {/* <p className="font-sanchez">{content.nearbyHotels.content}</p> */}
                  <ul className=' pt-4 space-y-2 '>
                    {content.nearbyHotels.content.map((hotel) => (
                      <li key={hotel.title} className="text-lg">
                        <a href={hotel.link} target="_blank" rel="noreferrer" >
                          <span className='underline text-realiti-orange1' >{hotel.title} </span>
                        </a>

                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section >
    </div>
  )
}
