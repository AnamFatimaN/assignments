const express = require('express');
const app = express();
const port = 3002;

const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Middleware
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

// Authentication logic
const users = [
    { username: "anam", password: "1234" },
    { username: "ali", password: "abcd" },
];

const authUser = (username, password, done) => {
    const user = users.find(user => user.username === username && user.password === password);

    if (!user) {
        return done(null, false, { message: "Invalid Username or Password" });
    }

    return done(null, user);
};

passport.use(new LocalStrategy({ usernameField: 'username' }, authUser));

passport.serializeUser((user, done) => {
    done(null, user.username);
});

passport.deserializeUser((username, done) => {
    const user = users.find(user => user.username === username);
    done(null, user);
});

// Middleware to print data
let count = 1;

const printData = (req, res, next) => {
    console.log("\n==============================");
    console.log(`------------>  ${count++}`);

    console.log(`req.body.username -------> ${req.body.username}`);
    console.log(`req.body.password -------> ${req.body.password}`);

    console.log(`\n req.session.passport -------> `);
    console.log(req.session.passport);

    console.log(`\n req.user -------> `);
    console.log(req.user);

    console.log("\n Session and Cookie");
    console.log(`req.session.id -------> ${req.session.id}`);
    console.log(`req.session.cookie -------> `);
    console.log(req.session.cookie);

    console.log("===========================================\n");

    next();
};

app.use(printData);

// Routes
app.get('/login', (req, res) => {
    res.render('login.ejs', { error: "Invalid Username or Password"  });
});

app.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
}));

app.get('/dashboard', (req, res) => {
    res.render('dashboard.ejs', { username: req.user.username });
});

app.listen(port, () => {
    console.log(`app listening at the ${port}`);
});
