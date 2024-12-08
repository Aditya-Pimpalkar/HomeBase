import express from "express";
import {
  createProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
  patchProperty,
} from "../controllers/property-controller.js";

const router = express.Router();

// Create a new property
router.post("/", createProperty);

// Retrieve all properties
router.get("/", getAllProperties);

// Retrieve a specific property by ID
router.get("/:propertyId", getPropertyById);

// Update a property completely
router.put("/:propertyId", updateProperty);

// Partially update a property
router.patch("/:propertyId", patchProperty);

// Delete a property by ID
router.delete("/:propertyId", deleteProperty);

export default router;
