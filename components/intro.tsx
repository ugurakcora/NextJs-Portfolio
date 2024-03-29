"use client"
import React from 'react'
import Image from 'next/image'
import heroImg from "@/public/hero.jpg";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin, BsInstagram, BsTwitter, BsSpotify } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

function getCurrentYear() {
  const currentYear = new Date().getFullYear() - 2019;
  return currentYear;
}

export default function Intro() {
  const currentYear = getCurrentYear();
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center scroll-mt-[100rem]'>
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
      <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 100, opacity: 1 }}
        >
        <span className='font-bold'>Hello, I'm Uğur Akçora.</span> I'm a{' '}
        <span className='font-bold'>Frontend Developer</span> with{' '}
        <span className='font-bold'>{currentYear} Years</span> of experience. I enjoy building
        <span className='italic'>sites & apps</span>. My focus is{' '}
        <span className='underline'>React (Next.js)</span>.
      </motion.h1>

      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 100, opacity: 1 }}
        transition={{ delay: 0.1 }}
        >
          <div className='flex items-center justify-center flex-wrap gap-2 mt-4 sm:mt-0'>
            <Link href='#contact' className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 outline-none rounded-full focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:border dark:border-white/100 sm:dark:border-none'
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
            >Contact Me Here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' /></Link>

            <a href='/CV.pdf' target='_blank' className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10' download>Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/></a>
          </div>

          <div className='flex items-center gap-2 mt-4 sm:mt-0'>
            <a href='https://www.linkedin.com/in/ugurakcora/' target='_blank' className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'> <BsLinkedin /> </a>


            <a href='https://github.com/ugurakcora' target='_blank' className='bg-white p-3.5 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15]  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'> <FaGithubSquare /> </a>

            <a href='https://twitter.com/uguurakcora' target='_blank' className='bg-white p-3.5 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15]  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'> <BsInstagram /> </a>
            
            <a href='https://twitter.com/uguurakcora' target='_blank' className='bg-white p-3.5 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15]  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'> <BsTwitter /> </a>

            <a href='https://open.spotify.com/user/34dehliz34' target='_blank' className='bg-white p-3.5 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15]  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'> <BsSpotify /> </a>
          </div>
      </motion.div>
    </section>
  )
}