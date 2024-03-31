"use client"
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className="w-full border-2 mt-24 bg-black flex flex-col justify-center gap-8 md:gap-0 md:flex-row md:justify-between">
            <div className='w-full md:w-1/3 pl-20'>
                <Image
                    src={"/footer.png"}
                    height={80}
                    width={80}
                    alt='image'
                />
                <h1 className='text-white font-mono font-semibold text-4xl'>Construck</h1>
                <p className='text-sm font-light text-white/80 pl-20'>We Sell <span className='text-pink-400'>Aspirations</span>.</p>
            </div>

            <div className='w-full md:w-1/3 flex flex-col justify-center items-center '>
                <div className='flex gap-4 text-pink-400 font-bold justify-center items-center text-center'>
                   <h1>Contact Us</h1>
                </div>
                <p className='text-sm text-center pt-2 text-white/80'>Contact@construck.in</p>
                <p className='text-sm text-center pt-2 text-white/80'>+91 9811251346</p>
                <p className='text-sm text-center font-semibold pt-2 text-white'>Discovery Park BPTP world Street, greater faridabad , haryana</p>
            </div>

            <div className='w-full md:w-1/3 flex flex-col justify-center items-center '>
                <div className='flex gap-4 justify-center items-center text-center'>
                    <Image
                        src={"/instagram.png"}
                        height={20}
                        width={20}
                        alt='image'
                    />

                    <Image
                        src={"/facebook.png"}
                        height={20}
                        width={20}
                        alt='image'
                    />

                    <Image
                        src={"/twitter.png"}
                        height={20}
                        width={20}
                        alt='image'
                    />

                    <Image
                        src={"/pinterest.png"}
                        height={20}
                        width={20}
                        alt='image'
                    />
                </div>
                <p className='text-sm text-center pt-2 text-white/80'>All rights Reserved 2024</p>
                <p className='text-lg text-center font-semibold pt-2 text-white'>Construck Construction Pvt Ltd.</p>
            </div>


           
        </div>
    )
}

export default Footer
