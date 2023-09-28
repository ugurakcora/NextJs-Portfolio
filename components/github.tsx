"use client"
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
        <div className="flex flex-wrap justify-between gap-2 text-lg text-gray-800">
          {
          githubPin.map((item, index) => (
            <motion.a className="w-full h-[180px] lg:w-[400px] lg:h-[200px] mb-5 bg-white shadow-md p-5 rounded-md flex flex-col justify-around items-center" key={index} href={item.html_url} target='_blank'
            variants={fadeInAnimationsVariants}
            initial='initial'
            whileInView="animate"
            viewport={{
              once: true,
            }}>
              <h3 className="text-xl font-bold mb-3">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{item.description}</p>
              <div className="flex items-center">
                <BsStar className="w-4 h-4 mr-1"/>
                <span className="text-xs text-gray-600 mr-3">{item.stargazers_count}</span>
                <BsEye className="w-4 h-4 mr-1"/>
                <span className="text-xs text-gray-600">{item.watchers_count}</span>
              </div>
            </motion.a>
          ))
          }
        </div>

    </section>
  )
}