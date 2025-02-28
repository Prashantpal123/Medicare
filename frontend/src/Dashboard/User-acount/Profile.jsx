import React, { useContext, useEffect } from 'react'

import { useNavigate, useSubmit } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import HashLoader from "react-spinners/HashLoader"


import { BASE_URL,token} from "../../config"
import uploadImageToClodinary from "./../../../utils/uploadCloudinary"
import { authContext } from '../../context/Authcontext'
const Profile = ({user}) => {
   const {dispatch}= useContext(authContext)
  const [tab, settab] = useState('bookings')
 
  const [selectedfile, setselectedfile] = useState(null)

  const [formData, setformData] = useState({
    name:"",
    email:"",
    password:"",
    photo: null,
    gender: "",
    role: "patient",
    bloodType:"", 
  })
  const navigate = useNavigate()
  useEffect(()=>{setformData({})},[user])

  const handleInputChange = e => {
    setformData({ ...formData, [e.target.name]: e.target.value })
  };


  const handleFileInputChange = async (event) => {
    const file = event.target.files[0]
    const data = await uploadImageToClodinary(file);

    setselectedfile(data.url)
    setformData({ ...formData, photo: data.url })

  };


  const submitHandler = async (event) => {
    event.preventDefault();
    ;

    try {
      // Check if photo exists in formData to determine the format
      const isFileUpload = formData.photo instanceof File;

      const requestBody = isFileUpload
        ? (() => {
          const formDataToSend = new FormData();
          Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
          });
          return formDataToSend;
        })()
        : JSON.stringify(formData);

      const headers = isFileUpload ? {} : { "Content-Type": "application/json" };

      const res = await fetch(`${BASE_URL}/api/v1/users/${user._id}`, {
        method: "PUT",
        headers,
        body: requestBody,
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      toast.success(message);
      navigate("/users/profile/me"); // Redirect to login on success
    } catch (error) {
      console.error("Error in registration:", error);
      toast.error(error.message || "Something went wrong. Please try again.");

    }
  };


  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <div className='mb-5'>
          <input
            type='text' placeholder='Full Name' name='name' value={formData.name} onChange={handleInputChange} className='w-full px-4 py-3 border-b border-solid 
           border-[#0066ff61]  focus:outline-none placeholder:text-slate-600   rounded-md cursor-pointer text-gray-600 text-[20px] '
            required /> </div>
        <div className='mb-5'>
          <input
            type='email' placeholder='Enter Your Email' name='email' value={formData.email} onChange={handleInputChange}
            className='w-full px-4 py-3 border-b border-solid 
           border-[#0066ff61]
           focus:outline-none placeholder:text-slate-600
            rounded-md cursor-pointer text-gray-600 text-[20px] '
            required />
        </div>
        <div className='mb-5'>
          <input
            type='password' placeholder='Password' name='password' value={formData.password} onChange={handleInputChange} className='w-full px-4 py-3 border-b border-solid 
           border-[#0066ff61] focus:outline-none placeholder:text-slate-600 rounded-md cursor-pointer text-gray-600 text-[20px] '  required /> </div>

<div className='mb-5'>
          <input
            type='text' placeholder='Blood Type' name='bloodType' value={formData.bloodType} onChange={handleInputChange} className='w-full px-4 py-3 border-b border-solid 
           border-[#0066ff61] focus:outline-none placeholder:text-slate-600 rounded-md cursor-pointer text-gray-600 text-[20px] '  required /> </div>
        <div className='mb-5 flex items-center justify-between'>

          <label className='text-slate-900 font-bold text-[16px]   leadin-7'>   Gender <select name="gender" id="
              "    value={formData.gender} onChange={handleInputChange} className='text-gray-600 font-semibold text-[15px]  leading-7 px-4
              py-3 focus:outline-none'> <option value="Male">Male</option> <option value="Doctor">Female</option> </select> </label> </div>
        <div className='mb-5 flex items-center gap-3'>  {formData.photo && <figure className='w-[50px] h-[50px]  rounded-full border-2 border-solid border-sky-600 flex items-center justify-center'>
          <img className='w-[50px] h-[50px] rounded-full' src={formData.photo} alt="" /> </figure>}
          <div className='relative w-[120px] h-[40px]'> <input type="file"
            name="photo" id="customfile" onChange={handleFileInputChange} accept='.jpg, .png' className='absolute top-0 left-0w-full h-full opacity-0  cursor-pointer' />
            <label
              htmlFor="customfile"
              className='absolute md:ml-4 top-0 left-0 w-full h-full flex items-center
                    px-[0.7rem] py-0.375rem] text-[15px] leading-6 overflow-hidden
                    bg-blue-600  hover:bg-blue-700 text-white font-bold
                    rounded-lg truncate cursor-pointer'
            >Upload Picture</label>
          </div>  </div>
        <div className='flex justify-center md:mt-8'>
          <button type='submit' className='bg-green-600 hover:bg-green-700 text-white text-[20px] py-1 md:text-[20px] md:px-20 
          px-32 rounded-[10px] font-[600]'>Update</button>   </div>
        


       
      </form>

    </div>
  )
}

export default Profile
