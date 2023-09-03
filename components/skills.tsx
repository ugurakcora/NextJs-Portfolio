"use client"

import React from 'react'
import { animate, motion } from 'framer-motion';
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';

const fadeInAnimationsVariants = {
  initial: { 
    y: 100, 
    opacity: 0 
  },
  animate: ( index: number ) => ({
    y: 0, 
    opacity: 1,
    transition: {
      delay: 0.05 * index,
    },
  }),
}

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section id='skills' ref={ref} className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
        <SectionHeading>My Skills</SectionHeading>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
          {
            skillsData.map((skill, index) => (
              <motion.li key={index} className="bg-white border border-black/[0.1] rounded-lg px-5 py-3"
                variants={fadeInAnimationsVariants}
                initial='initial'
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >{ skill }</motion.li>
            ))
          }
        </ul>
    </section>
  )
}
