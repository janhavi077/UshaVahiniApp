const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const OTP = require("../controllers/otp.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/api/auth/signin", function(req, res){
    controller.signin(req, res)
   });

  app.post("/api/auth/verify_otp", function(req, res){
    OTP.verifyPhoneOtp(req, res)
  });

  app.post("/api/auth/register", function(req, res){
    OTP.createNewUser(req, res)
  });

  app.post("/api/auth/login_with_phone", function(req, res){
    OTP.loginWithPhoneOtp(req, res)
  });

  app.post("/product/:id/addCart", function(req, res){
    OTP.addItemToCart(req, res)
  });
  
};
