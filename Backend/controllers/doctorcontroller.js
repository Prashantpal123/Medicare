import Booking from '../models/BookingSchema.js';
import Doctor from '../models/DoctorSchema.js'
export const UpdateDoctor = async (req, res) => {
    const id = req.params.id; 
    try {

        const UpdatedDoctor = await Doctor.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true })
        res.status(200)
            .json(
                {
                    success: true,
                    message:  "doctor Successfully updated",
                    data: UpdatedDoctor
        
                })

    } catch (error) {
        res.status(500).json({ success: false, message: "failed to update" })

    }
}

export const DeleteDoctor = async (req, res) => {
    const id = req.params.id
    try {

        await Doctor.findByIdAndDelete(
            id,); 


        res.status(200)
            .json(
                {
                    success: true,
                    message: "Doctor Successfully deleted",
                })

    } catch (error) {
        res.status(500)
            .json({
                success: false,
                message: "failed to delete"
            })

    }
}



export const getSingleDoctor = async (req, res) => {
    const id = req.params.id;
    try {

        const doctor = await Doctor.findById(
            id,
            ).select("-password")
            .populate('reviews')
        res.status(200)
            .json(
                {
                    success: true,
                    message:  "doctor Successfully found",
                    data: doctor
                });

    } catch (error) {
        res.status(404).json({ success: false, message: "NO doctor found" })

    }
}


export const getAllDoctor = async (req, res) => {
    try {
        const { query } = req.query;
        let doctors;

        if (query) {
            doctors = await Doctor.find({
                isApproved: "approved",
                $or: [
                    { name: { $regex: query, $options: "i" } },
                    { specialization: { $regex: query, $options: "i" } },
                ],
            }).select("-password");
        } else {
            doctors = await Doctor.find({ }).select("-password");
        }

        res.status(200).json({
            success: true,
            message: "Users found",
            data: doctors,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message,
        });
    }
};

export const getDoctorProfile = async (req, res) => {
    const doctorId= req.doctorId;
  
    try {
      const doctor = await Doctor.findById(doctorId);
  
      if (!doctor) {
        return res.status(404).json({ success: false, message: 'doctor not found' });
      }
  
      const { password, ...rest } = doctor._doc;
      const appointments =await Booking.find({doctor:doctorId})

  
      res.status(200).json({ success: true, message: 'Profile info is getting', data: { ...rest } });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Something went wrong' });
    }
  };