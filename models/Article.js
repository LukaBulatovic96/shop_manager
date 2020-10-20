const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create article
const ArticleSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  ammount:{
    type:Number,
    required:true
  }
});

module.exports = Article = mongoose.model('articles',ArticleSchema);
