import React from 'react'
import { formateDate } from '../../../utils/formateDate'

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, adipisci nihil! Sed
          accusamus dicta tempore doloremquequam nam dolore cumque iusto mollitia quia nihil consequuntur expedita
          eos ad aliquam atque, facere sapiente est, optiosequi, laudantium vitae modi vel repellendus?
          Earum, nostrum accusamus libero assumenda repellat incidunt dolores quas? Eveniet exercitationem
          quae totam nemo tempora molestiae harum cumque veritatis minima, debitis quod perspiciatis praesentium
          reprehenderit quia excepturi a at ducimus? Asperiores animireprehenderit sunt molestiae numquam. Accusamus digni
          voluptas, non minus fuga animi voluptates veritatis dicta eveniet magni rem quisquam cupiditate a
          ex, rerum voluptate dolorum ullam, voluptatibus qui nobis earum! Voluptas, neque nam quide
        </p>
      </div>
      <div className='mt-12 '>
        <h3 className='text-[20px] leading-[30px] text-slate-900 
          font-semibold'>
          Education
        </h3>
        <ul className='pt-4 md:p-5'>
          <li className='flex flex-col sm:flex-row sm:justify-between
            sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-sky-400 text-[15px] leading-6 font-semibold
                '>
                {formateDate("09-13-2010")} -   {formateDate("05-7-2012")}

              </span>
              <p className='text-[16px] leading-6 font-medium text-slate-700'>
                PHD in Surgeon
              </p>
            </div>

            <p className='text-[14px] leading-5 font-medium text-slate-700'>
              New Apollo Hospital, New York
            </p>

          </li>


          <li className='flex flex-col sm:flex-row sm:justify-between
            sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-sky-400 text-[15px] leading-6 font-semibold
                '> {formateDate("04-1-2007")} - {formateDate("07-6-2009")}

              </span>
              <p className='text-[16px] leading-6 font-medium text-slate-700'>
                PHD in Surgeon
              </p>
            </div>

            <p className='text-[14px] leading-5 font-medium text-slate-700'>
              New Apollo Hospital, New York
            </p>

          </li>

        </ul>

      </div>


      <div className='mt-12'>
      <h3 className='text-[20px] leading-[30px] text-slate-900 
          font-semibold'>
            Experience
          </h3>
          <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
          <li className='p-4 max-w-[350px] rounded bg-[#fff9ea]'>
              <span className='text-yellow-500 text-[15px] leading-6 
              font-semibold'>
                {formateDate("07-04-2010")}- {formateDate("08-13-2014")}

              </span>
              <p className='text-[15px] leading-6 font-medium text-gray-600'>
                Sr. Surgeon
              </p>
              <p className='text-[14px] leading-5 font-medium text-slate-700'>
              New Apollo Hospital, New York
            </p>
            </li>
            <li className='p-4 max-w-[350px] rounded bg-[#fff9ea]'>
              <span className='text-yellow-500 text-[15px] leading-6 
              font-semibold'>
                {formateDate("07-04-2010")}- {formateDate("08-13-2014")}

              </span>
              <p className='text-[15px] leading-6 font-medium text-gray-600'>
                Sr. Surgeon
              </p>
              <p className='text-[14px] leading-5 font-medium text-slate-700'>
              New Apollo Hospital, New York
            </p>
            </li>

          </ul>
            
      </div>

    </div>
  )
}

export default MyDetails