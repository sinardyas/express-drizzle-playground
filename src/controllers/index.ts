import { Router } from "express"

import station from "./station"

const router = Router()

router.use(station)

export default router
