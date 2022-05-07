
// Routing of express.
const express = require("express");
const controller = require("../controllers/restaurant");

// Create router.
const router = express.Router();

router.post("/", controller.add);
router.get("/", controller.get);
router.get("/location/:city", controller.getByLocation)

module.exports = router;