"use client"

import React, { useState, useEffect, useRef } from 'react'
import { FaDollarSign } from 'react-icons/fa'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { propertySlice } from '@/store/PropertySlice'

const PriceRangeSearch = () => {

  const pricerangeValues = ['Price Range (All)', '$1000 - $3000', '$3001 - $5000', 'Over $5000']

  const [priceValues, setpriceValues] = useState(pricerangeValues[0])

  const [isOPen, setIsOpen] = useState(false)



  const handleSelection = (value) => {
    setpriceValues(value)
    setIsOpen(false)
  }

  const dispatch = useDispatch()

  const handleChange = (range) => {
    dispatch(propertySlice.actions.setPriceFilter(range))
    handleSelection(range)
  }

  const dropDownRef = useRef()

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
      <FaDollarSign size={16} />
      <div>{priceValues}</div>
      {isOPen ? <AiOutlineUp onClick={() => setIsOpen(false)} size={12} className='cursor-pointer' /> : <AiOutlineDown onClick={handleDropDown} size={12} className='cursor-pointer' />}
      {isOPen && (
        <div className='absolute bg-white shadow-md min-w-[230px] px-3 lg:top-[62px]' ref={dropDownRef}>
          {pricerangeValues.map((priceRange, index) => (
            <div
              key={index}
              className='my-2 hover:text-[#6230a3] cursor-pointer'
              onClick={() => handleChange(priceRange)}
            >
              {priceRange}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PriceRangeSearch