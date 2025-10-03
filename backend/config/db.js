import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DATABASE CONNECTED SUCCESSFULLY ✅")
  } catch (error) {
    console.log("DATABASE CONNECTION FAILED ❌", error)

  }
};

export default connectDb;
