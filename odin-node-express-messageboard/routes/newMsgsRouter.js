const { Router } = require("express");
const newMsgsRouter = Router(); 
const util = require('util'); 
const db = require("../db/queries");

newMsgsRouter.get("/", (req, res) => {
    const links = req.links;
    const title = req.title; 
    res.render("form", {title: title, links: links})
})

newMsgsRouter.post("/", async (req, res) => {
    const text = req.body.messageText;
    let name = req.body.messageUser;
    const date = new Date().toLocaleString();
    if (text) {
        const date = new Date().toLocaleString();
        if (name === "") {
            name = "Anonymous"
        } 
        await db.createNewMessage(text, name, date); 
    }
    res.redirect("/"); 
})

module.exports = newMsgsRouter;