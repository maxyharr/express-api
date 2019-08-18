import express from 'express'
const router = express.Router()

import User from '../../models/user.model'
import bcrypt from 'bcrypt'

import dotenv from 'dotenv'
dotenv.config()
const secret = process.env.SECRET

import jwt from 'jsonwebtoken'

const usersController = {
  register: (req, res) => {
    User.findOne({email: req.body.email}).then(user => {
      if (user) {
        let error = 'Email address already taken'
        return res.status(400).json(error)
      } else {
        const newUser = new User({
          email: req.body.email,
          password: req.body.password
        })
        bcrypt.genSalt(10, (err, salt) => {
          if (err) throw err
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err
            newUser.password = hash
            newUser.save().then(user => res.json(user))
            .catch(err => res.status(400).json(err))
          })
        })
      }
    })
  },

  login: (req, res) => {
    const email = req.body.email
    const password = req.body.password
    User.findOne({ email }).then(user => {
      if (!user) {
        return res.status(404).json('No account found')
      }
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          const payload = {
            id: user._id,
            email: user.email
          }
                                            /* 60 min */
          jwt.sign(payload, secret, { expiresIn: (1000 * 60 * 60) }, (err, token) => {
            if (err) res.status(500).json({
              error: 'Error signing token',
              raw: err
            })
            res.json({
              success: true,
              token: `Bearer ${token}`
            })
          })
        } else {
          res.status(400).json('Password is incorrect')
        }
      })
    })
  }
}

export default usersController