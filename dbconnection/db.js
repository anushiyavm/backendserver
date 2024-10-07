import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectToDb() {
    try {
        await mongoose.connect(process.env.dbformat);
        console.log("DB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

// Call the function to connect to the database
 export let database=  await connectToDb();
