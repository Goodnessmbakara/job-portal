import mongoose from "mongoose";

const JobListingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: Number },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Employer" },
    jobType: {
      type: String,
      enum: ["Full-time", "Part-time", "Contract", "Internship"],
      required: true,
    },
    datePosted: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const JobListing = mongoose.model("JobListing", JobListingSchema);

export default JobListing;
