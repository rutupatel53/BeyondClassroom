const express = require("express");
const router = express.Router();

//import controllers
const { index,show,store,update,destroy } = require("../controllers/ProjectdController");
const upload=require('../middleware/upload')
const authenticate =require('../middleware/authenticate')
//import middlewares

//api routes
router.get('/',index)//add authenticate
router.post('/show',show)
router.post('/store',upload.single('image'),store)
router.post('/update',update)
router.post('/delete',destroy)
module.exports = router;
