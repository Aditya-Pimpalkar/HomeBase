import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema({
    inquiryId: {
        required: true,
        type: String
    },
    userId: {
        required: true,
        type: String
    },
    propertyId: {
        required: true,
        type: String
    },
    message: {
        required: true,
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const InquiryModel = mongoose.model('inquiry', inquirySchema);
export default InquiryModel;
