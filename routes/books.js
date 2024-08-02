const express = require("express");

const router = express.Router();

const Book = require("../controllers/BookController");

router.get("/all", Book.all);
router.post("/add", Book.add);

module.exports = router;