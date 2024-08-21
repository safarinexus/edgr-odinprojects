const express = require('express');
const app = express();
const path = require("node:path");
const newMsgsRouter = require("./routes/newMsgsRouter"); 
const indexRouter = require("./routes/indexRouter");
const messagesRouter = require("./routes/messagesRouter");
const port = process.env.PORT || 3000

const messages = [
    {
        id: 1,
        text: "Hello!", 
        user: "John21", 
        added: new Date().toString(), 
    },
    {
        id: 2,
        text: "Top of the mornin'!", 
        user: "Irishman31", 
        added: new Date().toString(), 
    }
]

app.set("views", path.join(__dirname, "views")); 
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    req.title = "Odin Messageboard",
    req.messages = messages;
    req.links = [
        { text: "New", href: "/new" }, 
        { text: "Home", href: "/"},
    ]
    next(); 
});

app.use("/new", newMsgsRouter);
app.use("/messages", messagesRouter);
app.use("/", indexRouter);

app.listen(port, () => console.log(`Server initiated. Listening on Port ${port}`));