const express = require("express");
const router = express.Router();
const { courseList } = require("../controllers/course");

router.get("/list", courseList);

module.exports = router;
