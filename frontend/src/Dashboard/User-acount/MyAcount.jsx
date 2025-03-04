import React from 'react'
import { useContext ,useState} from 'react'
import { authContext } from '../../context/Authcontext'
import userImg from "../../assets/doctor-img01.png"
import MyBookings from './MyBookings'
import Profile from './Profile'
import useFetchData from '../../Hooks/useFetchData'
import { BASE_URL } from '../../config'

const MyAcount = () => {
  const {dispatch,user}= useContext(authContext)
  console.log(user)
  const [tab, settab] = useState("bookings")
  const {data:userData,loading,error}=useFetchData(`${BASE_URL}/users/profile/me`);
  console.log(userData,"userdata");
  const handleLogout=()=>{
    dispatch({type:"LOGOUT"})

  };
  return (
    <section>
          <div className="max-w-[1170px] px-5 mt-8 mx-auto">
    <div className="grid md:grid-cols-3 gap-10">
      <div className="pb-[50px] px-[30px] rounded-md">
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
        <div className='flex w-full justify-center'>
        <div className='w-full  bg-[#5788eb]  text-center max-w-[150px] p-3 
             text-[16px] leading-7 rounded-md text-white max-h-[50px]'>
        Age :  <span className='mx-2'> {user.age} Years</span>
          </div>
        </div>
          
          <div className='mt-3'>
             <button onClick={handleLogout} className='w-full hover:bg-red-700 bg-red-600  p-3 
             text-[16px] leading-7 rounded-md text-white'>Logout</button>
               <button className='w-full p-3 hover:bg-black bg-[#181A1E] mt-3
             text-[16px] leading-7 rounded-md text-white'>Delete Acount</button>
          </div>

         
           
        

      </div>
       
      <div className="md:col-span-2 md:px-[30px]">
  <div>
    <button onClick={()=> settab('bookings')} className={`${tab=='bookings' && 'bg-sky-600 text-white'} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-sky-500`}>
      My Bookings
    </button>

    <button  onClick={()=> settab('settings')}  className={` ${tab=='settings' && 'bg-sky-600 text-white'} py-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-sky-500`}>
      Profile Settings
    </button>
  </div>

  {tab=="settings" && <Profile /> }
  {tab=="bookings" && <MyBookings /> }
</div>



    </div>
  </div>
    </section>

  
  )
}

export default MyAcount
