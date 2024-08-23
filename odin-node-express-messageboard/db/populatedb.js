const { Client } = require("pg"); 
const { argv } = require("node:process"); 
const date = new Date().toLocaleString();

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
        message TEXT, 
        name VARCHAR(255), 
        added VARCHAR(25)
    );

    INSERT INTO messages (message, name, added)
    VALUES 
        ('Hello!', 'John21', '${date}'),
        ('Top of the mornin!', 'Irishman1992', '${date}');
    ;
`

const main = async () => {
    console.log("seeding..."); 
    console.log(argv[2]);
    const client = new Client ({
        connectionString: argv[2], 
        ssl: true
    });
    await client.connect();
    console.log("connected");
    await client.query(SQL); 
    await client.end();
    console.log("done");
}

main();