const express = require("express");
const router = express.Router();
const facauthenticate = require("../../middleware/faculAuth");
const {
  register,
  login,
  logout,
} = require("../../controllers/beyondUserRouteController/FacAuthController");

// Registration route
router.post("/register", register);

// Login route
router.post("/login", login);
router.post("/logout", logout);
// Profile route
router.get("/profile", facauthenticate(), (req, res) => {
  const { role } = req.user;
  if (role === "faculty") {
    res.json({ message: "Faculty Profile" });
  } else if (role === "hod") {
    res.json({ message: "HOD Profile" });
  } else if (role === "principal") {
    res.json({ message: "Principal Profile" });
  }
});

module.exports = router;
