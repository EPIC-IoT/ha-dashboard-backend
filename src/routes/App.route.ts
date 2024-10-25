import express from "express";
import farmRouter from "./Farm.route";
import sensingUnitRouter from "./SensingUnit.route";

const router = express.Router();

// Use the farm router for /v1/farm
router.use("/farms", farmRouter);

// Use the sensing unit router for /v1/sensing-unit
router.use("/sensing-units", sensingUnitRouter);

export default router;
