import React from 'react'
import { formateDate } from '../../../utils/formateDate'
import { data } from 'react-router-dom'

const MyDetails = ({user}) => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-slate-900
      font-semibold flex items-center gap-2'>
          About of
          <span className='text-sky-400 font-bold
         text-[24px] leading-9'>
        {user.name}

          </span>
        </h3>
        <p className='text-gray-600 '>
         {user.about}
        </p>
      </div>
      <div className='mt-12 '>
        <h3 className='text-[20px] leading-[30px] text-slate-900 
          font-semibold'>
       Education
        </h3>
        <ul className='pt-4 md:p-5'>
          {user?.education?.map((data,index)=>(
         <li key={index} className='bg-gray-300 p-2 rounded-md flex flex-col sm:flex-row sm:justify-between
         sm:items-end md:gap-5 mb-[30px]'>
         <div>
           <span className='text-sky-400 text-[15px] leading-6 font-semibold
             '>
             {data.startdate} -   {data.enddate}

           </span>
           <p className='text-[16px] leading-6 font-medium text-slate-700'>
          {data.course}
           </p>
         </div>

         <p className='text-[14px] leading-5 font-medium text-slate-700'>
          {data.college}
         </p>

       </li>

          ))}
         


       

        </ul>

      </div>


      <div className='mt-12'>
      <h3 className='text-[20px] leading-[30px] text-slate-900 
          font-semibold'>
            Experience
          </h3>
          <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
          

          {
            user?.experience?.map((exp,index)=>(
              <li key={index} className='p-4 max-w-[350px] rounded bg-[#fff9ea]'>
              <span className='text-yellow-500 text-[15px] leading-6 
              font-semibold'>
                {exp.startdate}- {exp.enddate}

              </span>
              <p className='text-[15px] leading-6 font-medium text-gray-600'>
                {exp.role}
              </p>
              <p className='text-[14px] leading-5 font-medium text-slate-700'>
           {
            exp.hospital
           }
            </p>
            </li>
            )) 

          }
        
          
          </ul>
            
      </div>

    </div>
  )
}

export default MyDetails