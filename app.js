const express = require('express')
const app=express();
var cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const getroutes=require('./routes/admin')
const sequelize = require('./utili/database');
const groupRoute = require('./routes/admin');
//app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json())

app.use(adminRoutes);
app.use(getroutes);
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
