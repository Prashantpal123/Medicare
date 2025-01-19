import React from 'react'
import { useState } from 'react'
import { AiFillStar } from "react-icons/ai";


const Feedback_form = () => {

 const [rating, setrating] = useState(0)
 const [hover, sethover] = useState(0)
const [review, setreview] = useState()
const handleSubmitReview =async e=>
{
  e.preventDefault()
}

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
     <div className='flex
     justify-center'>
     <button className=' bg-sky-600 rounded-[50px]  hover:bg-sky-700  text-white py-1 px-3  md:py-2 md:px-6 md:text-[20px]  font-[600] md:h-[44px] '
     type='submit' onClick={handleSubmitReview}>
        Submit Feedback
    </button>
     </div>
   



    </form>
  )
}

export default Feedback_form
