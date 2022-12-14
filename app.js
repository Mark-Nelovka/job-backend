const express = require("express");
const cors = require("cors");
require("dotenv").config();

const jobRouter = require("./routes/job");

const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.static("public"));

app.use("/", jobRouter);

app.use((req, res) => {
  res.status(404).json({ message: "404 Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
