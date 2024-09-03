require('dotenv').config()
const express = require("express"); 
const app = express();
const path = require("node:path");
const port = process.env.PORT || 3000;
const expressLayouts = require("express-ejs-layouts");
const expressSession = require('express-session');
const { PrismaSessionStore } = require('@quixo3/prisma-session-store');
const { PrismaClient } = require('@prisma/client');
const passport = require("passport"); 
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const db = require("./controllers/prismaController"); 

app.use(
    expressSession({
        cookie: {
            maxAge: 7 * 24 * 60 * 60 * 1000 // ms
        },
        secret: process.env.SECRET,
        resave: true,
        saveUninitialized: true,
        store: new PrismaSessionStore(
            new PrismaClient(),
            {
                checkPeriod: 2 * 60 * 1000,  //ms
                dbRecordIdIsSessionId: true,
                dbRecordIdFunction: undefined,
            }
        )
    })
);

app.set("views", path.join(__dirname, "views")); 
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(passport.session()); 

//passport
passport.use(
    new LocalStrategy({usernameField: 'email'}, async (email, password, done) => {
        try {
            const user = await db.getUser(email);
            if (!user) {
                return done(null, false, { message: "Incorrect email" });
            }
            const match = await bcrypt.compare(password, user.password);
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
        const user = await db.getUser(email);
        done(null, user);
    } catch(err) {
        done(err);
    }
});

//routes
const signupRouter = require("./routes/signupRouter");
const logoutRouter = require("./routes/logoutRouter");
const uploadRouter = require("./routes/uploadRouter");

app.get("/", (req, res) => {
    res.render("index.ejs", { title: "Odin File Uploader", user: req.user });
}); 
app.post('/',
    passport.authenticate('local', { 
        failureRedirect: '/', 
        successRedirect: "/",
    }));
app.use("/signup", signupRouter); 
app.use("/logout", logoutRouter);
app.use("/upload", uploadRouter); 
app.use("/folders", () => console.log("folders!"), () => res.redirect("/")); 
app.use("*", (req, res) => {
    res.render("error", { title: "Uh oh!", error: "404: Resource not found!", user: req.user });
})



app.listen(port, () => console.log(`App started! Listening on ${port}`))