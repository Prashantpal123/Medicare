import React, { useState } from "react";

const ConfirmAppointmentModal = ({ isOpen, onClose, onConfirm, patient }) => {
  const [appointmentDetails, setAppointmentDetails] = useState({
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    setAppointmentDetails({ ...appointmentDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(patient, appointmentDetails);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Confirm Appointment</h2>
        <p className="text-gray-600 mb-2">Patient: {patient.name}</p>
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-medium">
            Date:
            <input
              type="date"
              name="date"
              value={appointmentDetails.date}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mt-1"
            />
          </label>

          <label className="block text-sm font-medium mt-2">
            Time:
            <input
              type="time"
              name="time"
              value={appointmentDetails.time}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mt-1"
            />
          </label>

          <label className="block text-sm font-medium mt-2">
            Notes:
            <textarea
              name="notes"
              value={appointmentDetails.notes}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
            />
          </label>

          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 text-white rounded mr-2"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfirmAppointmentModal;
