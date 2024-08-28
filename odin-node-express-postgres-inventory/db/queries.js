const pool = require("./pool"); 

exports.getGames = async () => {
    try {
        const { rows } = await pool.query("SELECT game_id, title, year, name, genre, imgref FROM games LEFT JOIN developers ON games.developer=developers.dev_id;");
        return rows;
    } catch (err) {
        console.log(err);
    }
}

exports.getGame = async (id) => {
    try {
        const { rows } = await pool.query("SELECT game_id, title, year, game_description, name, genre, imgref FROM games LEFT JOIN developers ON games.developer=developers.dev_id WHERE game_id = ($1);", [id]);
        return rows;
    } catch (err) {
        console.log(err);
    }
}

exports.getCategories = async () => {
    try {
        const { rows } = await pool.query("SELECT DISTINCT(genre) FROM games");
        return rows; 
    } catch (err) {
        console.log(err);
    }
}

exports.getCategory = async (category) => {
    try {
        const { rows } = await pool.query("SELECT game_id, title, year, name, genre, imgref FROM games JOIN developers ON games.developer=developers.dev_id WHERE genre=($1);", [category]);
        return rows; 
    } catch (err) { 
        console.log(err);
    }
}

exports.createNewGame = async (title, year, desc, dev, genre, imgref) => {
    try { 
        const result = await pool.query("INSERT INTO developers(name) VALUES ($1)", [dev]) && await pool.query("INSERT INTO games(title, year, game_description, genre, imgref) VALUES ($1, $2, $3, $4, $5)", [title, year, desc, genre, imgref]); 
        return result;
    } catch (err) {
        console.log(err);
    }
}

exports.getAllIds = async () => {
    try {
        const { rows } = await pool.query("SELECT DISTINCT(game_id) FROM games;");
        return rows;
    } catch (err) {
        console.log(err);
    }
}

exports.deleteGame = async (id) => {
    try { 
        const result = await pool.query("DELETE FROM games WHERE game_id = ($1)", [id]);
        return result;
    } catch (err) { 
        console.log(err);
    }
}

exports.updateGame = async (id, title, year, desc, genre, imgref, gotPhoto) => {
    if (gotPhoto) {
        try { 
            const result = await pool.query("UPDATE games SET title=($1), year=($2), game_description=($3), genre=($4), imgref=($5) WHERE game_id=($6)", [title, year, desc, genre, imgref, id]); 
            return result;
        } catch (err) { 
            console.log(err);
        }
    } else { 
        try { 
            const result = await pool.query("UPDATE games SET title=($1), year=($2), game_description=($3), genre=($4) WHERE game_id=($5)", [title, year, desc, genre, id]); 
            return result;
        } catch (err) { 
            console.log(err);
        }
    }
}