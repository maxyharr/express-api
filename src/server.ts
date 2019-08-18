import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import passport from 'passport'
import passportConfig from './config/passport.config'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import requestLogger from './lib/request-logger'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbUrl = process.env.DB_URL
const dbPort = process.env.DB_PORT
const dbCollection = process.env.DB_COLLECTION

// fixes issue with deprecated default in Mongoose.js
mongoose.set('useCreateIndex', true)
mongoose.connect(
  `mongodb://${dbUser}:${dbPassword}@${dbUrl}:${dbPort}/${dbCollection}`,
  {useNewUrlParser: true}
).then(() => console.log('Connected successfully to MongoDB'))
.catch(e => console.log(e))

app.use(passport.initialize())
passportConfig(passport)

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(requestLogger)

import wwwRoutes from './www/routes'
app.use('/', wwwRoutes)

import apiRoutes from './api/routes'
app.use('/api', apiRoutes)

app.listen(port, () => console.log(`Example API listening on port ${port}`))