import express from "express";
import {
    createListing,
    getAllListings,
    getListingById,
    updateListing,
    deleteListing,
    patchListing
} from "../controllers/listing-controller.js";

const router = express.Router();

router.post("/", createListing);
router.get("/", getAllListings);
router.get("/:id", getListingById);
router.put("/:id", updateListing);
router.delete("/:id", deleteListing);
router.patch("/:id", patchListing); // Add patch route for partial updates

export default router;