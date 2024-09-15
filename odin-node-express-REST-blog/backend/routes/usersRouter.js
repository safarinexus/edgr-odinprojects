require('dotenv').config(); 
const { Router } = require("express");
const usersRouter = Router(); 
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Users = require("../models/Users");
const auth = require("../controllers/passportController");

usersRouter.get("/", auth.authenticate, async (req, res) => {
    if (req.user.utype_id !== 3) {
        res.status(403).json({
            status: 403, 
            message: "Forbidden. No access rights.",
            origin: "users",
        });
    } else { 
        const users = await Users.getUsers(); 
        res.status(200).json({
            status: 200, 
            message: "Success. Users retrieved.", 
            users: users,
            user: req.user,
        });
    }
})

usersRouter.post("/register", (req, res, next) => {
    let username = req.body.username;  
    let password = req.body.password; 
    if (typeof username === "undefined" || typeof password === "undefined") { 
        res.status(400).json({
            message: "Bad Request! Failed Registration"
        });
    } else { 
        bcrypt.hash(password, 10, async (err, hashedPassword) => {
            if (err) {
                console.error(err);
            } else { 
                await Users.createUser(username, hashedPassword);
                res.status(201).json({
                    status: 201,
                    message: "Success! User created",
                    username: username, 
                    password: password,
                });
            }
        })
    }
});

usersRouter.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const retrievedUser = await Users.getUserByUsername(username);
    if (!retrievedUser) {
        res.status(400).json({
            status: 400,  
            message: "Bad Request.",
            origin: "users",
        });
    }
    const validatePassword = await bcrypt.compare(password, retrievedUser.password);
    if (!validatePassword) {
        res.status(400).json({
            status: 400,  
            message: "Bad Request.",
            origin: "users", 
        });
    }
    jwt.sign({retrievedUser}, process.env.JWT_SECRET, { expiresIn: '5d' }, (err, token) => {
        res.status(200).json({
            status: 200, 
            message: "Successful Login.", 
            token,
        });
    });
});

usersRouter.post("/login/admin", async (req, res) => {
    const { username, password } = req.body; 
    const retrievedUser = await Users.getUserByUsername(username); 
    const validatePassword = await bcrypt.compare(password, retrievedUser.password);
    if (!retrievedUser || retrievedUser.utype_id === 1 || !validatePassword) {
        res.status(400).json({
            status: 400,  
            message: "Bad Request.",
            origin: "users",
        });
    } 
    jwt.sign({retrievedUser}, process.env.JWT_SECRET, { expiresIn: '5d' }, (err, token) => {
        res.status(200).json({
            status: 200, 
            message: "Successful Login.", 
            token,
        });
    });
})

usersRouter.patch("/upgrade", async (req, res) => {
    const secretKey = process.env.SECRET_KEY; 
    const { username, userKey } = req.body;
    const userInQuestion = await Users.getUserByUsername(username);
    if (userKey !== secretKey || userInQuestion === null) { 
        res.status(400).json({
            status: 400, 
            message: "Bad Request. Invalid Key", 
            origin: "users",
        })
    } else {
        if (userInQuestion.utype_id === 2 || userInQuestion.utype_id === 3) {
            res.status(400).json({
                status: 400,  
                message: "Bad Request. User already has privileges.",
                user: userInQuestion,
            });
        } else {
            await Users.upgradeUserById(userInQuestion.uid); 
            res.status(200).json({
                status: 200, 
                message: "Successful. Privileges granted.",
                user: userInQuestion,
            });
        }   
    }
})

usersRouter.post("/logout", (req, res) => {
    res.status(200).json({
        status: 200, 
        message: "Logged Out Sucessfully.",
    });
});

usersRouter.use("*", (req, res) => {
    res.status(404).json({
        status: 404, 
        message: "Resource not found.", 
        origin: "users",
    });
}); 

module.exports = usersRouter;