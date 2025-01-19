import React from 'react'

const SidePanel = () => {
  return (
    <div className=' shadow-2xl p-3 lg:p-5 rounded-md'>
        <div className='flex items-center justify-between '>
            <p className='mt-0 font-bold text-[25px] '>Ticket Price</p>
            <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8
            text-slate-900 font-semibold'>500 BDT</span>
        </div>

        <div className='mt-[30px]'>
            <p className='text-[16px] lg:text-[20px] mt-0 font-semibold text-slate-900
            '>
                Available Time Slots:

            </p>
            <ul className='mt-3'>
            <li className='flex items-center justify-between mb-2'>
                <p className='text-[15px] lg:text-[17px]  leading-6 text-gray-600
                    font-semibold'>Sunday</p>
                    <p className='text-[15px] lg:text-[17px] leading-6 text-gray-600
                    font-semibold'>4:00 PM - 9:30 PM</p>
                </li>

                <li className='flex items-center justify-between mb-2'>
                <p className='text-[15px] lg:text-[17px] leading-6 text-gray-600
                    font-semibold'>Tuesday</p>
                    <p className='text-[15px] lg:text-[17px] leading-6 text-gray-600
                    font-semibold'>10:00 AM - 4:30 PM</p>
                </li>

                <li className='flex items-center justify-between mb-2'>
                <p className='text-[15px] lg:text-[17px] leading-6 text-gray-600
                    font-semibold'>Friday</p>
                    <p className='text-[15px] lg:text-[17px] leading-6 text-gray-600
                    font-semibold'>2:00 PM - 6:30 PM</p>
                </li>

            </ul>
            <div className='flex justify-center'> 
            <button className=' bg-sky-600 rounded-[10px]  hover:bg-sky-700  text-white py-1 px-3 
             md:py-2 w-full  md:text-[20px]  font-[600] md:h-[44px]'> Book Appoinment</button>

            </div>
            
        
        </div>
      
    </div>
  )
}

export default SidePanel
