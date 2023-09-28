"use client"

import { useEffect, useState } from 'react';
import { getPinnedRepos } from '@/actions/githubService';
import SectionHeading from './section-heading';
import { BsStar, BsEye } from 'react-icons/bs'
import { githubPin } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

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


export default function Github() {
  const { ref } = useSectionInView("Github");
  return (
    <section id='github' ref={ref} className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
        <SectionHeading>My Github</SectionHeading>
        <div className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
          {
            githubPin.map((item, index) => (
              <motion.div key={index} className="bg-white border border-black/[0.1] rounded-lg px-5 py-3"
                variants={fadeInAnimationsVariants}
                initial='initial'
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >{ item.name }</motion.div>
            ))
          }
        </div>
    </section>
  )
}



