import Booking from '../models/BookingSchema.js';
import Doctor from '../models/DoctorSchema.js'
import bcrypt from "bcryptjs";


export const UpdateDoctor = async (req, res) => {
  console.log("Updating doctor...");

  const { id } = req.params;
  const { name, email, password, photo, gender, bloodType, age, TicketPrice, bio, about, 
          course, college, collegeDateStart, collegeDateEnd, specialization, 
          exprole, hospital, expDateStart, expDateEnd, date, startTime, endTime, day } = req.body;

  try {
    // Find the doctor first
    const doctor = await Doctor.findById(id);
    if (!doctor) {
      return res.status(404).json({ success: false, message: "Doctor not found" });
    }

    // Prepare the updates object
    const updates = {};
    if (name) updates.name = name;
    if (email) updates.email = email;
    if (gender) updates.gender = gender;
    if (bloodType) updates.bloodType = bloodType;
    if (age) updates.age = age;
    if (photo) updates.photo = photo;
    if (TicketPrice) updates.ticketPrice = TicketPrice;
    if (specialization) updates.specialization = specialization;
    if (bio) updates.bio = bio;
    if (about) updates.about = about;

    // Handle password change
    if (password) {
      const salt = await bcrypt.genSalt(10);
      updates.password = await bcrypt.hash(password, salt);
    }

    // Push new education entry if provided
    if (course || college || collegeDateStart || collegeDateEnd) {
      doctor.education.push({
        course: course,
        college: college,
        startdate: collegeDateStart,
        enddate: collegeDateEnd
      });
    }

    // Push new experience entry if provided
    if (exprole || hospital || expDateStart || expDateEnd) {
      doctor.experience.push({
        role: exprole,
        hospital: hospital,
        startdate: expDateStart,
        enddate: expDateEnd
      });
    }

   

    // Apply other updates
    const updatedDoctor = await Doctor.findByIdAndUpdate(id, { $set: updates }, { new: true });

    // Save the doctor with new array entries
    await doctor.save();

    res.status(200).json({
      success: true,
      message: "Doctor successfully updated",
      updatedDoctor,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to update doctor",
      error: error.message,
    });
  }
};


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