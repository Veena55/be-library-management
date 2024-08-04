const express = require("express");

const router = express.Router();

router.use("/student", require("./students"));
router.use("/book", require("./books"));
router.use("/library", require("./library"));

module.exports = router;