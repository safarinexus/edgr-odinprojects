 const db = require("../db/queries");
 
 exports.deleteItem = async(req, res) => {
    const temp = await db.getAllIds(); 
    const toDelete = Number(req.params.id); 
    const ogUrl = req.originalUrl;
    const check = []; 
    temp.forEach(obj => {
        check.push(obj.game_id);
    })
    if (check.includes(toDelete)) { 
        const result = await db.deleteGame(toDelete);
        if (result) { 
            if (/\bcategories\b/.test(ogUrl)) { 
                console.log("redirecting to categories...");
                res.redirect("/categories");
            } else {
                console.log("redirecting to games...");
                res.redirect("/games");
            }
        } else { 
            console.log("delete failed");
        }
    } else { 
        res.render("error");
    }
}