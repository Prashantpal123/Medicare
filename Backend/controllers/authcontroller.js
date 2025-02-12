
import User from "../models/UserSchema.js"
import Doctor from "../models/DoctorSchema.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import cookieParser from "cookie-parser"

const generateToken=user=>{
   return jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET_KEY)
}


export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;

  try {
    // Validate input
    if (!email || !password || !name || !role || !gender) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (role !== "patient" && role !== "doctor") {
      return res.status(400).json({ message: "Invalid role" });
    }

    // Check if user already exists
    let user = await User.findOne({ email }) || await Doctor.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Create user or doctor based on role
    const Model = role === "patient" ? User : Doctor;
    user = new Model({
      name,
      email,
      password: hashPassword,
      photo,
      gender,
      role,
    });

    // Save user
    await user.save();

    res.status(201).json({ success: true, message: "User successfully created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};



///Login////



export const login = async (req, res) => {

   const {email} =req.body;




   try {
      let user=null

    const patient= await User.findOne({email});
    const doctor= await Doctor.findOne({email});


    if(patient)
    {user=patient}
    

    if(doctor)
    {user=doctor}


    if(!user){
      return res.status(404).json({message:"User Not found"})
    }


    // if user exist then check password

    const isPasswordMatch= await  bcrypt.compare(req.body.password,user.password)

    if(!isPasswordMatch)
    {
      return res.status(400).json({ status:false ,message:"wrong password"})
    }


    //get token--
    const token =generateToken(user);
    const {password,role,appoinments, ...rest}=user._doc
    


    return res.status(200).cookie("authtoken",token)
    .json({ status:true ,message:"sucessfully",token,data:{...rest},role})


   } catch (error) {
      return res.status(500).json({ status:false ,message:"login failed"})

   }
}