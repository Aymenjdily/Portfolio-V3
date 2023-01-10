import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../types'
import { urlFor } from '../sanity'

type Props = {
  pageInfo : PageInfo
}

const About = ({pageInfo}: Props) => {
  return (
    <motion.div 
      className='h-screen relative flex flex-col text-center md:text-left md:flex-col max-w-7xl px-10 justify-center gap-10 mx-auto items-center'
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
      <div className='w-full absolute top-[35%] bg-[#2A669F]/20 left-0 h-[400px] -skew-y-12'/>
      <div className='text-center flex items-center justify-center'>
        <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl '>
          about
        </h3>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-center'>

        <motion.img
          src={urlFor(pageInfo?.profilePic).url()}
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
          className="mb-5 md:border-[50px] border-[20px] border-[#2A669F] flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />

        <div className='space-y-10 px-0 md:px-10'>
          <h4 className='text-4xl font-extrabold'>
            Here is a <span className='underline decoration-[#B9E3C6]'>little</span> Background
          </h4>
          <p className='text-2xl'>
            {
              pageInfo?.backgroundInformation
            }
          </p>
        </div>
      </div>


    </motion.div>
  )
}

export default About