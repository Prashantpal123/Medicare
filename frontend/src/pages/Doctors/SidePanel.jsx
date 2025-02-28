import React, { useState } from 'react'
import useFetchData from '../../Hooks/usefetchData'
import { BASE_URL, token } from '../../config'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useContext } from 'react'
import { authContext } from '../../context/Authcontext'
const SidePanel = () => {
    const [loadiing, setLoadiing] = useState(false);
    const [message, setMessage] = useState("");
     const {user,role,token}=useContext(authContext)
    const { id } = useParams();


    const [alreadyBooked, setAlreadyBooked] = useState(false);

  
    

  
    const { data, loading, error } = useFetchData(`${BASE_URL}/api/v1/doctors/${id}`);
    if (loading) return <div>Loading...</div>; // Show loading message while fetching
    if (error) return <div>Error: {error}</div>;
 
   console.log(user);
   
    const doctor = data.data;
    console.log(doctor);
 
    const handleBooking = async () => {
        if (!user) {
          return setMessage("Please log in to book an appointment.");
        }
    
        setLoadiing(true);
    
        try {
          const response = await fetch("http://localhost:5000/api/v1/bookings", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Send token for authentication
            },
            body: JSON.stringify({
              doctorId: doctor._id,
              userId: user._id, // Logged-in user's ID
              date: "2025-02-28", // Replace with actual selected date
              time: "10:00 AM", // Replace with actual selected time
            }),
          });
    
          const data = await response.json();
          if (response.ok) {
            setMessage("Booking successful!");
          } else {
            setMessage(data.error || "Booking failed.");
          }
        } catch (error) {
          setMessage("An error occurred. Please try again.");
        }
    
        setLoadiing(false);
      };

    
    
      
    
 


  return (
    <div className=' shadow-2xl p-3 lg:p-5 rounded-md'>
        <div className='flex items-center justify-between '>
            <p className='mt-0 font-bold text-[25px] '>Ticket Price</p>
            <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8
            text-slate-900 font-semibold'>{doctor.ticketPrice}/. </span>
        </div>

        <div className='mt-[30px]'>
            <p className='text-[16px] lg:text-[20px] mt-0 font-semibold text-slate-900
            '>
               Available Time Slots:

            </p>
            <ul className='mt-3'>
            <li className='flex items-center justify-between mb-2'>
                <p className='text-[15px] lg:text-[17px]  leading-6 text-gray-600
                    font-semibold'>Sunday</p>
                    <p className='text-[15px] lg:text-[17px] leading-6 text-gray-600
                    font-semibold'>4:00 PM - 9:30 PM</p>
                </li>

                <li className='flex items-center justify-between mb-2'>
                <p className='text-[15px] lg:text-[17px] leading-6 text-gray-600
                    font-semibold'>Tuesday</p>
                    <p className='text-[15px] lg:text-[17px] leading-6 text-gray-600
                    font-semibold'>10:00 AM - 4:30 PM</p>
                </li>

                <li className='flex items-center justify-between mb-2'>
                <p className='text-[15px] lg:text-[17px] leading-6 text-gray-600
                    font-semibold'>Friday</p>
                    <p className='text-[15px] lg:text-[17px] leading-6 text-gray-600
                    font-semibold'>2:00 PM - 6:30 PM</p>
                </li>

            </ul>
            <div className='flex justify-center'> 
            <button onClick={handleBooking} disabled={alreadyBooked} className= {` bg-sky-600 rounded-[10px]    text-white py-1 px-3 
             md:py-2 w-full text-[19px]   md:text-[20px]  font-[600] md: h-[44px] hover:bg-sky-700  ` }>      {alreadyBooked ? "Already Booked" : "Book Appointment"}
   </button>

            </div>
            
        
        </div>
      
    </div>
  )
}

export default SidePanel
