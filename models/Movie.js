const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const User =  require('./User')

const Movie = db.define('movie',{
    title:{
        type: DataTypes.STRING,
        require: true
    },
    description:{
        type: DataTypes.STRING,
        require: true
    },
})

User.hasMany(Movie)
Movie.belongsTo(User)

module.exports = Movie