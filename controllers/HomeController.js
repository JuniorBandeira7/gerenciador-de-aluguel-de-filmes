const { raw } = require('express')
const User = require ('../models/User')

module.exports = class UserController{
    static showHome(req, res){

        res.render('home')
    }
}