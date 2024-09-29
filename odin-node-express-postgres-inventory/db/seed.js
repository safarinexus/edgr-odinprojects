const { Client } = require("pg"); 

const SQL = `
    CREATE TABLE IF NOT EXISTS developers (
        dev_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
        name VARCHAR(255) NOT NULL, 
        dev_description TEXT
    );

    CREATE TABLE IF NOT EXISTS games ( 
        game_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
        title VARCHAR(255) NOT NULL, 
        year INTEGER,
        game_description TEXT, 
        developer INTEGER REFERENCES developers (dev_id),
        genre VARCHAR(255),
        imgref VARCHAR(255)
    );
`

const main = async () => {
    console.log("seeding..."); 
    const client = new Client ({
        connectionString: process.env.CONNECTION_STRING,
    });
    await client.connect();
    console.log("connected");
    await client.query(SQL); 
    await client.end();
    console.log("done");
}

main();