const bcrypt = require("bcrypt");
const passport = require("passport");
const { User } = require("../models");

exports.join = async (req, res) => {
  const { email, nick, password } = req.body;
  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      return res.json({ ok: false, message: "exist" });
    }
    const hash = await bcrypt.hash(password, 12);
    await User.create({
      email,
      nick:"nick",
      password: hash,
      provider: "local",
    });
    return res.json({ ok: true });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

exports.login = (req, res, next) => {
  passport.authenticate("local", (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }

    if (!user) {
      res.json({ ok: false, message: info.message });
    }

    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.json({ ok: true });
    });
  })(req, res, next);
};

exports.logout = async (req, res, next) => {
  try {
    const ACCESS_TOKEN = res.locals.user.accessToken;
    let logout = await axios({
      method: "post",
      url: "https://kapi.kakao.com/v1/user/unlink",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
  } catch (error) {
    console.error(error);
    res.json(error);
  }
  // 세션 정리
  req.logout();
  req.session.destroy();

  res.redirect("/");
};

exports.checkSession = async (req, res) => {
  if (req.session.user) {
    res.json({ loggedIn: true, user: req.session.user });
  } else {
    res.json({ loggedIn: false });
  }
}
