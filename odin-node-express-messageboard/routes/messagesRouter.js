const { Router } = require("express");
const messagesRouter = Router(); 

messagesRouter.get("/:messageid", (req, res) => {
    const messages = req.messages; 
    const id = Number(req.params.messageid); 
    const links = req.links;
    const title = req.title; 
    let message = null; 
    messages.forEach(curr => {
        if (curr.id === id) {
            message = curr;
        }
    })
    res.render("message", {title: title, links: links, message: message});
})

module.exports = messagesRouter;