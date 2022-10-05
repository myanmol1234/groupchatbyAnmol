const express = require('express')
const router=express.Router()
const MessageController=require('../controllers/msg')



router.post('/addMessage',MessageController.sendmsg)
router.get('/getMessage',MessageController.getmsg)
module.exports=router;