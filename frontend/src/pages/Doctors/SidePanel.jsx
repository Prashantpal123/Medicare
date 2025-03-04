import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { authContext } from "../../context/Authcontext";
import { BASE_URL } from "../../config";

const SidePanel = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { user, token } = useContext(authContext);
  const { id } = useParams();

  const [alreadyBooked, setAlreadyBooked] = useState(false);
  const [slots, setSlots] = useState([]); // Store fetched slots
  const [doctor, setDoctor] = useState(null); // Store doctor data

  // Fetch doctor details
  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/v1/doctors/${id}`);
        if (!response.ok) throw new Error("Failed to fetch doctor details");

        const data = await response.json();
        setDoctor(data.data);
      } catch (error) {
        setMessage(error.message);
      }
    };

    fetchDoctor();
  }, [id]);

  // Fetch available slots on first render
  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/v1/doctors/availableSlot/${id}`, {
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
        setMessage(error.message);
      }
    };

    fetchSlots();
  }, [id, token]);

  // Handle booking
  const handleBooking = async () => {
    if (!user) {
      return setMessage("Please log in to book an appointment.");
    }

    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/api/v1/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          doctorId: doctor?._id,
          userId: user._id,
        }),
      });

      const data = await response.json();
      console.log(data);
      
      if (!response.ok) throw new Error(data.error || "Booking failed.");

      setMessage("Booking successful!");
      setAlreadyBooked(true);
    } catch (error) {
      setMessage(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="shadow-2xl p-3 lg:p-5 rounded-md">
      {message && <p className="text-red-500 text-center">{message}</p>}

      <div className="flex items-center justify-between">
        <p className="mt-0 font-bold text-[25px]">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-slate-900 font-semibold">
          {doctor?.ticketPrice}/.
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text-[16px] lg:text-[20px] mt-0 font-semibold text-slate-900">
          Available Time Slots:
        </p>

        {slots.length > 0 ? (
          <ul className="mt-3">
            {slots.map((slot) => (
              <li key={slot._id} className="flex items-center justify-between mb-2">
                <p className="text-[15px] lg:text-[17px] leading-6 text-gray-600 font-semibold">
                  {slot.day}
                </p>
                <p className="text-[15px] lg:text-[17px] leading-6 text-gray-600 font-semibold">
                  {slot.startTime} - {slot.endTime}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 mt-2">No available slots.</p>
        )}

        <div className="flex justify-center">
          <button
            onClick={handleBooking}
            disabled={alreadyBooked || loading}
            className={`bg-sky-600 rounded-[10px] text-white py-1 px-3 md:py-2 w-full text-[19px] md:text-[20px] font-[600] md:h-[44px] ${
              alreadyBooked || loading ||message? "opacity-50 cursor-not-allowed" : "hover:bg-sky-700"
            }`}
          >
            {alreadyBooked||message ? "Already Booked" : loading ? "Booking..." : "Book Appointment"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
