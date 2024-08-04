const express = require("express");

const router = express.Router();

const Book = require("../controllers/BookController");
const { withErrorHandling } = require("../middlewares/errorHandler");
const ErrorHandler = require("../middlewares/errorHandler");

router.get("/all", Book.all);
router.post("/add", withErrorHandling(Book.add));
router.get("/edit/:id", ErrorHandler.withErrorHandling(Book.edit));
router.put("/edit_data/:id", ErrorHandler.withErrorHandling(Book.editData));
router.delete("/delete/:id", ErrorHandler.withErrorHandling(Book.delete));

module.exports = router;