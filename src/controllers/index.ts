import { Router } from "express"

import station from "./station"
import schedule from "./schedule"

const router = Router()

router.use("/station", station)
router.use("/schedule", schedule)

export default router
