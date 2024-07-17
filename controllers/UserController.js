const { raw } = require('express')
const User = require ('../models/User')

module.exports = class UserController{
    static createUser(req, res){
        res.render('user/create')
    }

    static async createUserSave(req, res){
        const user = {
            name: req.body.name
        }

        await User.create(user)

        res.redirect('/users')
    }
}