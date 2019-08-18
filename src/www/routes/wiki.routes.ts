import express from 'express'
const router = express.Router()
import wikiController from '../controllers/wiki.controller'
import passport from 'passport'

router.get('/', wikiController.home)
router.get('/about', wikiController.about)
router.get('/protected', passport.authenticate('jwt', {session: false}), wikiController.protected)

export default router