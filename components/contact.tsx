"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './submit-btn'

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section id='contact' ref={ref} className='mb-20 sm:mb-28 w-[min(100%,38rem)]
      initial={{
        opacity:0
      }}
      whileInView={{
        opacity:1
      }}
      transition={{
        duration:1
      }}
      viewport={{
        once:true
      }}
      '>
      <SectionHeading>Contact Me</SectionHeading>
      <form className='mt-10 flex flex-col' action={ async (formData) => {
        const { data, error } = await sendEmail(formData)
        if (error) {
          alert(error)
          return;
        }

        alert('Email send successfully!')
      }}>
        <input type='email' name='senderEmail' className='h-14 px-4 rounded-lg borderBlack' placeholder='Your email' maxLength={500} required/>
        <textarea name="senderMessage" className='h-52 my-3 rounded-lg borderBlack p-4' placeholder='Your message' maxLength={5000} required/>  
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
function useFormStatus() {
  throw new Error('Function not implemented.')
}

