const { createContactDao } = require("../contact.dao");

const create = (req, res, next) => {
  createContactDao(req.body)
    .then((contact) => {
      res.status(201).send(contact);
    })
    .catch((err) => console.log(err));
};

module.exports = create;
