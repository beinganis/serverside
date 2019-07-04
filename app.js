require('./config/config');
require('./config/db');

const passport = require('passport');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routerIndex = require('./routes/index');

const app = express();

 
// middleware

app.use(bodyParser.json());
app.use(cors()); 
app.use('/api',routerIndex);

//passport middleware
app.use(passport.initialize());
app.use(passport.session);



//static folders





// error handlers 

app.use((err,req,res,next)=>{
     if(err == 'ValidationError')
{
     var valErrors = [];
     Object.keys(err.errors).forEach(key=>valErrors.push(err.errors[key].message));
     res.status(422).send(valErrors);
}
});

//start server 

app.listen(process.env.PORT,()=>
     console.log(`server started at port : ${process.env.PORT}`));
