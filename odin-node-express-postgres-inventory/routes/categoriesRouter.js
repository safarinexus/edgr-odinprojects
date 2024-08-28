const { Router } = require("express"); 
const categoriesRouter = Router(); 
const deleteController = require("../controllers/deleteController");
const db = require("../db/queries");
const multer = require("multer");
const upload = multer({ dest: './public' });

categoriesRouter.get("/", async (req, res) => {
    const rows = await db.getCategories();
    res.render("categories", {categories: rows, curr: "categories"});
}); 

categoriesRouter.get("/:category", async (req, res) => {
    const rows = await db.getCategories();
    const category = req.params.category;
    const categories = []; 
    rows.forEach (row => {
        categories.push(row.genre);
    });
    if (categories.includes(category)) { 
        const result = await db.getCategory(category);
        res.render("items", { games: result, curr: req.originalUrl });
    } else { 
        res.render("error");
    }
});

categoriesRouter.get("/:category/delete/:id", deleteController.deleteItem);

categoriesRouter.get("/:category/update/:id", async (req, res) => {
    const curr = req.originalUrl;
    const id = req.params.id; 
    const game = await db.getGame(id);
    res.render("update", { curr: curr, game: game }); 
});

categoriesRouter.post("/:category/update/:id", upload.single('img'), async (req, res) => {    
    const id = req.params.id;
    const title = req.body.title; 
    const year = Number(req.body.year);
    const desc = req.body.game_desc; 
    const genre = req.body.genre;
    if (req.file !== undefined) {
        const photoPath = `/${req.file.filename}`;
        await db.updateGame(id, title, year, desc, genre, photoPath, true);
    } else { 
        await db.updateGame(id, title, year, desc, genre, "", false);
    }
    res.redirect("/categories/" + category);
});
    

module.exports = categoriesRouter;