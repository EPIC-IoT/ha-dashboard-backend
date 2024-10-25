import express from "express";
import sensingUnitController from "../controllers/SensingUnit.controller";

const sensingUnitRouter = express.Router();

// POST /v1/sensing-unit/{id}/data
sensingUnitRouter.post("/:id/data", sensingUnitController.createData);

export default sensingUnitRouter;
