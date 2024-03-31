"use client"
import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { AnimatedTooltip } from './ui/animated-tooltip'

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

const HeroSection = () => {
    return (
        <div className='
     w-full h-auto md:h-[46rem] rounded-md flex flex-col
     items-center justify-center relative overflow-hidden mx-auto py-10  text-white'
        >
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />



            <div className='p-8 relative z-10 w-full text-center'>
                <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'
                >We build your dreams with passion</h1>
                <p
                    className='mt-5 font-normal text-base md:text-lg text-neutral-300 max-w-xl mx-auto'>
                    At <span className='text-yellow-500'>Construck</span>, we redefine the construction experience by offering a seamless and affordable solution to your material needs.
                </p>

                <div className='mt-4 '>
                    <Link href={"/"}>
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"

                        >
                            Let's Connect
                        </Button>
                    </Link>

                    <TextGenerateEffect words={" We just don't claim, We deliver."} className='text-base  tracking-tight text-yellow-400' />
                </div>


                <div className="flex items-center justify-center pt-14 w-full">
                    <AnimatedTooltip items={people} />
                </div>

                <h1 className='my-4'>Founders of <span className='text-yellow-500'>Construck</span></h1>

            </div>
        </div>
    )
}

export default HeroSection
