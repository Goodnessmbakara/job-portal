import mongoose from "mongoose";
import Employer from "../models/employer.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//create new user/employer
export const registerEmployer = async (req, res) => {
  const { companyName, email, password } = req.body; //data containing user credentials

  // Check if email already exists
  const existingEmployer = await Employer.findOne({ email: email });
  if (existingEmployer) {
    return res
      .status(400)
      .json({ success: false, message: "Email already in use" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newEmployer = new Employer({
      companyName,
      email,
      password: hashedPassword,
    });
    await newEmployer.save();
    res
      .status(201)
      .json({ success: true, message: "Employer created successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error registering employer" });
    console.error(err);
  }
};

export const loginEmployer = async (req, res) => {
  const { email, password } = req.body;
  const employer = await Employer.findOne({ email });
  if (!employer || !(await bcrypt.compare(password, employer.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ id: employer._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
};

// //update employer info
// export const updateEmployer = async (req, res) => {
//   const { id } = req.params;

//   const employer = req.body;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res
//       .status(404)
//       .json({ success: false, message: "Invalid job seeker id" });
//   }

//   try {
//     const updatedEmployer = await Employer.findByIdAndUpdate(id, employer, {
//       new: true,
//     });
//     res.status(200).json({ success: true, data: updatedEmployer });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

export const deleteEmployer = async (req, res) => {
  const { id } = req.params;

  try {
    await Employer.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Employer deleted" });
  } catch (error) {}
};
