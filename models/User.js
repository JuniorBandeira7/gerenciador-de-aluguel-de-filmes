const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const User = db.define('user',{
    name:{
        type: DataTypes.STRING,
        require: true
    }
})

module.exports = User