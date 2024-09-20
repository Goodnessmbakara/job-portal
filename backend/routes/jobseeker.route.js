import express from "express";
import {
  registerJobSeeker,
  loginJobSeeker,
  deleteJobSeeker,
} from "../controller/jobseeker.controller.js";

const router = express.Router();

router.post("/register", registerJobSeeker);
router.post("/login", loginJobSeeker);
router.delete("/login", deleteJobSeeker);

export default router;
