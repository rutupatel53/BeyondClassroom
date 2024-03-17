const express = require("express");
const router = express.Router();

//import controllers
const {
  Hindex,
  Hshow,
  Hstore,
  Hupdate,
  Hdestroy,
} = require("../controllers/hardwarePdataController");
const upload = require("../middleware/upload");
const authenticate = require("../middleware/authenticate");
const { submitForm } = require("../controllers/RecommendationController");
//import middlewares

//api routes
router.get("/", Hindex); //add authenticate
router.post("/Hshow", Hshow);
router.post("/Hstore", upload.single("image"), Hstore);
router.post("/Hupdate", Hupdate);
router.post("/Hdelete", Hdestroy);
router.post("/Hrecommend", submitForm);
module.exports = router;
