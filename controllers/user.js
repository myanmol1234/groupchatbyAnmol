const User = require('../models/user');


exports.signup = (req, res)=>
{
  const { name, email, password } = req.body;
  
  User.create({ name, email, password }).then(() => 
  {
    res.status(201).json({message: 'Successfuly create new user'})
}).catch(err => {
    res.status(403).json(err);
})
}

exports.login = (req, res, next) => {
    //const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    
   console.log("request is",email,password);
   if(email.length===0|| password.length===0)
   {
    return res.status(400).json({badparamter})
   }
}