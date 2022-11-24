const invokeAction = require("../middlewares/invokeAction");

async function getAllJob(req, res) {
  const data = await invokeAction({ action: "getAll" });
  res.json({
    status: 200,
    data,
  });
}

module.exports = getAllJob;
