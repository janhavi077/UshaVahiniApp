const User = require("../models/user.model");
//const Product = require('../models/product.model');
const Cart = require('../models/cart.model');
const Product = require('../models/cart.model');
// const jwt = require("jsonwebtoken");

const {
  PHONE_NOT_FOUND_ERR,

  PHONE_ALREADY_EXISTS_ERR,

  USER_NOT_FOUND_ERR,

  INCORRECT_OTP_ERR
  
} = require("../errors");

const { generateOTP, fast2sms } = require("../utils/otp.util");
const { findById } = require("../models/cart.model");

// --------------------- create new user ---------------------------------

exports.createNewUser = async (req, res, next) => {
  try {
    let { username, email, password, confirmPassword, phone } = req.body;

    if (req.body.password !== req.body.confirmPassword) {
      res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
      });
    }
    // check duplicate phone Number
    const phoneExist = await User.findOne({username, email, password, confirmPassword, phone });

    if (phoneExist) {
      res.status(400). send ({message: PHONE_ALREADY_EXISTS_ERR });
      return;
        return;
    }


    // create new user
    const createUser = new User({
      username,
      email,
      password,
      confirmPassword,
      phone,
      role : phone === process.env.ADMIN_PHONE ? "ADMIN" :"USER"
    });

    // save user

    const user = await createUser.save();

    if(user){
      res.status(200).json({
      type: "success",
      message: "Account created OTP sended to mobile number",
      data: {
        userId: user._id,
      }
    });
    }
    

    // generate otp
    const otp = generateOTP(6);
    // save otp to user collection
    user.phoneOtp = otp;
    await user.save();
    // send otp to phone number
    await fast2sms(
      {
        message: `Your OTP is ${otp}`,
        contactNumber: user.phone,
      },
      next
    );
  } catch (error) {
    console.log(error);
  }
};



// ------------ login with phone otp ----------------------------------

exports.loginWithPhoneOtp = async (req, res, next) => {
  try {

    const { phone } = req.body;
    const user = await User.findOne({ phone });

    if (!user) {
        res.status(400). send ({message: PHONE_NOT_FOUND_ERR});
        return;
    }

    res.status(201).json({
      type: "success",
      message: "OTP sended to your registered phone number",
      data: {
        userId: user._id,
      },
    });

    // generate otp
    const otp = generateOTP(6);
    // save otp to user collection
    user.phoneOtp = otp;
    user.isAccountVerified = true;
    await user.save();
    // send otp to phone number
    await fast2sms(
      {
        message: `Your OTP is ${otp}`,
        contactNumber: user.phone,
      },
      next
    );
  } catch (error) {
    console.log(error);
  }
};

// ---------------------- verify phone otp -------------------------

