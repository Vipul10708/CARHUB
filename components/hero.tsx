"use client";
import React from 'react'
import Image from 'next/image'
import CustomButton from './custombutton'
const Hero = () => {
    const handlescroll = () => { };
    return (
        <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold'>Find and Rent a car super quick
                </h1>
                <p className='text-[27px] text-black-100 font-light mt-5'> Get the best cars at cheapest prices in here</p>

                <CustomButton
                    title="Explore Cars"
                    containerstyles="bg-primary-blue text-black rounded-full mt-10"
                    handleclick={handlescroll}
                />
            </div>

            <div className='xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen;'>
                <div className='relative xl:w-full w-[90%] xl:h-full h-[590px] z-0;' >
                    <Image src="/hero.png" alt="hero" fill className="object-contain" />
                </div>
            </div>
        </div>
    );
}
export default Hero;