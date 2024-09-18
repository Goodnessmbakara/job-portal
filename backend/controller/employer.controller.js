//import mongoose from "mongoose";
import Employer from "../models/employer.model.js";

export const createEmployer = async (req, res) => {
  const employer = req.body; //data containing user credentials

  if (
    !employer.firstName ||
    !employer.lastName ||
    !employer.currentPosition ||
    !employer.companyName ||
    !employer.email ||
    !employer.password
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  // Check if email already exists
  const existingEmployer = await Employer.findOne({ email: employer.email });
  if (existingEmployer) {
    return res
      .status(400)
      .json({ success: false, message: "Email already in use" });
  }

  const newEmployer = new Employer(employer);

  try {
    await newEmployer.save();
    res.status(201).json({ success: true, data: newEmployer });
  } catch (error) {
    console.error("Error in Create employer:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
