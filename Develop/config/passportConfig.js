const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require("../models/user.js");

passport.use(
    new LocalStrategy(
        {
            usernameField: 'Email',
        },
        async (username, password, done) => {
            try {
                const user = await User.findOne({ where: { Email: username } });

                if (!user) {
                    return done(null, false, { message: 'Incorrect username.' });
                }

                if (!user.comparePassword(password)) {
                    return done (null, false, { message: 'Incorrect password.' });
                }

                return done (null, user);
            } catch (error) {
                return done(error);
            }
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user.ID);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findByPk(id);
        done(null, user);
    } catch (error) {
        done(error);
    }
});