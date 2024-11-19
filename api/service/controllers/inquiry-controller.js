import * as inquiryService from "../services/inquiry-service.js";
import { setSuccess, setError } from "./response-handler.js";

export const createInquiry = async (req, res) => {
    try {
        const newInquiry = { ...req.body };
        const inquiry = await inquiryService.save(newInquiry);
        setSuccess(inquiry, res);
    } catch (error) {
        setError(error, res);
    }
};

export const getAllInquiries = async (req, res) => {
    try {
        const inquiries = await inquiryService.findAll();
        setSuccess(inquiries, res);
    } catch (error) {
        setError(error, res);
    }
};

export const getInquiryById = async (req, res) => {
    try {
        const id = req.params.id;
        const inquiry = await inquiryService.findById(id);
        if (!inquiry) {
            throw new Error("Inquiry not found");
        }
        setSuccess(inquiry, res);
    } catch (error) {
        setError(error, res);
    }
};

export const updateInquiry = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedInquiry = { ...req.body };
        const inquiry = await inquiryService.updateById(id, updatedInquiry);
        setSuccess(inquiry, res);
    } catch (error) {
        setError(error, res);
    }
};

export const patchInquiry = async (req, res) => {
    try {
        const id = req.params.id;
        const partialUpdate = { ...req.body };
        const inquiry = await inquiryService.patchById(id, partialUpdate);
        if (!inquiry) {
            throw new Error("Inquiry not found");
        }
        setSuccess(inquiry, res);
    } catch (error) {
        setError(error, res);
    }
};

export const deleteInquiry = async (req, res) => {
    try {
        const id = req.params.id;
        await inquiryService.deleteById(id);
        setSuccess({ message: "Inquiry deleted successfully" }, res);
    } catch (error) {
        setError(error, res);
    }
};
