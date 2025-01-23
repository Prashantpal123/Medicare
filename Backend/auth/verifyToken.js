import jwt from "jsonwebtoken";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";

export const authenticate = async (req, res, next) => {
  try {
    // Get token from headers
    const authToken = req.headers.authorization;

    // Check if token exists
    if (!authToken || !authToken.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ success: false, message: "No token, authorization denied" });
    }

    // Extract the token from the "Bearer" header
    const token = authToken.split(" ")[1];

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Attach user information to the request object
    req.userId = decoded.id;
    req.role = decoded.role;

    next(); // Move to the next middleware or route
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const restrict = (roles) => async (req, res, next) => {
    const userId = req.userId;
  
    let user;
  
    const patient = await User.findById(userId);
    const doctor = await Doctor.findById(userId);
  
    if (patient) {
      user = patient;
    }
    if (doctor) {
      user = doctor;
    }
  
    if (!roles.includes(user.role)) {
      return res
        .status(401)
        .json({ success: false, message: "You're not authorized" });
    }
  
    next();
  };
  
