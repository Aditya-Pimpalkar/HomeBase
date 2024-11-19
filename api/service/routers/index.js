import inquiryRouter from "./inquiry-router.js";
import propertyRouter from "./property-router.js";

const initializeRoutes = (app) => {
  app.use("/inquiry", inquiryRouter);
  app.use("/property", propertyRouter);
};

export default initializeRoutes;
