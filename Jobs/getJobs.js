const fs = require("fs/promises");
const filePath = require("./filePath");

async function getJobs() {
  const data = await fs.readFile(filePath);
  const jobs = JSON.parse(data);
  return jobs;
}

module.exports = getJobs;
