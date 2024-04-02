// controllers/projectController.js
const Project = require("../../model/project");

// GET all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST a new project
const createProject = async (req, res) => {
  const project = new Project({
    projectId: req.body.projectId,
    projectType: req.body.projectType,
    description: req.body.description,
    techStack: req.body.techStack,
    assignedBy: req.body.assignedBy,
    deadline: req.body.deadline,
    contactNumber: req.body.contactNumber,
  });

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createProject,
  getAllProjects,
};
