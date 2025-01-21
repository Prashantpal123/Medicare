
import User from "../models/UserSchema.js"
import Doctor from "../models/DoctorSchema.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

const generateToken=user=>{
   return jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET_KEY)
}



export const register = async (req, res) => {


   const { email, password, name, role, photo, gender } = req.body

   try {
      let user = null
      if (role == "patient") {
         user = await User.findOne({ email })
      }
      else if (role == "doctor") {
         user = await Doctor.findOne({ email })
      }

      //checking  if user allready exist

      if (user) 
         { return res.status(400).json({ message: "User already exist" }) }


      // hash password
      const salt = await bcrypt.genSalt(10)
      const hashPassword = await bcrypt.hash(password, salt)



      //creating user in database
      if (role == "patient") {
         user = new User(
            {
               name,
               email,
               password: hashPassword,
               photo,
               gender,
               role,



            }
         )
      }



      //creating doctor in database
      if (role == "doctor") {
         user = new Doctor(
            {
               name,
               email,
               password: hashPassword,
               photo,
               gender,
               role,



            }
         )
      }


      //   saving user 
      await user.save()
      res.status(200).json({ success: true, message: "User succesfully created" })



   } catch (error) {
      res.status(500).json({ success: false, message: 'server error' })

   }
}


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


    return res.status(200).json({ status:true ,message:"sucessfully",token,data:{...rest},role})


   } catch (error) {
      return res.status(500).json({ status:false ,message:"login failed"})

   }
}