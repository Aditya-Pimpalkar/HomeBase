import inquiryRouter from "./inquiry-router.js";
import propertyRouter from "./property-router.js";
import userRouter from "./user-router.js";

const initializeRoutes = (app) => {
  app.use("/inquiry", inquiryRouter);
  app.use("/property", propertyRouter);
  app.use("/user", userRouter);
};

export default initializeRoutes;
