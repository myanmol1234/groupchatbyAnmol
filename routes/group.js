const express = require('express')
const router=express.Router()
const GroupController=require('../controllers/group')
//const verifyLogin=require('../auth/loginVerify')


router.post('/creategroup',GroupController.createGroup)
router.get('/getgroups',GroupController.getGroups)

router.post('/addUsertogroup',GroupController.addUserToGroup)
module.exports=router