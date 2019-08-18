import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt'
import dotenv from 'dotenv'
import User from '../models/user.model'
dotenv.config()

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET
}

const passportConfig = (passport) => {
  passport.use(
    new Strategy(opts, (payload, done) => {
      User.findById( payload.id ).then(user => {
        if (user) {
          return done(null, {
            id: user.id,
            email: user.email,
            admin: true
          })
        }
        return done(null, false)
      }).catch(e => console.error(e))
    })
  )
}

export default passportConfig