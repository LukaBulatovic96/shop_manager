const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();
const Treatman = require('../../models/Treatman');
const Item = require('../../models/Item');

//GetAll treatmans
router.get('/getAll',async (req,res)=>{
  Treatman.find({}).then(treatmans=>{
     return  res.status(200).json(treatmans);
  });
});

//samo iz postmena koristim
router.delete('/deleteAll',  (req,res)=>{
   Treatman.find({}).then(async treatmans =>{
    for (const treatman in treatmans) {
      await Treatman.deleteOne({__id:treatman.__id});
   };
   return res.status(201).json({
       success: true,
       msg: "deleted all..."
   });
  });
});
//Post  treatman
router.post('/post',async (req, res) => {
    let {
        name,
        price,
        duration
    } = req.body

    console.log(req.body)

    // Check for the existing name
    await Treatman.findOne({
        name: name
    }).then(treatman => {
        if (treatman) {
            return res.status(400).json({
                msg: "treatman with that name already exists."
            });
        }else{
          let newTreatman = new Treatman({
            name,
            price,
            duration
          });
          //post treatman
          newTreatman.save().then(treatman => {
              return res.status(201).json({
                  success: true,
                  msg: "Treatman added."
              });
          });
        }
    });
    // The data is valid and new we can register the user
});

//GetID treatman
router.get('/get/:name',async (req,res)=>{
  Treatman.find({
    name: req.params.name
  }).then(treatman=>{
     return  res.status(200).json(treatman);
  });
});
//delete treatman by id
router.delete('/delete/:_id',async (req,res)=>{
  Treatman.findOne({
    _id: req.params._id
  }).then(async treatman =>{
    if(treatman){
    await Treatman.deleteOne({_id:treatman._id});

    return res.status(201).json({
      success: true,
      msg: "deleted treatman"
    });
  }else{
    console.log("not found")
  }

 });
});

//put Item to treatman
router.put('/put/:name',async (req, res) => {

    let treatmanItemData= req.body

    console.log(treatmanItemData)
    // Check for the existing name
    await Treatman.findOne({
        name: req.params.name
    }).then(async treatman => {
        if (treatman) {
          await Item.findOne({
            name:treatmanItemData.itemName
          }).then( item=>{

            if(item){

            if(treatman.itemName.includes(item.name)){
                return res.status(400).json({
                    msg: "Treatman already has that Item."
                });
            }else{
            treatman.itemName.push(item.name);
            treatman.save().then(treatman =>{
              return res.status(201).json({
                  success: true,
                  msg: "Treatman saved."
              });
            })
            }


          }else{
            return res.status(400).json({
                msg: `item ${itemName} doesn't exists.`
            });
          }
          })
        }else{
          return res.status(400).json({
              msg: "treatman doesn't exists."
          });
        }
    });
    // The data is valid and new we can register the user
});

module.exports = router;
