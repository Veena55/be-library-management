const express = require("express");

const router = express.Router();

const Library = require("../controllers/LibraryController");
const ErrorHandler = require("../middlewares/errorHandler");

router.get("/all", ErrorHandler.withErrorHandling(Library.all));
router.post("/add", ErrorHandler.withErrorHandling(Library.add));
router.get("/all_students", ErrorHandler.withErrorHandling(Library.allStudents));
router.get("/edit/:id", ErrorHandler.withErrorHandling(Library.edit));
router.put("/edit_data/:id", ErrorHandler.withErrorHandling(Library.editData));
router.delete("/delete/:id", ErrorHandler.withErrorHandling(Library.delete));

module.exports = router;