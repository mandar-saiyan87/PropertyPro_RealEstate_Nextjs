"use client"

import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi'
import LocationSearch from './LocationSearch';
import PropertyTypeSearch from './PropertyTypeSearch';
import PriceRangeSearch from './PriceRangeSearch';
// import { useDispatch, useSelector } from 'react-redux';
// import { propertySlice } from '@/src/store/PropertySlice';

const Search = () => {

  // const dispatch = useDispatch()

  return (
    <div className='w-[90%] max-w-[950px] gap-5 flex flex-col m-auto py-4 px-6 rounded-lg shadow-md md:flex-row md:bg-transparent md:backdrop-blur md:relative md:-top-7 md:py-2 md:px-4 lg:py-4 lg:px-6'>
      <LocationSearch />
      <PropertyTypeSearch />
      <PriceRangeSearch />
      <div className='flex items-center px-11 md:px-0'>
        <button className='w-full flex items-center justify-center bg-[#6230a3] px-5 py-2 rounded-lg active:opacity-70'>
          <BiSearchAlt2 size={22} color='white' />
        </button>
      </div>

    </div>
  )
}

export default Search

// <div div className = 'w-[90%] max-w-[950px] grid grid-cols-1 gap-5 m-auto py-4 px-6 rounded-lg shadow-md md:grid-cols-4 md:bg-transparent md:backdrop-blur md:relative md:-top-8 md:py-2 md:px-4 lg:py-4 lg:px-6' >
//     <LocationSearch />
//     <PropertyTypeSearch />
//     <PriceRangeSearch />
//     <div className='flex items-center px-11'>
//       <button className='w-full flex items-center justify-center bg-[#6230a3] px-5 py-2 rounded-lg active:opacity-70'>
//         <BiSearchAlt2 size={22} color='white' />
//       </button>
//     </div>

//   </div >