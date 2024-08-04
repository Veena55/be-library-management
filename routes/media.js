const express = require("express");
const router = express.Router();
const Student = require("../models");
const { withErrorHandling } = require("../middlewares/errorHandler");
const MediaController = require("../controllers/MediaController");

router.get("/images/:imgPath", withErrorHandling(MediaController.handleMedia))


module.exports = router;