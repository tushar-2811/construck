"use client"
import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { AnimatedTooltip } from './ui/animated-tooltip'



const NewHeroSection = () => {
    return (
        <div className='
     w-full h-auto rounded-md flex flex-col
     items-center justify-center relative overflow-hidden mx-auto py-10  text-white'
        >

            <div className='p-8 relative z-10 w-full text-center'>
                <h1 className='mt-20 text-6xl  md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-800'
                >We build your dreams with passion</h1>
                <p
                    className='mt-5 font-medium text-base md:text-lg text-neutral-900 max-w-xl mx-auto'>
                    At <span className='text-yellow-400 font-bold'>Construck</span>, we redefine the construction experience by offering a seamless and affordable solution to your material needs.
                </p>
            </div>
        </div>
    )
}

export default NewHeroSection
