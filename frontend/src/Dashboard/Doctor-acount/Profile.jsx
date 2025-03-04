
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../config';
import uploadImageToCloudinary from '../../../utils/uploadCloudinary';
import { authContext } from '../../context/Authcontext';
import Doctor_about from '../../pages/Doctors/Doctor_about';
import MyDetails from './MyDetails';
import DoctorProfileUPdate from './UpdateDoctorProfile';
import SetTimeSlot from './SetTimeSlot'
const Profile = () => {
      const { dispatch,user,token } = useContext(authContext);
      const handleLogout=()=>{
        dispatch({type:"LOGOUT"})
    
      };
       const [tab, settab] = useState("about")
  return (
    <section>
          <div className="w-full px-5 mx-auto">
    <div className="grid grid-cols-1 xl:grid-cols-3  gap-10 ">
      <div className="pb-[50pxh] flex justify-between xl:justify-start gap-10 lg:gap-10  md:gap-20 lg:g lg:justify-between flex-col md:flex-row    xl:flex-col  px-[3pxmm] mt-4 rounded-md">
      
  
       
        
          <div>


          <div className="flex items-center justify-center">
          <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
            <img
              src={user.photo}
              alt=""
              className="w-full h-full rounded-full"
            />
          </figure>
        </div>
          <div className="text-center mt-4">
          <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
            {user.name}
          </h3>
          <p className="text-textColor text-[15px] leading-6 font-medium">
          {user.email}
          </p>
          <p className="text-textColor text-[15px] leading-6 font-medium">
           Blood Type: <span className='ml-2 text-slate-900 text-[22px] leading-8'>{user.bloodType}</span>
          </p>
        </div>
        <div className='mt-3'>
             <button onClick={handleLogout} className='w-full min-w-[145px] hover:bg-red-700 bg-red-600  p-3 
             text-[16px] leading-7 rounded-md text-white'>Logout</button>
               <button className='w-full p-3 min-w-[145px] hover:bg-black bg-[#181A1E] mt-3
             text-[16px] leading-7 rounded-md text-white'>Delete Acount</button>
          </div>
          </div>
        

         <div className='flex w-full justify-center md:justify-end' >
          <SetTimeSlot className=' shadow-3xl border rounded-md mt-4 '/>
         </div>
           
        

      </div>
       
      <div className="md:col-span-2 xl:px-[30px]">
  <div>
    <button onClick={()=> settab('about')} className={`${tab=='about' && 'bg-sky-600 text-white'} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-sky-500`}>
    My Details
    </button>

    <button  onClick={()=> settab('update')}  className={` ${tab=='update' && 'bg-green-600 text-white'} py-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-sky-500`}>
   Update Profile
    </button>
  </div>
  <div className='mt-4'>
  {tab=="about" &&  <MyDetails user={user}/> }
  {tab=="update" && <DoctorProfileUPdate/> }
  </div>


</div>



    </div>
  </div>
    </section>
  )
}

export default Profile
