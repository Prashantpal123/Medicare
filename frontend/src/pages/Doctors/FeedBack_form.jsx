import React from 'react'
import { useState } from 'react'
import { AiFillStar } from "react-icons/ai";


const Feedback_form = () => {

 const [rating, setrating] = useState(0)
 const [hover, sethover] = useState(0)
const [review, setreview] = useState()

  return (
    <form action="">
     <div>
        <h3 className='text-slate-900 text-[16px] font-semibold
        mb-4 '>
            How would you rate the overall experience share your feedback or suggestion !

        </h3>
        <textarea name="" id="" className='border border-solid border-[#0066ff34]
        focus:outline outline-sky-700 w-full px-4 py-3 rounded-md' rows="5"
        placeholder='Write Your Message'
        onChange={e=>setreview(e.target.value)}
        ></textarea>
   
     </div>



    </form>
  )
}

export default Feedback_form
