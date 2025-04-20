"use client";
import React from 'react'
import SearchManufacturer from './SearchManufacturer'
import { useState } from 'react';


const SearchBar = () => {

    const [manufacturer, setManufacturer] = useState('')
    const handlesearch=()=>{}
  return (
<form className='searchbar'
onSubmit={handlesearch}>  
<div className='flex-1 max-sm:w-full flex justify-start items-center relative;'>
    <SearchManufacturer
    manufacturer={manufacturer}
    setManufacturer={setManufacturer}
    />
    </div>
</form>
  )
}

export default SearchBar