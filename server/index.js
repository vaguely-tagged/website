const express = require('express')
const https = require("https")
const fs = require("fs")

// const options = {
//   key: fs.readFileSync("./privkey.pem"),
//   cert: fs.readFileSync("./fullchain.pem")
// };

const app = express()
const port = 3000
const path = require("path");

app.use(express.static('../public'))

// const htmlDir = path.join(__dirname, "website");

app.get('/', (req, res) => {
  res.sendFile(path.join(htmlDir, "landing", "index.html"))
})

app.get('/blog', (req, res) => {
  res.sendFile(path.join(htmlDir, "blog", "index.html"))
})

app.get('/resume', (req, res) => {
  res.sendFile(path.join(htmlDir, "resume", "index.html"))
})

app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(htmlDir, "public", "favicon.ico"))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// https.createServer(options, app).listen(443);