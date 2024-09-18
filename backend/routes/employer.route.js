import express from "express";
import { createEmployer } from "../controller/employer.controller.js";

const router = express.Router();

router.post("/", createEmployer);

export default router;
