const { getJobs, getById, atrributesOperations } = require("../Jobs");

async function invokeAction({ action, id, save, rating }) {
  switch (action) {
    case "getAll":
      const allJobs = await getJobs();
      return allJobs;
    case "getById":
      const job = await getById(id);
      return job;
    case "save":
      const jobWithFieldSave = await atrributesOperations(
        action,
        id,
        save,
        rating
      );
      return jobWithFieldSave;
    case "rating":
      const jobWithFieldRating = await atrributesOperations(
        action,
        id,
        save,
        rating
      );
      return jobWithFieldRating;

    default:
      return null;
  }
}

module.exports = invokeAction;
