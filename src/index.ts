import dotenv from "dotenv";
import express from "express";
import v1Router from "./routes/App.route";
import cors from "cors";

const app = express();
const port = process.env.PORT || 8000;

app.use(cors({ origin: process.env.REMOTE_CLIENT_APP, credentials: true }));

// Use built-in body-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1", v1Router);

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
