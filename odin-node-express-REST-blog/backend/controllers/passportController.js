require('dotenv').config();
const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const Users = require("../models/Users");


const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
    secretOrKey: process.env.JWT_SECRET 
};

passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
        try {
            if (!jwt_payload.retrievedUser) {
                return done(null, false);
            }
            const user = await Users.getUserById(jwt_payload.retrievedUser.uid);
            if (!user) {
                return done(null, false, { message: "No such user" });
            }
            return done(null, user);
        } catch (error) {
            return done(error, false);
        }
    })
);

exports.authenticate = passport.authenticate('jwt', { session: false }); 
