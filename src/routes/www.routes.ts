import express from 'express'
const router = express.Router()
import wwwController from '../controllers/www.controller'
import passport from 'passport'

router.get('/', wwwController.home)
router.get('/about', wwwController.about)
router.get('/protected', passport.authenticate('jwt', {session: false}), wwwController.protected)

export default router