import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ticketPrice: { type: Number, },
    appointmentDate: {
      type: Date,
      
    },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    date: {
      type: String, // Storing as string to simplify frontend handling
     
    },
    time: {
      type: String, // Storing time as a string (e.g., "10:30 AM")
     
    },
    notes: {
      type: String,
      default: "",
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);