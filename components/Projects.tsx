/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Projects = (props: Props) => {
    const project = [1 ,2 ,3 ,4 ,5]
    return (
        <motion.div
            className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
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
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                my works
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-white scrollbar-thumb-black'>
                {/** project */}
                {
                    project.map((item, index) => (
                        <div
                            key={item}
                            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
                        >
                            <motion.img 
                                src={"https://dummyimage.com/720x400"}
                                alt="project"
                                initial={{
                                    y:-300,
                                    opacity:0
                                }}
                                transition={{ duration:1.2 }}
                                whileInView={{ opacity:1, y: 0 }}
                                viewport={{ once: true}}
                            />
                            <div className='px-0 md:px10 space-y-10 max-w-6xl'>
                                <h4 className='text-4xl font-semibold text-center'>
                                    <span className='underline'>
                                        Case Study { index + 1 } of { project.length } : 
                                    </span>
                                    {" "}ups Clone
                                </h4>
                                <p className='text-lg text-center md:text-left'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime incidunt dolore nulla reiciendis omnis laudantium aut dolores illum nam?
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='w-full absolute top-[30%] bg-[#B9E3C6]/40 left-0 h-[500px] -skew-y-12'/>
        </motion.div>
    )
}

export default Projects