const User = require('../models/user');

exports.sendmsg=((req,res)=>
{   console.log("body output is ",req.body);
    const {  text, sender}=req.body;
    
    console.log("output is",sender);
    User.create({text,sender }).then(() => {
        res.status(201).json({message: 'msg sent'})
    }).catch(err => {
        res.status(403).json(err);
    })
});

exports.getmsg= ((req, res)=> {
    const lastId=req.query.lastmsg||0
    
    let lastIdN=+lastId

    User.findAll({offset:lastIdN}).then(msgs => {
        return res.status(200).json({msgs, success: true})
    })
    .catch(err => {
        return res.status(500).json({ error: err, success: false})
    })
});