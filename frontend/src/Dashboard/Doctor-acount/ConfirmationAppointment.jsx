import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5"; // Import close icon
import { BASE_URL } from "../../config";

const ConfirmAppointmentModal = ({ isOpen, onClose, onConfirm, patient }) => {
  const [appointmentDetails, setAppointmentDetails] = useState({
    date: "",
    time: "",
    notes: "",
    Fees:"",
  });
  const [Loading, setLoading] = useState(false)



  useEffect(() => {
    if (isOpen) {
      setAppointmentDetails({ date: "", time: "", notes: "",Fees:"" });
    }
  }, [isOpen]);

  const handleChange = (e) => {
    
    setAppointmentDetails({ ...appointmentDetails, [e.target.name]: e.target.value });
  };
 
 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const bookingId=patient._id;
    console.log(bookingId);
    try {
      const response = await fetch(`${BASE_URL}/api/v1/bookings/approved/${bookingId}`, {
        method: "PUT", // or PATCH
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Fees:appointmentDetails.Fees,
          date: appointmentDetails.date,
          time: appointmentDetails.time,
          notes: appointmentDetails.notes,
          status: "Approved", // Update status to Approved
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update appointment");
      }

      const updatedAppointment = await response.json();
      console.log("Updated Appointment:", updatedAppointment);

     // Update the parent component
      onClose();
    } catch (error) {
      console.error("Error updating appointment:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md transition-opacity duration-300">
      <div
        className="relative bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg p-6 rounded-2xl shadow-2xl w-96 transform transition-all scale-95 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition duration-200"
        >
          <IoClose size={22} />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Confirm Appointment</h2>
        <p className="text-gray-600 mb-2 text-sm text-center">
          Patient: <span className="font-medium text-gray-800">{patient.name}</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <label className="block text-sm cursor-pointer font-medium text-gray-700">
            Date:
            <input
              type="date"
              name="date"
              value={appointmentDetails.date}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg mt-1 focus:ring-2 cursor-pointer  focus:ring-blue-500 focus:outline-none"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700">
            Time:
            <input
              type="time"
              name="time"
              value={appointmentDetails.time}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </label>
            
          <label className="block text-sm font-medium text-gray-700">
            Fees:
            <input
              type="number"
              name="Fees"
              value={appointmentDetails.Fees}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700">
            Notes:
            <textarea
              name="notes"
              value={appointmentDetails.notes}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none h-24"
            />
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
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:opacity-90 transition duration-200 w-1/2"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfirmAppointmentModal;

