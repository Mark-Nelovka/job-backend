const fs = require("fs/promises");
const filePath = require("../Jobs/filePath");
const getAllJob = require("./getAllJob");

async function changeAtrributes(req, res) {
  const { save, id, rating, action } = req.body;
  let changeItem = null;
  const jobs = await getAllJob();
  const job = await jobs.find((item) => item.id === id);
  if (!job) {
    return {
      status: 404,
      data: null,
      message: "Not found",
    };
  }

  switch (action) {
    case "save":
      changeItem = jobs.map((it) =>
        it.id === id ? { ...it, save: save } : it
      );
      await fs.writeFile(filePath, JSON.stringify(changeItem));
      // res.status(200).json({
      //   status: 200,
      //   data: changeItem,
      // });
      return {
        status: 200,
        data: changeItem,
      };
    case "rating":
      changeItem = jobs.map((it) =>
        it.id === id ? { ...it, rating: rating } : it
      );
      await fs.writeFile(filePath, JSON.stringify(changeItem));
      // res.status(200).json({
      //   status: 200,
      //   data: changeItem,
      // });
      return {
        status: 200,
        data: changeItem,
      };

    default:
      return jobs;
  }
}

module.exports = changeAtrributes;
