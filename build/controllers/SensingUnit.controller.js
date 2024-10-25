"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define the createData function
const createData = (req, res) => {
    // Log the request details
    console.log(req.body.data[0].su_id);
    // Send a response
    res.status(200).send("Data successfully logged");
};
exports.default = { createData };
