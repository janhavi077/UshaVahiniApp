//const { totalPrice } = require("../controllers/otp.controller");
//const config = require("../config/auth.config.js");
// const db = require("../models");
// const User = db.user;
// const cart = db.cart;

// // router.get("/cart", function(req, res){
//     totalPrice = (req, res, next) => {
//         User.findById(req.userId).exec((err, user) => {
//             if (err) {
//               res.status(500).send({ message: err });
//               return;
//             }
//         cart.find(
//             {
//                 productId: {$in:user._id}
//             }, 
//             (err, userCart) => {
//         if(err){
//             console.log(err);
//             return;
//         };
//         const pPrice = userCart.items.map(p => p.price);
//         const totalPrice = pPrice.reduce((a, b) => a + b, 0);
//         userCart.totalPrice = totalPrice;
//         userCart.save()
//         res.render("cart", {cart: userCart});
//     })
// })
// }
// const Cart = {
//     totalPrice
//   };
//   module.exports = Cart;