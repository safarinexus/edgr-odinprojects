const { Router } = require("express");
const indexRouter = Router(); 

indexRouter.get("/", (req, res) => {
    const messages = req.messages; 
    const links = req.links;
    const title = req.title; 
    res.render("index", {title: title, messages: messages, links: links})
})


module.exports = indexRouter;