import {
  save,
  findAll,
  findById,
  updateById,
  deleteById,
  patchById,
} from "../services/property-service.js";

// Create a new property
export const createProperty = async (req, res) => {
  try {
    const property = await save(req.body);
    res.status(201).json(property); // Return the created property with status 201
  } catch (error) {
    res
      .status(400)
      .json({ message: "Invalid data provided for creating the property." });
  }
};

// Retrieve all properties
export const getAllProperties = async (req, res) => {
  try {
    const properties = await findAll();
    res.status(200).json(properties); // Return all properties with status 200
  } catch (error) {
    res.status(500).json({ message: "Error retrieving properties." });
  }
};

// Retrieve a specific property by ID
export const getPropertyById = async (req, res) => {
  const { propertyId } = req.params;
  try {
    const property = await findById(propertyId);
    if (property) {
      res.status(200).json(property); // Return the property with status 200
    } else {
      res.status(404).json({ message: "Property not found." }); // Property not found
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving property." });
  }
};

// Update a property completely
export const updateProperty = async (req, res) => {
  const { propertyId } = req.params;
  const updateData = req.body;
  try {
    const updatedProperty = await updateById(propertyId, updateData);
    if (updatedProperty) {
      res.status(200).json(updatedProperty); // Return the updated property with status 200
    } else {
      res.status(404).json({ message: "Property not found." }); // Property not found
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "Invalid data provided for updating the property." });
  }
};

// Delete a property by ID
export const deleteProperty = async (req, res) => {
  const { propertyId } = req.params;
  try {
    const deletedProperty = await deleteById(propertyId);
    if (deletedProperty) {
      res.status(204).json(); // No content to return, but status 204 for successful deletion
    } else {
      res.status(404).json({ message: "Property not found." }); // Property not found
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting property." });
  }
};

// Partially update a property
export const patchProperty = async (req, res) => {
  const { propertyId } = req.params;
  const updateData = req.body;
  try {
    const updatedProperty = await patchById(propertyId, updateData);
    if (updatedProperty) {
      res.status(200).json(updatedProperty); // Return the partially updated property with status 200
    } else {
      res.status(404).json({ message: "Property not found." }); // Property not found
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "Invalid data provided for updating the property." });
  }
};
