
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// API endpoint
app.get("/api", (req, res) => {
  res.json({
    message: "Backend Running Successfully",
  });
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
