const { raw } = require('express')
const User = require ('../models/User')
const Movie = require ('../models/Movie')

module.exports = class UserController{
    static async showHome(req, res){
        const users = await User.findAll({raw: true})

        const movies = await Movie.findAll({raw: true})


        res.render('home', {users, movies})
    }

    static async rentMovie(req, res) {
        const userId = req.body.userId
        const movieId = req.body.movieId

        await Movie.update({ userId: userId }, { where: { id: movieId } })
    
        res.redirect('/')
    }
}