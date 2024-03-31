// getUserRoute.js
const express = require("express");
const router = express.Router();
const getUsers = require("../../controllers/beyondUserRouteController/getAllUserController"); // Correct import statement
const auth = require("../../middleware/auth");
const checkAdmin = require("../../middleware/checkAdmin");

router.get("/users", auth, checkAdmin, getUsers);

module.exports = router;
