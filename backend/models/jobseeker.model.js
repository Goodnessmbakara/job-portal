import mongoose from "mongoose";

const JobSeekerSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    resume: { type: String }, // URL or path to the resume file
    skills: [{ type: String }],
    experience: [
      {
        jobTitle: String,
        company: String,
        startDate: Date,
        endDate: Date,
        description: String,
      },
    ],
  },
  { timestamps: true }
);

const JobSeeker = mongoose.model("JobSeeker", JobSeekerSchema);

export default JobSeeker;
