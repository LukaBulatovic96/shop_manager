const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create the user
const ItemSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  quantity:{
    type:Number,
    required:true
  }
});

module.exports = Item = mongoose.model('items',ItemSchema);
