"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const farmRouter = express_1.default.Router();
// POST /v1/sensing-unit/data
farmRouter.post("/", (req, res) => {
    console.log("Request received:", req.body);
    res.status(200).send("Data successfully logged");
});
exports.default = farmRouter;
