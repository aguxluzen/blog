const express = require("express");
const { getPostsController } = require("../controllers/posts.controller");
const router = express.Router();

router.get("/", getPostsController);

module.exports = router;
