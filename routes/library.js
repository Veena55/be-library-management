const express = require("express");

const router = express.Router();

const Library = require("../controllers/LibraryController");

router.get("/all", Library.all);
router.post("/add", Library.add);

module.exports = router;