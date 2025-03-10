import React from 'react'
import Doctor_card from './Doctor_card'
import {doctors} from './../../assets/data/Doctor'

const DoctorList = () => {
  return (
    <>
       <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-5 lg:gap-[30px] mt-[30px]'>

{doctors.map((doctor)=>(
   <Doctor_card key={doctor.id} doctor={doctor}/>
))}

</div>

    </>
  )
}

export default DoctorList
