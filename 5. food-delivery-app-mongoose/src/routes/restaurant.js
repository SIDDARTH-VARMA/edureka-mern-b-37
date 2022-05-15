
const express = require("express");
const router = express.Router();
const controller = require("../controllers/restaurant");

router.post("/", controller.add);
router.get("/", controller.get);
// router.post("/menu", );


module.exports = router;