const { Client } = require("pg"); 

const SQL = `
    CREATE TABLE IF NOT EXISTS membership (
        mid INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
        membership_status VARCHAR(255) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS users (
        name VARCHAR(255) NOT NULL, 
        email varchar(255) NOT NULL, 
        password varchar(255) NOT NULL,
        membership INTEGER REFERENCES membership(mid), 
        PRIMARY KEY(email)
    );

    CREATE TABLE IF NOT EXISTS messages ( 
        msgid INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
        message TEXT, 
        author VARCHAR(255) REFERENCES users(email),
        timestamp VARCHAR(25)
    );

    CREATE TABLE "session" (
        "sid" varchar NOT NULL COLLATE "default",
        "sess" json NOT NULL,
        "expire" timestamp(6) NOT NULL
    ) WITH (OIDS=FALSE);

    ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

    CREATE INDEX "IDX_session_expire" ON "session" ("expire");
`

const main = async () => {
    console.log("seeding..."); 
    const client = new Client ({
        connectionString: process.env.CONNECTION_STRING,
        ssl: true, 
    });
    await client.connect();
    console.log("connected");
    await client.query(SQL); 
    await client.end();
    console.log("done");
}

main();