const express = require("express");
const CourseController = require("../controller/courseController");

const route = express.Router();

route.get("/", CourseController.get);
route.get("/:id", CourseController.getById);
route.post("/", CourseController.add);

module.exports = route;