"use client"
import { motion } from "framer-motion";

import squirrelUrl from '../resources/Squirt-le.png'
import waveUrl from '../resources/Wave.png'
import bgUrl from '../resources/BG.png'
import leaves from '../resources/leaves1.png'

import Image from 'next/image'


export default function MobileScene() {
    return (
        <div className="relative w-full h-full">
            <Image
                className="absolute h-full w-full top-0 left-0 right-0 bottom-0 object-cover"
                src="/ctabg.jpg"
                alt="header"
                width={1920}
                height={1080}
            />

            <motion.div
                animate={{
                    translateX: [0, 10 / 3, 10 / 3, 10 / 3, 0],
                    translateY: [10 / 3, 0, -20 / 3, 10 / 3, 10 / 3],
                    rotate: [0, 0.2 / 3, 0, -0.2 / 3, 0],
                }}
                transition={{
                    duration: 3,
                    ease: 'linear',
                    repeat: Infinity,
                }}
                className="relative h-full w-full"
            >
                <Image
                    className="absolute left-20 lg:left-0 lg:bottom-0 bottom-56 scale-150 lg:scale-100 md:object-cover"
                    src={squirrelUrl.src}
                    alt="header"
                    width={1920}
                    height={1080}
                // width={1179}
                // height={905}
                />
            </motion.div>
            <Image
                // className="absolute h-full w-full top-0 bottom-0 object-cover"
                className="absolute bottom-0  h-full w-full object-cover"

                src={waveUrl.src}
                alt="header"
                width={1920}
                height={1080}
            />
            <Image
                className="absolute bottom-0 left-0 h-full w-full object-cover blur-xs"
                src={leaves.src}
                alt="header"
                width={1920}
                height={1080}
            />
            <div
            // animate={{
            //     translateX: [0, 10, 10, 10, 0],
            //     translateY: [10, 0, -20, 10, 10],
            //     rotate: [0, 0.2, 0, -0.2, 0],
            // }}
            // transition={{
            //     duration: 3,
            //     ease: 'linear',
            //     repeat: Infinity,
            // }}
            >



            </div>

        </div>
    )
}   