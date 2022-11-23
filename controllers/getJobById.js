const getAllJob = require("./getAllJob");

async function getJobById(req, res) {
  const { id } = req.params;
  const jobs = await getAllJob();
  const job = jobs.find((item) => item.id === id);
  if (!job) {
    return {
      status: 404,
      data: null,
      message: "Not found",
    };
  }
  return {
    status: 200,
    data: job,
  };
}

module.exports = getJobById;
