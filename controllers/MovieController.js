const { raw } = require('express')
const Movie = require ('../models/Movie')

module.exports = class MovieController{
    /* Create */
    static createMovie(req, res){
        res.render('movies/create')
    }

    static async createMovieSave(req, res){
        const movie = {
            title: req.body.title,
            description: req.body.description
        }

        await Movie.create(movie)

        res.redirect('/movies')
    }

    /* Remove */

    static async removeMovie(req, res){
        const id = req.body.id

        await Movie.destroy({where: {id: id}});

        res.redirect('/movies')
    }

    /* Edit */

    static async updateMoviePost(req, res){
        const id = req.body.id

        const movie ={
            title: req.body.title,
            description: req.body.description
        }

        await Movie.update(movie, {where: {id: id}})

        res.redirect('/')
    }

    static async updateMovie(req, res){
        const id = req.params.id

        const movie = await Movie.findOne({where: {id: id}, raw: true})

        res.render('movies/edit', {movie})
    }

}