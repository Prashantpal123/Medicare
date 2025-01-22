import express from "express"
import { updateUser,DeleteUser,getAllUser,getSingleUser } from "../controllers/usercontrolleer.js";
const router= express.Router()


router.get("/:id",getSingleUser)
router.get('/',getAllUser)
router.put('/:id',updateUser)
router.delete('/:id',DeleteUser)

export default router;