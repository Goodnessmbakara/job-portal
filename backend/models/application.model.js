import mongoose from "mongoose";

const ApplicationSchema = new mongoose({
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "JobListing",
    required: true,
  },
  jobSeeker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "JobSeeker",
    required: true,
  },
  dateApplied: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["Applied", "Interviewed", "Accepted", "Rejected"],
    default: "Applied",
  },
});

const Application = mongoose.model("Application", ApplicationSchema);
export default Application;
