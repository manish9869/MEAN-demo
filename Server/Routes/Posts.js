const express = require("express");

const Post = require("../models/post");

const PostController = require("../controllers/posts");
const checkAuth = require("../middleware/check-auth");
const extractFile =require('../middleware/file');

const router = express.Router();


router.post(
  "",
  checkAuth,extractFile
 ,
  PostController.CreatePost
);

router.put(
  "/:id",
  checkAuth,
  extractFile,
  PostController.updatePost
);

router.get("", PostController.getPost);

router.get("/:id", PostController.getSinglePost);


router.delete("/:id", checkAuth, PostController.deletePost);

module.exports = router;
