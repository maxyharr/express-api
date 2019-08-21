import express from 'express'
const router = express.Router()
import usersController from '../../controllers/users.controller'

router.post('/register', usersController.register)
router.post('/login', usersController.login)
router.get('/test', (req, res) => {res.send('the api test works')})

export default router