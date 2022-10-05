const path = require('path');
const express = require('express');


const adminmsg=require('../controllers/msg');
 const GroupController=require('../controllers/group')
const router = express.Router();
router.post('/send',adminmsg.sendmsg);
router.get('/getmsgonscreen',adminmsg.getmsg);
router.post('/creategroup',GroupController.createGroup)

module.exports=router;