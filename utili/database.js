const Sequelize = require("sequelize");

const sequelize = new Sequelize ('group-chat','root','12123456',
{
dialect:'mysql',
host:'localhost'
});

module.exports=sequelize;