const { response } = require("express");
const Hprodata = require("../../model/hardware");
const mongoose = require("mongoose");

//show project details
const Hindex = (req, res, next) => {
  Hprodata.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured!",
      });
    });
};

//single project
const Hshow = (req, res, next) => {
  let projectID = req.body.projectID;
  Hprodata.findById(projectID)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured!",
      });
    });
};

//store project info

const Hstore = (req, res, next) => {
  let projectd = new Hprodata({
    title: req.body.title,
    description: req.body.description,
    url: req.body.link,
  });
  if (req.file) {
    projectd.image = req.file.path;
  }
  projectd
    .save()

    .then((response) => {
      res.json({
        message: "project details add successfully",
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "An error Occured!",
      });
    });
};

//to update project
const Hupdate = (req, res, next) => {
  let projectID = req.body.projectID;
  let updatedData = {
    title: req.body.title,
    description: req.body.description,
    url: req.body.link,
  };
  Hprodata.findByIdAndUpdate(projectID, { $set: updatedData })
    .then(() => {
      res.json({
        message: "Project updated successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured!",
      });
    });
};

//delete project details
const Hdestroy = (req, res, next) => {
  let projectID = req.body.projectID;
  Hprodata.findByIdAndDelete(projectID)
    .then(() => {
      res.json({
        message: "Project deleted successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured!",
      });
    });
};

module.exports = {
  Hindex,
  Hshow,
  Hstore,
  Hupdate,
  Hdestroy,
};
