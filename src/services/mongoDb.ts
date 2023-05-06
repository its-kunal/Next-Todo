import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect(String(process.env.mongoDbUrl));
};

export default connectDB;