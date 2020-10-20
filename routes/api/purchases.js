const mongodb = require('mongodb');
const express = require('express');
const router = express.Router();
const app=express();
const Purchase = require('../../models/Purchase');
const Article = require('../../models/Article');
const User = require('../../models/User');


//GetAll Purchases
router.get('/getAll',async (req,res)=>{
  Purchase.find({}).then(purchases=>{
     return  res.status(200).json(purchases);
  });
});
//Get All User Purchases
router.get(`/getUser`,async (req,res)=>{
  /*Purchase.find({}).then(purchases=>{
     return  res.status(200).json(purchases);
  });*/
});
//samo iz postmena koristim
router.delete('/deleteAll',  (req,res)=>{
   Purchase.find({}).then(async purchases =>{
    for (const purchase in purchases) {
      await Purchase.deleteOne({__id:purchase.__id});
   };
   return res.status(201).json({
       success: true,
       msg: "deleted all..."
   });
  });
});
//Post  Purchase
router.post('/post',async (req, res) => {
    let {
        articleName,
        ammount,
        username
    } = req.body

    // Check for the existing User
    await User.findOne({
        username: username
    }).then(async user => {//async za find Article
        if (username) {
          await Article.findOne({
              name: articleName
          }).then(article=>{
              if(article){
                let newPurchase = new Purchase({
                  articleName,
                  ammount,
                  username
                });
                //post purchase
                newPurchase.save().then(purchase => {
                    return res.status(201).json({
                        success: true,
                        msg: "Purchase added."
                    });
                });
              }else{
                return res.status(400).json({
                    msg: "Article doesnt exist."
                });
              }
          });
        }else{
          return res.status(400).json({
              msg: "User doesnt exist."
          });
        }
    });


});

module.exports = router;
