const express = require("express");
const router = express.Router();
const {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controller/blog");

router.route("/").get(getAllBlogs).post(createBlog);
router.route("/:id").get(getBlogById).patch(updateBlog).delete(deleteBlog);

module.exports = router;
