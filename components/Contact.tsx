import React from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    example: string,
    exampleRequired: string,
};

type Props = {}

const Contact = (props: Props) => {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    return (
        <div
            className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                contact
            </h3>

            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold capitalize text-center'>
                    get <span className='underline'>in touch</span>
                </h4>

                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#B9E3C6] h-7 w-7 animate-pulse'/>
                        <p className='text-2xl'>+212 619402358</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#B9E3C6] h-7 w-7 animate-pulse'/>
                        <p className='text-2xl'>Casablanca, Morocco</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#B9E3C6] h-7 w-7 animate-pulse'/>
                        <p className='text-2xl'>aymenjdily@gmail.com</p>
                    </div>
                </div>

                <form className='flex flex-col space-y-2 w-fit mx-auto' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex space-x-2'>
                        <input type="text" className='contactInput' placeholder='Name'/>
                        <input type="email" className='contactInput' placeholder='Email'/>
                    </div>

                    <input type="text" className='contactInput' placeholder='Subject'/>

                    <textarea className='contactInput' placeholder='Message'/>

                    <button 
                        className='bg-[#B9E3C6] py-5 px-10 rounded-md text-black font-bold text-lg tracking-[5px]'
                        type='submit'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact