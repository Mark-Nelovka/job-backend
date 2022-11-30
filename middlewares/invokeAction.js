const { atrributesOperations } = require("../Jobs");

async function invokeAction({ action, id, save, rating }) {
  switch (action) {
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
