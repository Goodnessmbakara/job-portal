//import mongoose from "mongoose";
import JobSeeker from "../models/jobseeker.model.js";

export const createJobSeeker = async (req, res) => {
  const jobseeker = req.body; //data containing user credentials

  if (
    !jobseeker.firstName ||
    !jobseeker.lastName ||
    !jobseeker.email ||
    !jobseeker.password
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  // Check if email already exists
  const existingJobSeeker = await JobSeeker.findOne({ email: jobseeker.email });
  if (existingJobSeeker) {
    return res
      .status(400)
      .json({ success: false, message: "Email already in use" });
  }

  const newJobSeeker = new JobSeeker(jobseeker);

  try {
    await newJobSeeker.save();
    res.status(201).json({ success: true, data: newJobSeeker });
  } catch (error) {
    console.error("Error in Create job seeker:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
