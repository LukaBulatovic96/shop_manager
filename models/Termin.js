const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create the termin
const TerminSchema = new Schema({
  clientName:{
    type:String,
    required:true
  },
  treatmanName:{
    type:String,
    required:true
  },
  date: {
    type: String,
    required:true
  },
  timeH:{
    type: Number,
    required:true
  },
  timeM:{
    type: Number,
    required:true
  },
  duration:{
    type: Number,
    required:true
  }
});

module.exports = Termin = mongoose.model('termins',TerminSchema);
