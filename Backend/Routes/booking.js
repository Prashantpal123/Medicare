import express from "express";
import { authenticate } from "../auth/verifyToken.js";
import { checkBookingStatus, createBooking, getapprovedBookingsForDoctor, getPendingBookingsForDoctor, updateBookingStatus } from "../controllers/bookingController.js";

const router =express.Router()
router.post("/",authenticate,createBooking);

router.post("/check",authenticate,checkBookingStatus);
router.get("/pending",authenticate,getPendingBookingsForDoctor);
router.get("/approved",authenticate,getapprovedBookingsForDoctor);
router.put("/approved/:id",updateBookingStatus);
export default router
 