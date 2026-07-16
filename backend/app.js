import express from "express";
import userRoutes from "./src/routes/user.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import foodRoutes from "./src/routes/food.routes.js";
import orderRoutes from "./src/routes/order.routes.js";

const app = express();
app.use(express.json());

// FIXED: Add a fallback for when the environment variable is missing
const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(",") 
  : ["http://localhost:5173"];

app.use(cors({
  origin: function (origin, callback) {
    // !origin allows requests from non-browser clients like Postman
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/foods", foodRoutes);
app.use("/api/orders", orderRoutes);

export default app;