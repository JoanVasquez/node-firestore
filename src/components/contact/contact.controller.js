const express = require("express");
const create = require("./workspace/create");
const list = require("./workspace/list");
const update = require("./workspace/update");

const router = express.Router();

router.get("/contact", list);
router.post("/contact", create);
router.put("/contact", update);

module.exports = router;
