const data = require("../sample.json");

const getAllBlogs = (req, res) => {
  res.status(200).json(data);
};

const createBlog = (req, res) => {
  res.send("Create Blog");
};

const getBlogById = (req, res) => {
  const { id } = req.params;
  // Find blog by ID
  const blog = data.find((item) => item.id === Number(id));
  if (!blog) {
    return res.status(404).send("Blog Does Not Exist");
  }
  res.status(200).json(blog);
};

const updateBlog = (req, res) => {
  res.send("Update Blog");
};

const deleteBlog = (req, res) => {
  res.send("Delete Blog");
};

module.exports = {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
};
