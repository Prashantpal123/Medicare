import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { authContext } from "../../context/Authcontext";
import InputAddSlotbox from "./inputAddSlotbox";
import { BASE_URL } from "../../config";
const setSlot = () => {

      const { dispatch,user,token } = useContext(authContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
  const timeSlots = [
    { day: "Sunday", time: "4:00 PM - 9:30 PM" },
    { day: "Tuesday", time: "10:00 AM - 4:30 PM" },
    { day: "Friday", time: "2:00 PM - 6:30 PM" },
  ];
    const [slots, setSlots] = useState(null)
    useEffect(() => {
        const fetchSlots = async () => {
          try {
            const response = await fetch(`${BASE_URL}/api/v1/doctors/availableSlot/${user._id}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            });
    
            const data = await response.json();
           const slots=data.data
            console.log(slots);
            
            if (!response.ok) throw new Error(data.error || "Failed to fetch slots");
    
            setSlots(slots || []); // Update state with available slots
          } catch (error) {
            console.log(error);
            
          }
        };
    
        fetchSlots();
      
        
      }, [user]);

 const handleAddSlot=() => {
  setIsModalOpen(true);
  
}

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 h-64 w-80">
      <h2 className="text-xl font-bold">
        Ticket Price <span className="float-right text-lg">1499/.</span>
      </h2>
      <p className="text-gray-600 mt-3 font-semibold">Available Time Slots:</p>
      <ul className="mt-2">
        {slots?.map((slot, index) => (
          <li key={index} className="flex justify-between text-gray-700 text-sm py-1">
            <span className="font-medium">{slot.day}</span>
           <div >
            <span className="mx-1">{slot.startTime}</span>-
           <span className="mx-1">{slot.endTime}</span>
           </div>
          </li>
        ))}
      </ul>
      <button onClick={handleAddSlot} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 mt-4 rounded-lg transition">
      Add Time Slot
      </button>
      <InputAddSlotbox isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}/>
    </div>
  );
};

export default setSlot;
