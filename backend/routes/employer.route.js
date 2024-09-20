import express from "express";
import {
  deleteEmployer,
  loginEmployer,
  registerEmployer,
} from "../controller/employer.controller.js";

const router = express.Router();

router.post("/", registerEmployer);
router.post("/", loginEmployer);
router.delete("/:id", deleteEmployer);

export default router;
