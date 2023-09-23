"use client"

import React, { useState, useEffect, useRef } from 'react'
import { BsFillHouseDoorFill } from 'react-icons/bs'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
// import { useDispatch } from 'react-redux'
// import { propertySlice } from '@/src/store/PropertySlice'

import RealEstateData from '@/data/data'


const get_propertytype = (proprtyList) => {
  const cities = ['Property (All)',]
  proprtyList.forEach(data => {
    if (!cities.includes(data['property_type'])) {
      cities.push(data['property_type'])
    }
  })
  return cities;
}

const PropertyTypeSearch = () => {

  const propertyTypeValues = get_propertytype(RealEstateData)

  const [propType, setpropType] = useState(propertyTypeValues[0])

  const [isOPen, setIsOpen] = useState(false)

  // const dispatch = useDispatch()

  const handleSelection = (value) => {
    setpropType(value)
    setIsOpen(false)
  }

  // const handleChange = (type) => {
  //   dispatch(propertySlice.actions.setPropertyType(type))
  //   handleSelection(type)
  // }


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
      <BsFillHouseDoorFill size={18} />
      <div>{propType}</div>
      {isOPen ? <AiOutlineUp onClick={() => setIsOpen(false)} size={12} className='cursor-pointer' /> : <AiOutlineDown onClick={handleDropDown} size={12} className='cursor-pointer' />}
      {isOPen && (
        <div className='absolute bg-white shadow-md min-w-[230px] px-3 lg:top-[62px]' ref={dropDownRef}>
          {propertyTypeValues.map((typeValue, index) => (
            <div
              key={index}
              className='my-2 hover:text-[#6230a3] cursor-pointer'
              onClick={() => handleSelection(typeValue)}
            >
              {typeValue}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PropertyTypeSearch