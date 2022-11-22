const fs = require("fs/promises");

// fs.readFile("data.json", "utf-8")
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));

async function saveJob(req, res) {
  console.log("save");
  //   const { id } = req.params;
  //   const { save } = req.body;

  //   const job = data.find((item) => item.id === id);
  //   if (job) {
  //     job.save = !save;
  //     res.status(200).json([job]);
  //     return;
  //   }
  //   res.status(404).json({ message: "404 Not found. Save reject" });
}

module.exports = saveJob;
