import React from 'react'
import { useSelector } from 'react-redux';

import PropertyCard from './PropertyCard';

const PropertiesView = () => {

  const propertiesList = useSelector(state => state.properties.properties)

  return (
    <div className='w-full max-w-[1536px] px-4 my-10 mx-auto flex items-center justify-center md:px-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3'>
        {propertiesList.map((data) => {
          return (
            <PropertyCard data={data} key={data.id}/>
          )
        })}
      </div>
    </div>
  )
}

export default PropertiesView
