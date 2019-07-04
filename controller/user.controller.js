
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.register = (req,res,next)=>{
    

    var user = new User ();
    console.log(req.body);
        user.name = req.body.name;
        user.lastname = req.body.lastname;
        user.email = req.body.email;
        user.password = req.body.password;
        user.save((err,doc)=> {
            if(!err){
          
                res.send(doc);
            }
            else{
                if(err.code = 11000){
         
                         res.status(422).send(['error']);
             } else {

                     return next(err);  }    
            }
          //  console.log(err);
      });
    
    
    console.log('inside register function');
}