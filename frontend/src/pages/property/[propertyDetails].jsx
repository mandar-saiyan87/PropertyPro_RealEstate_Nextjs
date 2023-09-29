import React from 'react'

import { BiBed, BiBath, BiShapeSquare } from 'react-icons/bi'

const propertyDetails = () => {
  return (
    <div className='w-full max-w-[1536px] m-auto'>
      <div className='px-3 my-6 lg:flex justify-between sm:px-7 md:px-10'>
        <div className='w-full lg:w-[65%] lg:h-[600px]'>
          <div className='flex justify-between items-center'>
            <div>
              <h3 className='font-semibold text-[#0D263B] lg:text-lg'>Property Title Here</h3>
              <p className='text-slate-400 text-sm lg:text-base'>Property Address Here</p>
            </div>
            <div className='text-lg text-purple-500 font-semibold lg:text-xl'>$ 3000</div>
          </div>
          <div className='w-full rounded-lg mt-3' >
            <img src="https://img.staticmb.com/mbcontent/images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg" alt="propimage" className='rounded-lg' />
          </div>

          <div className='flex flex-wrap justify-center gap-4 py-2 my-4 border-[1px] border-slate-400 rounded-lg sm:max-w-[65%] sm:gap-7 sm:py-4 xl:max-w-[50%] xl:gap-9'>
            <div className='flex items-center'>
              <BiBed size={19} color='#BC7AF9' className='mr-1' />
              <div className='text-sm text-slate-400'>3 Bedrooms</div>
            </div>
            <div className='flex items-center'>
              <BiBath size={19} color='#BC7AF9' className='mr-1' />
              <div className='text-sm text-slate-400'>2 Bathrooms</div>
            </div>
            <div className='flex items-center'>
              <BiShapeSquare size={19} color='#BC7AF9' className='mr-1' />
              <div className='text-sm text-slate-400'>1,900 sqft</div>
            </div>
          </div>

          <div className='mt-6'>
            <h3 className='font-semibold text-[#0D263B]'>About this property</h3>
            <p className='text-slate-500 mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Possimus, nihil explicabo fugiat corporis officiis inventore nobis voluptas excepturi.
              Nisi aliquid sit, perferendis sapiente, dicta, corrupti maxime velit voluptatibus accusamus commodi aut consequatur placeat?
              Velit repellendus illo nesciunt reprehenderit. Provident, cum.
            </p>
          </div>
          <div className='py-6 sm:max-w-[50%]'>
            <h3 className='font-semibold text-[#0D263B]'>Overview</h3>
            <div className='flex justify-between items-center my-2'>
              <p className='text-sm text-slate-500'>Listed on</p>
              <p className='text-sm text-[#0D263B] font-semibold'>3 days</p>
            </div>
            <div className='flex justify-between items-center my-2'>
              <p className='text-sm text-slate-500'>Date available</p>
              <p className='text-sm text-[#0D263B] font-semibold'>Available now</p>
            </div>
            <div className='flex justify-between items-center my-2'>
              <p className='text-sm text-slate-500'>Type</p>
              <p className='text-sm text-[#0D263B] font-semibold'>House</p>
            </div>
            <div className='flex justify-between items-center my-2'>
              <p className='text-sm text-slate-500'>Year Built</p>
              <p className='text-sm text-[#0D263B] font-semibold'>2019</p>
            </div>
            <div className='flex justify-between items-center my-2'>
              <p className='text-sm text-slate-500'>City</p>
              <p className='text-sm text-[#0D263B] font-semibold'>Phoenix</p>
            </div>
            <div className='flex justify-between items-center my-2'>
              <p className='text-sm text-slate-500'>Cooling</p>
              <p className='text-sm text-[#0D263B] font-semibold'>Air Conditioner</p>
            </div>
            <div className='flex justify-between items-center my-2'>
              <p className='text-sm text-slate-500'>Parking Area</p>
              <p className='text-sm text-[#0D263B] font-semibold'>Yes</p>
            </div>
          </div>
        </div>
        <div className='bg-[#ecdffc] p-5 rounded-lg lg:w-[30%] lg:h-[90%] lg:mt-5'>
          <h3 className='font-semibold text-[#0D263B] text-center mt-3'>Contact Owner</h3>
          <form action="">
            <div className='flex flex-col my-3 gap-1'>
              <label for="fname" className='text-[#0D263B] text-sm'>Full Name</label>
              <input type="text" id="fname" name="fullname" placeholder='Your full name' className='p-1.5 rounded-md text-sm border-[1px] border-slate-400 focus:outline-none' />
            </div>

            <div className='flex flex-col my-3 gap-1'>
              <label for="email" className='text-[#0D263B] text-sm'>Email</label>
              <input type='email' id="email" name="email" placeholder='Your Email' className='p-1.5 rounded-md text-sm border-[1px] border-slate-400 focus:outline-none' />
            </div>

            <div className='flex flex-col my-3 gap-1'>
              <label for="phone" className='text-[#0D263B] text-sm'>Phone Number</label>
              <input type='number' id="phone" name="phone" placeholder='Phone Number' className='p-1.5 rounded-md text-sm border-[1px] border-slate-400 focus:outline-none' />
            </div>

            <div className='flex flex-col my-3 gap-1'>
              <label for="phone" className='text-[#0D263B] text-sm'>Message</label>
              <textarea type='text' id="phone" name="message" placeholder='Message' rows='5' className='p-1.5 rounded-md text-sm border-[1px] border-slate-400 focus:outline-none' />
            </div>

            <div className='flex justify-center mt-5 mb-7'>
              <button type="submit" className='text-#0D263B border-[1px] border-[#0D263B] tracking-wide py-1 px-16 rounded-md active:opacity-70'>Submit</button>
            </div>

          </form>
        </div>
      </div>
    </div>

  )
}

export default propertyDetails

// < div className = 'bg-[url("https://img.staticmb.com/mbcontent/images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg")] bg-no-repeat bg-cover bg-center w-full h-[350px] lg:h-[580px]' />