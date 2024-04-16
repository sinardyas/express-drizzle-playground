import { Router, type Response, type Request } from "express"
import { station } from "../services/station"

const router = Router()

router.post("/", async (req: Request, res: Response) => {
  const resp = await station.sync()

  return res.json(resp)
})

export default router
