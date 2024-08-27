const { Router } = require("express"); 
const gamesRouter = Router();
const deleteController = require("../controllers/deleteController");
const db = require("../db/queries"); 

gamesRouter.get("/", async (req, res) => {
    const rows = await db.getGamesSmall();
    res.render("items", { games: rows, curr: req.originalUrl});
})

gamesRouter.get("/:id", async (req, res) => {
    console.log(req.params); 
    res.redirect("/games"); 
})

gamesRouter.get("/delete/:id", deleteController.deleteItem);

module.exports = gamesRouter;