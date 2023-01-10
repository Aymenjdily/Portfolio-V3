import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../types';
import { urlFor } from '../sanity';

type Props = {
    directionLeft?:boolean;
    skills: Skill
}

const SkillTech = ({directionLeft, skills}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            src={urlFor(skills.image).url()}
            alt="skill"
            initial={{
                x: directionLeft ? -50 : 50,
                opacity:0
            }}
            transition={{ duration:1 }}
            whileInView={{ opacity:1,x:0 }}
            className="rounded-full border-8 p-2 border-[#2A669F] object-contain w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-md font-bold text-black opacity-100'>
                    {
                        skills.title
                    }
                </p>
            </div>
        </div>
    </div>
  )
}

export default SkillTech