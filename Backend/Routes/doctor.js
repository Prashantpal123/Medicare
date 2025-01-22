import express from "express"
import { DeleteDoctor,getAllDoctor,getSingleDoctor,UpdateDoctor } from "../controllers/Doctorcontroller.js";
const router= express.Router()


router.get("/:id",getSingleDoctor)
router.get('/',getAllDoctor)
router.put('/:id',UpdateDoctor)
router.delete('/:id',DeleteDoctor)

export default router;