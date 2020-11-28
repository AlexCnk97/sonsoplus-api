"use strict";

var _express = require("express");

const router = (0, _express.Router)();
router.get('/', (req, res) => {
  res.render('index');
});