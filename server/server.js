const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config(); // Ensure this is at the top to load environment variables

// Routes
const postRoutes = require("./routes/post");
// const authRoutes = require("./routes/auth");

const app = express();

// MongoDB connection URL from the environment variable or fallback to localhost
const dbURI = process.env.DATABASE || "mongodb://localhost:27017/test"; // Default to local database if DATABASE is not set

// Connect to the MongoDB database
mongoose
  .connect(dbURI)  // Removed the deprecated options
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Error connecting to database: ", err);
  });

// Middleware
app.use(cors()); // Enable CORS
app.use(morgan("dev")); // Use morgan for logging requests
app.use(express.json()); // Parse JSON bodies (no need for body-parser)

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to the Parking Management System API!");
});

// Define routes
app.use("/api", post); 
// app.use("/api", authRoutes); // Uncomment if you need authentication routes

// Set the port from environment variable or default to 5000
const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
