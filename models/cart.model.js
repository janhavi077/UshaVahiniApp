
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new mongoose.Schema({

  
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product"
    },
    quantity: 
      {
        type: Number,
        required: true,
        min: [1, 'Quantity can not be lesser than one'],
      },
    price: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  });

  const CartSchema = new Schema({

    items: [ItemSchema],
    subTotal: {
      default: 0,
      type: Number
    }
  });
const Cart = mongoose.model('Cart', CartSchema);
module.exports = Cart;