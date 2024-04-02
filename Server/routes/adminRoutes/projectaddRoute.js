const express = require("express");
const router = express.Router();
const {
  getAllProjects,
  createProject,
} = require("../../controllers/adminRouteController/projectAddController");
const auth = require("../../middleware/auth");
const checkAdmin = require("../../middleware/checkAdmin");
// GET all projects
router.get("/get", auth, getAllProjects);

// POST a new project
router.post("/add", auth, checkAdmin, createProject);

module.exports = router;
