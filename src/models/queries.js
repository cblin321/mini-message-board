const { argv } = require("node:process")
const { Pool } = require("pg")
require('dotenv').config()
 
// const dbArgKeys = ["user", "password", "host", "port", "database"]

// const dbArgs = Object.fromEntries(argv.map(arg => arg.split("=")).filter(([key, val]) => dbArgKeys.includes(key)))

// const pool = new Pool({
//   ...dbArgs,
// })


const pool = new Pool({
  connectionString: process.env.CONNECTION_URL
})


async function getAllPostsQuery() {
    const res = await pool.query("SELECT * FROM messages LEFT JOIN usernames ON usernames.username = messages.username")    
    return res.rows 
}

async function createUserPostQuery(username, content, date) {
  let { rows } = await pool.query("INSERT INTO usernames (username) \
  VALUES ($1) \
  ON CONFLICT (username) DO NOTHING;", [username])



  res = await pool.query("INSERT INTO messages (body, date, username) VALUES($1, $2, $3);", [content, date, username])
}

async function getMessageQuery(id) {
  let { rows } = await pool.query("SELECT * FROM messages WHERE id = $1;", [id])
  return rows
}

module.exports = {
  getAllPostsQuery,
  createUserPostQuery,
  getMessageQuery
}
