const { Pool } = require("pg");

module.exports = new Pool ({
    connectionString: process.env.CONNECTION_STRING,
    //uncomment below for prod, comment for dev
    ssl: true,
})