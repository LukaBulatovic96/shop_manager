const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();
const Termin = require('../../models/Termin');
const Treatman = require('../../models/Treatman');
const Client = require('../../models/Client');

//GetAll termins
router.get('/getAll',async (req,res)=>{
  Termin.find({}).then(termins=>{
     return  res.status(200).json(termins);
  });
});

//samo iz postmena koristim
router.delete('/deleteAll',  (req,res)=>{
   Termin.find({}).then(async termins =>{
    for (const termin in termins) {
      await Termin.deleteOne({__id:termin.__id});
   };
   return res.status(201).json({
       success: true,
       msg: "deleted all..."
   });
  });
});


// delete by ID
router.delete('/delete/:_id',  (req,res)=>{

   Termin.findOne({
     _id: req.params._id
   }).then(async termin =>{
     if(termin){
     await Termin.deleteOne({_id:termin._id});

     return res.status(201).json({
       success: true,
       msg: "deleted termin"
     });
   }else{
     console.log("not found")
   }

  });
});

//Post  termin
router.post('/post',async (req, res) => {
    let {
        clientName,
        treatmanName,
        date,
        timeH,
        timeM,
        duration
    } = req.body

    let newTermin = new Termin({
        clientName,
        treatmanName,
        date,
        timeH,
        timeM,
        duration
    });
    console.log(req.body)
    //post termin
    newTermin.save().then(termin => {
      return res.status(201).json({
        success: true,
        msg: "Termin added."
      });
    });

  });

module.exports = router;
