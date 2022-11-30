const fs = require("fs/promises");
const filePath = require("./filePath");
const getJobs = require("./getJobs");

async function atrributesOperations(action, id, save, rating) {
  let changeItem = null;
  const jobs = await getJobs();
  switch (action) {
    case "save":
      const changeSave = jobs.map((it) =>
        it.id === id ? { ...it, save: !save } : it
      );
      await fs.writeFile(filePath, JSON.stringify(changeSave));
      return changeSave;

    case "rating":
      const changeRating = jobs.map((it) =>
        it.id === id ? { ...it, rating: rating } : it
      );
      await fs.writeFile(filePath, JSON.stringify(changeRating));
      return changeRating;

    default:
      return changeItem;
  }
}

module.exports = atrributesOperations;
