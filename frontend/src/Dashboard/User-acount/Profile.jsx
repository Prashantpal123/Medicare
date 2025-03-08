import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BASE_URL } from '../../config';
import uploadImageToCloudinary from '../../../utils/uploadCloudinary';
import { authContext } from '../../context/Authcontext';

const Profile = () => {
  const { dispatch,user,token } = useContext(authContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: null,
    gender: '',
    role: 'patient',
    bloodType: '',
    age: '',
  });
  const [previewSrc, setPreviewSrc] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        password: '',
        photo: user.photo || null,
        gender: user.gender || '',
        role: user.role || 'patient',
        bloodType: user.bloodType || '',
        age: user.age || '',
      });
      setPreviewSrc(user.photo || null);
    }
  }, [user]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const data = await uploadImageToCloudinary(file);
      setFormData({ ...formData, photo: data.url });
      setPreviewSrc(data.url);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/api/v1/users/${user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
         
        body: JSON.stringify(formData),
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }


      navigate('/users/profile/me');
    } catch (error) {
      console.error('Error in updating profile:', error);
     
    }
  };

  return (
    <div className='mt-5  rounded-ful'>
      <form onSubmit={submitHandler} className=' md:p-4  md:bg-slate-300 rounded-md'>
        <div className='mb-5 md:mt-3'>
          <input
            type='text'
            placeholder='Full Name'
            name='name'
            value={formData.name}
            required 
            onChange={handleInputChange}
            className='w-full px-4 py-3  border-b border-solid border-[#0066ff61] focus:outline-none placeholder:text-slate-600 rounded-md cursor-pointer text-gray-600 text-[20px]'
          />
        </div>
        <div className='mb-5'>
          <input
            type='email'
            placeholder='Enter Your Email'
            name='email'
            value={formData.email}
            required
            onChange={handleInputChange}
            className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none placeholder:text-slate-600 rounded-md cursor-pointer text-gray-600 text-[20px]'
          />
        </div>
        <div className='mb-5'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={formData.password}
            required
            onChange={handleInputChange}
            className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none placeholder:text-slate-600 rounded-md cursor-pointer text-gray-600 text-[20px]'
          />
        </div>
        <div className='mb-5'>
          <input
            type='number'
            placeholder='Age'
            name='age'
            value={formData.age}
            required
            onChange={handleInputChange}
            className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none placeholder:text-slate-600 rounded-md cursor-pointer text-gray-600 text-[20px]'
          />
        </div>
        <div className='mb-5'>
          <input
            type='text'
            placeholder='Blood Type'
            name='bloodType'
            value={formData.bloodType}
            required
            onChange={handleInputChange}
            className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none placeholder:text-slate-600 rounded-md cursor-pointer text-gray-600 text-[20px]'
          />
        </div>
        <div className='flex md:flex-row flex-col md:justify-between'>

        <div className='mb-5 flex items-center gap-3'>
          {previewSrc && (
            <figure className='w-[50px] h-[50px] rounded-full border-2 border-solid border-sky-600 flex items-center justify-center'>
              <img
                className='w-[50px] h-[50px] rounded-full'
                src={previewSrc}
                alt='Profile Preview'
              />
            </figure>
          )}
          <div className='relative w-[120px] h-[40px]'>
            <input
              type='file'
              name='photo'
              id='customfile'
              onChange={handleFileInputChange}
              accept='.jpg, .png'
              className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
            />
           
            <label
              htmlFor="customfile"
              className='absolute   top-0 left-0 w-full h-full flex items-center
                    px-2 py-0.375rem] text-[15px] leading-6 overflow-hidden
                    bg-blue-600  hover:bg-blue-700 text-white font-bold
                    rounded-lg truncate cursor-pointer'
            >Update Picture</label>
          </div>
        
        </div>
        <div className='mb-5 flex items-center justify-between'>
          <label className='text-slate-900 font-bold text-[16px] leading-7'>
            Gender
            <select
              name='gender'
              value={formData.gender}
              onChange={handleInputChange}
              required
              className='text-gray-600 ml-2 rounded-md font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'
            >
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
          </label>
        </div>

          </div>
        <div className='flex justify-center md:mt-4'>
          <button type='submit' className='bg-green-600 hover:bg-green-700 text-white text-[20px] md:w-[400px] py-1 md:text-[20px] 
          px-32 rounded-[10px] font-[600]'>Update</button>   </div>
        


       
      </form>

    </div>
  )
}

export default Profile
