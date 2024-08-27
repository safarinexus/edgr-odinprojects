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
            if (/\bgames\b/.test(ogUrl)) { 
                res.redirect("/games");
            } else if (/\bcategories\b/.test(ogUrl)) { 
                res.redirect("/categories");
            }
        } else { 
            console.log("delete failed");
        }
    } else { 
        res.render("error");
    }
}