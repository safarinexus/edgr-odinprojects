const { Router } = require("express");
const messagesRouter = Router(); 
const db = require("../db/queries");

messagesRouter.get("/:messageid", async (req, res) => {
    const rows = await db.getAll();
    const id = Number(req.params.messageid); 
    const links = req.links;
    const title = req.title; 
    let message = null; 
    rows.forEach(curr => {
        console.log(curr);
        if (curr.id === id) {
            message = curr;
        }
    })
    res.render("message", {title: title, links: links, message: message});
})

module.exports = messagesRouter;