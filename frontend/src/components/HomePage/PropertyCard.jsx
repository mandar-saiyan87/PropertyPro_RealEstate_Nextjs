import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { BiBed, BiBath, BiShapeSquare } from 'react-icons/bi'

const PropertyCard = ({ data }) => {

  return (
    <>
      <Link href={{ pathname: `/propertyDetails/${data.property_name}`, query: data }} className='w-full flex flex-col rounded-lg shadow-md max-h-[450px] xl:max-h-[390px] cursor-pointer hover:scale-[1.07] ease-in duration-300'>

        <Image src={data.img_url} width={800} height={800} className='rounded-t-lg w-full h-[55%]' alt={data.property_name} />
        {/* <img src={data.img_url} alt="image" className='rounded-t-lg w-full h-[55%]' /> */}

        <div className='mt-3 px-3'>
          <h1 className='text-purple-500 text-xl font-semibold'>$ {data.amount}</h1>
          <h1 className='my-2 text-xl font-semibold'>{data.property_name}</h1>
          <h3 className='my-3 text-slate-400'>{data.address}</h3>
          <div className='my-5 grid gap-2 grid-cols-2 xl:grid-cols-3'>
            <div className='flex items-center'>
              <BiBed size={19} color='#BC7AF9' className='mr-1' />
              <div className='text-sm text-slate-400'>{data.bedrooms}</div>
            </div>
            <div className='flex items-center'>
              <BiBath size={19} color='#BC7AF9' className='mr-1' />
              <div className='text-sm text-slate-400'>{data.bathrooms}</div>
            </div>
            <div className='flex items-center'>
              <BiShapeSquare size={19} color='#BC7AF9' className='mr-1' />
              <div className='text-sm text-slate-400'>{data.area}</div>
            </div>
          </div>
        </div>

      </Link>
    </>

  )
}

export default PropertyCard