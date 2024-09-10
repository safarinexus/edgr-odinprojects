require('dotenv').config()
const express = require("express"); 
const app = express(); 
const port = process.env.PORT; 
const postsRouter = require("./routes/postsRouter"); 
const usersRouter = require("./routes/usersRouter");
const passport = require("passport");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);
app.use("*", (req, res) => {
    res.status(404).json({
        status: 404, 
        message: "Resource not found.", 
        origin: "main"
    });
});

app.listen(port, () => console.log(`App started! Listening on Port ${port}`));