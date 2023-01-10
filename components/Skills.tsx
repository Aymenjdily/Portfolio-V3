import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../types'
import SkillTech from './SkillTech'

type Props = {
    skills: Skill[]
}

const Skills = ({skills}: Props) => {
  return (
    <motion.div
        className='h-screen flex flex-col gap-8 relative text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
    >
        <div className='w-full absolute top-[35%] bg-[#2A669F]/20 left-0 h-[400px] -skew-y-[-15deg]'/>
        <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl'>
            skills
        </h3>

        <h3 className='uppercase tracking-[3px] text-gray-400 text-sm'>
            Hover over a Skill for Currency Profiencieny
        </h3>

        <div className='grid grid-cols-3 md:grid-cols-4 gap-5'>
            {
                skills?.slice(0 , skills.length/2).map((skill) => (
                    <SkillTech
                        key={skill._id}
                        skills={skill}
                    />
                ))
            }

            {
                skills?.slice(skills.length /2 , skills.length).map((skill) => (
                    <SkillTech
                        key={skill._id}
                        skills={skill}
                        directionLeft
                    />
                ))
            }
        </div>
    </motion.div>
  )
}

export default Skills