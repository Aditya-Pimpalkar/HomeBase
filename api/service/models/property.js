import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  propertyId: {
    required: true,
    type: String,
    unique: true,
  },
  address: {
    required: true,
    type: String,
  },
  city: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
  propertyType: {
    required: true,
    type: String,
  },
  description: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PropertyModel = mongoose.model("property", propertySchema);
export default PropertyModel;
