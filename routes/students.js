const express = require("express");

const router = express.Router();
const student = require("../controllers/StudentController");

router.get("/", student.all);
router.post("/add", student.add);

module.exports = router;