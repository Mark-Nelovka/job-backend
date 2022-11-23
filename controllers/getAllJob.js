const filePath = require("../Jobs/filePath");
const fs = require("fs/promises");

async function getAllJob(req, res) {
  const data = await fs.readFile(filePath);
  const jobs = JSON.parse(data);
  return jobs;
}

module.exports = getAllJob;
