const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;
const User = require('../../models/User');
/*
@route POST api/users/register
@description reister the user
@access public
*/

//samo iz postmena koristim
router.delete('/deleteAll',  (req,res)=>{
   User.find({}).then(async users =>{
    for (const user in users) {
      await User.deleteOne({__id:user.__id});
   };
   return res.status(201).json({
       success: true,
       msg: "deleted all..."
   });
  });
});

router.post('/register', (req, res) => {
    let {
        name,
        username,
        email,
        password,
        confirm_password
    } = req.body
    if (password !== confirm_password) {
        return res.status(400).json({
            msg: "Password do not match."
        });
    }
    // Check for the unique Username
    User.findOne({
        username: username
    }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: "Username is already taken."
            });
        }
    })
    // Check for the Unique Email
    User.findOne({
        email: email
    }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: "Email is already registred. Did you forgot your password."
            });
        }
    });
    // The data is valid and new we can register the user
    let newUser = new User({
        name,
        username,
        password,
        email
    });
    // Hash the password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: "Hurry! User is now registered."
                });
            });
        });
    });
});

/*
@route POST api/users/login
@sing in the user
@access public
*/
router.post('/login',(req,res)=>{
  User.findOne({
    username: req.body.username
  }).then(user=>{
    if(!user){
      return res.status(404).json({
        msg:"Username is not found",
        success:false
      });
    }
    //if there is user comparing Passwords
    bcrypt.compare(req.body.password, user.password)
    .then(isMatch=>{
      if(isMatch){
          //Users password is correct and we need to send the JSON token for user
          const payload = {
            _id: user._id,
            username: user.username,
            name: user.name,
            email: user.email
          }
          jwt.sign(payload,key,{
            expiresIn: 604800
          }, (err,token)=>{
            res.status(200).json({
              success:true,
              user: user,
              token: `Bearer ${token}`,
              msg:"Hurry! You are now logged in."
            });
          });
      }else{
        return res.status(404).json({
          msg:"incorrect password.",
          success:false
        });
      }
    });
  });
});

/**
 * @route POST api/users/profile
 * @desc Return the User's Data
 * @access Private
 */
router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    });
});

//GetAll Users
router.get('/getAll',async (req,res)=>{
  User.find({}).then(users=>{
     return  res.status(200).json(users);
  })
});

module.exports = router;
