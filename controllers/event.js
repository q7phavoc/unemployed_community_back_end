const { Event } = require("../models");

exports.eventList = (req, res) => {
  const limit = req.query.limit ? req.query.limit : 10;
  const offset = req.query.offset ? req.query.offset : 0;

  Event.findAll({
    limit: Number(limit),
    offset: Number(offset)
  })
  .then(event => {
    res.json({"eventList": event});
  })
  .catch(err => {
    console.error(err);
  });
};
