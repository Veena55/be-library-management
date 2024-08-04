const express = require("express");

const router = express.Router();
const student = require("../controllers/StudentController");
const upload = require("../middlewares/upload");
const ErrorHandler = require("../middlewares/errorHandler");

const uploadMedia = upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'video', maxCount: 1 }
]);

router.get("/all", ErrorHandler.withErrorHandling(student.all));
router.post("/add", uploadMedia, ErrorHandler.withErrorHandling(student.add));
router.get("/edit/:id", ErrorHandler.withErrorHandling(student.edit));
router.put("/edit_data/:id", uploadMedia, ErrorHandler.withErrorHandling(student.editData));
router.delete("/delete/:id", ErrorHandler.withErrorHandling(student.delete));

module.exports = router;