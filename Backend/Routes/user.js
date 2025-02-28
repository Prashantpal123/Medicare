import express from "express"
import { updateUser,DeleteUser,getAllUser,getSingleUser,getUserProfile,getMyAppointments, bookAppointmentController } from "../controllers/usercontrolleer.js";
import { createBooking } from "../controllers/bookingController.js";
import { authenticate } from "../auth/verifyToken.js";
import { restrict } from "../auth/verifyToken.js";
const router= express.Router()


router.get("/:id",authenticate,restrict(["patient"]),getSingleUser)
router.get('/',authenticate,restrict(["admin"]),getAllUser)
router.put('/:id',authenticate,restrict(["patient"]),updateUser)
router.delete('/:id',authenticate,restrict(["patient"]),DeleteUser)
router.get('/profle/me',authenticate,restrict(["patient"]),getUserProfile)
router.get('/appointments/my-appointments',authenticate,restrict(["patient"]),getMyAppointments)


router.post('/bookAppontment',authenticate,createBooking)
export default router; 