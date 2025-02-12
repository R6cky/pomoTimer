import express from "express";

import cors from "cors";

import { config } from "./config/env.js";
import { router } from "./routes.js";

export const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(config.port, () => {
  console.log(`Serverlisten on port ${config.port}`);
});
