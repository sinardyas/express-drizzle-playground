import { Router } from "express";

import schedule from "./schedule";
import station from "./station";

const router = Router();

router.use("/station", station);
router.use("/schedule", schedule);

export default router;
