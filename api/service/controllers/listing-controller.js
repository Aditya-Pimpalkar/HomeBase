import * as listingService from "../services/listing-service.js";
import { setSuccess, setError } from "./response-handler.js";

export const createListing = async (req, res) => {
    try {
        const newListing = { ...req.body };
        const listing = await listingService.save(newListing);
        setSuccess(listing, res);
    } catch (error) {
        setError(error, res);
    }
};

export const getAllListings = async (req, res) => {
    try {
        const listings = await listingService.findAll();
        setSuccess(listings, res);
    } catch (error) {
        setError(error, res);
    }
};

export const getListingById = async (req, res) => {
    try {
        const id = req.params.id;
        const listing = await listingService.findById(id);
        if (!listing) {
            throw new Error("Listing not found");
        }
        setSuccess(listing, res);
    } catch (error) {
        setError(error, res);
    }
};

export const updateListing = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedListing = { ...req.body };
        const listing = await listingService.updateById(id, updatedListing);
        setSuccess(listing, res);
    } catch (error) {
        setError(error, res);
    }
};

export const deleteListing = async (req, res) => {
    try {
        const id = req.params.id;
        await listingService.deleteById(id);
        setSuccess({ message: "Listing deleted successfully" }, res);
    } catch (error) {
        setError(error, res);
    }
};

// Add patchListing controller for partial update
export const patchListing = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedFields = { ...req.body }; // Get only the fields to be updated
        const listing = await listingService.updateById(id, updatedFields);
        if (!listing) {
            throw new Error("Listing not found");
        }
        setSuccess(listing, res);
    } catch (error) {
        setError(error, res);
    }
};