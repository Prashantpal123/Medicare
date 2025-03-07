import Booking from '../models/BookingSchema.js';
import Doctor from '../models/DoctorSchema.js'
export const UpdateDoctor = async (req,res) => {

    try {
        const { date, startTime, endTime,day } = req.body;
        const doctor = await Doctor.findById(req.params.id);
        console.log(req.body);
        
        if (!doctor) {
          return res.status(404).json({ message: "Doctor not found" });
        }
  
        // Push new time slot into the array
        const newslot=doctor.timeSlots.push({ date, startTime, endTime,day });
        await doctor.save();
    
        res.status(201).json({ message: "Time slot added successfully",newslot});
      } catch (error) {
        res.status(500).json({ error: "Server error" });
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


export const getSlot = async (req,res) => {
    try {
        const id = req.params.id; 
     const doctor= await   Doctor.findById(id);
     res.status(200)
     .json(
         {
             success: true,
             message:  "doctor Successfully found",
             data: doctor.timeSlots
         });
        
    } catch (error) {
        res.status(400).json({error:"server error"})
        
    }
    
}

 export const addTimeSlot = async (req,res) => {

    try {
        const { date, startTime, endTime,day } = req.body;
        const doctor = await Doctor.findById(req.params.id);
        console.log(req.body);
        
        if (!doctor) {
          return res.status(404).json({ message: "Doctor not found" });
        }
  
        // Push new time slot into the array
        const newslot=doctor.timeSlots.push({ date, startTime, endTime,day });
        await doctor.save();
    
        res.status(201).json({ message: "Time slot added successfully",newslot});
      } catch (error) {
        res.status(500).json({ error: "Server error" });
      }
    
  }