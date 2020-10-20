const mongodb = require('mongodb');
const express = require('express');
const router = express.Router();
const app=express();
const Article = require('../../models/Article');


//GetAll Articles
router.get('/getAll',async (req,res)=>{
  Article.find({}).then(articles=>{
     return  res.status(200).json(articles);
  });
});

//samo iz postmena koristim
router.delete('/deleteAll',  (req,res)=>{
   Article.find({}).then(async articles =>{
    for (const article in articles) {
      await Article.deleteOne({__id:article.__id});
   };
   return res.status(201).json({
       success: true,
       msg: "deleted all..."
   });
  });
});
//Post  article
router.post('/post',async (req, res) => {
    let {
        name,
        price,
        ammount
    } = req.body

    // Check for the existing name
    await Article.findOne({
        name: name
    }).then(article => {
        if (article) {
            return res.status(400).json({
                msg: "article with that name already exists."
            });
        }else{
          let newArticle = new Article({
            name,
            price,
            ammount
          });
          //post article
          newArticle.save().then(article => {
              return res.status(201).json({
                  success: true,
                  msg: "Article added."
              });
          });
        }
    });
    // The data is valid and new we can register the user


});

module.exports = router;
