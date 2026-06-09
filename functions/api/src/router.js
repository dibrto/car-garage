import { Router } from "express";
import carQueryController from "./controllers/carQueryController.js";
import carApiController from "./controllers/carApiController.js";

const router = Router();

router.use("/car-query", carQueryController);
router.use("/car-api", carApiController);

export default router;