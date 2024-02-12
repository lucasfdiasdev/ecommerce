import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import authRouter from "../src/routes/auth.route.js";

dotenv.config();
const app = express();

// app uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const db = process.env.DATABASE_URL;
const port = process.env.PORT || 8000;

mongoose
  .connect(db)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(port, () => {
  console.log(`Server is runing http://localhost:${port}`);
});

// api routes
app.use("/api/v1/auth", authRouter);
