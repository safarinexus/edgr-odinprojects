const { Router } = require("express"); 
const signupRouter = Router(); 
const db = require("../controllers/prismaController");
const bcrypt = require("bcryptjs");
const passport = require("passport");


signupRouter.get("/", (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.render("signup", { title: "Sign up!"});
    }
});

signupRouter.post("/", async (req, res, next) => {
    if (req.body.password !== req.body.confirmpassword) {
        res.render("error", { user: req.user, title: "Uh Oh!", error: "Please ensure that your passwords match." });
    } else {
        bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
            if (err) {
                return next(err);
            } else { 
                try {
                    await db.createUser(req.body.email, hashedPassword);
                    next();
                } catch (err) { 
                    console.error(err);
                    res.render("error", { user: req.user, title: "Uh Oh!", error: err});
                }
            }
        })
    }
}, passport.authenticate("local", { failureRedirect: "/", successRedirect: "/"})
);

module.exports = signupRouter;