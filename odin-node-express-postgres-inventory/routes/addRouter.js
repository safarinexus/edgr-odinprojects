const { Router } = require("express"); 
const addRouter = Router(); 
const multer = require("multer");
const upload = multer({ dest: './public' })
const db = require("../db/queries");

addRouter.get("/", (req, res) => {
    res.render("add");
})

addRouter.post("/", upload.single('img'), async (req, res) => {
    const photoPath = `/${req.file.filename}`;
    const title = req.body.title; 
    const year = Number(req.body.year);
    const desc = req.body.game_desc; 
    const dev = req.body.developer; 
    const genre = req.body.genre;
    console.log()
    const result = await db.createNewGame(title, year, desc, dev, genre, photoPath);
    if (result) {
        res.redirect("/games");
    } else {
        console.log("add failed.");
        res.redirect("/add");
    }
    
})

module.exports = addRouter;