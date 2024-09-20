import mongoose from "mongoose";
import JobSeeker from "../models/jobseeker.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerJobSeeker = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Check if email already exists
  const existingJobSeeker = await JobSeeker.findOne({ email: email });
  if (existingJobSeeker) {
    return res
      .status(400)
      .json({ success: false, message: "Email already in use" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newJobSeeker = new JobSeeker({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    await newJobSeeker.save();
    res
      .status(201)
      .json({ success: true, message: "Job Seeker created successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error registering job seeker" });
  }
};

export const loginJobSeeker = async (req, res) => {
  const { email, password } = req.body;

  // Find the job seeker by email
  const jobSeeker = await JobSeeker.findOne({ email });

  // Checking if the job seeker exists and compare the password
  if (!jobSeeker || !(await bcrypt.compare(password, jobSeeker.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // If the credentials are valid, create a JWT
  const token = jwt.sign({ id: jobSeeker._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  // Send the token back in the response
  res.json({ token });
};

// export const updateJobSeeker = async (req, res) => {
//   const { id } = req.params;

//   const jobseeker = req.body;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res
//       .status(404)
//       .json({ success: false, message: "Invalid job seeker id" });
//   }

//   try {
//     const updatedJobSeeker = await JobSeeker.findByIdAndUpdate(id, jobseeker, {
//       new: true,
//     });
//     res.status(200).json({ success: true, data: updatedJobSeeker });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

export const deleteJobSeeker = async (req, res) => {
  const { id } = req.params;

  try {
    await JobSeeker.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Job seeker deleted" });
  } catch (error) {}
};
