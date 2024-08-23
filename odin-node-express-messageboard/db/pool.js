const { Pool } = require("pg"); 

if (process.env.MODE === "dev") {
    console.log("dev in use");
    module.exports = new Pool({
        host: "localhost", 
        user: "edgr", 
        database: "messages", 
        password: "lightning",
        port: 5432,
    });
} else if (process.env.MODE === "prod") { 
    console.log("prod in use");
    module.exports = new Pool({
        host: process.env.DATABASE_HOST,
        database: process.env.DATABASE_NAME,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_OTHER_PASSWORD,
        ssl: 'require',
    });
}
