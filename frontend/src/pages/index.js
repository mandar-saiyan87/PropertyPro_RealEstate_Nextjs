import React from 'react';
import Search from '../components/Search/Search';
import PropertyCard from '../components/PropertyCard';

import RealEstateData from '@/data/data';




export default function Home() {
  return (
    <>
      <div className='w-full max-w-[1536px] flex items-center justify-center h-full max-h-[640px] m-auto mt-6'>
        <div className='w-full flex md:flex-row items-center'>
          <div className='flex p-10 justify-center text-center md:text-left'>
            <div className='md:max-w-[70%]'>
              <h1 className='font-bold text-3xl text-[#0D263B] lg:-tracking-[0.03em] lg:text-5xl xl:text-6xl '>
                <span className='text-[#6230a3]'>Discover </span>
                A Place<br />{`You'll Love to Live`}
              </h1>
              <p className='font-normal text-[#7C8893] md:text-sm lg:text-base mt-8'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae tempora atque quo tempore sit iure eum minus.
                Nostrum rem reprehenderit perspiciatis iure officiis
              </p>
            </div>
          </div>
          <div className='hidden md:flex'>
            <img src="/assets/img/house-banner.png" alt="banner" className='' />
          </div>
        </div>
      </div>
      {/* <div className='bg-blue-300 w-full max-w-[1536px] px-10 m-auto'> */}
      <Search />
      {/* </div> */}
      <div className='w-full max-w-[1536px] px-4 my-10 mx-auto flex items-center justify-center md:px-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3'>
          {RealEstateData.map((data, index) => {
            return (
              <PropertyCard data={data} key={index} image={data['img_url']} />
            )
          })}
        </div>
      </div>
    </>
  )
}
