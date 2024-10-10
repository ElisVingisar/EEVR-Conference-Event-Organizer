"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

import squirrel from "./../resources/Squirrel.png";
import background from "./../resources/BG.png";
import leaves1 from "./../resources/leaves1.png";
import leaves2 from "./../resources/leaves2.png";
import shockwave from "./../resources/Wave.png";
import stars from "./../resources/stars.png";


export function ThreeDCardDemo() {
    return (
        <CardContainer className="h-screen w-screen">
            <CardBody className=" relative group/card  dark:hover:shadow-2xl  ">
                <CardItem
                    translateZ="-50"
                    className="w-full h-full  absolute inset-0"
                >
                    <Image src={background.src} alt="bg" className="w-full h-full" width={1920} height={1080} />
                </CardItem>
                <CardItem
                    translateZ="-40"
                    className="w-full h-full absolute inset-0"
                >
                    <div className="w-full h-full" style={{
                        backgroundImage: `url(${stars.src})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'repeat',
                        backgroundPosition: 'center',
                    }} />
                    {/* <Image src={stars.src} alt="stars" className="w-full h-full object-contain repeat-1" width={1920} height={1080} /> */}
                </CardItem>
                <CardItem
                    translateZ="40"
                    className="h-full absolute inset-0"
                >
                    <Image src={shockwave.src} alt="shockwave" className="h-full object-cover object-center scale-110" width={1920} height={1080} />
                </CardItem>

                <CardItem
                    translateZ="50"
                    className="w-full h-full absolute inset-0"
                >
                    <Image src={squirrel.src} alt="squirrel" className="w-full h-full object-contain object-left" width={1920} height={1080} />
                </CardItem>


                <CardItem
                    translateZ="100"
                    className="w-full h-full absolute inset-0"
                >
                    <Image src={leaves1.src} alt="leaves1" className="h-full w-full object-cover translate-x-[-5%] scale-110" width={1920} height={1080} />
                </CardItem>
                <CardItem
                    translateZ="110"
                    className="w-full h-full absolute inset-0"
                >
                    <Image src={leaves2.src} alt="leaves2" className="h-full w-full object-cover translate-x-[-5%] scale-110" width={1920} height={1080} />
                </CardItem>

            </CardBody>
        </CardContainer >
    );
}