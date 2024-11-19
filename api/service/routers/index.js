import inquiryRouter from "./inquiry-router.js";

const initializeRoutes = (app) => {
    app.use('/inquiry', inquiryRouter);

};

export default initializeRoutes;
