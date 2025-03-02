import React from 'react'
import { BASE_URL } from '../../config'
import Doctor_card from './../../components/Doctors/Doctor_card'

import { useState } from 'react'
import { useEffect } from 'react'
import useFetchData from '../../Hooks/usefetchData'

const Doctors = () => {
  const { data, loading, error } = useFetchData(`${BASE_URL}/api/v1/doctors/`); // Pass the API URL to the hook

  if (loading) return <div>Loading...</div>; // Show loading message while fetching
  if (error) return <div>Error: {error}</div>;
 console.log(data)
 console.log(data.data);
 
  
  return (
    <div className='doctor_container flex justify-center  bg-[#fff9ea] md:pt-10  w-full'>
      <div className='max-w-[1100px] '>
      
    <div className='text-center flex flex-col items-center   '>
      <h2 className='md:font-bold md:text-[30px]  text-slate-800   '>Find a Doctor</h2>
      <div className='max-w-[570px] mt-[20px]  mx-3 py-0 bg-[#0066ff2c]
      rounded-md flex items-center justify-between'>
         
        <input type="search" name="" id="" 
        className='md:py-1 pl-4 pr-2 bg-transparent w-full text-[24px] focus:outline-none cursor-pointer
        placeholder:text-gray-500 md:w-[1200px]'
        />
         <button className='bg-sky-600 h-full rounded-md px-3 hover:bg-sky-700 py-1
           md:py-2 md:px-3 font-semibold text-[19px]  md:text-[24px] text-white mt-0 '>Search</button>
        
      </div>
     

    </div>
    <div className='flex justify-center'>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px]'>

{data.data.map((doctor)=>(
   <Doctor_card key={doctor.id} doctor={doctor}/>
 
   
))
}

</div>
</div>


</div>

    </div>
  )
}

export default Doctors
