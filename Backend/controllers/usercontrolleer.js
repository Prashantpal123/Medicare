import User from '../models/UserSchema.js'
import Booking from "../models/BookingSchema.js"
import Doctor from '../models/DoctorSchema.js';
export const updateUser = async (req, res) => {
    const id = req.params.id; 
    try {

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true })
        res.status(200)
            .json(
                {
                    success: true,
                    message: "user Successfully updated",
                    data: updatedUser
                })

    } catch (error) {
        res.status(500).json({ success: false, message: "failed to update" })

    }
}

export const DeleteUser = async (req, res) => {
    const id = req.params.id
    try {

        await User.findByIdAndDelete(
            id,); 


        res.status(200)
            .json(
                {
                    success: true,
                    message: "User Successfully deleted",
                })

    } catch (error) {
        res.status(500)
            .json({
                success: false,
                message: "failed to delete"
            })

    }
}



export const getSingleUser = async (req, res) => {
    const id = req.params.id;
    try {

        const user = await User.findById(
            id,
            ).select("-password")
        res.status(200)
            .json(
                {
                    success: true,
                    message: "user Successfully found",
                    data: user
                });

    } catch (error) {
        res.status(404).json({ success: false, message: "NO user found" })

    }
}


export const getAllUser = async (req, res) => {
    const id = req.params.id;
    try {

        const users = await User.find(
            {}).select("-password");
        res.status(200)
            .json(
                {
                    success: true,
                    message: "users Successfully found",
                    data: users
                });

    } catch (error) {
        res.status(404).json({ success: false, message: "NOT found" })

    }
}


export const getUserProfile = async (req, res) => {
    const userId = req.userId;
  
    try {
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
  
      const { password, ...rest } = user._doc;
  
      res.status(200).json({ success: true, message: 'Profile info is getting', data: { ...rest } });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Something went wrong' });
    }
  };

  

  export const getMyAppointments = async (req, res) => {
    try {
      // Step 1: Retrieve appointments from booking for specific user
      const bookings = await Booking.find({ user: req.userId });
  
      // Step 2: Extract doctor IDs from appointment bookings
      const doctorIds = bookings.map(el => el.doctor.id);
  
      // Step 3: Retrieve doctors using doctor IDs
      const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select("-password");
  
      res.status(200).json({
        success: true,
        message: "Appointments are getting",
        data: doctors,
      });
    } catch (err) {
      res.status(500).json({ success: false, message: "Something went wrong, cannot get" });
    }
  };
  