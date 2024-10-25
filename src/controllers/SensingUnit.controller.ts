import { Request, Response } from "express";

// Define the createData function
const createData = (req: Request, res: Response) => {
  // Log the request details
  console.log(JSON.stringify(req.body));

  // Send a response
  res.status(200).send({ message: "Data successfully logged" });
};

export default { createData };
