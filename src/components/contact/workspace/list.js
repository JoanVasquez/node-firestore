const { listContactDao } = require("../contact.dao");

const list = (req, res, next) => {
  listContactDao().then((contacts) => {
    res.send(contacts);
  });
};

module.exports = list;
