import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt'
import dotenv from 'dotenv'
import User from '../models/user.model'
dotenv.config()

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET,
  passReqToCallback: true,
}

const passportConfig = (passport) => {
  passport.use(
    new Strategy(opts, (req, payload, done) => {
      User.findById( payload.id ).then(user => {
        if (user) {
          req.user = user
          return done(null, {
            id: user.id,
            email: user.email,
          })
        }
        return done(null, false)
      }).catch(e => console.error(e))
    })
  )
}

export default passportConfig