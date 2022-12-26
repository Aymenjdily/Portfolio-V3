import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div 
      className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
      initial={{
        opacity:0
      }}
      whileInView={{
        opacity:1
      }}
      transition={{
        duration:1.5
      }}
    >
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
        about
      </h3>

      <motion.img
        src={"https://dummyimage.com/720x400"}
        alt="Profile"
        initial={{
          x: -200,
          opacity:0
        }}
        whileInView={{
          x: 0,
          opacity:1
        }}
        transition={{
          duration:1.2
        }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a <span className='underline decoration-[#B9E3C6]'>little</span> Background
        </h4>
        <p className='text-base'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum animi rem voluptatibus eum officia qui optio architecto earum excepturi velit natus quasi explicabo, ipsum iure minus eveniet ullam accusamus inventore eaque assumenda sunt quas! Blanditiis, dolores dolore. Ex, voluptatum quo? Quo omnis, esse voluptatum odit libero ex distinctio quibusdam amet.
        </p>
      </div>
    </motion.div>
  )
}

export default About