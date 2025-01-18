import React from 'react'
import { useState } from 'react'
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

const Faq_item = ({item}) => {
 
    const [isOpen, setisOpen] = useState(false);

    const toggleopen= ()=>{
        setisOpen(!isOpen)
    }


  return (
    <div className='p-3 lg:p-5 rounded-[12px] border border-solid 
    border-[#D9DeC2] mb-5 cursor-pointer  '>
      <div className='flex items-center justify-between gap-5' onClick={toggleopen}>
        <h4 className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-gray-900'>
            {item.question}
        </h4>
        <div className={`${isOpen && "text-white border none"}
         w-7 h7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center`}>
            {isOpen ?<AiOutlineMinus className='text-black' />:<AiOutlinePlus />}

        </div>
      </div>
       {isOpen && <div className='mt-4'>
        <p className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-gray-600'>{item.content}</p>
       </div> }


    </div>


  )
}

export default Faq_item
