const express = require("express");
const router = express.Router();

//import controllers
const {
  Hindex,
  Hshow,
  Hstore,
  Hupdate,
  Hdestroy,
} = require("../../controllers/projectRouteController/hardwarePdataController");
const upload = require("../../middleware/upload");
const auth = require("../../middleware/auth");
const {
  submitForm,
} = require("../../controllers/recommendationRouteController/RecommendationController");
//import middlewares

//api routes
router.get("/", auth, Hindex); //add authenticate
router.post("/show", auth, Hshow);
router.post("/store", auth, upload.single("image"), Hstore);
router.post("/update", auth, Hupdate);
router.post("/delete", auth, Hdestroy);
router.post("/recommend", auth, submitForm);
module.exports = router;
