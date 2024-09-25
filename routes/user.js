const express = require("express");
const router = express.Router();
const { join, login, logout, checkSession } = require("../controllers/user");
const { isLoggedIn, isNotLoggedIn } = require("../middlewares");
const passport = require("passport");

router.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followingIdList = [];
  next();
});

router.post("/join", isNotLoggedIn, join);

router.post("/login", isNotLoggedIn, login);

router.get("/logout", isLoggedIn, logout);

// 로그인 상태 확인
router.get('/checkSession', checkSession);

router.get(
  "/kakao",
  passport.authenticate("kakao", {
    failureRedirect: "/?loginError=카카오로그인 실패",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

router.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    failureRedirect: "/?loginError=카카오로그인 실패",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

module.exports = router;
