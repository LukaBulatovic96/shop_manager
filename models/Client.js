const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create the user
const ClientSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  note:{
    type:String,
    required:true
  },
  birthday:{
    type:String,
    required:true
  },
  phoneNumber:{
    type:String,
    required:true
  }
});

module.exports = Client = mongoose.model('clients',ClientSchema);
