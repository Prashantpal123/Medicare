import React from 'react'
import avatar from "./../../assets/avatar-icon.png"
import { formateDate } from '../../../utils/formateDate'
import { AiFillStar } from "react-icons/ai";
import Feedback_form from './FeedBack_form';
import { useState } from 'react';

const Feedback = () => {
  const [showfeedbackform, setshowfeedbackform] = useState(false)
  return (
    <div>
     <div className='mb-[50px]'>
      <h4 className='text-[20px] leading-[30px] font-bold text-slate-900 mb-[30px]'>
         all  reviews (272)

      </h4>
      <div className='flex justify-between gap-10 mb-[30px]'>
        <div className='flex gap-3'>
          <figure className='w-10 h-10 rounded-full'>
            <img src={avatar} className='w-full' alt="" />
          </figure>
          <div>
            <h5 className='text-[16px] leading-6 text-sky-600 font-bold'>
             Vivek Kumar
            </h5>
            <p className='text-[14px] leading-6 text-gray-600   '>
              {formateDate("02-14-2023")}
            </p>
            <p className='mt-3 font font-medium text-[15px] '>
           Good services ,highly recommended 
            </p>
          </div>
        </div>


        <div className='flex gap-1'>
          {[...Array(5).keys()].map((_,index)=>(<AiFillStar key={index} color='#0067ff' />))}

        </div>

      </div>
     </div>
    {
      !showfeedbackform &&  (<div className='flex
        justify-center'>
        <button className=' bg-sky-600 rounded-[50px]  hover:bg-sky-700  text-white py-1 px-3  md:py-2 md:px-6 md:text-[20px]  font-[600] md:h-[44px]  '
         onClick={()=>setshowfeedbackform(true)}>
           Give Feedback
       </button>
        </div>)
    }
      



    {showfeedbackform && <Feedback_form/>}


    </div>
  )
}

export default Feedback
