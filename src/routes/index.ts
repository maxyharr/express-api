import glob from 'glob'
import path from 'path'
import express from 'express'
const router = express.Router()

import wwwRoutes from './www.routes'
router.use('/', wwwRoutes)

import apiRoutes from './api'
router.use('/api', apiRoutes)

export default router
