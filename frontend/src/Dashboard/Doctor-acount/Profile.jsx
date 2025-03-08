import React, { useContext, useState } from 'react';

import { authContext } from '../../context/Authcontext';
import Doctor_about from '../../pages/Doctors/Doctor_about';
import MyDetails from './MyDetails';
import DoctorProfileUPdate from './UpdateDoctorProfile';
import SetTimeSlot from './SetTimeSlot';
import { FiLogOut, FiUserCheck, FiEdit3 } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';

const Profile = () => {
  const { dispatch, user } = useContext(authContext);
  const [tab, setTab] = useState('about');

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  
  };

  return (
    <section className="min-h-screen   md:px-6 md:py-10">
      <div className=" mx-auto flex justify-center  gap-">

        {/* Left Sidebar */}
        <div className="bg-gray-100 shadow-xl p-4  rounded-xl flex gap-4 Md:gap-12 flex-col lg:flex-row w-full justify-between border">
         <div className='w-full '>
          <div className='w-full flex-col flex items-center'>
          <figure className="w-32 h-32 rounded-full flex justify-center border-4 border-blue-500 overflow-hidden">
            <img src={user.photo} alt="Profile" className="w-full h-full object-cover" />
          </figure>
          <h3 className="text-xl font-bold text-gray-800 mt-4">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-700 mt-2">
            Blood Type: <span className="text-lg font-semibold text-red-600">{user.bloodType}</span>
          </p>

          <div className=" mt-6 flex  gap-3">
            <button onClick={handleLogout} className="flex px-8 items-center max-w-[200px] justify-center gap-2 bg-red-600 hover:bg-red-700 text-white  py-3 rounded-md font-semibold transition">
              <FiLogOut className="text-lg" /> Logout
            </button>
            <button className="flex items-center max-w-[200px] justify-center gap-2 bg-gray-900 hover:bg-gray-700 text-white px-4 py-3 rounded-md font-semibold transition">
              <MdDelete className="text-lg" /> Delete Account
            </button>
          </div>
          </div>
         
         
         </div>
       

          {/* Time Slot Component */}
          <div className="w-full flex justify-center ">
            <SetTimeSlot className=" shadow-2xl border rounded-lg" />
          </div>
        </div>

       

      </div>
       {/* Right Section */}
       <div className="xl:col-span-2 bg-white mt-10 md:shadow-none md:border-none  shadow-lg p-2 rounded-xl border">
          {/* Tab Buttons */}
          <div className="flex gap-4 border-b pb-4">
            <button onClick={() => setTab('about')} className={`flex items-center gap-2 px-5 py-2 rounded-md font-semibold transition ${tab === 'about' ? 'bg-blue-600 text-white' : 'text-gray-700 border border-blue-500 hover:bg-blue-100'}`}>
              <FiUserCheck /> My Details
            </button>
            <button onClick={() => setTab('update')} className={`flex items-center gap-2 px-5 py-2 rounded-md font-semibold transition ${tab === 'update' ? 'bg-green-600 text-white' : 'text-gray-700 border border-green-500 hover:bg-green-100'}`}>
              <FiEdit3 /> Update Profile
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {tab === 'about' && <MyDetails user={user} />}
            {tab === 'update' && <DoctorProfileUPdate />}
          </div>
        </div>
    </section>
  );
};

export default Profile;

