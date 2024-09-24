const express = require("express");
const router = express.Router();
const { eventList } = require("../controllers/event");

router.get("/list", eventList);

module.exports = router;
