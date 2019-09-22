const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MAGAZINE')//if MAGAZINE database doesn't exist mongoose will create it

const productSchema = new mongoose.Schema({
  name: String,
  rating:Number,
  review:String
})

const Product = mongoose.model("Product", productSchema);

const iPhone = new Product ({
  name: "iPhone",
  rating: 4,
  review: "It is OK"
})

iPhone.save();
