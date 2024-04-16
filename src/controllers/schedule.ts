import { Router, type Response, type Request } from "express"
import { schedule } from "../services/schedule"
import { SyncType } from "../commons/types"

const router = Router()

router.post("/", async (req: Request, res: Response) => {
  const type: SyncType = req.query.from_cron ? "cron" : "manual"

  const resp = await schedule.sync(type)

  return res.json(resp)
})

export default router
