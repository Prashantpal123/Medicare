import React from 'react';
 import star from "./../../assets/Star.png"
 import { Link, NavLink } from 'react-router-dom'
import { BsArrowRightCircle } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import useFetchData from '../../Hooks/usefetchData';
import { BASE_URL } from '../../config';


const Doctor_card = ({doctor}) => {
  const { data, loading, error } = useFetchData(`${BASE_URL}/api/v1/doctors/`);

 
  const navigate = useNavigate();

const {name,avgRating,totalRating,photo,specialization,totalPatients,hospital,}=doctor;


  return (<>
    <div className='p-3 lg:p-5 '>
       <div>
        <img src={photo} alt="" className='' />
       </div>
       <h2 className='text-[18px] leading-[30px] lg:text-[20px] lg:leading-9 font-[700] mt-3  '>{name}</h2>
        <div className='  flex items-center justify-between'>
           <span className='bg-[#ccf0f3] text-sky-400 py-1 px-2  text-[12px] rounded
           leading-4 lg:text-[16px] lg:leading-7 font-semibold'>
           
           {specialization}
           </span>

           <div className='flex items-center gap-[6px]'>
             <span className='flex items-center gap-[6px]  text-[14px] leading-6 lg:leading-7
             font-bold '>
                <img src={star} alt="" />{avgRating}
             </span>
             <span className='text-[14px] leading-6  lg:leading-7 font-[400] text-gray-600 '>({totalRating})
             </span>
           </div>
        </div>
        <div className='flex items-center justify-between'>
             <div>
                <h3 className='text-[16px] leading-7  lg:leading-[30px] font-semibold text-zinc-900'>{totalPatients} Patients</h3>
            <p className='text-[14px] lead6 font-[400] text-gray-500'> At {hospital}</p>
             </div>
             <button       onClick={() => navigate(`/doctors/${doctor._id}`)} className='flex justify-center mt-3 '>
                          <BsArrowRightCircle className='text-[40px] text-gray-700 hover:bg-blue-700 rounded-full hover:text-white hover:border-black ' />
            
                      </button>
        </div>
    
    </div>
    </>
  )
}

export default Doctor_card
