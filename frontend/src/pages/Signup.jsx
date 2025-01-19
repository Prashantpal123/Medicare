import React from 'react'
import signupImg from "../assets/signup.gif"
import avatar from "./../assets/avatar-icon.png"
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Signup = () => {

  const [selectedfile, setselectedfile] = useState(null)
  const [previewUrl, setpreviewUrl] = useState(null)
  const [formData, setformData] = useState({
    name: "",

    email: "",
    password: "",
    photo: selectedfile,
    gender: "",
    role: "patient"
  })
  const handleInputChange = e => {
    setformData({ ...formData, [e.target.name]: e.target.value })
  };


  const handleFileInputChange = async(event)=>{
    const file=event.target.files[0]
    
  };
  const submitHandler= async event=>{
    event.preventDefault();
  }

  return (
    <section className='px-5 xl:px-0'>
      <div className='max-w-[1170px] md:mt-24 mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {/*=======img box ==========*/}
          <div className='hidden lg:block bg-sky-600 rounded-2xl '>
            <figure className=''>
              <img src={signupImg} alt="img" className='w-full rounded-md' />

            </figure>
          </div>


          {/*=========signup form=======*/}
          <div className='rounded-l-lg lg:pl-16 py-10'>
            <h3 className='text-slate-900 text-[22px] md:text-[36px] leading-9
          font-bold mb-10'>
              Create an <span className='text-sky-600'>account</span>

            </h3>
            <form action="" onSubmit={submitHandler}>


              <div className='mb-5'>
                <input
                  type='text'
                  placeholder='Full Name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}

                  className='w-full px-4 py-3 border-b border-solid 
           border-[#0066ff61]
           focus:outline-none placeholder:text-slate-600
            rounded-md cursor-pointer text-gray-600 text-[20px] '
                  required />
              </div>

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
                  type='password'
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



              <div className='mb-5 flex items-center justify-between'>
                <label
                  className='text-slate-900 font-bold text-[16px]  md:text-[20px] leadin-7'>
                  Are you a
                  <select name="role" id="
              "
                    value={formData.role}
                    onChange={handleInputChange}
                    className='text-gray-600 font-semibold text-[15px] md:text-[18px]  leading-7 px-4
              py-3 focus:outline-none'>
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>


                <label
                  className='text-slate-900 font-bold text-[16px] md:text-[20px]  leadin-7'>
                  Gender
                  <select name="gender" id="
              "
                    value={formData.gender}
                    onChange={handleInputChange}
                    className='text-gray-600 font-semibold text-[15px] md:text-[18px] leading-7 px-4
              py-3 focus:outline-none'>
                    <option value="Male">Male</option>
                    <option value="Doctor">Female</option>
                  </select>
                </label>

              </div>

              <div className='mb-5 flex items-center gap-3'>
                <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-sky-600
            flex items-center justify-center'>
                  <img className='w-full' src={avatar} alt="" />
                </figure>
                <div className='relative w-[130px] h-[50px]'>
                  <input
                    type="file"
                    name="photo"
                    id="customfile"
                    onChange={handleFileInputChange}
                    accept='.jpg, .png'
                    className='absolute top-0 left-0w-full h-full opacity-0
                    cursor-pointer'
                  />


                  <label
                    htmlFor="customfile"
                    className='absolute md:ml-4 top-0 left-0 w-full h-full flex items-center
                    px-[0.7rem] py-0.375rem] text-[15px] leading-6 overflow-hidden
                    bg-blue-600  hover:bg-blue-700 text-white font-bold
                    rounded-lg truncate cursor-pointer'
                  >Upload Picture</label>
                </div>
              </div>



              <div className='flex justify-center md:mt-8'>
                <button className='bg-red-600 hover:bg-red-700 text-white text-[20px] py-1 md:text-[25px] md:px-40 
          px-32 rounded-[10px] font-[600]'>Signup</button>
              </div>
              <p className='mt-5 text-gray-500 text-center '>
                Already have an account?{" "}
                <Link to="/register" className='text-sky-600 font-medium ml-1'>Login</Link>

              </p>



            </form>

          </div >

        </div>

      </div>
    </section>
  )
}

export default Signup
