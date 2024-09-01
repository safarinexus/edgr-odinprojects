const pool = require("./pool"); 

exports.getAll = async () => {
    const { rows } = await pool.query('SELECT * FROM messages;'); 
    return rows; 
}

exports.createNewMessage = async (message, name, added) => {
    try { 
        await pool.query("INSERT INTO messages (message, name, added) VALUES ($1, $2, $3);", [message, name, added]);
        console.log("Message: " + message + "\n" + "From: " + name + "\n" + "At: " + added);
    } catch (err) {
        console.log(err);
    }
   
}

