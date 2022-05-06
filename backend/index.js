const express = require('express')
const app = express()
var cors = require('cors')
const env = require("dotenv")
const PORT = process.env.PORT || 5000
const {db} = require('./utils/database')
const Post = require('./models/post')
var bodyParser = require('body-parser')

db()

app.use(cors())
app.use(bodyParser.json())

app.get('/posts', async function (req, res) {
    let posts = await Post.find({})
    res.json(posts)
})

app.post('/post/save', async function (req, res) {
    const {title, description} = req.body
    Post.create({title, description})
    let posts = await Post.find({})
    res.json(posts)
})
app.listen(PORT, async (err) => {

})
