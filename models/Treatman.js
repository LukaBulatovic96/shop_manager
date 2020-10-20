const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create the user
const TreatmanSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  itemName: [{
    type: String
  }],
  duration:{
    type:Number,
    required:true
  }
});

module.exports = Treatman = mongoose.model('treatmans',TreatmanSchema);
