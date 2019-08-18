import express from 'express'
const router = express.Router()
import usersController from '../controllers/users.controller'

router.post('/register', usersController.register)
router.post('/login', usersController.login)

export default router