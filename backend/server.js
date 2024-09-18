//Creating a basic server using Express(main server entry point)
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import jobseekerRoutes from "./routes/jobseeker.route.js"; // Importing the default export
import employerRoutes from "./routes/employer.route.js"; // Importing the default export

dotenv.config();

const app = express();

app.use(express.json()); //express middleware to pass JSON bodies

app.use("/api/jobseekers", jobseekerRoutes); // Using the jobseekerRoutes
app.use("/api/employers", employerRoutes); // Using the employerRoutes

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
