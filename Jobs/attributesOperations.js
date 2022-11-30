const { Jobs } = require("../models/jobsSchema");

async function atrributesOperations(action, id, save, rating) {
  let changeItem = null;

  switch (action) {
    case "save":
      await Jobs.findByIdAndUpdate(id, { saved: !save });
      changeItem = await Jobs.find({});

      return changeItem;

    case "rating":
      await Jobs.findByIdAndUpdate(id, { rating: rating });
      changeItem = await Jobs.find({});
      return changeItem;

    default:
      return changeItem;
  }
}

module.exports = atrributesOperations;
