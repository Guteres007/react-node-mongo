const express = require('express')
const app = express()
var cors = require('cors')
const env = require("dotenv")
const PORT = process.env.PORT || 5000

app.use(cors())

app.get('/', function (req, res) {
  res.json( {
      'title': 'Hello World',
      'posts': [{
          'id': 1,
          'title': 'One',
          'description': 'descript one'
      },{
          'id': 2,
          'title': 'Two',
          'description': 'descript two'
      }]
  })
})


app.listen(PORT, (err) => {
    console.log("server beži na " + PORT )
})
