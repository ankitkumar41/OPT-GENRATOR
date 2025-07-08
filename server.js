
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.render("login"); 
});
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
