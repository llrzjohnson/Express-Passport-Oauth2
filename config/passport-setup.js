const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

passport.use(
  new GoogleStrategy({
    //options for the strategy here
    clientID:
      "657458934321-rvpmhq558i2lg8h2cja78r0lgr815ft4.apps.googleusercontent.com",
    clientSecret: "nqn9KjvhSGLTV5E6jNgG0-T1"
  }),
  () => {
    //passport callback function
  }
);
