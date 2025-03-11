const express = require("express");
const router = express.Router();
const topchartController = require("../app/controllers/TopchartController");

router.get("/", topchartController.getAllSongs);

module.exports = router;
