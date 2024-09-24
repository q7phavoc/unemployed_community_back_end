const express = require("express");
const router = express.Router();

const page = require("./page.js");
const community = require("./community.js");
const profile = require("./profile.js");
const user = require("./user.js");
const board = require("./board.js");
const course = require("./course.js");
const event = require("./event.js");

router.use("/", page);
router.use("/community", community);
router.use("/profile", profile);
router.use("/user", user);
router.use("/board", board);
router.use("/course", course);
router.use("/event", event);

module.exports = router;
