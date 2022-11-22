const express = require("express");

const { getAllJob, getJobById, saveJob } = require("../controllers");

const router = express.Router();

router.get("/", getAllJob);
router.get("/:id", getJobById);
router.patch("/:id", saveJob);

module.exports = router;
