import { Section } from '@/components/reusable/section/Section'
import { getHeroContent, HeroContent } from './content'
import Image from 'next/image'
import { ZustandApp } from './components/ZustandScene'
import MobileScene from './components/MobileScene'

import Scene from './components-gen2/Scene'
import AddCalendarButton from '@/components/reusable/add-to-calendar-button/addCalendarButton'
import AddCalendarButtonMoblie from '@/components/reusable/add-to-calendar-button/addCalendarButtonMobile'


export async function HeroSection() {
  const content: HeroContent = await getHeroContent()
  return (
    <header className="overflow-hidden flex flex-col items-center justify-center h-screen relative">
      <div className="absolute inset-0 z-20 pointer-events-none">
        <Section className="w-full h-full">


          <div className="w-full h-full flex flex-col items-stretch justify-between md:justify-end">
            <div className=''>
              <h1 className="text-6xl lg:text-9xl text-white pointer-events drop-shadow-xl">realiti.express</h1>
              <div className="shrink flex flex-row items-center justify-start w-full h-full gap-8">
                <p className="text-white font-sanchez lg:min-w-44 drop-shadow-xl">oct 18 - oct 19, 2024</p>
                <p className="text-white font-sanchez lg:min-w-44 drop-shadow-xl">Baltic XR Conference</p>
                <p className="text-white font-sanchez lg:min-w-44 drop-shadow-xl">Tallinn, Estonia</p>


                {/* Desktop Buttons */}
                <div className="md:flex flex-row justify-end gap-4 w-full pointer-events-auto hidden">
                  {/* <a href='#about' className="flex items-center justify-center w-48 h-12  rounded-full border-2 hover:bg-realiti-gray-light text-realiti-gray-light font-medium hover:text-realiti-blue2">
                    <span>Learn More</span>
                  </a> */}
                  <AddCalendarButton />
                  <a href='#tickets' className="flex items-center justify-center w-48 h-12 bg-realiti-gray-light hover:bg-realiti-orange2 hover:border-realiti-orange2 border-2 rounded-full">
                    <span className='text-realiti-blue2 font-medium'>
                      Get Tickets!</span>
                  </a>
                </div>



              </div>

            </div>

            <div className=" flex flex-row items-center justify-center gap-5 w-full md:hidden pointer-events-auto z-50">
              <a href='#tickets' className="flex items-center justify-center w-80 h-12 bg-realiti-gray-light  border-2 rounded-full drop-shadow-xl">
                <span className='text-realiti-blue2 font-medium'>
                  Get Tickets!</span>
              </a>
              <AddCalendarButtonMoblie />
            </div>
          </div>

        </Section>
      </div>
      {/* 
      <div className="absolute inset-0 z-10">
        <Scene />
      </div> */}

      <div className="absolute inset-0 z-10">
        <Scene />
      </div>

    </header>
  )
}
