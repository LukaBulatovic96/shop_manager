const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Purchase
const PurchaseSchema = new Schema({
  articleName:{
    type:String,
    required:true
  },
  ammount:{
    type:Number,
    required:true
  },
  username:{
    type:String,
    required:true
  }
});

module.exports = Purchase = mongoose.model('purchases',PurchaseSchema);
