'use client'
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link from 'next/link';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5'>
        
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

            <SocialIcon
                url='https://www.youtube.com'
                fgColor='gray'
                bgColor='transparent'
            />

            <SocialIcon
                url='https://www.youtube.com'
                fgColor='gray'
                bgColor='transparent'
            />

            <SocialIcon
                url='https://www.youtube.com'
                fgColor='gray'
                bgColor='transparent'
            />
            
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
                fgColor='gray'
                bgColor='transparent'
            />
                <Link href={"#contact"}>
                    <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                        let's talk
                    </p>
                </Link>
        </motion.div>
    </header>
  )
}