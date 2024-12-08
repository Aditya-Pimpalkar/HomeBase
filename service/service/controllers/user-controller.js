import {

    save,

    findAll,

    findById,

    updateById,

    deleteById,

    patchById

} from "../services/user-service.js";
 
const createUser = async (req, res) => {

    try {

        const user = await save(req.body);

        res.status(201).json(user);

    } catch (error) {

        res.status(500).json({ message: "Failed to create user", error: error.message });

    }

};
 
const getAllUsers = async (req, res) => {

    try {

        const users = await findAll();

        res.status(200).json(users);

    } catch (error) {

        res.status(500).json({ message: "Failed to retrieve users", error: error.message });

    }

};
 
const getUserById = async (req, res) => {

    try {

        const user = await findById(req.params.userId);

        if (!user) {

            return res.status(404).json({ message: "User not found" });

        }

        res.status(200).json(user);

    } catch (error) {

        res.status(500).json({ message: "Failed to retrieve user", error: error.message });

    }

};
 
const updateUser = async (req, res) => {

    try {

        const updatedUser = await updateById(req.params.userId, req.body);

        if (!updatedUser) {

            return res.status(404).json({ message: "User not found" });

        }

        res.status(200).json(updatedUser);

    } catch (error) {

        res.status(500).json({ message: "Failed to update user", error: error.message });

    }

};
 
const patchUser = async (req, res) => {

    try {

        const updatedUser = await patchById(req.params.userId, req.body);

        if (!updatedUser) {

            return res.status(404).json({ message: "User not found" });

        }

        res.status(200).json(updatedUser);

    } catch (error) {

        res.status(500).json({ message: "Failed to partially update user", error: error.message });

    }

};
 
const deleteUser = async (req, res) => {

    try {

        const deletedUser = await deleteById(req.params.userId);

        if (!deletedUser) {

            return res.status(404).json({ message: "User not found" });

        }

        res.status(204).send(); // No content for successful delete

    } catch (error) {

        res.status(500).json({ message: "Failed to delete user", error: error.message });

    }

};
 
export { createUser, getAllUsers, getUserById, updateUser, patchUser, deleteUser };