const express = require("express");

//import router
const authRoutes = require("./routes/auth-routes");

//setup app
const app = express();

//setup view engine - ejs
app.set("view engine", "ejs");

//setup route by using imported route
app.use("/auth", authRoutes);

// create home route
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("Connected to Port 3000");
});
