const express = require("express");

const router = express.Router();
const student = require("../controllers/StudentController");
const upload = require("../middlewares/upload");
const ErrorHandler = require("../middlewares/errorHandler");

const uploadMedia = upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'video', maxCount: 1 }
]);

router.get("/", ErrorHandler.withErrorHandling(student.all));
router.post("/add", uploadMedia, ErrorHandler.withErrorHandling(student.add));

module.exports = router;