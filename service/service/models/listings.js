import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
    propertyId: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    description: String,
    status: {
        required: true,
        type: String
    }
});

const ListingModel = mongoose.model('listing', listingSchema);
export default ListingModel;