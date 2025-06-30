require("dotenv").config();

const express = require("express");
const PORT = 3000;

const app = express();
const connectionDb = require("./config/Connection");

// Middleware
app.use(express.json());

//routes
const blogRoutes = require("./routes/blog");
app.get("/", (req, res) => {
  res.status(200).send("Home");
});

app.use("/api/blogs", blogRoutes);

const start = async () => {
  try {
    await connectionDb(process.env.MONGOOSE_URI);
    app.listen(PORT, () =>
      console.log(`Server running: http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

// Start the server
start();