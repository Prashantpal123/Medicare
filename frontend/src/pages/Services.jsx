import React from 'react'
import Service_card from '../components/Services/Service_card'

const Services = () => {
  return (
    <>
      <div className=' bg-[#fff9ea] md:py-8'>


        <div className=''>
          <h1 className='font-[700] leading-8 text-[30px] text-center'> Our Medical services</h1>

          <div className='flex justify-center mt-2  md:mt-3'>
            <p className='md:text-[20px]   lg:w-1/3 text-center' >World class care for everyone. OUr health system offers
              unmatched, expert health care.</p> </div>

        </div>
        <div className=' md:my-9'>
          <Service_card />
        </div>
      </div>
    </>

  )
}

export default Services
