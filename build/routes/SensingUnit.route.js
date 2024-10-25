"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SensingUnit_controller_1 = __importDefault(require("../controllers/SensingUnit.controller"));
const sensingUnitRouter = express_1.default.Router();
// POST /v1/sensing-unit/{id}/data
sensingUnitRouter.post("/:id/data", SensingUnit_controller_1.default.createData);
exports.default = sensingUnitRouter;
