import express from "express"
import { DeleteDoctor,getAllDoctor,getSingleDoctor,UpdateDoctor,getDoctorProfile, addTimeSlot, getSlot } from "../controllers/Doctorcontroller.js";
import { authenticate,restrict } from "../auth/verifyToken.js";
import reviewRoute from "../Routes/review.js"
const router= express.Router()
 //nested route
 router.use('/:doctorId/reviews',authenticate,restrict(["patient"]), reviewRoute)
router.get("/:id", getSingleDoctor)
router.get('/',getAllDoctor)
router.put('/:id',authenticate,restrict(["doctor"]),UpdateDoctor)
router.post('/addSlot/:id',authenticate,restrict(["doctor"]),addTimeSlot)
router.delete('/:id',authenticate,restrict(["doctor"]),DeleteDoctor)
router.get('/profile/me',authenticate,restrict(["doctor"]),getDoctorProfile)
router.get('/availableSlot/:id',getSlot)
export default router;