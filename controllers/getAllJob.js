const { Jobs } = require("../models/jobsSchema");

async function getAllJob(req, res) {
  const data = await Jobs.find({});
  res.json({
    status: 200,
    data,
  });
}

module.exports = getAllJob;
