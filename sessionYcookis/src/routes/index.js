const express = require('express');
const router = express.Router();
const {index} = require("../controllers/indexControllers")

/* GET home page. */
router
.get('/index', index);

module.exports = router;

