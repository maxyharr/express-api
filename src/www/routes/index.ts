import express from 'express'
const router = express.Router()

import wikiRoutes from '../../www/routes/wiki.routes'
router.use(wikiRoutes)

export default router