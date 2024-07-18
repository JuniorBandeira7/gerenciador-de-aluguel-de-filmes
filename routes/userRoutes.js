const express = require('express')
const router = express.Router()
const app = express()
const port = 3000

const UserController = require('../controllers/UserController')

router.get('/add', UserController.createUser)
router.post('/add', UserController.createUserSave)
router.post('/remove', UserController.removeUser)
router.get('/edit/:id', UserController.updateUser)
router.post('/edit', UserController.updateUserPost)
router.get('/', UserController.users)

module.exports = router