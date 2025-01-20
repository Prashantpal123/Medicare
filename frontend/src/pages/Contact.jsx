import React from 'react'

const Contact = () => {
  return (
  <section>
    <div className='px-4 mx-auto max-w-screen-md '>
      <h2 className='text-center font-bold mt-4 text-[20px] md:text-[30px]'>Contact us 
      

      </h2>
      <p className='md:mb-8  font-light text-center text-gray-600'>
        Got a technical issue? want to send feedback about a beta feature


      </p>
      <form action="#" className='md:space-y-8 space-y-3'>
      <div>
          <label htmlFor="email" className='form_label'>
            Your Email
          </label>
          <input type="email" id='email' placeholder='example@gmail.com' 
          className='form_input mt-1 border'/>
        </div>

        <div>
          <label htmlFor="subject" className='form_label'>
            Your Subject
          </label>
          <input type="text" id='subject' placeholder='let us know how we can help you' 
          className='form_input mt-1 border'/>
        </div>


        <div className='sm:col-span-2'>
          <label htmlFor="message" className='form_label'>
            Your Message
          </label>
          <textarea type="text" id='message' placeholder='leave a comment......'
          rows="6"
          className='form_input mt-1 border'/>
        </div>
        <div className='flex justify-center md:mt-8'>
                <button className='bg-red-600 hover:bg-red-700 text-white text-[15px] py-1 md:text-[20px] md:px-40 
          px-32 rounded-[10px] font-[600]'>Submit</button>
              </div>

      </form>

    </div>
  </section>
  )
}

export default Contact
