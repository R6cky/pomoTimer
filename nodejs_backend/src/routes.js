import { Router } from "express";

export const router = Router();

router.get("/test", (req, res) => {
  res.status(200).send("API NO ARRR");
});
