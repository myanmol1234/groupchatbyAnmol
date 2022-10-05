const sequelize=require('../utili/database')
const Sequelize=require('sequelize')

const Group=sequelize.define('group',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false

    },
    groupname:{
        type:Sequelize.STRING,
        allowNull:false

    },
    
    
})
module.exports=Group