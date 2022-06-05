const express = require("express");
const router = express.Router();

const auth = require("../middleware/jwt");

const multer = require("../middleware/multerconfig");

const postCtrl = require("../controleurs/post");

// CRUD
/*
router.post("/", auth, multer, postCtrl.createPost);
router.get("/", auth, postCtrl.getAllPosts);
router.get("/:id", auth, postCtrl.getOnePost);
router.put("/:id", auth, multer, postCtrl.modifyPost);
router.delete("/", auth, postCtrl.deletePost);

module.exports = router;
*/
