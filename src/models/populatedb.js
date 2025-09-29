// const dbArgKeys = ["user", "password", "host", "port", "database"]
// const { argv } = require("node:process")

const { Client } = require("pg")

// const dbArgs = Object.fromEntries(argv.map(arg => arg.split("=")).filter(([key, val]) => dbArgKeys.includes(key)))


const SQL = `
    CREATE TABLE IF NOT EXISTS usernames (
        username VARCHAR(255) PRIMARY KEY
    );

    CREATE TABLE IF NOT EXISTS messages(
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        body TEXT,
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        username VARCHAR(255) REFERENCES usernames(username) ON DELETE CASCADE    
    );

    INSERT INTO usernames (username)
    VALUES 
        ('Amando'),
        ('Charles');

    INSERT INTO messages (body, username)    
    VALUES 
        ('Hi there!', 'Amando'),
        ('Hello world!', 'Charles')
`

async function main() {
    // const client = new Client({
    // ...dbArgs,
    // })

    const client = new Client({
        connectionString: process.env.CONNECTION_URL,
    })

    await client.connect()
    await client.query(SQL)
    await client.end()
    console.log("populated db")
}

main()
