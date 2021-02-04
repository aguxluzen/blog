var express = require("express");
var router = express.Router();
const posts = require('./posts')

router.use('/posts', posts)

module.exports = router;
