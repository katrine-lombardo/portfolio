const express = require("express");
const app = express();

// Middleware setup
app.use(express.json());

// Define routes
app.use("/api", require("./routes/api"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
