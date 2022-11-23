const filePath = require("../Jobs/filePath");
const fs = require("fs/promises");

async function getAllJob(req, res) {
  const data = await fs.readFile(filePath);
  const jobs = JSON.parse(data);
  res.json({
    status: 200,
    data: jobs,
  });
}

module.exports = getAllJob;
