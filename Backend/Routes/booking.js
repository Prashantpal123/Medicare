import express from "express";
import { authenticate } from "../auth/verifyToken.js";
import { checkBookingStatus, createBooking, getPendingBookingsForDoctor } from "../controllers/bookingController.js";

const router =express.Router()
router.post("/",authenticate,createBooking);

router.post("/check",authenticate,checkBookingStatus);
router.get("/pending",authenticate,getPendingBookingsForDoctor);
export default router