exports.verifyPhoneOtp = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);
  
    if (!user) {
        res.status(400). send ({message: USER_NOT_FOUND_ERR});
        return;
    }

    if (user && user.phoneOtp != req.body.phoneOtp) {
        res.status(400). send ({message: INCORRECT_OTP_ERR});
        return;
   }
    
   user.phoneOtp === "";
    await user.save();

    res.status(200).json({
      type: " success",
      message: "OTP is verified successfully",
      data: {
        userId: user._id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

  // -----------------------------  add to cart  ----------------------------------

// exports.addtocart = async (req, res) => {
//   try {
//   const quantity = req.body;
//     const Product = await Product.findById(req.params.product_id, function(err, foundProduct){
//         if(err){
//             console.log(err);
//         }
//         const product = {
//             item: foundProduct.product_id,
//             qty: quantity,
//             price: foundProduct.price * quantity 
//         }
//         cart.productId = req.user.product_id;
//         cart.itmes.push(product);
//         cart.save();
//         res.redirect("/cart");
//     })
//  }catch (error) {
//   console.log(error);
// }
// };

//     // -----------------------------  add items to cart  ----------------------------------

// exports.addItemToCart = async (req, res) => {
 
// try {
//   const { productId, quantity, price } = req.body;

//   const userId = req.body.userId ; //TODO: the logged in user id

//   let cart = await Cart.findOne({ userId });
//   //let itemIndex = await cart.products.findIndex({productId});
//   var total = quantity * price;
//   console.log(total);
//   // cart.subTotal += total;
//     if (cart) {
//       // console.log(findIndex);
//       //cart exists for user
//       // const user = await User.findById(userId);
//       let itemIndex = await cart.items.findIndex(p => p.productId == productId);
//       itemIndex.subTotal += total; 
//       if (itemIndex > -1) {
//         //product exists in the cart, update the quantity
//         let productItem = cart.items[itemIndex];
//         productItem.quantity = quantity;
//         cart.items[itemIndex] =productItem;
//       } else {
//         //product does not exists in cart, add new item
//         cart.items.push({ productId, quantity, total, price });
//       }
//       cart = await cart.save();
//       // console.log(cart);
//       return res.status(201).send(cart);
//     } else {
//       //no cart for user, create new cart
//       const newCart = await Cart.create({
//         userId,
//         items: [{ productId, total }]
//       });

//       return res.status(201).send(newCart);
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).send(err);
//   }

// }

  // -----------------------------  create product  ----------------------------------

  exports.addItemToCart = async (req,res)=>{
    var total = req.body.quantity * req.body.price;
    console.log(total);
    const userData = await Cart.findById(req.body.userId); 
    //         userData.subTotal += total;
    //        //cartData.productId.push(req.body.productId);
    //         userData.productId = req.user.product_id;
    //         userData.itmes.push(product);
    //         userData.save();
    //         res.redirect("/carts");
    //  }catch (error) {
    //   console.log(error);
    // }
    const data = await Cart.findByIdAndUpdate(req.body.userId,req.body.productId);
    res.status(200).json({
      data: {
        userId: req.body.userId,
        productId: req.body.productId,
        subTotal: req.body.subTotal
      },
     
    })
  }
  ///
//   const cartRepository = require("../routes/cartRepository")

// const productRepository = require("../routes/repository")

//   exports.addItemToCart = async (req, res) => {
//     const {
//         productId
//     } = req.body;

//    const quantity = (req.body.quantity);

//    try {
//        let cart = await cartRepository.cart();

//        let productDetails = await productRepository.findById(productId);

//        if (!productDetails) {
        
//         return res.status(500).json({
//             type: "Not Found",
//             msg: "Invalid request"
//         })
//        }
//        // if cart exists

//        else if (cart) {

//       // check if index exists
//       const productFound = cart.items.findproduct(item => {

//         item.productId === productId
//       });
        

//       // This removes an item from the cart if 
//       // the quantity is set to zero

//       // we can use this method to remove an item from the list

//       if (productFound !== -1 && quantity <= 0) {
//           cart.items.splice(productFound, 1);
//           if (cart.items.length == 0) {
//               cart.subTotal = 0;
//           } else {
//               cart.subTotal = cart.items.map(item => item.subTotal).reduce((acc, next) => acc + next)
//           }
//       }

//         //  Check if product exist,
//         // add the previous quantity with the
//         // new quantity and update the total price
//         else if ( productFound !== -1) {
//             cart.items[productFound].quantity =
//             cart.items[productFound].quantity + quantity;

//             cart.items[productFound].total = 
//             cart.items[productFound].quantity * productDetails.price;

//             cart.items[productFound].price = productDetails.price;
//             cart.subTotal = cart.items.map(item => 
//               item.total).reduce((acc, next) => acc + next)
//         }

//         // check if quantity is greater than 0 then add item to items array

//         else if(quantity > 0) {

//             cart.items.push({
//                productId: productId,
//                 quantity: quantity,
//                 price: productDetails.price,
//                 total: (productDetails.price * quantity)
//             })
//             cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
//         }

//         // if quantity of price is 0 throw error

//         else {
//             return res.status(400).json({
//                 type: "Invalid",
//                 msg: "Invalid request"
//             })
//         }
//         let data = await cart.save();
//         res.status(200).json({
//             type: "success",
//             msg: "Process Successful",
//             data: {
//               userId: req.body.userId,
//               productId: req.body.productId,
//             },
//         })
//        }

//      // if there is no user with a cart...it creates a new cart and 
//      // then adds the item to the cart that has been created

//        else {
//            const cartData = {
//                items: [{
//                    productId: productId,
//                    quantity: quantity,
//                    total: (productDetails.price * quantity),
//                    price: productDetails.price
//                }],
//                subTotal: (productDetails.price * quantity)
//            }
//            cart = await cartRepository.addItem(cartData)

//            // let data = await cart.save();
//            res.json(cart);
//        }
//    } catch (err) {
//        console.log(err)
//        res.status(400).json({
//            type: "Invalid",
//            msg: "Something went wrong",
//            err: err
//        })
//    }

// }
