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

    INSERT INTO developers (name, dev_description) 
    VALUES 
        ('High Moon Studios', 'High Moon Studios is an American video game developer initially formed in 2001.'), 
        ('Santa Monica Studio', 'Santa Monica Studio is an American video game developer based in Los Angeles. It is best known for developing the God of War series.'),   
        ('FromSoftware', 'Founded by Naotoshi Zin in Tokyo on November 1, 1986, FromSoftware is a Japanese video game development and publishing company most known for developing the critically-acclaimed Souls series.'); 

    INSERT INTO games (title, year, game_description, developer, genre, imgref) 
    VALUES 
        ('God of War (2018)', 2018, 'God of War (2018) is an action-adventure game by Santa Monica Studio, shifting the series from Greek to Norse mythology. It follows Kratos and his son Atreus on a journey to fulfill his late wife''s final wish. The game introduces an over-the-shoulder camera, a more mature narrative, and a new weapon, the Leviathan Axe. The story focuses on the father-son bond, offering deep character development alongside exploration, puzzle-solving, and intense combat. Praised for its storytelling, visuals, and reinvention of the series, it''s considered one of the best games of its generation.', 2, 'Action-adventure', '/godofwar2018.jpg'),
        ('Bloodborne', 2015, 'Bloodborne is an action RPG developed by FromSoftware and released in 2015. Set in the gothic, horror-filled city of Yharnam, players take on the role of a Hunter who must battle through nightmarish creatures and uncover the dark secrets behind the city''s mysterious plague. The game is known for its fast-paced, aggressive combat, intricate world design, and rich lore, all of which are deeply inspired by Lovecraftian horror and Victorian-era aesthetics. Bloodborne challenges players with its difficulty, rewarding persistence, strategy, and exploration in a beautifully haunting and unforgiving world.', 3, 'Action-RPG', '/bloodborne.jpeg'),
        ('Deadpool', 2013, 'The Deadpool game, released in 2013 by High Moon Studios, is a third-person action-adventure that perfectly captures the chaotic and irreverent spirit of Marvel''s "Merc with a Mouth." Players control Deadpool as he embarks on a wild, self-aware journey filled with explosive combat, over-the-top humor, and frequent breaking of the fourth wall. The game blends fast-paced action with absurd humor, allowing Deadpool to mock both himself and the gaming world while engaging in brutal melee and gun-based combat. The story is unpredictable and chaotic, much like Deadpool himself, offering fans an experience that feels true to the character''s comic book origins.', 1, 'Action-adventure', '/deadpool.jpeg'); 
`

const main = async () => {
    console.log("seeding..."); 
    const client = new Client ({
        connectionString: process.argv[2]
    });
    await client.connect();
    console.log("connected");
    await client.query(SQL); 
    await client.end();
    console.log("done");
}

main();