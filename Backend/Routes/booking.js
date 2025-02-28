import express from "express";
import { authenticate } from "../auth/verifyToken.js";
import { checkBookingStatus, createBooking } from "../controllers/bookingController.js";

const router =express.Router()
router.post("/",authenticate,createBooking);

router.post("/check",authenticate,checkBookingStatus);
export default router
