"use client"

import React, { useState, useEffect, useRef } from 'react'
import { BsFillHouseDoorFill } from 'react-icons/bs'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { propertySlice } from '@/store/PropertySlice'


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

  const allProperties = useSelector(state => state.properties.properties)

  const propertyTypeValues = get_propertytype(allProperties)

  const [propType, setpropType] = useState(propertyTypeValues[0])

  const [isOPen, setIsOpen] = useState(false)



  const handleSelection = (value) => {
    setpropType(value)
    setIsOpen(false)
  }

  const dispatch = useDispatch()

  const handleChange = (type) => {
    dispatch(propertySlice.actions.setPropertyTypeFilter(type))
    handleSelection(type)
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
      <BsFillHouseDoorFill size={18} />
      <div>{propType}</div>
      {isOPen ? <AiOutlineUp onClick={() => setIsOpen(false)} size={12} className='cursor-pointer' /> : <AiOutlineDown onClick={handleDropDown} size={12} className='cursor-pointer' />}
      {isOPen && (
        <div className='absolute bg-white shadow-md min-w-[230px] px-3 lg:top-[62px]' ref={dropDownRef}>
          {propertyTypeValues.map((typeValue, index) => (
            <div
              key={index}
              className='my-2 hover:text-[#6230a3] cursor-pointer'
              onClick={() => handleChange(typeValue)}
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