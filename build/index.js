"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const App_route_1 = __importDefault(require("./routes/App.route"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Use built-in body-parser middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/v1", App_route_1.default);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
