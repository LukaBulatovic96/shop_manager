const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');

//test comm
//init app

const app=express();

//middlewares

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cors());

//setting up static directory
app.use(express.static(path.join(__dirname,'public')));
//app.use(express.static(path.join(__dirname,'pirimerPublic2'))); //samo pirimerPublic2

//Use the passport middleware
app.use(passport.initialize());
//Bring in the passport Strategy
require('./config/passport')(passport);


// Bring in the Database Config and connect with the database
const db = require('./config/keys').mongoURI;
mongoose.connect(db, {
     useUnifiedTopology: true,
     useNewUrlParser: true
}).then(() => {
    console.log(`Database connected successfully ${db}`)
}).catch(err => {
    console.log(`Unable to connect with the database ${err}`)
});

//Bring in the Users route
const users = require('./routes/api/users');
app.use('/api/users',users); //izmenjeno require('./routes/api/users' sa samo users
const articles = require('./routes/api/articles');
app.use('/api/articles',articles);
const purchases = require('./routes/api/purchases');
app.use('/api/purchases',purchases);
const clients = require('./routes/api/clients');
app.use('/api/clients',clients);
const treatmans = require('./routes/api/treatmans');
app.use('/api/treatmans',treatmans);
const items = require('./routes/api/items');
app.use('/api/items',items);
const termins = require('./routes/api/termins');
app.use('/api/termins',termins);

//za deploy
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'public/index.html'));
})
//kraj za deploy

//POVEZIVANJE SA DATABASE , U USERS SE POVEZUJE SA CLOUDOM
const PORT= process.env.PORT || 5000;

app.listen(PORT,()=>{
  console.log(`Server started on port ${PORT}`);
});
