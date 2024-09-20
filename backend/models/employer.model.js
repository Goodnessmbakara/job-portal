import mongoose from "mongoose";

const EmployerSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    jobsPosted: [{ type: mongoose.Schema.Types.ObjectId, ref: "JobListing" }],
  },
  { timestamps: true }
);

const Employer = mongoose.model("Employer", EmployerSchema);

export default Employer;
