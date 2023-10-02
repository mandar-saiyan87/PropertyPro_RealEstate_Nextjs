'use client'

import React, { useState, useRef } from 'react'
import { BsChevronDown } from "react-icons/bs"
import { HiMenuAlt3 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai";



const Navbar = () => {

  const [propertySub, setpropertySub] = useState(false)

  const [drawer, setDrawer] = useState(false)

  const navTabs = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/' },
    { name: 'Property', href: '/', submenu: true },
    { name: 'Contact', href: '/' },
  ]

  const propSub = [
    { name: 'Rent', href: '/' },
    { name: 'Buy', href: '/' },
    { name: 'Sell', href: '/' },
  ]

  const drawerRef = useRef();

  const clickOverlay = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setDrawer(false)
    }
  }


  return (
    <>
      <div className='w-full bg-[#FFFFFF] flex items-center justify-between m-auto shadow-sm h-[55px] px-3 md:px-6'>
        <img src="/assets/img/logo.svg" className='w-32 md:w-[10rem] cursor-pointer' />
        <ul className='hidden lg:flex gap-10 items-center'>
          {navTabs.map((tab, index) => {
            return (
              <React.Fragment key={index}>
                {tab.submenu ? (<li key={index} className='cursor-pointer font-semibold flex gap-2 items-center text-sm relative tracking-wider' onMouseEnter={() => setpropertySub(true)} onMouseLeave={() => setpropertySub(false)}>
                  {tab.name}
                  <BsChevronDown size={12} />
                  {propertySub && (
                    <ul className='absolute top-[21px] -left-2 bg-white shadow-md min-w-[120px]'>
                      {propSub.map((propItem, index) => {
                        return (
                          <li key={index} className='hover:bg-purple-100 rounded-md px-3 py-[6px] tracking-wider'>{propItem.name}</li>
                        )
                      })}
                    </ul>
                  )}
                </li>) : <li key={index} className='cursor-pointer font-semibold text-sm item-center tracking-wider'>
                  {tab.name}</li>}
              </React.Fragment>
            )
          })}
        </ul>
        <div className='hidden lg:flex gap-3'>
          <button className='flex items-center border-[1px] rounded-md font-semibold text-sm px-4 py-2 hover:bg-gray-100 tracking-wide'>Log In</button>
          <button className='flex items-center rounded-md text-sm bg-[#6230a3] text-white font-semibold px-4 py-2 hover:bg-purple-700 tracking-wide'>Sign Up</button>
        </div>
        {/* <div className='cursor-pointer lg:hidden'> */}
        <HiMenuAlt3 size={22} color='#6230a3' onClick={() => setDrawer(true)} className='cursor-pointer lg:hidden' />
        {/* </div> */}
      </div>

      {/* Mobile Navbar */}

      <div className={drawer ? 'w-screen h-screen fixed bg-black/[0.5] top-0 left-0 ease-in duration-300' : ''} onClick={clickOverlay}>
        <div className={drawer ? 'w-[75%] bg-white h-screen fixed ease-in duration-500 top-0 left-0 sm:w-[55%] p-8' : 'fixed top-0 -left-[100%] p-8'} ref={drawerRef}>
          <div className='flex items-center justify-between'>
            <img src="/assets/img/logo.svg" className='w-[9rem] cursor-pointer' />
            <div className='cursor-pointer shadow-md shadow-gray-400 rounded-full p-1' onClick={() => setDrawer(false)}>
              <AiOutlineClose size={12} />
            </div>
          </div>
          <div className='border-b border-gray-300 my-5'></div>
          <div>
            <ul className='gap-10 items-center'>
              {navTabs.map((tab, index) => {
                return (
                  <React.Fragment key={index}>
                    {tab.submenu ? (<li key={index} className='cursor-pointer font-semibold flex gap-2 items-center text-sm relative my-5 tracking-wider' onMouseEnter={() => setpropertySub(true)} onMouseLeave={() => setpropertySub(false)}>
                      {tab.name}
                      <BsChevronDown size={12} />
                      {propertySub && (
                        <ul className='absolute top-[21px] bg-white shadow-md min-w-[100px]'>
                          {propSub.map((propItem, index) => {
                            return (
                              <li key={index} className='hover:bg-purple-100 rounded-md px-3 py-[6px] tracking-wider'>{propItem.name}</li>
                            )
                          })}
                        </ul>
                      )}
                    </li>) : <li key={index} className='cursor-pointer font-semibold item-center my-5 tracking-wider'>
                      {tab.name}</li>}
                  </React.Fragment>
                )
              })}
            </ul>
          </div>
          <div className='flex gap-3 my-10'>
            <button className='flex items-center border-[1px] rounded-md font-semibold text-sm px-4 py-2 tracking-wide hover:bg-gray-100'>Log In</button>
            <button className='flex items-center rounded-md text-sm bg-[#6230a3] text-white font-semibold px-4 py-2 tracking-wide hover:bg-purple-700'>Sign Up</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
