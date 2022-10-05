const express = require('express')
const router=express.Router()
const MessageController=require('../controllers/message')



router.post('/addMessage',MessageController.addMeassage)
router.get('/getMessage',MessageController.getMeassages)
module.exports=router;