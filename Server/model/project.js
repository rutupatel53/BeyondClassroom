// models/Project.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const projectSchema = new Schema({
  projectId: {
    type: String,
    required: true,
    unique: true,
  },
  projectType: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  techStack: {
    type: [String],
    required: true,
  },
  assignedBy: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
