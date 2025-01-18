import React from 'react'
import Doctor_card from './../../components/Doctors/Doctor_card'
import {doctors} from './../../assets/data/Doctor'

const Doctors = () => {
  return (
    <div className='doctor_container bg-[#fff9ea] md:pt-12'>
      
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
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>

{doctors.map((doctor)=>(
   <Doctor_card key={doctor.id} doctor={doctor}/>
))}

</div>
</div>


    </div>
  )
}

export default Doctors
