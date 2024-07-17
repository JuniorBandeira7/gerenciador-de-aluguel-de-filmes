const { raw } = require('express')
const User = require ('../models/User')

module.exports = class UserController{
    /* Create */
    static createUser(req, res){
        res.render('users/create')
    }

    static async createUserSave(req, res){
        const user = {
            name: req.body.name
        }

        await User.create(user)

        res.redirect('/users')
    }

    /* Remove */

    static async removeUser(req, res){
        const id = req.body.id

        await User.destroy({where: {id: id}});

        res.redirect('/users')
    }

    /* Edit */

    static async updateUserPost(req, res){
        const id = req.body.id

        const user ={
            name: req.body.name
        }

        await User.update(user, {where: {id: id}})

        res.redirect('/')
    }

    static async updateUser(req, res){
        const id = req.params.id

        const user = await User.findOne({where: {id: id}, raw: true})

        res.render('users/edit', {user})
    }

}