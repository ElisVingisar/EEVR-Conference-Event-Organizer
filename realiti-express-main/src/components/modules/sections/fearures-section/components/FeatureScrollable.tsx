
'use client';


import { createRef, useRef } from 'react';
import { Feature } from '../content'

import * as Tabs from '@radix-ui/react-tabs'
import { useInView, motion } from 'framer-motion';
import { GamepadIcon } from 'lucide-react';



export function FeatureScrollable({ features }: { features: Feature[] }) {
    return (
        <div className="w-full">
            <div className="hidden md:flex">
                <FeatureScrollableDesktop features={features} />
            </div>
            <div className="md:hidden">
                <FeatureScrollableMobile features={features} />
            </div>
        </div>
    )
}

export function FeatureScrollableDesktop({ features }: { features: Feature[] }) {
    const backgrounds = [
        'bg-realiti-sand',
        'bg-realiti-orange',
        'bg-realiti-blue',
        'bg-realiti-sencha',
    ]

    return (
        <>
            <div className="w-full flex flex-col relative">

                <div className="grid grid-cols-3 ">
                    <div className='col-start-2 col-end-4 relative'>
                        <div className='absolute top-0 bottom-0 -left-96 w-96 lg:w-96 h-full  z-0'>
                            <p className='h-12 text-right font-sanchez text-2xl pr-4  lg:pr-8'>We will dive into</p>
                            <h2 className="text-6xl  lg:text-8xl xl:text-8xl text-reliti-dark-blue text-right sticky top-32 font-semibold">XR in&nbsp;</h2>

                        </div>
                        {features.map((feature, index) => (
                            <FeatureCardDesktop key={index} feature={feature} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

function FeatureCardDesktop({ feature, index }: { feature: Feature; index: number }) {

    const blockRef = createRef<HTMLDivElement>()
    const isInView = useInView(blockRef)

    return (
        <div className=" grid-cols-1 relative grid" ref={blockRef}>
            <div className="absolute top-0 bottom-0 -left-4 w-16 border-l-8 border-b-8  border-dashed border-white z-10"></div>
            {/* <div className="absolute w-8 h-8 rounded-full bottom-16 -left-1 bg-white z-10"></div> */}

            <motion.div className='min-h-24 py-2' transition={{ duration: 0.2 }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} style={{ transformOrigin: 'left' }}>
                <div className={` realtive z-20 block sticky top-32`}>

                    <h2 className={`text-white  text-4xl  md:text-6xl  text-left  transition-all overflow-hidden `}>{feature.title}</h2>
                    {/* <div className="flex h-32 items-center justify-center w-full my-4 md:my-16">{feature.icon}</div> */}

                </div>
            </motion.div>

            <motion.div className=" min-h-40 pl-8 flex flex-col items-center justify-start mb-4 w-full max-w-lg " style={{
                transformOrigin: 'left',
            }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.2 }} >
                {/* <p className="text-2xl text-    reliti-dark-blue text-left font-sanchez">{feature.description}</p> */}
                {/* map .keyTopics as bulletpoints*/}
                <ul className="list-disc pl-4">
                    {feature.keyTopics.map((topic, index) => (
                        <li key={index} className="text-reliti-dark-blue font-sanchez text-2xl">{topic.topic}</li>
                    ))}
                </ul>
            </motion.div>

        </div >
    )
}



export function FeatureScrollableMobile({ features }: { features: Feature[] }) {
    const backgrounds = [
        'bg-realiti-sand',
        'bg-realiti-orange',
        'bg-realiti-blue',
        'bg-realiti-sencha',
    ]

    return (
        <>
            <div className="w-full flex flex-col relative">
                <p className='text-white text-xl mb-8'>In Reality Express we will talk about</p>
                <div className='col-start-1 flex  flex-col items-center sticky top-32'>
                    <h2 className='text-8xl font-semibold  text-black font-sans  text-left text-nowrap'
                        style={{
                            writingMode: 'vertical-rl',
                            // transform: 'rotate(90deg)',

                        }}
                    >XR in</h2>
                </div>
                <div className='col-start-2 col-end-4 flex flex-col justify-evenly'>

                    {/* <div className='border-8 border-white rounded-xl w-full p-4 bg-white'>
                        <p className="text-md sm:text-lg text-reliti-dark-blue text-left font-sanchez ">{feature.description}</p>
                    </div> */}





                </div >


                {features.map((feature, index) => (
                    <FeatureCardMobile key={index} feature={feature} index={index} />
                ))}

            </div>
        </>
    )
}

function FeatureCardMobile({ feature, index }: { feature: Feature; index: number }) {

    const blockRef = createRef<HTMLDivElement>()
    const isInView = useInView(blockRef)

    return (
        <div className=" grid-cols-3 relative grid border-b-8 border-white border-dashed py-16" ref={blockRef}>

            <div className='col-start-1 flex  flex-col items-center'>
                <h2 className='text-8xl font-semibold  text-white font-sans  text-left text-nowrap'
                    style={{
                        writingMode: 'vertical-rl',
                        // transform: 'rotate(90deg)',

                    }}
                >{feature.title}</h2>
            </div>
            <div className='col-start-2 col-end-4 flex flex-col justify-evenly'>

                <div className='sticky top-1/2 border-8 border-white rounded-xl w-full p-4 bg-white shadow-xl'>
                    {/* <p className="text-md sm:text-lg text-reliti-dark-blue text-left font-sanchez ">{feature.description}</p> */}
                    {/* map .keyTopics as bulletpoints*/}
                    <ul className="list-disc pl-4">
                        {feature.keyTopics.map((topic, index) => (
                            <li key={index} className="text-reliti-dark-blue font-sanchez text-lg">{topic.topic}</li>
                        ))}
                    </ul>
                </div>
            </div >
        </div>
    )
}

