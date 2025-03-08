import React from 'react'
import doctorimg from '../../assets/doctor-img02.png'
import star from "../../assets/Star.png"
import { useState } from 'react'
import Doctor_about from './Doctor_about'
import Feedback from './Feedback'
import SidePanel from './SidePanel'
import UseFetchData from '../../Hooks/UseFetchData'
import { BASE_URL, token } from '../../config'
import { useParams } from 'react-router-dom'
const Doctordetail =  () => {
  const { id } = useParams();
 const [tab, settab] = useState()
 const { data, loading, error } = UseFetchData(`${BASE_URL}/api/v1/doctors/${id}`);
 if (loading) return <div>Loading...</div>; // Show loading message while fetching
 if (error) return <div>Error: {error}</div>;


 const doctor = data.data;
 
 console.log(token);
 

 


  return (
    <div className='max-w-[1270px] px-5 mx-auto md:flex md:justify-between'>
      <div className='grid md:grid-col-3  gap-[50px] md:mt-16 '>
        <div className='md:col-span-2'>
          <div className='flex items-center gap-5'>
            <figure className=' max-w-[300px] '>
              <img src={doctor.photo} alt="" />
            </figure>
            <div>
              <span className='bg-[#ccf0f3] text-emerald-400 py-1 px-6 lg:py-2 lg:px-8 text-[12px]
              leading-4 lg:text-[18px] lg:leading-7 font-semibold rounded'>
                 {doctor.specialization}
              </span>
              <h3 className='text-slate-900 text-[22px] lg:text-[28px] leading-9 mt-3 font-bold'>
               {doctor.name}
              </h3>
              <div className='flex items-center gap-[6px]'>
                <span className='flex items-center gap-[6px] text-[14px]  leading-5 lg:text-[16px]
                lg:leading-7 font-semibold text-slate-900'>
                  <img src={star} alt="img" />4.8

                </span>
                <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-gray-700
                '>(272)

                </span>
              </div>
              <p className='text-[14px] leading-5 md:text-[18px] md:mt-4 text-slate-600 lg:max-w-[390px]'>
                Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Cupiditate, cum.
              </p>
            </div>
          </div>


          <div className='mt-[50px] border-b border-solid 
          border-[#0066ff34]'>
            <button onClick={()=>settab("about")}
              className={`${ tab=="about" && 'border-b border-solid border-sky-600'} py-2 px-5 mr-5 md:text-[20px] text-[16px] leading-7
                 text-slate-900 
              font-semibold`}>
                About

            </button>
            <button onClick={()=>settab('feedback')}
              className={`${ tab=="feedback" && 'border-b border-solid border-sky-600'}   py-2 px05 mr5 text-[16px] md:text-[20px] leading-7
               text-slate-900 font-semibold`}>
                Feedback 
              
              
            </button>

          </div>


          <div className='mt-[50px]'>

          {tab==="about" && <Doctor_about doctor={doctor}/>}
          {tab==="feedback" && <Feedback/>}
          </div>
        
        </div>
        
      
      </div>
      <div className='md:min-w-[400px] md:mt-[56px] '>  <SidePanel/></div>

    </div>
  )
}

export default Doctordetail
