const { Router } = require("express");
const newMsgsRouter = Router(); 
const util = require('util'); 

newMsgsRouter.get("/", (req, res) => {
    const messages = req.messages; 
    const links = req.links;
    const title = req.title; 
    res.render("form", {title: title, messages: messages, links: links})
})

newMsgsRouter.post("/", (req, res) => {
    const text = req.body.messageText;
    const name = req.body.messageUser;
    let newMessage = null;
    const messages = req.messages; 
    const id = messages[messages.length - 1].id + 1;

    if (text) {
        const date = new Date().toString();
        if (name !== "") {
            newMessage = {
                id: id,
                text: text, 
                user: name, 
                added: date,
            }
        } else { 
            newMessage = {
                id: id,
                text: text, 
                user: "Anonymous", 
                added: date,
            }
        }
        messages.push(newMessage);
        console.log(`${util.inspect(newMessage, {depth: null})} added`); 
    }

    res.redirect("/"); 
})

module.exports = newMsgsRouter;