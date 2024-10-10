'use client'
import { motion } from 'framer-motion'

import {
  BookMarkedIcon,
  CheckIcon,
  CrossIcon,
  Monitor,
  MonitorIcon,
  SparklesIcon,
  SquirrelIcon,
  UsersIcon,
  XIcon,
} from 'lucide-react'

import { TicketOption } from './../content'
import { Button } from '@/components/ui/button'
import { Linden_Hill } from 'next/font/google'
import Link from 'next/link'

const icons = [SquirrelIcon, BookMarkedIcon, SparklesIcon, UsersIcon]

function MatchedIcon({ index, isMagic }: { index: number; isMagic?: boolean }) {
  const Icon = icons[index % icons.length]
  // if (isMagic) {
  //   return (
  //     <motion.div
  //     // Shining stroke
  //     // animate={{
  //     //   stroke: ['#f00', '#00f', '#0f0'],
  //     // }}
  //     // transition={{
  //     //   duration: 3,
  //     //   ease: 'linear',
  //     //   repeat: Infinity,
  //     //   repeatType: 'reverse',
  //     // }}
  //     >
  //       <Icon className="h-24 w-24 opacity-100 translate-y-1/4" />
  //     </motion.div>
  //   )
  // } else {
  return <Icon className="h-24 w-24 opacity-20 translate-y-1/4" />
}
// }

export function TicketList({ tickets }: { tickets: any }) {

  const ticketop: TicketOption[] = tickets.ticketOptions

  return (
    <div className="w-full">
      <div className="w-full grid lg-grid-cols-1 lg:grid-cols-4 gap-6  items-stretch justify-stretch">
        {ticketop.map((tier, index) => (
          <div
            key={tier.title}
            className={
              'h-full flex flex-col items-stretch justify-stretch  border-gray-200  divide-gray-200 '
            }
          >
            <div className={`p-2 border rounded-xl bg-white`}>
              <div
                className={`p-4 rounded-md  text-white relative ${tier.isFeatured ? 'bg-realiti-orange2 ' : 'bg-realiti-blue1'
                  }`}
              >
                {tier.isFeatured ? (
                  <div className="absolute inset-0 z-10 flex flex-row items-end justify-end overflow-clip">
                    <MatchedIcon index={index} isMagic={true} />
                  </div>
                ) : (
                  <div className="absolute inset-0 z-10 flex flex-row items-end justify-start overflow-clip">
                    <MatchedIcon index={index} />
                  </div>
                )}
                <h2 className="text-lg leading-6 font-medium text-white relative z-20">
                  {tier.title}
                </h2>
                <div className='w-full relative'>
                  <p className="mt-8 w-full text-right">
                    <span className="text-4xl font-extrabold text-white relative z-20">
                      € {tier.price}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className=" items-stretch justify-stretch grow">
              <motion.div
                initial={{
                  opacity: 0,
                  translateY: '-50%',
                  scaleY: 0,
                  height: '100%',
                }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  scaleY: 1,
                  height: '100%',
                }}
                transition={{
                  delay: index * 0.1,
                }}
              >
                <div className="h-full flex flex-col  pt-6 pb-8 px-6 rounded-xl border bg-white gap-4 ">
                  <div className="grow ">
                    <h3 className="text-lg font-medium text-gray-900 tracking-wide uppercase">
                      What&apos;s included
                    </h3>
                    <ul role="list" className="mt-6 space-y-4 font-extralight">
                      {tier.included.map(({ included: feature }) => (
                        <li key={feature} className="flex space-x-3">
                          <CheckIcon
                            className="flex-shrink-0 h-5 w-5 text-green-500"
                            aria-hidden="true"
                          />
                          <span className="text-md font-medium text-gray-500">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <ul role="list" className="mt-6 space-y-4 ">
                      {tier.notIncluded.map(({ notIncluded: feature }) => (
                        <li key={feature} className="flex space-x-3">
                          <XIcon
                            className="flex-shrink-0 h-5 w-5 text-red-500"
                            aria-hidden="true"
                          />
                          <span className="text-md font-medium text-gray-500">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={tickets.ticketUrl} target="_blank" rel="noopener noreferrer">
                    <Button className='w-full' variant={'outline'}>Get it</Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
