const express = require("express");

const router = express.Router();

router.use("/students", require("./students"));
router.use("/books", require("./books"));
router.use("/library", require("./library"));

module.exports = router;