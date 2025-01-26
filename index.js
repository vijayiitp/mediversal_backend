import express from "express";
import userRoute from "./routes/routes.js";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./utility/connection.js";

dotenv.config({
  path: "./.env",
});

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use(
  cors({
    origin:"*", 
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/user", userRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
