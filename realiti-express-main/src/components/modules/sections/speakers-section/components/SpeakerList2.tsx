'use client'

import { motion } from 'framer-motion'

import Image from 'next/image'
import { Speaker } from '../content'
import { User, XIcon } from 'lucide-react'

const people = [
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
]

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const fallbackAscii = []
export function SpeakerList2({ speakers }: { speakers: Speaker[] }) {
  return (
    <div className='p-16'>
      <div className="relative -rotate-1 md:-rotate-3">
        <div className="my-12 ">
          <div className="absolute -inset-12 rounded-bl-2xl flex border-dashed items-center border-b-8 border-l-8" aria-hidden="true">
          </div>

          <div className="space-y-12">
            <ul
              role="list"
              className="space-y-12 grid grid-cols-2 gap-x-16 md:gap-y-18 sm:space-y-0 lg:grid-cols-4 lg:gap-x-24 gap-y-10"
            >
              {speakers.map((person, index) => {

                // if (!person.name || !person.isDisclosed) {
                //   return (
                <motion.li
                  key={`${person.name}-${index}`}
                  initial={{ scale: 0.9 }}
                  whileInView={{
                    scale: 1.0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1,
                    },
                  }}
                >
                  <div className="space-y-4 rotate-3 relative">
                    <div className='-z-10 absolute -top-4  -left-4 -right-4 -bottom-4'>
                      <div className='aspect-square bg-realiti-orange2 w-full rounded-tl-full  shadow-xl rounded-tr-full rounded-bl-full rotate-45'></div>
                    </div>
                    <div className="aspect-square">

                      <div
                        className="aspect-square flex items-center justify-center bg-realiti-orange1 shadow-lg rounded-full"
                      >

                        <p className="text-6xl text-white" style={{
                          transform: `rotate(` + (Math.random() * 360 - 180) + `deg)`,
                        }}>
                          ?
                        </p>


                      </div>

                    </div>


                    <div className="space-y-2">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3 className="text-realiti-blue">TBA</h3>
                      </div>

                    </div>
                  </div>
                </motion.li>
                //   )
                // }

                if (person.image?.url.startsWith('/api/media/file/')) {
                  person.image.url = person.image.url.replace('/api/media/file/', `${process.env.NEXT_PUBLIC_SITE_URL}/api/media/file/`)
                }



                return (
                  <motion.li
                    key={`${person.name}-${index}`}
                    initial={{ scale: 0.9 }}
                    whileInView={{
                      scale: 1.0,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.1,
                      },
                    }}
                  >
                    <div className="space-y-4 rotate-3 relative">
                      <div className='-z-10 absolute -top-4  -left-4 -right-4 -bottom-4'>
                        <div className='aspect-square bg-realiti-orange2 w-full rounded-tl-full  shadow-xl rounded-tr-full rounded-bl-full rotate-45'></div>
                      </div>
                      <div className="aspect-square">
                        {person.image ? (
                          <Image
                            className="object-cover w-full aspect-square shadow-lg rounded-full"
                            src={person.image?.url}
                            alt={person.name}
                            width={500}
                            height={500}
                            layout="contain"
                          />) : (
                          <div
                            className="aspect-square flex items-center justify-center bg-realiti-orange1 shadow-lg rounded-full"
                          >

                            <p className="text-6xl text-white" style={{
                              transform: `rotate(` + (Math.random() * 360 - 180) + `deg)`,
                            }}>
                              ?
                            </p>


                          </div>)
                        }

                      </div>


                      <div className="space-y-2">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3 className="text-realiti-blue">{person.name}</h3>
                          {person.position && <p className="text-realiti-blue2 text-sm">{person.position}</p>}
                          {/* <p className="text-realiti-orange">{person.role}</p> */}

                          <div className='h-1 border-b w-4 border-realiti-orange2'></div>

                          {person.talkTitle && (
                            <div className="text-realiti-blue2 text-sm">{person.talkTitle}</div>
                          )}
                        </div>


                        <ul role="list" className="flex space-x-5">
                          {person.xUrl && (
                            <li>
                              <a href={person.xUrl} className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">X</span>
                                <svg
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                  fill="currentColor"
                                  viewBox="0 0 512 512"
                                >
                                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                </svg>
                              </a>
                            </li>
                          )}
                          {person.linkedinUrl && (

                            <li>
                              <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">LinkedIn</span>
                                <svg
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </a>
                            </li>
                          )}
                        </ul>
                        {person.bio && <div className='w-full '>

                          <Dialog>
                            <DialogTrigger className='text-realiti-blue1 hover:text-realiti-blue2 text-right w-full'>Read more</DialogTrigger>
                            <DialogContent className='max-w-96 md:max-w-2xl rounded-md bg-realiti-orange2 border-0 text-realiti-blue2'>
                              <DialogHeader>
                                <DialogTitle className='text-lg mb-2'>More about speaker</DialogTitle>
                                <DialogDescription className='text-realiti-blue2 text-md'>
                                  {person.bio}
                                </DialogDescription>
                              </DialogHeader>
                            </DialogContent>
                          </Dialog>
                        </div>}
                      </div>
                    </div>
                  </motion.li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div >
  )
}
