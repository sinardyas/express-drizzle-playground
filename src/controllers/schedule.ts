import { type Request, type Response, Router } from "express";
import type { SyncType } from "../commons/types";
import { schedule } from "../services/schedule";

const router = Router();

router
  .post("/", async (req: Request, res: Response) => {
    const type: SyncType = req.query.from_cron ? "cron" : "manual";

    const resp = await schedule.sync(type);

    return res.json(resp);
  })
  .get("/", (_req: Request, res: Response) => {
    return res.json({ status: 200, message: "Success" });
  });

export default router;
