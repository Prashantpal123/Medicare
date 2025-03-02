


import Booking from "../models/BookingSchema.js";
import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";



// Create a new booking


export const createBooking = async (req, res) => {
  try {
    const { doctorId, userId } = req.body;

    // ✅ Validate required fields
    if (!doctorId || !userId) {
      return res.status(400).json({ error: "Both doctorId and userId are required." });
    }
    const existingBooking = await Booking.findOne({ doctorId, userId });
    if (existingBooking) {
      return res.status(400).json({ error: "You have already booked an appointment with this doctor." });
    }

    try {
      // ✅ Create a new booking
      const newBooking = new Booking({
        doctorId,
        userId,

      });

      // ✅ Save booking
      await newBooking.save();

      res.status(201).json({ message: "Booking successful!", booking: newBooking });
    } catch (saveError) {
      console.error("❌ Error saving booking:", saveError);
      console.error("❌ Error saving booking:", saveError.message);
      return res.status(500).json({ error: "Error saving booking. Please try again." });
    }
  } catch (error) {
    console.error("❌ General Error:", error);
    res.status(500).json({ error: "Server error. Please try again." });
  }
};



export const getPendingBookingsForDoctor = async (req, res) => {
  try {
    const doctorId = req.userId; // Get doctor ID from logged-in user

    if (!doctorId) {
      return res.status(400).json({ error: "Doctor ID is required." });
    }

    // ✅ Fetch only pending bookings for this doctor
    const pendingBookings = await Booking.find({ doctorId: doctorId, status: "pending" })
    for (let booking of pendingBookings) {
      if (booking.userId) { // Check if userId is not null
        const user = await Doctor.findById(booking.userId).select("name photo age ");
        if (user) {
          booking._doc.name = user.name; // Attach user's name
          booking._doc.photo = user.photo; 
          booking._doc.age = user.age;
        }
        else {
          const user = await User.findById(booking.userId).select("name photo  age ");
          if (user) {

            booking._doc.name = user.name; // Attach user's name
            booking._doc.photo = user.photo; 
            booking._doc.age = user.age;
          }
          else {
            console.log(`User not found for ID: ${booking.userId}`);
            booking._doc.name = "Unknown";
            booking._doc.photo = null;
            
          }
        }

      } else {
        console.log(`Booking ${booking._id} has null userId`);
        booking._doc.name = "Unknown";
      }
    }
    res.status(200).json(pendingBookings);
  } catch (error) {
    console.error("Error fetching pending bookings:", error.message);
    res.status(500).json({ error: "Server error. Please try again." });
  }
};



export const getapprovedBookingsForDoctor = async (req, res) => {
  try {
    const doctorId = req.userId; // Get doctor ID from logged-in user

    if (!doctorId) {
      return res.status(400).json({ error: "Doctor ID is required." });
    }

    // ✅ Fetch only pending bookings for this doctor
    const approvedBookings = await Booking.find({ doctorId: doctorId, status: "Approved" })
    for (let booking of approvedBookings) {
      if (booking.userId) { // Check if userId is not null
        const user = await Doctor.findById(booking.userId).select("name photo age");
        if (user) {
          booking._doc.name = user.name; // Attach user's name
          booking._doc.photo = user.photo; 
          booking._doc.age = user.age;
        }
        else {
          const user = await User.findById(booking.userId).select("name photo age");
          if (user) {

            booking._doc.name = user.name; // Attach user's name
            booking._doc.photo = user.photo;
            booking._doc.age = user.age; 
          }
          else {
            console.log(`User not found for ID: ${booking.userId}`);
            booking._doc.name = "Unknown";
            booking._doc.photo = null;
          }
        }

      } else {
        console.log(`Booking ${booking._id} has null userId`);
        booking._doc.name = "Unknown";
      }
    }
    res.status(200).json(approvedBookings);
  } catch (error) {
    console.error("Error fetching pending bookings:", error.message);
    res.status(500).json({ error: "Server error. Please try again." });
  }
};











export const checkBookingStatus = async (req, res) => {
  try {
    const { doctorId, userId } = req.query; // Use query params

    if (!doctorId || !userId) {
      return res.status(400).json({ error: "doctorId and userId are required." });
    }

    // ✅ Check if the booking exists
    const existingBooking = await Booking.findOne({ doctorId, userId });

    if (existingBooking) {
      return res.json({ alreadyBooked: true });
    } else {
      return res.json({ alreadyBooked: false });
    }
  } catch (error) {
    console.error("❌ Error checking booking status:", error.message);
    res.status(500).json({ error: "Server error. Please try again." });
  }
};


// Get all bookings
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("doctor user", "name email");
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single booking by ID
export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate("doctor user", "name email");
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update booking status
export const updateBookingStatus = async (req, res) => {
  const {id}=req.params;
  try {
    const { status,date,time,notes,Fees } = req.body;
    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      { status,date,time,notes,ticketPrice:Fees, },
      { new: true }
    );

    if (!updatedBooking) return res.status(404).json({ message: "Booking not found" });
    res.status(200).json(updatedBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a booking
export const deleteBooking = async (req, res) => {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
    if (!deletedBooking) return res.status(404).json({ message: "Booking not found" });
    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
