import app from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config();

connectDB()
  .then(() => {
    // Render provides the PORT variable; use it or default to 9000
    const port = process.env.PORT || 9000;
    app.listen(port, () => {
      console.log(`Server launched successfully on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to db", err);
  });