"use client"
import React from 'react'
import { BackgroundGradient } from './ui/background-gradient'
import Image from 'next/image'

import Data from '../data/Data_construction.json'

interface ServicesType {
    id: number
    title: string
    slug: string
    description: string
    image: string
}

const FeaturedServices = () => {

    return (
        <div className='py-12 bg-gradient-to-t  '>        
            <div>
                <div className='text-center'>
                    <h2 className='text-2xl font-semibold tracking-wide text-yellow-500'>Featured Services</h2>
                </div>
            </div>

            <div className='mt-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center '>
                    {
                        Data.ConstruckData.map((service: ServicesType) => (
                            <div key={service.id} className='flex justify-center'>
                                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                                    <Image
                                        src={service.image}
                                        alt="jordans"
                                        height="400"
                                        width="400"
                                        className="object-contain"
                                    />
                                    <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                       {service.title}
                                    </p>

                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    {service.description}
                                    </p>
                                    <button className="rounded-lg px-4  py-4 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                       Schedule Appointment
                                    </button>
                                </BackgroundGradient>
                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default FeaturedServices
