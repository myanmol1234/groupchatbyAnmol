const express = require('express')
const app=express();
var cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
const userRoute=require('./routes/user')
const messageRoute=require('./routes/message')
const groupRoute=require('./routes/group')

const User=require('./models/user')
const Message=require('./models/message')
const Group=require('./models/group')
//app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json())

app.use(userRoute);
app.use(messageRoute);
app.use(groupRoute);



sequelize
  .sync()
  .then(result => {
    // console.log(result);
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
