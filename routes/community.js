const express = require('express')
const router = express.Router()
const { communityList } = require("../controllers/community");

router.get("/list", communityList);
// router.get("/:id", communityDetail);
// router.post('/', communityCreate);
// router.put('/:id', communityUpdate);

module.exports = router;
