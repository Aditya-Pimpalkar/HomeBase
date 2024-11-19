import express from "express";
import {
    createInquiry,
    getAllInquiries,
    getInquiryById,
    updateInquiry,
    deleteInquiry,
    patchInquiry
} from "../controllers/inquiry-controller.js";

const router = express.Router();

router.post("/", createInquiry); // Create a new inquiry
router.get("/", getAllInquiries); // Retrieve all inquiries
router.get("/:id", getInquiryById); // Retrieve a specific inquiry by ID
router.put("/:id", updateInquiry); // Update an inquiry completely
router.patch("/:id", patchInquiry); // Partially update an inquiry
router.delete("/:id", deleteInquiry); // Delete an inquiry by ID

export default router;
