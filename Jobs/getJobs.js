const fs = require("fs/promises");
const filePath = require("../Jobs");

const getJobs = async () => {
  const data = await fs.readFile(filePath);
  const jobs = JSON.parse(data);
  return jobs;
};

module.exports = getJobs;
