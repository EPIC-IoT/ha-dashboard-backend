import { Request, Response } from "express";

// Define the createData function
const createData = (req: Request, res: Response) => {
  // Log the request details
  console.log(req.body.data[0].su_id);

  // Send a response
  res.status(200).send("Data successfully logged");
};

export default { createData };
