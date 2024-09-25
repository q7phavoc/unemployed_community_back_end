const { Course } = require("../models");

exports.courseList = (req, res) => {
  const limit = req.query.limit ? req.query.limit : 10;
  const offset = req.query.offset ? req.query.offset : 0;

  Course.findAll({
    where: {
      course_category: decodeURIComponent(req.query.category)
    },
    limit: Number(limit),
    offset: Number(offset)
  })
  .then(course => {
    res.json({"courseList": course});
  })
  .catch(err => {
    console.error(err);
  });
};
