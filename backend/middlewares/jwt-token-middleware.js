import { Strategy, ExtractJwt } from "passport-jwt";
import User from "../models/user.model.js";
import passport from "passport";

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET_KEY;

export const configJWTStrategy = () => {
  passport.use(
    new Strategy(opts, function (jwt_payload, done) {
      User.findOne({ id: jwt_payload.sub }, function (err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    })
  );
};
