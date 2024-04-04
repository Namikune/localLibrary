const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("by going to /data, the response is this message");
});

module.exports = router;

