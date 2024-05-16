var client = require("braintree-web/client");
var hostedFields = require("braintree-web/hosted-fields");
const fetch = require("node-fetch-commonjs");
const express = require("express");
const path = require("path");
const app = express();

// Set up view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Route
app.get("/", async (req, res) => {
  const response = await fetch("http://127.0.0.1:8000/api/generate_token");
  const data = await response.json();
  const clientToken = data.client_token;

  res.render("index", { clientToken });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
