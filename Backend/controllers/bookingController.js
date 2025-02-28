import Booking from "../models/BookingSchema.js";


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
      return res.status(400).json({ error: "You have already booked an appointment with this doctor." });}

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
  try {
    const { status, isPaid } = req.body;
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status, isPaid },
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
