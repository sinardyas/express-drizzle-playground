import "dotenv/config";

import express from "express";
import type { Express } from "express";
import helmet from "helmet";

import apiV1Router from "./api/index.route";
import { logger } from "./commons/utils/log";
import errorHandleMiddleware from "./middlewares/error-handler.middleware";

const app: Express = express();

app.use(helmet());

// parse body request
app.use(express.json());

// parse urlencoded request
app.use(express.urlencoded({ extended: true }));

app.use("/v1", apiV1Router);

app.use(errorHandleMiddleware);

const port = process.env.APP_PORT ?? 3001;
app.listen(port, () => logger.info(`[MAIN] App listen to ${port}`));
