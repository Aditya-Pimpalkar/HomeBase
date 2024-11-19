import Listings from "../models/listings.js";

const save = async (newListing) => {
    const listing = new Listings(newListing);
    return listing.save();
};

const findAll = async () => {
    return Listings.find();
};

const findById = async (id) => {
    return Listings.findById(id);
};

const updateById = async (id, updateData) => {
    return Listings.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteById = async (id) => {
    return Listings.findByIdAndDelete(id);
};

export { save, findAll, findById, updateById, deleteById };