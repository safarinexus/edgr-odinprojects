const { Router } = require("express"); 
const gamesRouter = Router();
const deleteController = require("../controllers/deleteController");
const db = require("../db/queries"); 
const multer = require("multer");
const upload = multer({ dest: './public' });


gamesRouter.get("/", async (req, res) => {
    const rows = await db.getGames();
    res.render("items", { games: rows, curr: req.originalUrl});
})

gamesRouter.get("/:id", async (req, res) => {
    const temp = await db.getAllIds(); 
    const curr = req.originalUrl;
    const id = Number(req.params.id);
    const check = []; 
    temp.forEach(obj => {
        check.push(obj.game_id);
    })
    if (check.includes(id)) { 
        const focus = await db.getGame(id); 
        console.log(focus);
        res.render("item", { curr: curr, game: focus });
    } else { 
        res.render("error");
    }
})

gamesRouter.get("/delete/:id", deleteController.deleteItem);

gamesRouter.get("/update/:id", async (req, res) => {
    const curr = req.originalUrl;
    const id = req.params.id; 
    const game = await db.getGame(id);
    res.render("update", { curr: curr, game: game }); 
});

gamesRouter.post("/update/:id", upload.single('img'), async (req, res) => {
    const id = req.params.id;
    const title = req.body.title; 
    const year = Number(req.body.year);
    const desc = req.body.game_desc; 
    const genre = req.body.genre;
    console.log(genre);
    if (req.file !== undefined) {
        const photoPath = `/${req.file.filename}`;
        await db.updateGame(id, title, year, desc, genre, photoPath, true);
    } else { 
        await db.updateGame(id, title, year, desc, genre, null, false);
    }
    res.redirect("/games");
});

module.exports = gamesRouter;