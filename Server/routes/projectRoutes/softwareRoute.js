const express = require("express");
const router = express.Router();

//import controllers
const {
  index,
  show,
  store,
  update,
  destroy,
} = require("../../controllers/projectRouteController/ProjectdController");
const upload = require("../../middleware/upload");
const auth = require("../../middleware/auth");
const {
  submitForm,
} = require("../../controllers/recommendationRouteController/RecommendationController");
//import middlewares

//api routes
router.get("/", auth, index); //add authenticate
router.post("/show", auth, show);
router.post("/store", auth, upload.single("image"), store);
router.post("/update", auth, update);
router.post("/delete", auth, destroy);
router.post("/recommend", auth, submitForm);
module.exports = router;
