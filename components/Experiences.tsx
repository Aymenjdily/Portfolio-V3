import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../types'
import { urlFor } from '../sanity';

type Props = {
    experiences : Experience[]
}

const Experiences = ({experiences}: Props) => {
  return (
    <motion.div
        className='h-screen flex relative overflow-hidden flex-col text-left max-w-full px-10 justify-center mx-auto items-center'
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
        <h3 className=' uppercase tracking-[20px] text-gray-500 md:text-2xl'>
            experience
        </h3>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandotary scrollbar scrollbar-track-[#E4F7F8] scrollbar-thumb-[#3B94CB]'>
            {
                experiences?.map((experience) => (
                    <ExperienceCard experience={experience} key={experience._id}/>
                ))
            }
        </div>
    </motion.div>
  )
}

export default Experiences