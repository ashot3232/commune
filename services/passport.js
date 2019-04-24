const passport = require('passport');
const LocalStrategy = require('passport-local');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const mongoose = require('mongoose');
const Admin = mongoose.model('Admin');

const { JWTSecretSalt } = require('../config/keys');


const options = {
    jwt: {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: JWTSecretSalt
    }
};

passport.use(new JwtStrategy(options.jwt, (payload, done) => {

    const expirationDate = new Date(payload.exp * 1000);
    if(expirationDate < new Date()) {
        return done(null, false);
    }

    Admin.findById(payload.sub, (err, admin) => {
        if (err) {
            return done(err, false);
        }
        if (admin) {
            return done(null, admin);
        } else {
            return done(null, false);
        }
    });
}));


passport.use(new LocalStrategy((username, password, done) => {
    Admin.findOne({ username }, (err, admin) => {
        if (err) { return done(err); }
        if (!admin) { return done(null, false); }
        if (!admin.verifyPassword(password)) {  return done({ status: 403 }, false); }
        return done(null, admin);
    });
}));

