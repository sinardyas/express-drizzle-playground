import "dotenv/config"

import express from "express"
import { type Express, type Request, type Response, type Router } from "express"
import helmet from "helmet"

import { logger } from "./commons/utils/log"
import controller from "./controllers"

const app: Express = express()
app.use(helmet())
app.use(express.json())

const v1: Router = express.Router()
v1.get("/ping", (req: Request, res: Response) => res.json({ message: "pong!" }))
v1.use(controller)

app.use("/v1", v1)

const port = process.env.APP_PORT ?? 3001
app.listen(port, () => logger.info(`[MAIN] App listen to ${port}`))
