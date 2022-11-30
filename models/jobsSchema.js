const { Schema, model } = require("mongoose");

const jobsSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  benefits: {
    type: Array,
    required: true,
  },
  location: {
    type: Object,
    required: true,
  },
  pictures: {
    type: Array,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  employment_type: {
    type: Array,
    required: true,
  },
  saved: {
    type: Boolean,
    required: false,
  },
  rating: {
    type: String,
    required: false,
  },
});

const Jobs = model("jobs", jobsSchema);

module.exports = {
  Jobs,
};
