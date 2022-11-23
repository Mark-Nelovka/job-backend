const express = require("express");

const { getAllJob, getJobById, changeAtrributes } = require("../controllers");

const router = express.Router();

router.get("/", getAllJob);
router.get("/:id", getJobById);
router.patch("/", changeAtrributes);
router.patch("/:id", changeAtrributes);

module.exports = router;
