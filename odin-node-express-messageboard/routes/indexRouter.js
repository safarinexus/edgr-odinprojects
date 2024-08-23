const { Router } = require("express");
const indexRouter = Router(); 
const db = require("../db/queries");

indexRouter.get("/", async (req, res) => {
    const rows = await db.getAll();
    const links = req.links;
    const title = req.title; 
    res.render("index", {title: title, messages: rows, links: links})
})

module.exports = indexRouter;