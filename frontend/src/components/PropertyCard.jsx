import React from 'react'
import Image from 'next/image'

import { BiBed, BiBath, BiShapeSquare } from 'react-icons/bi'

import RealEstateData from '../data/data'

const PropertyCard = ({ data }) => {

  // const data = RealEstateData[0]
  // console.log(image)

  return (
    <>
      <div className='w-full flex flex-col rounded-lg shadow-md max-h-[450px] xl:max-h-[390px]'>
        <Image src={data.img_url} width={800} height={800} className='rounded-t-lg w-full h-[55%]' alt={data.property_name} />
        {/* <img src={data.img_url} alt="image" className='rounded-t-lg w-full h-[55%]' /> */}

        <div className='mt-3 px-3'>
          <h1 className='text-purple-500 text-xl font-semibold'>$ {data.amount}</h1>
          <h1 className='my-2 text-xl font-semibold'>{data.property_name}</h1>
          <h3 className='my-3 text-slate-400'>{data.address}</h3>
          <div className='my-5 grid gap-2 grid-cols-2 xl:grid-cols-3'>
            <div className='flex items-center'>
              <BiBed size={19} color='#BC7AF9' className='mr-1' />
              <div className='text-sm text-slate-400'>{data.property_features[0]}</div>
            </div>
            <div className='flex items-center'>
              <BiBath size={19} color='#BC7AF9' className='mr-1' />
              <div className='text-sm text-slate-400'>{data.property_features[1]}</div>
            </div>
            <div className='flex items-center'>
              <BiShapeSquare size={19} color='#BC7AF9' className='mr-1' />
              <div className='text-sm text-slate-400'>{data.property_features[2]}</div>
            </div>
          </div>
        </div>

      </div>
    </>

  )
}

export default PropertyCard