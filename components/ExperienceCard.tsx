/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../types'
import { urlFor } from '../sanity'
import Image from 'next/image'
import About from './About';

type Props = {
  experience : Experience
}

const ExperienceCard = ({experience}: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[600px] md:w-[600px] xl:w-[700px] snap-center bg-[#29292911] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden '>

      <motion.img
        src={urlFor(experience?.companyImage).url()}
        alt="Company"
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        initial={{
          y:-100,
          opacity:0
        }}
        transition={{
          duration:1.2
        }}
        whileInView={{
          opacity:1,
          y:0
        }}
        viewport={{
          once:true
        }}
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>
          {
            experience?.jobTitle
          }
        </h4>
        <p className='font-bold text-2xl mt-1 text-[#2A669F]'>
          {
            experience?.company
          }
        </p>
        <div className='flex space-x-2 my-2'>
          {/** tech used */}
          {
            experience.technologies.map((technology) => (
              <p
                key={technology?._id}
              >
                {
                  technology?.title
                }
              </p>
            ))
          }
        </div>
        <p className='uppercase py-5 text-gray-500'>
          {
            new Date(experience.dateStarted).toDateString()
          }
          {" "}
          -
          {" "}
          {
            experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnd).toDateString()
          }
        </p>
        <ul className='list-disc space-y-4 text-lg overflow-y-scroll h-[100px] w-full scrollbar-thin scrollbar-track-[#E4F7F8] scrollbar-thumb-[#3B94CB]'>
          {
            experience.points?.map((point, index) => (
              <li
                key={index}
              >
                ➜ {point}
              </li>
            ))
          }
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard