const express = require("express");
const router = express.Router();

//import controllers
const { getprojectdata,createdata,getprojectdid,deletepdata,updatedata } = require("../controllers/ProjectdController");

//import middlewares

//api routes
router.get("/", getprojectdata);
router.get('/',getprojectdid)
router.post('/', createdata)
// router.post('/upload',uploadimage)
router.delete("/:id",deletepdata)
router.patch('/:id',updatedata)
module.exports = router;
