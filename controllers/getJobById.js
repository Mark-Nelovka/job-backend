const fs = require("fs/promises");

async function getJobById(req, res) {
  const { id } = req.params;
  const job = data.find((item) => item.id === id);
  if (job) {
    res.status(200).json([job]);
    return;
  }
  res.status(404).json({ message: "404 Not found" });
}

module.exports = getJobById;
