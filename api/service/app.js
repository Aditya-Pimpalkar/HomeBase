import mongoose from "mongoose";
import cors from "cors";
import initializeRoutes from "./routers/index.js";
import express from "express";

const initialize = (app) => {
    app.use(cors());
    app.use(express.json());
    // Use express.urlencoded with extended option
    app.use(express.urlencoded({ extended: true }));

    // Connect to MongoDB
    mongoose.connect(process.env.MONGO_CONNECTION)
        .then(() => console.log("Connected to MongoDB"))
        .catch(err => console.log("Error connecting to MongoDB:", err));

    // Initialize routes
    initializeRoutes(app);
}

export default initialize;
