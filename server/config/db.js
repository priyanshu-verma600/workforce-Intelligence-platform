import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log(process.env.MONGODB_URI);

        mongoose.connection.on("connected", () => {
            console.log("Database connected");
        });

        await mongoose.connect(process.env.MONGODB_URI);

    } catch (error) {
        console.error("Database connection failed:", error.message);
    }
};

export default connectDB;