require('dotenv').config()
const express = require("express"); 
const passport = require("passport"); 
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const port = process.env.PORT || 3000;
const app = express()
const expressLayouts = require("express-ejs-layouts");
const pool = require("./db/pool");
const expressSession = require('express-session');
const pgSession = require('connect-pg-simple')(expressSession);

app.set("views", path.join(__dirname, "views")); 
app.set("view engine", "ejs");
app.use(express.static(assetsPath));
app.use(expressLayouts);

app.use(expressSession({
    store: new pgSession({
      pool : pool,                // Connection pool
      tableName : 'session'   // Use another table-name than the default "session" one
    }),
    secret: process.env.FOO_COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
  }));
app.use(passport.session()); 
app.use(express.urlencoded({ extended: false }));

passport.use(
    new LocalStrategy({usernameField: 'email'}, async (email, password, done) => {
        try {
            const { rows } = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
            const user = rows[0];
            const match = await bcrypt.compare(password, user.password);
        
            if (!user) {
                return done(null, false, { message: "Incorrect email" });
            }
            if (!match) {
                return done(null, false, { message: "Incorrect password" });
            }
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    })
);

passport.serializeUser((user, done) => {
    done(null, user.email);
});

passport.deserializeUser(async (email, done) => {
    try {
        const { rows } = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        const user = rows[0];
        done(null, user);
    } catch(err) {
        done(err);
    }
});

app.get("/", async (req, res) => {
    const curr = "home";
    const { rows } = await pool.query("SELECT msgid, name, message, timestamp, membership FROM messages LEFT JOIN users on users.email = messages.author;");
    const messages = rows;
    res.render("index", { user: req.user, title: "Odin Members Only", curr: curr, messages: messages });
})

app.get("/signup", (req, res) => {
    const curr = "signup";
    res.render("signup", { user: req.user, title: "Sign up!", curr: curr });
})

app.post("/signup", async (req, res, next) => {
    if (req.body.password !== req.body.confirmpassword) {
        res.render("error", { user: req.user, title: "Error!", curr: "signup", error: "Please ensure that your passwords match." });
    } else {
        bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
            if (err) {
                return next(err);
            } else { 
                try {
                    await pool.query("INSERT INTO users (name , email, password, membership) VALUES ($1, $2, $3, $4)", [
                        req.body.fullname,
                        req.body.email,
                        hashedPassword,
                        1
                    ]);
                    res.redirect("/");
                } catch (err) {
                    return next(err);
                }
            }
        })
    }
});

app.get("/login", (req, res) => {
    const curr = "login";
    res.render("login", { user: req.user, title: "Log in!", curr: curr });
})

app.post("/login", 
    passport.authenticate("local", {
        successRedirect: "/", 
        failureRedirect: "/"
    })
);

app.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
})

app.get("/upgrade", (req, res, next) => {
    if (req.user === undefined) { 
        res.render("error", { user: req.user, title: "Error!", curr: "home", error: "You're not logged in!" });
    } else {
        res.render("upgrade", { user: req.user, title: "Error!", curr:  "upgrade"});
    }
})

app.post("/upgrade", async (req, res, next) => {
    if (req.body.secret === process.env.PASSCODE) {
        try {
            await pool.query("UPDATE users SET membership = 2 WHERE email = $1", [req.user.email]);
        } catch (err) {
            return next(err);
        }
        res.render("message", { user: req.user, title: "Yay!", curr: "upgrade", message: "Congrats! Your membership status has now been updated to 'Premium'." });
    } else if (req.body.secret === process.env.ADMIN) {
        try {
            await pool.query("UPDATE users SET membership = 3 WHERE email = $1", [req.user.email]);
        } catch (err) {
            return next(err);
        }
        res.render("message", { user: req.user, title: "Yay!", curr: "upgrade", message: "Congrats! You're now an Admin." });
    } else {
        res.render("error", { user: req.user, title: "Error!", curr: "home", error: "Oops! Looks like you don't have the passcode :)" });
    }
})

app.get("/add", (req, res, next) => {
    if (req.user !== undefined) { 
        res.render("add", { user: req.user, title: "new message", curr: "home" });
    } else {
        res.render("error", { user: req.user, title: "Error!", curr: "home", error: "Oops! You gotta log in to add messages :/" });
    }
})

app.post("/add", async(req, res, next) => {
    try {
        const date = new Date().toLocaleString();
        await pool.query("INSERT INTO messages(message, author, timestamp) VALUES ($1, $2, $3);", [req.body.message, req.user.email, date]);
        res.redirect("/");
    } catch (err) {
        return next(err);
    }
})

app.post("/delete/:id", async(req, res, next) => {
    try {
        await pool.query("DELETE FROM messages WHERE msgid = ($1)", [req.params.id]);
        res.redirect("/");
    } catch (err) {
        return next(err);
    }
})

app.listen(port, () => console.log(`App started! Listening on Port ${port}`));