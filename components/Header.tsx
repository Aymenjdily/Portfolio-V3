'use client'
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link from 'next/link';
import { Social } from '../types';

type Props = {
    socials: Social[]
}

export default function Header({ socials }: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5 font-jost'>
        
        <motion.div 
            className='flex flex-row items-center'
            
            initial={{
                x: -500,
                scale:0.5,
                opacity:0
            }}
            
        
            animate={{
                x: 0,
                opacity:1,
                scale:1
            }}

            transition={{
                duration:1
            }}
        >
            { /** Social Icons */ }

            {
                socials.map((social) => (
                    <SocialIcon
                        key={social._id}
                        url={social.url}
                        fgColor={"#1B3366"}
                        bgColor='transparent'
                        className='animate-pulse'
                    />
                ))
            }
            

            
            
        </motion.div>

        <motion.div 
            className='flex flex-row items-center text-gray-300 cursor-pointer'
                
            initial={{
                x:500,
                opacity:0,
                scale:0.5
            }}

            animate={{
                x:0,
                opacity:1,
                scale:1
            }}

            transition={{
                duration:1.5
            }}
        >

            <SocialIcon
                className='cursor-pointer'
                network='email'
                fgColor='#000'
                bgColor='transparent'
            />
                <Link href={"#contact"}>
                    <p className='uppercase font-jost hidden md:inline-flex text-sm text-black'>
                        let's talk
                    </p>
                </Link>
        </motion.div>
    </header>
  )
}