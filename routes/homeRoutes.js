const express = require('express')
const router = express.Router()
const app = express()
const port = 3000

const HomeController = require('../controllers/HomeController')

router.get('/', HomeController.showHome)
router.post('/rent', HomeController.rentMovie)

module.exports = router