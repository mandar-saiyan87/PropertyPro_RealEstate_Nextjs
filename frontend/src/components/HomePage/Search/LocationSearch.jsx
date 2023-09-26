"use client"

import React, { useState, useEffect, useRef } from 'react'
import { GrLocation } from 'react-icons/gr'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { propertySlice } from '@/store/PropertySlice'


const get_cities = (cityList) => {
  const cities = ['Location (All)']
  cityList.forEach(data => {
    if (!cities.includes(data['city'])) {
      cities.push(data['city'])
    }
  })
  return cities;
}


const LocationSearch = () => {

  const allProperties = useSelector(state => state.properties.properties)

  const unique_cities = get_cities(allProperties)

  const [location, setLocation] = useState(unique_cities[0])

  const [isOPen, setIsOpen] = useState(false)


  const handleSelection = (value) => {
    setLocation(value)
    setIsOpen(false)
  }


  const dispatch = useDispatch()

  const handleChange = (city) => {
    dispatch(propertySlice.actions.setLocationFilter(city))
    handleSelection(city)
  }

  const dropDownRef = useRef(null)

  const handleDropDown = (event) => {
    event.stopPropagation();
    setIsOpen(true)
  }

  const handleClickOutside = (event) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }


  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  })
  return (
    <div className='flex items-center gap-5 mx-3 md:w-full'>
      <GrLocation size={18} />
      <div>{location}</div>
      {isOPen ? <AiOutlineUp onClick={() => setIsOpen(false)} size={12} className='cursor-pointer' /> : <AiOutlineDown onClick={handleDropDown} size={12} className='cursor-pointer' />}
      {isOPen && (
        <div className='absolute bg-white shadow-md min-w-[230px] px-3 lg:top-[62px]' ref={dropDownRef}>
          {unique_cities.map((loc, index) => (
            <div
              key={index}
              className='my-2 hover:text-[#6230a3] cursor-pointer'
              onClick={() => handleChange(loc)}
            >
              {loc}
            </div>
          ))}
        </div>
      )}
    </div>

    // <div div className='mx-5' >
    //   <div className='text-sm text-slate-400'>Location</div>
    //   <div className='flex items-center gap-6'>
    //     <div className='font-semibold tracking-wide text-lg max-w-[200px]' >{location}</div>
    //     {isOPen ? <AiOutlineUp onClick={() => setIsOpen(false)} size={14} className='cursor-pointer' /> : <AiOutlineDown onClick={handleDropDown} size={14} className='cursor-pointer' />}
    //   </div>
    //   {
    //     isOPen && (
    //       <div className='shadow-md bg-white p-3 absolute w-[230px] left-0' ref={dropDownRef}>
    //         {unique_cities.map((city, index) => (
    //           (
    //             <div key={index} className='my-2 cursor-pointer' onClick={() => handleSelection(city)}>{city}</div>
    //           )
    //         ))}
    //       </div>
    //     )
    //   }
    // </div >
  )
}

export default LocationSearch
