const express = require('express')
const router = express.Router()
const app = express()
const port = 3000

const MovieController = require('../controllers/MovieController')

router.get('/add', MovieController.createMovie)
router.post('/add', MovieController.createMovieSave)
router.post('/remove', MovieController.removeMovie)
router.get('/edit/:id', MovieController.updateMovie)
router.post('/edit', MovieController.updateMoviePost)
router.get('/', MovieController.movies)

module.exports = router