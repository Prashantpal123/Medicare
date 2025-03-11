import React, { useState, useEffect, useContext } from "react";
import { IoClose } from "react-icons/io5"; // Import close icon
import { BASE_URL } from "../../config";
import { authContext } from '../../context/Authcontext';

const InputAddSlotbox = ({ isOpen, onClose }) => {
  const { user, token } = useContext(authContext);

  const [slotDetails, setslotDetails] = useState({
    date: "",
    startTime: "",
    endTime: "",
    day: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setslotDetails({ date: "", startTime: "", endTime: "", day: "" });
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setslotDetails({ ...slotDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const doctorId = user._id;

    try {
      const response = await fetch(`${BASE_URL}/api/v1/doctors/addSlot/${doctorId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(slotDetails),
      });

      if (!response.ok) {
        throw new Error("Failed to add new time slot");
      }

      console.log("New Slot Added Successfully");
      onClose(); // Close dialog after success
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
        className="relative bg-white p-6 rounded-2xl shadow-2xl w-96 transform transition-all scale-95 animate-fadeIn"
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

        <form onSubmit={handleSubmit} className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Date:
            <input
              type="date"
              name="date"
              value={slotDetails.date}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700">
            Start Time:
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
            End Time:
            <input
              type="time"
              name="endTime"
              value={slotDetails.endTime}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700">
            Select Day:
            <select
              name="day"
              value={slotDetails.day}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select a Day</option>
              {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </label>

          {/* Action Buttons */}
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
              disabled={loading || !slotDetails.date || !slotDetails.startTime || !slotDetails.endTime || !slotDetails.day}
              className={`px-4 py-2 text-white rounded-lg w-1/2 transition duration-200 flex justify-center items-center
                ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90"
                }`}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              ) : (
                "Add Slot"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputAddSlotbox;
