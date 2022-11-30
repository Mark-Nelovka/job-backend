const { Jobs } = require("../models/jobsSchema");

async function getJobById(req, res) {
  const { id } = req.params;
  const job = await Jobs.findOne({ _id: id });
  console.log(job);
  if (!job) {
    res.json({
      status: 404,
      data: null,
      message: "Not found",
    });
    return;
  }
  res.json({
    status: 200,
    data: [job],
  });
}

module.exports = getJobById;
