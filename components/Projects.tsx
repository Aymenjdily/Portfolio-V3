/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../types'
import { urlFor } from '../sanity';

type Props = {
    projects : Project[]
}

const Projects = ({projects}: Props) => {
    const project = [1 ,2 ,3 ,4 ,5]
    return (
        <motion.div
            className='h-screen relative flex flex-col overflow-hidden text-left md:flex-col max-w-full justify-center mx-auto items-center z-0'
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
            <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl'>
                my works
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-white scrollbar-thumb-black'>
                {/** project */}
                {
                    projects.map((item, index) => (
                        <div
                            key={item._id}
                            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 "
                        >
                            <motion.img 
                                src={urlFor(item.image).url()}
                                alt="project"
                                initial={{
                                    y:-100,
                                    opacity:0
                                }}
                                transition={{ duration:1.2 }}
                                whileInView={{ opacity:1, y: 0 }}
                                viewport={{ once: true}}
                                className="w-[600px]"
                            />
                            <div className='px-0 md:px10 space-y-10 max-w-6xl'>
                                <h4 className='text-4xl font-semibold text-center text-[#2A669F]'>
                                    <span className='underline text-black'>
                                        Case Study { index + 1 } of { projects.length } : 
                                    </span>
                                    {" "}{item.title}
                                </h4>
                                <p className='text-lg text-center'>
                                    {
                                        item.summary
                                    }
                                </p>
                                <div className='flex items-center flex-wrap space-x-2 justify-center'>
                                    {
                                        item.technologies.map((tech) => (
                                            <img src={urlFor(tech.image).url()} key={tech._id} alt={tech.title} className="h-10 w-10" />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='w-full absolute top-[30%] bg-[#2A669F]/20 left-0 h-[500px] -skew-y-12'/>
        </motion.div>
    )
}

export default Projects