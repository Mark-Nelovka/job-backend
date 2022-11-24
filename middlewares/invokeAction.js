const getJobs = require("../Jobs");

const invokeAction = async ({ action, id, data }) => {
  switch (action) {
    case "getAll":
      const data = await getJobs();
      return data;
    case "getById":
      break;

    default:
      return action;
  }
};

module.exports = invokeAction;
