const blog = require("../model/blog");

/** * @desc Get all blogs
 * @route GET /api/blogs
 * @access Public
 */
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blog.find({});
    res.status(200).json({
      success: true,
      data: blogs,
      message: "Blogs fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};
/** * @desc Create a new blog
 * @route POST /api/blogs
 * @access Public
 */
const createBlog = async (req, res) => {
  try {
    const expense = await blog.create(req.body);
    res.status(201).json({
      success: true,
      data: expense,
      message: "Blog created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

/** * @desc Get a blog by ID
 * @route GET /api/blogs/:id
 * @access Public
 *  @param {string} id - The ID of the blog to retrieve
 */
const getBlogById = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blogData = await blog.findById({ _id: blogId });
    if (!blogData) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }
    res.status(200).json({
      success: true,
      data: blogData,
      message: "Blog fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

/** * @desc Update a blog by ID
 * @route PUT /api/blogs/:id
 * @access Public
 * @param {string} id - The ID of the blog to update
 */
const updateBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blogData = await blog.findByIdAndUpdate({ _id: blogId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!blogData) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }
    res.status(200).json({
      success: true,
      data: blogData,
      message: "Blog updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blogData = await blog.findByIdAndDelete({ _id: blogId });
    if (!blogData) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

module.exports = {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
};
