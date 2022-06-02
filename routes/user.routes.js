const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");
const Cart = require("../controllers/otp.controller");
// const cart = require("../models/cart.model");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/test/all", 
  function(req, res) {
  controller.allAccess
  });
  app.get("/api/test/user",
  function(req, res) {
   [authJwt.verifyToken], controller.userBoard
  });
  app.get(
    "/api/test/mod",
    function(req, res) {
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
    });
  app.get(
    "/api/test/admin", function(req, res) {
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
    });
//   app.get("/cart", Cart.userCart);
  app.get("/cart", function(req, res) {
  Cart.userData
    }); 
 };

// app.get('/user/all', function(req, res){
//   Controller.Create
// });