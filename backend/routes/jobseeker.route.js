import express from "express";
import { createJobSeeker } from "../controller/jobseeker.controller.js";

const router = express.Router();

router.post("/", createJobSeeker);

export default router;
