import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
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
    toast.success('Logged out successfully!');
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-100 to-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-12">

        {/* Left Sidebar */}
        <div className="bg-white shadow-xl p-6 rounded-xl flex flex-col items-center border">
          <figure className="w-32 h-32 rounded-full border-4 border-blue-500 overflow-hidden">
            <img src={user.photo} alt="Profile" className="w-full h-full object-cover" />
          </figure>
          <h3 className="text-xl font-bold text-gray-800 mt-4">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-700 mt-2">
            Blood Type: <span className="text-lg font-semibold text-red-600">{user.bloodType}</span>
          </p>

          <div className="w-full mt-6 flex flex-col gap-3">
            <button onClick={handleLogout} className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-md font-semibold transition">
              <FiLogOut className="text-lg" /> Logout
            </button>
            <button className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-700 text-white px-4 py-3 rounded-md font-semibold transition">
              <MdDelete className="text-lg" /> Delete Account
            </button>
          </div>

          {/* Time Slot Component */}
          <div className="w-full mt-6">
            <SetTimeSlot className="w-full shadow-md border rounded-lg" />
          </div>
        </div>

        {/* Right Section */}
        <div className="xl:col-span-2 bg-white shadow-lg p-8 rounded-xl border">
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

      </div>
    </section>
  );
};

export default Profile;

