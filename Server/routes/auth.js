const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/AuthController");

router.post("/register", register);
router.post("/user", login);

module.exports = router;
