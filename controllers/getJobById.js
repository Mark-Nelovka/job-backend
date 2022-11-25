const invokeAction = require("../middlewares");
async function getJobById(req, res) {
  const { id } = req.params;
  const job = await invokeAction({ action: "getById", id });
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
    data: job,
  });
}

module.exports = getJobById;
