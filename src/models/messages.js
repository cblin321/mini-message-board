const {getMessageQuery, createUserPostQuery, getAllPostsQuery} = require("./queries")

async function getAllPosts(req, res) {
  const rows =  await getAllPostsQuery()
  return rows
}

async function createUserPost(req, res) {
  const body = req.body
  const blankAuthor = !body.messageAuthor || body.messageAuthor.trim().length === 0
  const blankMsg = !body.messageText || body.messageText.trim().length === 0
  if (blankAuthor || blankMsg)
    return res.status(400).send("Author or msg cannot be blank")

  if (body.messageText.length > 500)
    return res.status(400).send("Limit messages to 500 characters")

  await createUserPostQuery(body.messageAuthor, body.messageText, new Date().toDateString())
}

async function getMessage(req, res) {
  const id = req.params.id
  const rows  = await getMessageQuery(id)
  return rows
}

module.exports = {
  getAllPosts,
  createUserPost,
  getMessage
}