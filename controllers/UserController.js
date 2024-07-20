const { raw } = require('express')
const User = require ('../models/User')
const Movie = require ('../models/Movie')

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

        res.redirect('/users')
    }

    static async updateUser(req, res){
        const id = req.params.id

        const user = await User.findOne({where: {id: id}, raw: true})

        res.render('users/edit', {user})
    }

    static async users(req, res){
        const users = await User.findAll({raw: true})

        res.render('users/users', {users})
    }

    static async user(req, res){
        const id = req.params.id

        const movies = await Movie.findAll({where:{userId: id},raw: true})

        const user = await User.findOne({where:{id: id},raw: true})

        res.render('users/user', {user, movies})
    }

    static async returnMovie(req, res){
        const id = req.body.id

        const userId = req.body.userId

        const movie ={
            userId: null
        }

        await Movie.update(movie, {where: {id: id}})

        res.redirect(`/users/${userId}`)
    }
}