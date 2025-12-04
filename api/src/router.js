import { Router } from "express";
import carQueryController from "./controllers/carQueryController.js";

const router = Router();

router.use("/car-query", carQueryController);

export default router;