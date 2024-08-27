const { Router } = require("express"); 
const categoriesRouter = Router(); 
const deleteController = require("../controllers/deleteController");
const db = require("../db/queries");

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
        res.render("items", {games: result, curr: req.originalUrl });
    } else { 
        res.render("error");
    }
});

categoriesRouter.get("/:category/delete/:id", deleteController.deleteItem);

categoriesRouter.get("/")
    

module.exports = categoriesRouter;