const express = require("express");
const router = express.Router();
const { boardList } = require("../controllers/board");

router.get("/list", boardList);

module.exports = router;
