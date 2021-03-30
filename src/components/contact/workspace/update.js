const { updateContactDao } = require("../contact.dao");

const update = (req, res, next) => {
  updateContactDao(req.body).then((contact) => {
    res.send(contact);
  });
};

module.exports = update;
