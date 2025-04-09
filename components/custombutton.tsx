"use client";
import React, { use } from 'react'
import Image from 'next/image'
import { Custombuttonprops } from '@/types';

const CustomButton = ({ title, containerstyles, handleclick }: Custombuttonprops) => {
    return (
        <button
            disabled={false}
            type={"button"}
            className={`flex justify-center items-center py-3 px-6 bg-primary-blue text-white rounded-full bg-blue-700 transition-all ${containerstyles}`}
            onClick={ handleclick}>
            <span className={'flex-1'}> {title}</span>
        </button>
    )
}

export default CustomButton

// bg-primary-blue text-white rounded-full mt-10