const getJobs = require("./getJobs");

async function atrributesOperations(action, id, save, rating) {
  let changeItem = null;
  const jobs = await getJobs();
  switch (action) {
    case "save":
      changeItem = jobs.map((it) => (it.id === id ? { ...it, save } : it));
      // await fs.writeFile(filePath, JSON.stringify(changeItem));
      return changeItem;

    case "rating":
      changeItem = jobs.map((it) => (it.id === id ? { ...it, rating } : it));
      // await fs.writeFile(filePath, JSON.stringify(changeItem));
      return changeItem;

    default:
      return changeItem;
  }
}

module.exports = atrributesOperations;
