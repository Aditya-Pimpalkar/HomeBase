import UserModel from "../models/user.js";
 
const save = async (newUser) => {

    const user = new UserModel(newUser);

    return user.save();

};
 
const findAll = async () => {

    return UserModel.find();

};
 
const findById = async (id) => {

    return UserModel.findOne({ userId: id });

};
 
const updateById = async (id, updateData) => {

    return UserModel.findOneAndUpdate({ userId: id }, updateData, { new: true });

};
 
const deleteById = async (id) => {

    return UserModel.findOneAndDelete({ userId: id });

};
 
const patchById = async (id, updateData) => {

    return UserModel.findOneAndUpdate({ userId: id }, updateData, { new: true });

};
 
export { save, findAll, findById, updateById, deleteById, patchById };

 