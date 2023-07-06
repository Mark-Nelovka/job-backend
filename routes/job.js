const express = require("express");

const {
  getAllJob,
  getJobById,
  changeAtrributes,
  getInfo,
} = require("../controllers");

const router = express.Router();

router.get("/", getAllJob);
router.get("/:id", getJobById);
router.patch("/", changeAtrributes);
router.patch("/:id", changeAtrributes);
router.get("/get/info", getInfo);

module.exports = router;
