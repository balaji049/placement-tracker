import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import applicationRoutes from "./routes/applicationRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB
connectDB();

// Routes
app.use("/api/applications", applicationRoutes);

export default app;
