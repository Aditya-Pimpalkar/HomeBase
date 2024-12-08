import Inquiries from "../models/inquiry.js";

const save = async (newInquiry) => {
    const inquiry = new Inquiries(newInquiry);
    return inquiry.save();
};

const findAll = async () => {
    return Inquiries.find();
};

const findById = async (id) => {
    return Inquiries.findById(id);
};

const updateById = async (id, updateData) => {
    return Inquiries.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteById = async (id) => {
    return Inquiries.findByIdAndDelete(id);
};


const patchById = async (id, updateData) => {
    return Inquiries.findByIdAndUpdate(id, updateData, { new: true });
};

export { save, findAll, findById, updateById, deleteById, patchById };
