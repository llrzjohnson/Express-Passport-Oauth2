const router = require("express").Router();

//Auth Login
router.get("/login", (req, res) => {
  res.render("login");
});

//auth logout
router.get("/logout", (req, res) => {
  //handle with passport
  res.send("logging out from google");
});

//Auth with google
router.get("/google", (req, res) => {
  //handle with passport
  res.send("logging in with google");
});

module.exports = router;
