const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();
const Item = require('../../models/Item');

//GetAll items
router.get('/getAll',async (req,res)=>{
  Item.find({}).then(items=>{
     return  res.status(200).json(items);
  });
});

//Post  Item
router.post('/post',async (req, res) => {
    let {
        name,
        price,
        quantity
    } = req.body

    // Check for the existing name
    await Item.findOne({
        name: name
    }).then(item => {
        if (item) {
            return res.status(400).json({
                msg: "Item with that name already exists."
            });
        }else{
          let newItem = new Item({
            name,
            price,
            quantity
          });
          //post item

          newItem.save().then(item => {
              return res.status(201).json({
                  success: true,
                  msg: "Item added."
              });
          });

        }
    });
    // The data is valid and new we can register the user
});

//Add Quantity
router.put('/put/:name', async(req, res) => {

    let itemQuantityData= req.body
    // Check for the existing name
    await Item.findOne({
        name: req.params.name
    }).then(async item => {
        if (item) {

          let newQuantity = item.quantity + Number(itemQuantityData.quantity);
          item.quantity = newQuantity
          item.save().then(item=>{
            return res.status(201).json({
                success: true,
                msg: "Item saved."
            });
          })

        }else{
          return res.status(400).json({
              msg: "item doesn't exists."
          });
        }
    });
    // The data is valid and new we can register the user
});

//Delete by id

router.delete('/delete/:_id',  (req,res)=>{

   Item.findOne({
     _id: req.params._id
   }).then(async item =>{
     if(item){
     await Item.deleteOne({_id:item._id});

     return res.status(201).json({
       success: true,
       msg: "deleted item"
     });
   }else{
     console.log("not found")
   }

  });
});
//samo iz postmena koristim
router.delete('/deleteAll',  (req,res)=>{
   Item.find({}).then(async items =>{
    for (const item in items) {
      await Item.deleteOne({__id:item.__id});
   };
   return res.status(201).json({
       success: true,
       msg: "deleted all..."
   });
  });
});
module.exports = router;
