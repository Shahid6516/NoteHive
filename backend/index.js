import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";

dotenv.config();
app.use(cors());
const app = express();
app.use(express.json());

// Routes


app.listen(process.env.PORT, () => {
  connectDb();
  console.log(`YOUR SERVER IS RUNING ON PORT:${process.env.PORT}`);
});
