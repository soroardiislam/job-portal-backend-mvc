import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
// updateJob বাদ দেওয়া হয়েছে
import { getAdminJobs, getAllJobs, getJobById, postJob, deleteJob } from "../controllers/job.controller.js";

const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(isAuthenticated, getAllJobs);
router.route("/getadminjobs").get(isAuthenticated, getAdminJobs);
router.route("/get/:id").get(isAuthenticated, getJobById);

// DELETE route
router.route("/delete/:id").delete(isAuthenticated, deleteJob);

// Note: পূর্বে এখানে থাকা router.route("/update/:id").put(isAuthenticated, updateJob); লাইনটি বাদ দেওয়া হয়েছে।

export default router;