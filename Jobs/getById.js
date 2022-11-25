const getJobs = require("./getJobs");

async function getById(id) {
  const allJobs = await getJobs();
  const job = allJobs.find((it) => it.id === id);
  if (!job) {
    return null;
  }
  return [job];
}

module.exports = getById;
