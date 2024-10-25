import express, { Request, Response } from "express";

const farmRouter = express.Router();

// POST /v1/sensing-unit/data
farmRouter.post("/", (req: Request, res: Response) => {
  console.log("Request received:", req.body);
  res.status(200).send("Data successfully logged");
});

export default farmRouter;
