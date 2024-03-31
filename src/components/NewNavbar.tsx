"use client"
import { ArrowBigRight, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/moving-border'



const NewNavbar = () => {
  return (
    <div className='flex justify-between px-5 items-center top-5 inset-x-0 w-full'>
        <div>
            <Image
            className='bg-transparent'
            src={"/logo.png"}
            alt='logo'
            width={180}
            height={80}
            />
        </div>


        <div>
            <button className='uppercase flex space-x-2 border-2 border-black font-medium rounded-full py-2 px-4 hover:bg-black hover:text-white'>
                Get in touch <ArrowRight />
            </button>

        </div>
    </div>
  )
}

export default NewNavbar
