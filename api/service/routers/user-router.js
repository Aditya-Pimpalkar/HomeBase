import express from "express";

import {

    createUser,

    getAllUsers,

    getUserById,

    updateUser,

    patchUser,

    deleteUser

} from "../controllers/user-controller.js";
 
const router = express.Router();
 
router.post("/", createUser); // Register a new user

router.get("/", getAllUsers); // Retrieve all users

router.get("/:userId", getUserById); // Retrieve a specific user by ID

router.put("/:userId", updateUser); // Update all fields of a user profile

router.patch("/:userId", patchUser); // Partially update user profile

router.delete("/:userId", deleteUser); // Delete a user by ID
 
export default router;

 