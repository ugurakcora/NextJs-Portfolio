"use client"
import React from 'react'
import Image from 'next/image'
import heroImg from "@/public/hero.jpg";
import { motion } from 'framer-motion';

function getCurrentYear() {
  const currentYear = new Date().getFullYear() - 2019;
  return currentYear;
}

export default function Intro() {
  const currentYear = getCurrentYear();
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div 
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 1, opacity: 1 }}
            transition={{ 
              type: "tween",
              duration: 0.2,
             }}
          >
            <Image src={heroImg} alt='Uğur Akçora' width={192} height={192} quality={95} priority={true} className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl' 
            />
          </motion.div>
          <motion.span className='absolute bottom-[0] right-[0] text-2xl'
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
             }}
          >👋</motion.span>
        </div>
      </div>
      <p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'>
        <span className='font-bold'>Hello, I'm Uğur Akçora.</span> I'm a{' '}
        <span className='font-bold'>Frontend Developer</span> with{' '}
        <span className='font-bold'>{currentYear} Years</span> of experience. I enjoy building
        <span className='italic'>sites & apps</span>. My focus is{' '}
        <span className='underline'>React (Next.js)</span>.
      </p>
    </section>
  )
}
