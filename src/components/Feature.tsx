"use client"
import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip';
import { AuroraBackground } from './ui/aurora-background';
import { motion } from "framer-motion";

const people = [
    {
        id: 1,
        name: "Rahul Sharma",
        designation: "CEO | co-founder",
        image: "/founder2.jpg"
    },
    {
        id: 2,
        name: "Rahul Raghav",
        designation: "COO | co-founder",
        image: "/founder1.jpg"
    },

];

const Feature = () => {
    return (
        <div className=' w-full h-auto  text-white  flex flex-col bg-black'>

            <div className="flex items-center justify-center pt-14 w-full">
                <AnimatedTooltip items={people} />
                <h1 className='my-4 mx-8 text-white'>Founders of <span className='text-yellow-500'>Construck</span></h1>
            </div>

            <div className='p-8 relative z-10 grid grid-cols-12'>

                <div className='col-span-12 md:col-span-6 flex justify-center items-center text-center'>
                    <h1 className='mt-20 md:mt-0 text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-pink-50 to-pink-500 '
                    >We are Architects of Dreams and creators of excellence.
                    </h1>
                </div>

                <div className='col-span-12 md:col-span-6 text-center'>
                    <AuroraBackground>
                        <motion.div
                            initial={{ opacity: 0.0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="relative flex flex-col gap-2 items-center justify-center px-4"
                        >
                            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                                Know More About Dynamic World Of Construction
                            </div>
                            <div className="font-medium text-base md:text-3xl dark:text-neutral-200 py-4">
                               Hear From Founders Itself
                            </div>
                            <button className="border-2 border-pink-500 font-mono rounded-full w-fit px-4 py-2 hover:bg-pink-500 hover:text-white ">
                                Connect Now
                            </button>
                        </motion.div>
                    </AuroraBackground>
                </div>
            </div>

        </div>
    )
}

export default Feature
