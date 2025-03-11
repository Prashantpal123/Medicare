import React, { useContext } from 'react'
import { useState } from 'react';
import { FaUserMd, FaCalendarCheck, FaUsers } from "react-icons/fa";
import UseFetchData from '../../Hooks/UseFetchData';
import { BASE_URL } from '../../config';
import ConfirmAppointmentModal from './ConfirmationAppointment';
import { authContext } from '../../context/Authcontext';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const requests = [
    { name: "Maria Sarafat", issue: "Cold", avatar: "https://via.placeholder.com/40" },
    { name: "Jhon Deo", issue: "Over sweating", avatar: "https://via.placeholder.com/40" },
  ];
  const patient = {
    name: "Rahul Verma",
    age: "50",
    sex: "Male",
    problem: "Heart Consultation",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
  };





const Main_dash =({setActivePage}) => {

const {dispatch,user}= useContext(authContext)
const doctorId = user?.id;


  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedrequest, setselectedrequest] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConfirmClick = (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  
 

// Pass the API URL to the hook

    const { data, loading, error, refetch } =  UseFetchData(`${BASE_URL}/api/v1/bookings/pending`);
   
    
    if (loading) return <div>Loading...</div>; // Show loading message while fetching
    if (error) return <div>Error: {error}</div>;
   console.log(data)
  

  



  const appointments = [
    { name: "Aarav Mehta", time: "10:00 AM", problem: "Diabetes Check" },
    { name: "Priya Sharma", time: "11:30 AM", problem: "Routine Checkup" },
    { name: "Rohan Gupta", time: "1:00 PM", problem: "Heart Consultation" },
  ]
  return (


   
   <>
              <div className=''>
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mx-1 mb-6">
              <div className="bg-white p-2 md:p-6 shadow-lg rounded-xl text-center flex  flex-col items-center">
                <FaUsers className="text-blue-500 text-4xl mb-2" />
                <h3 className="text-gray-500 text-[13px] md:text-[16px] ">Total Patients</h3>
                <p className=" md:text-3xl text-[20px] font-bold">2000+</p>
              </div>
              <div className="bg-white p-2 md:p-6 shadow-lg rounded-xl text-center flex flex-col items-center">
                <FaUserMd className="text-green-500  text-4xl mb-2" />
                <h3 className="text-gray-500 text-[13px] md:text-[16px]">Today's Patients</h3>
                <p className="md:text-3xl text-[20px] font-bold">68</p>
              </div>
              <div className="bg-white  p-2 md:p-6 shadow-lg rounded-xl text-center flex flex-col items-center">
                <FaCalendarCheck className="text-purple-500 text-4xl mb-2" />
                <h3 className="text-gray-500 text-[13px] md:text-[16px] ">Today's Appointments</h3>
                <p className="md:text-3xl text-[20px] font-bold">85</p>
              </div>
            </div>

            {/* Charts & Appointments */}

 <div className=' grid  lg:grid-cols-3 md:grid gap-4 sm:grid-cols-2 lg:gap-4 lg:mx-1 md:mb-6 '>
    
        <div className="bg-gradient-to-r max-w-[500px] from-blue-100  to-blue-50 shadow-lg rounded-lg p-6 mx-3  border border-gray-300 text-center hover:shadow-xl transition-all">
      <h2 className="text-xl font-bold mb-4 text-gray-900">Next Patient</h2>
      <div className="flex flex-col items-center gap-3">
        <img src={patient.avatar} alt={patient.name} className="w-24 h-24 rounded-full border-4 border-gray-300 shadow-md" />
        <p className="text-lg font-semibold text-gray-900">{patient.name}</p>
        <div className="flex gap-4 text-sm text-gray-700">
          <p><strong>Age:</strong> {patient.age}</p>
          <p><strong>Sex:</strong> {patient.sex}</p>
        </div>
        <p className="text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-lg font-medium">{patient.problem}</p>
      </div>
      <button className="mt-5 w-full bg-blue-600 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">View Patient Details</button>
    </div>

 <div className="bg-white shadow-2xl max-w-[500px]  rounded-2xl p-6 mx-3 border border-gray-200   transition-all hover:shadow-3xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">My Appointments</h2>
      <ul className="divide-y  divide-gray-300">
        {appointments.map((appointment, index) => (
          <li
            key={index}
            className="py-4 flex flex-col justify-between items-start px-4  bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-all cursor-pointer"
            
          >
            <div className="flex  justify-between w-full">
              <span className="text-gray-900 font-semibold">{appointment.name}</span>
              <span className="text-blue-600 font-medium text-sm">{appointment.time}</span>
            </div>
            <p className="text-gray-600 text-sm mt-1">Problem: {appointment.problem}</p>
          </li>
        ))}
      </ul>
      
      <button onClick={() => setActivePage("Appointments")}  className="mt-6 w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition">See All</button>
    
    </div>

    <div className="bg-white shadow-lg max-w-[500px] max-h-[410px] overflow-y-scroll rounded-xl p-4 sm:p-6 mx-3 border border-gray-200 w-full">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">Appointment Request</h2>
      <div className="space-y-4">
  {data.length === 0 ? (
    <p className="text-gray-500 text-center py-4 bg-gray-50 rounded-lg shadow-sm  border-gray-200">
      No pending requests
    </p>
  ) : (
    data.map((req) => (
      <div
        key={req._id}
        className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-lg shadow-md border border-gray-300 space-y-4 sm:space-y-0 sm:space-x-4 transition hover:shadow-lg"
      >
        {/* Doctor Image */}
        <img
          src={req.photo}
          alt={req.name}
          className="w-14 h-14 rounded-full object-cover border border-gray-300"
        />

        {/* Request Details */}
        <div className="flex-1 text-center sm:text-left">
          <p className="font-semibold text-gray-900">{req.name}</p>
          <p className="text-gray-600 text-sm">{req.status}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex sm:flex-col sm:space-y-2 space-x-2 sm:space-x-0 w-full sm:w-auto justify-center">
          <button
            onClick={() => handleConfirmClick(req)}
            className="bg-green-600 text-white py-1.5 px-4 rounded-md font-medium hover:bg-green-700 transition-all w-full sm:w-auto"
            aria-label="Confirm request"
          >
            Confirm
          </button>
          <button
            className="bg-red-500 text-white py-1.5 px-4 rounded-md font-medium hover:bg-red-600 transition-all w-full sm:w-auto"
            aria-label="Decline request"
          >
            Decline
          </button>
        </div>
      </div>
    ))
  )}
</div>

     
    </div>
 {/* Modal */}
 <ConfirmAppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
       request={selectedrequest}
        patient={selectedPatient}
      />



 </div>

    
  



          </div>
   
   
   </>
  )
}

export default Main_dash
