const express = require("express");
const router = express.Router();
const { boardList, boardDetail, boardCreate, boardUpdate } = require("../controllers/board");

router.get("/list", boardList);
router.get("/:id", boardDetail);
router.post('/', boardCreate);
router.put('/:id', boardUpdate);

module.exports = router;
