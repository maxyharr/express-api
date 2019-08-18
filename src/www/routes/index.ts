import express from 'express'
const router = express.Router()

import wwwRoutes from './www.routes'
router.use(wwwRoutes)

export default router