import mongoose from "mongoose";
import JobListing from "../models/joblisting.model.js";

//create new joblisting (Employer)
export const createJobListing = async (req, res) => {
  const { title, description, company, location, salary, jobType } = req.body;
  const employerId = req.user.id;
  const newJobListing = new JobListing({
    title,
    description,
    company,
    location,
    salary,
    jobType,
    postedBy: employerId,
  });
  try {
    await newJobListing.save();
    res
      .status(201)
      .json({ message: "Job created successfully", job: newJobListing });
  } catch (error) {
    res.status(500).json({ message: "Error creating job", error });
  }
};

//Get Job Listings
export const allJobListing = async (req, res) => {
  try {
    const jobs = await JobListing.find().populate("postedBy", "companyName");
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs", error });
  }
};
