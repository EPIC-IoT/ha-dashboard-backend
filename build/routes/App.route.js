"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Farm_route_1 = __importDefault(require("./Farm.route"));
const SensingUnit_route_1 = __importDefault(require("./SensingUnit.route"));
const router = express_1.default.Router();
// Use the farm router for /v1/farm
router.use("/farms", Farm_route_1.default);
// Use the sensing unit router for /v1/sensing-unit
router.use("/sensing-units", SensingUnit_route_1.default);
exports.default = router;
