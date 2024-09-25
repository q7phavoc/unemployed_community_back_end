const { Community } = require("../models");

exports.communityList = async (req, res) => {
  const limit = req.query.limit ? req.query.limit : 10;
  const offset = req.query.offset ? req.query.offset : 0;

  Community.findAll({
    where: {
      community_category: decodeURIComponent(req.query.category)
    },
    limit: Number(limit),
    offset: Number(offset)
  })
  .then(community => {
    res.json({"communityList": community});
  })
  .catch(err => {
    console.error(err);
  });
};