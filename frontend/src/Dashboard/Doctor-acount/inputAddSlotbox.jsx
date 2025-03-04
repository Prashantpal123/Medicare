import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5"; // Import close icon
import { BASE_URL } from "../../config";
import { authContext } from '../../context/Authcontext';

import { useContext } from "react";

const InputAddSlotbox = ({ isOpen, onClose,}) => {
    
  const { dispatch,user,token } = useContext(authContext);
  const [slotDetails, setslotDetails] = useState({
    date: "",
    startTime: "",
    endTime:"",
    day:"",
   
  });
  const [Loading, setLoading] = useState(false)
   


  useEffect(() => {
    if (isOpen) {
      setslotDetails({ date: "", startTime: "", endTime: "",day:"" });
    }
  }, [isOpen]);

  const handleChange = (e) => {
    
    setslotDetails({ ...slotDetails, [e.target.name]: e.target.value });
  };
 
 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const doctorId=user._id;
    console.log(doctorId);
    try {
      const response = await fetch(`${BASE_URL}/api/v1/doctors/addSlot/${doctorId}`, {
        method: "post", // or PATCH
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
      
          date: slotDetails.date,
          startTime: slotDetails.startTime,
          endTime: slotDetails.endTime,
          day: slotDetails.day,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add new time slot");
      }

      const newslot = await response.json();
      console.log("New Slot:", newslot);

     // Update the parent component
      onClose();
    } catch (error) {
      console.error("Error Adding new slot:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md transition-opacity duration-300">
      <div
        className="relative bg-white bg-opacity-90 backdrop-filter  p-6 rounded-2xl shadow-2xl w-96 transform transition-all scale-95 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition duration-200"
        >
          <IoClose size={22} />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Add Available TimeSlot</h2>
        <p className="text-gray-600 mb-2 text-sm text-center">
          Doctor: <span className="font-medium text-gray-800"></span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <label className="block text-sm cursor-pointer font-medium text-gray-700">
            Date:
            <input
              type="date"
              name="date"
              value={slotDetails.date}
              onChange={handleChange}
              required="true"
              className="w-full p-2 border rounded-lg mt-1 focus:ring-2 cursor-pointer  focus:ring-blue-500 focus:outline-none"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700">
            StartTime:
            <input
              type="time"
              name="startTime"
              value={slotDetails.startTime}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </label>
          <label className="block text-sm font-medium text-gray-700">
            endTime:
            <input
              type="time"
              name="endTime"
              value={slotDetails.endTime}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </label>
            
               
           <label className="block text-sm font-medium text-gray-700" htmlFor=""> 

           <select name="day" value={slotDetails.day} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">Select a Day</option>
          {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select> 

           </label>


         

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:text-white hover:bg-red-600 transition duration-200 w-1/2 mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={!slotDetails.date || !slotDetails.startTime || !slotDetails.endTime || !slotDetails.day}
              className={`px-4 py-2 text-white rounded-lg w-1/2 transition duration-200
                ${!slotDetails.date || !slotDetails.startTime || !slotDetails.endTime || !slotDetails.day
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90"}`} >
              Add Slot
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputAddSlotbox;