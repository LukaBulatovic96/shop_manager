const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create the user
const UserSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now
  },
  purchaseId:{
    type:Number
  }
});

module.exports = User = mongoose.model('users',UserSchema);
