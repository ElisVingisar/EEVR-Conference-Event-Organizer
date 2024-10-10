'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link';

function Word({ children, index }: { children: string | React.ReactNode; index: number }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: 100,
      }}
      transition={{
        delay: index * 0.1,
      }}
      whileInView={{
        opacity: 1,
        translateX: 0,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

export function Sentence({ email }: { email: string }) {
  return (
    <h2 className="text-6xl sm:text-6xl font-bold text-gray-50 md:text-9xl flex flex-row flex-wrap w-full items-center justify-start">
      <Word index={0}>Still&nbsp;</Word>
      <Word index={1}>have&nbsp;</Word>
      <Word index={2}>some&nbsp;</Word>
      <Word index={2}>questions?</Word>
      <Word index={3}>
        <div className='flex flex-row items-center justify-center mt-4'>
          <ArrowRight
            className="mx-2 h-14 w-14 md:h-14 md:w-14 lg:w-28 lg:h-28 stroke-[0.28rem]    text-gray-50"
            style={{
              strokeLinecap: 'butt',
            }}
          />
          <div className="mx-2 w-full h-full flex items-center justify-center md:pt-4">
            <Link href={`mailto:${email}`}>
              <Button size={'2xl'} className="bg-realiti-blue1 ">
                Get in touch
              </Button>
            </Link>
          </div>
        </div>
      </Word>
    </h2 >
  )
}
