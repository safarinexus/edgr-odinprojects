const { Pool } = require("pg"); 

module.exports = new Pool({
    connectionString: process.env.DATABASE_URI, 
    ssl: process.env.DATABASE_SSL,
})
