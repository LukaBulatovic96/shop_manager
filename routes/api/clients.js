const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();
const Client = require('../../models/Client');

//GetAll Klijents
router.get('/getAll',async (req,res)=>{
  Client.find({}).then(clients=>{
     return  res.status(200).json(clients);
  });
});

//delete client by id
router.delete('/delete/:_id',async (req,res)=>{
  Client.findOne({
    _id: req.params._id
  }).then(async client =>{
    if(client){
    await Client.deleteOne({_id:client._id});

    return res.status(201).json({
      success: true,
      msg: "deleted client"
    });
  }else{
    console.log("not found")
  }

 });
});
//samo iz postmena koristim
router.delete('/deleteAll',  (req,res)=>{
   Client.find({}).then(async clients =>{
    for (const client in clients) {
      await Client.deleteOne({__id:client.__id});
   };
   return res.status(201).json({
       success: true,
       msg: "deleted all..."
   });
  });
});
//Post  client
router.post('/post',async (req, res) => {
    let {
        name,
        email,
        note,
        birthday,
        phoneNumber
    } = req.body

    // Check for the existing name
    await Client.findOne({
        name: name
    }).then(client => {
        if (client) {
            return res.status(400).json({
                msg: "client with that name already exists."
            });
        }else{
          let newClient = new Client({
            name,
            email,
            note,
            birthday,
            phoneNumber
          });
          //post klijent
          newClient.save().then(client => {
              return res.status(201).json({
                  success: true,
                  msg: "Client added."
              });
          });
        }
    });
    // The data is valid and new we can register the user


});

module.exports = router;
