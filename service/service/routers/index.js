import inquiryRouter from "./inquiry-router.js";
import propertyRouter from "./property-router.js";
import userRouter from "./user-router.js";
import listingRouter from "./listings-router.js";

const initializeRoutes = (app) => {
  app.use("/inquiry", inquiryRouter);
  app.use("/property", propertyRouter);
  app.use("/user", userRouter);
  app.use("/listing", listingRouter);
};

export default initializeRoutes;
