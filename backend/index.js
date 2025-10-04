import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import noteRoute from "./routes/notes.route.js";

dotenv.config();
app.use(cors());
const app = express();
app.use(express.json());

// Routes
app.use("/api/v1/note", noteRoute);



app.listen(process.env.PORT, () => {
  connectDb();
  console.log(`YOUR SERVER IS RUNING ON PORT:${process.env.PORT}`);
});
