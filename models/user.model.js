const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    phone: String,
    phoneOtp:String,
    password: String,
    confirmPassword: String,
      productId : [
        {
        type: mongoose.Schema.Types.ObjectId
       }
  ],
      subTotal : {
        type : Number,
        default : 0
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
    
  })
);
module.exports = User;