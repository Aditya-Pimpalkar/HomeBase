import PropertyModel from "../models/property.js";

const save = async (newProperty) => {
  const property = new PropertyModel(newProperty);
  return property.save();
};

const findAll = async () => {
  return PropertyModel.find();
};

const findById = async (propertyId) => {
  return PropertyModel.findOne({ propertyId });
};

const updateById = async (propertyId, updateData) => {
  return PropertyModel.findOneAndUpdate({ propertyId }, updateData, {
    new: true,
  });
};

const deleteById = async (propertyId) => {
  return PropertyModel.findOneAndDelete({ propertyId });
};

const patchById = async (propertyId, updateData) => {
  return PropertyModel.findOneAndUpdate({ propertyId }, updateData, {
    new: true,
  });
};

export { save, findAll, findById, updateById, deleteById, patchById };
