const invokeAction = require("../middlewares");

async function changeAtrributes(req, res) {
  const { save, id, rating, action } = req.body;
  const jobsWithChangedAttributes = await invokeAction({
    action,
    id,
    save,
    rating,
  });
  if (!jobsWithChangedAttributes) {
    res.json({
      status: 404,
      data: null,
      message: "Not found",
    });
    return;
  }
  res.json({
    status: 200,
    data: jobsWithChangedAttributes,
  });
}

module.exports = changeAtrributes;
