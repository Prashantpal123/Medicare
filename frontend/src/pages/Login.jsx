import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Login = () => {
  const [formData, setformData] = useState({
    email: "",
    password:""
  })
  const handleInputChange= e =>{
    setformData({...formData, [e.target.name]:e.target.value})
  }
  return (
    <section className='px-5 lg:px-0 mt-4 md:mt-20'>
      <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
        <h3 className='text-slate-900 text-[22px] leading-9 font-bold md:mb-8'>
         Hello ! <span className='text-sky-600 '>Welcome</span> Back 🎉
        </h3>
      <form action="" className='py-4 md:py-0'>
      <div className='mb-5'>
          <input
           type='email'
            placeholder='Enter Your Email' 
            name='email'
            value={formData.email}
            onChange={handleInputChange} 
           className='w-full px-4 py-3 border-b border-solid 
           border-[#0066ff61]
           focus:outline-none placeholder:text-slate-600
            rounded-md cursor-pointer text-gray-600 text-[20px] '
            required />
        </div>

        <div className='mb-5'>
          <input
           type='Password'
            placeholder='Password' 
            name='password'
            value={formData.password}
            onChange={handleInputChange} 
           className='w-full px-4 py-3 border-b border-solid 
           border-[#0066ff61]
           focus:outline-none placeholder:text-slate-600
            rounded-md cursor-pointer text-gray-600 text-[20px] '
            required />
        </div>

        <div className='flex justify-center md:mt-8'>
          <button className='bg-blue-600 hover:bg-blue-700 text-white text-[20px] py-1 md:px-40 
          px-32 rounded-[10px] font-[600]'>Login</button>
        </div>
        <p className='mt-5 text-gray-500 text-center '>
          Don&apos;t have an account?{" "}
          <Link to="/register" className='text-sky-600 font-medium ml-1'>Register</Link>

        </p>

      </form>

      </div>

    </section>
  )
}

export default Login
