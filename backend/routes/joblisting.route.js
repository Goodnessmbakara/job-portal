import express from "express";
import {
  allJobListing,
  createJobListing,
} from "../controller/joblisting.controller.js";

const router = express.Router();

router.post("/", createJobListing);
router.get("/", allJobListing);
export default router;
