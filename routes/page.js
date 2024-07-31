const express = require("express");
const {
  renderProfile,
  renderJoin,
  renderMain,
} = require("../controllers/page");
const { renderDetail } = require("../controllers/community");

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = null;
  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followingIdList = [];
  next();
});

router.get("/profile", renderProfile);

router.get("/join", renderJoin);

router.get("/", renderMain);

router.get("/community/detail", renderDetail);

module.exports = router;
