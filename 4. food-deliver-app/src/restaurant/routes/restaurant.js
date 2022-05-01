
// Routing of express.
const express = require("express");
const controller = require("../controllers/restaurant");

// Create router.
const router = express.Router();

router.post("/", controller.add);

module.exports = router;